import Image from 'next/image'
import React from 'react'

import styles from './styles.module.css'
import Link from 'next/link'

const CartIcon = () => {
  return (
    <Link href='/cart' className={styles.wrapper}>
        <div className={styles.cartImage}>
            <Image src='/images/cart.png' alt='' fill />
        </div>
        <span>Cart (3)</span>
    </Link>
  )
}

export {CartIcon}