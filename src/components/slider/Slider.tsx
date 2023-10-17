'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import { useState, useEffect } from 'react';

const data = [
  {
    id: 'slide-1',
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 'slide-2',
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 'slide-3',
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const lastSlideIndex = data.length-1;
    const interval = setInterval(
      () => setCurrentSlide(prev => prev === lastSlideIndex ? 0 : prev + 1)
    , 12000);

    return () => clearInterval(interval)
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Text container */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data[currentSlide].title}</h1>
        <button className={styles.button}>Order Now</button>
      </div>
      {/* Image container */}
      <div className={styles.imageContainer}>
        <Image src={`/images${data[currentSlide].image}`} alt='' fill className={styles.image} />
      </div>
    </div>
  )
}

export { Slider }