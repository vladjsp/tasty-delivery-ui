import Image from 'next/image'
import React from 'react'

import styles from './styles.module.css'

const CartIcon = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.cartImage}>
            <Image src='/images/cart.png' alt='' fill />
        </div>
        <span>Cart (3)</span>
    </div>
  )
}

export {CartIcon}