import Image from 'next/image';

import styles from './styles.module.css';

const CartPage = () => {
    return (
        <div className={styles.wrapper}>
            {/* PRODUCTS CONTAINER */}
            <div className={styles.cartItems}>
                {/* SINGLE ITEM */}
                <div className={styles.cartItem}>
                    <Image
                        src="/images/p1.png"
                        alt=""
                        width={100}
                        height={100}
                    />
                    <div className="">
                        <h2 className={styles.title}>sicilian</h2>
                        <span>Large</span>
                    </div>
                    <h2 className={styles.price}>$79.90</h2>
                    <span style={{ cursor: 'pointer' }}>X</span>
                </div>
                <div className={styles.cartItem}>
                    <Image
                        src="/images/p1.png"
                        alt=""
                        width={100}
                        height={100}
                    />
                    <div className="">
                        <h2 className={styles.title}>sicilian</h2>
                        <span>Large</span>
                    </div>
                    <h2 className={styles.price}>$79.90</h2>
                    <span style={{ cursor: 'pointer' }}>X</span>
                </div>
            </div>
            {/* PAYMENT CONTAINER */}
            <div className={styles.paymentInfo}>
                <div className={styles.paymentDetails}>
                    <span className="">Subtotal (3 items)</span>
                    <span className="">$81.70</span>
                </div>
                <div className={styles.paymentDetails}>
                    <span className="">Service Cost</span>
                    <span className="">$0.00</span>
                </div>
                <div className={styles.paymentDetails}>
                    <span>Delivery Cost</span>
                    <span className={styles.freeDelivery}>FREE!</span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.paymentDetails}>
                    <span className="">TOTAL(INCL. VAT)</span>
                    <span className="font-bold">$81.70</span>
                </div>
                <button className={styles.checkoutBtn}>CHECKOUT</button>
            </div>
        </div>
    );
};

export default CartPage;
