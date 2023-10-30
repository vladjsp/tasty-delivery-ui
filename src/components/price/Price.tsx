'use client';

import { useEffect, useState } from 'react';

import styles from './styles.module.css';

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setTotal(
            quantity *
                (options ? price + options[selected].additionalPrice : price),
        );
    }, [quantity, selected, options, price]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.price}>${total.toFixed(2)}</h2>
            {/* OPTIONS CONTAINER */}
            <div className={styles.options}>
                {options?.map((option, index) => (
                    <button
                        key={option.title}
                        className={styles.optionBtn}
                        style={{
                            background:
                                selected === index
                                    ? 'rgb(248 113 113)'
                                    : '#ffffff',
                            color: selected === index ? '#ffffff' : '#ff2121',
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
