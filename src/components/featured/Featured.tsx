import Image from 'next/image'
import { TProduct } from '@/types/types';
import styles from './styles.module.css'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });

  if(!res.ok){
    throw new Error('Failed!')
  }
  return res.json();
}

const Featured = async () => {
  const featuredProducts: TProduct[] = await getData();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        { featuredProducts.map((item) => (
                  <div key={item.id} className={styles.productCard}>
                  <div className={styles.imageWrapper}>
                    <Image src='/images/p1.png' alt='' fill  className={styles.image} />
                  </div>
                  <div className={styles.info}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.description}>{item.desc}</p>
                    <span className={styles.price}>${item.price}</span>
                    <button className={styles.button}>Add to Cart</button>
                  </div>
                </div>
        ))}
      </div>
    </div>
  )
}

export { Featured }