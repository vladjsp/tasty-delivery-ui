import Link from 'next/link';

import styles from './styles.module.css';
import { TMenu } from '@/types/types';

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/categories', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed!');
    }
    return res.json();
};

const MenuPage = async () => {
    const menu: TMenu = await getData();

    return (
        <div className={styles.wrapper}>
            {menu.map((category) => (
                <Link
                    href={`/menu/${category.slug}`}
                    key={category.id}
                    className={styles.link}
                    style={{ backgroundImage: `url(${category.img})` }}
                >
                    <div
                        className={styles.info}
                        style={{ color: `${category.color}` }}
                    >
                        <h1 className={styles.title}>{category.title}</h1>
                        <p className={styles.desc}>{category.desc}</p>
                        <button className={styles.button}>Explore</button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuPage;
