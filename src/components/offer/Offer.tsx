import Image from 'next/image';
import styles from './styles.module.css';
import { CountDown } from '../components';

const Offer = () => {
    return (
        <div className={styles.wrapper}>
            {/* TEXT CONTAINER */}
            <div className={styles.text}>
                <h1 className={styles.title}>Delicious Burger & French Fry</h1>
                <p>
                    Progressively simplify effective e-toilers and
                    process-centric methods of empowerment. Quickly pontificate
                    parallel.
                </p>
                <CountDown />
                <button type="button" className={styles.button}>
                    Order Now
                </button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/offerProduct.png"
                    alt=""
                    fill
                    className={styles.image}
                />
            </div>
        </div>
    );
};

export { Offer };
