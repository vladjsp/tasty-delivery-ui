import Image from "next/image";
import Link from "next/link";

import { pizzas } from "@/data";
import styles from './styles.module.css'

const CategoryPage = () => {
  return (
    <div className={styles.wrapper}>
      {pizzas.map((item) => (
        <Link className={styles.link} href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className={styles.imageWrapper}>
              <Image src={item.img} alt="" fill className={styles.image} />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className={styles.info}>
            <h2 className={styles.title}>{item.title}</h2>
            <h3 className={styles.price}>${item.price}</h3>
            <button className={styles.button}>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage