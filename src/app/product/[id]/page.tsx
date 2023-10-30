import Image from 'next/image';
import { Price } from '@/components/components';

import { singleProduct } from '@/data';
import styles from './styles.module.css';

const SingleProductPage = () => {
    return (
        <div className={styles.wrapper}>
            {/* IMAGE CONTAINER */}
            {singleProduct.img && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={singleProduct.img}
                        alt=""
                        style={{ objectFit: 'contain' }}
                        fill
                    />
                </div>
            )}
            {/* TEXT CONTAINER */}
            <div className={styles.info}>
                <h1 className={styles.title}>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
                <Price
                    price={singleProduct.price}
                    id={singleProduct.id}
                    options={singleProduct.options}
                />
            </div>
        </div>
    );
};

export default SingleProductPage;
