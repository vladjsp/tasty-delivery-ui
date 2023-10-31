import Image from 'next/image';
import { Price } from '@/components/components';

import styles from './styles.module.css';
import { AppRoute } from '@/enums/app-route.enum';
import { TProduct } from '@/types/types';

const getData = async (id: string) => {
    const res = await fetch(
        `${AppRoute.API_DOMAIN}${AppRoute.PRODUCTS}/${id}`,
        {
            cache: 'no-store',
        },
    );

    if (!res.ok) {
        throw new Error('Failed!');
    }
    return res.json();
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
    const singleProduct: TProduct = await getData(params.id);
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
                <Price product={singleProduct} />
            </div>
        </div>
    );
};

export default SingleProductPage;
