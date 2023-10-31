'use client';

import { useEffect, useState } from 'react';

import styles from './styles.module.css';
import { TProduct } from '@/types/types';

const Price = ({ product }: { product: TProduct }) => {
    const { price, options } = product;
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if (options?.length) {
            setTotal(quantity * price + options[selected].additionalPrice);
        }
    }, [quantity, selected, options, price]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.price}>${total}</h2>
            {/* OPTIONS CONTAINER */}
            <div className={styles.options}>
                {options?.length &&
                    options?.map((option, index) => (
                        <button
                            key={option.title}
                            className={styles.optionBtn}
                            style={{
                                background:
                                    selected === index
                                        ? 'rgb(248 113 113)'
                                        : '#ffffff',
                                color:
                                    selected === index ? '#ffffff' : '#ff2121',
                            }}
                            onClick={() => setSelected(index)}
                        >
                            {option.title}
                        </button>
                    ))}
            </div>
            {/* QUANTITY AND ADD BUTTON CONTAINER */}
            <div className={styles.orderInfo}>
                {/* QUANTITY */}
                <div className={styles.quantity}>
                    <span>Quantity</span>
                    <div className={styles.quantityBtn}>
                        <button
                            onClick={() =>
                                setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                            }
                        >
                            {'<'}
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() =>
                                setQuantity((prev) => (prev < 9 ? prev + 1 : 9))
                            }
                        >
                            {'>'}
                        </button>
                    </div>
                </div>
                {/* CART BUTTON */}
                <button className={styles.addToCartBtn}>Add to Cart</button>
            </div>
        </div>
    );
};

export { Price };
