import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';
import { TProduct } from '@/types/types';

const getData = async (category: string) => {
    const res = await fetch(
        `http://localhost:3000/api/products?cat=${category}`,
        {
            cache: 'no-store',
        },
    );

    if (!res.ok) {
        throw new Error('Failed!');
    }
    return res.json();
};

type Props = {
    params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
    const { category } = params;
    const categoryProducts: TProduct[] = await getData(category);

    return (
        <div className={styles.wrapper}>
            {categoryProducts.map((item) => (
                <Link
                    className={styles.link}
                    href={`/product/${item.id}`}
                    key={item.id}
                >
                    {/* IMAGE CONTAINER */}
                    {item.img && (
                        <div className={styles.imageWrapper}>
                            <Image
                                src={item.img}
                                alt=""
                                fill
                                className={styles.image}
                            />
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

export default CategoryPage;
