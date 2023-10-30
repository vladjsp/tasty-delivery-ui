import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <Link href="/" className={styles.link}>
                Maximo
            </Link>
            <p> &copy; ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export { Footer };
