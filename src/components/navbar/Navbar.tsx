import React from 'react'
import Link from 'next/link';
import { CartIcon, Menu, UserLinks } from '../components';
import { AppRoute } from '@/enums/enums';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      {/* LEFT DESCTOP LINKS */}
      <div className={styles.desktopMenu}>
        <Link href={AppRoute.ROOT}>Homepage</Link>
        <Link href={AppRoute.MENU}>Menu</Link>
        <Link href={AppRoute.ROOT}>Contact</Link>
      </div>

      {/* LOGO */}
      <div className={styles.logo}>
        <Link href={AppRoute.ROOT}>
          Maximo
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className={styles.mobileMenuWrapper}>
        <Menu />
      </div>
      {/* RIGHT DESKTOP LINKS */}
      <div className={styles.desktopMenu}>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  )
}

export {Navbar};