import React from 'react'
import { CartIcon, Menu } from '../components';
import Link from 'next/link';
import styles from './styles.module.css'
import Image from 'next/image';

const Navbar = () => {

  // TODO: repace with real state
  const user = false;

  return (
    <div className={styles.wrapper}>
      {/* LEFT DESCTOP LINKS */}
      <div className={styles.desktopMenu}>
        <Link href='/'>Homepage</Link>
        <Link href='/'>Menu</Link>
        <Link href='/'>Contact</Link>
      </div>

      {/* LOGO */}
      <div className={styles.logo}>
        <Link href='/'>
          Maximo
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className={styles.mobileMenuWrapper}>
        <Menu />
      </div>
      {/* RIGHT DESKTOP LINKS */}
      <div className={styles.desktopMenu}>
        { !user ? <Link href='/login'>Login</Link> :
        <Link href='/orders'>Orders</Link> }
        <CartIcon />
      </div>
    </div>
  )
}

export {Navbar};