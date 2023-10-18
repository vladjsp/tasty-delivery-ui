import Image from 'next/image'
import styles from './styles.module.css'
import { featuredProducts } from '@/data'

const Featured = () => {
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