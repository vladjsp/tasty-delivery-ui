"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

// import { CartIcon } from '../components';

import styles from './styles.module.css'

const links = [
    {id: 111, title: 'Homepage', url: '/'},
    {id: 222, title: 'Menu', url: '/menu'},
    {id: 333, title: 'Working hours', url: '/'},
    {id: 444, title: 'Contacts', url: '/'},
]

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    //TODO: replace with real data
    const user = false;

  return (
    <div>
        { isOpen ? 
        <Image src='/images/close.png' alt='' width={20} height={20}  onClick={() => setIsOpen(false)} />
        :
        <Image src='/images/open.png' alt='' width={20} height={20} onClick={() => setIsOpen(true)} />
        }

        { isOpen && (
                    <div className={styles.links}>
            {links.map((item) => (
                <Link key={item.id} href={item.url} onClick={() => setIsOpen(false)}>{item.title}</Link>
            ))}

            { !user ? <Link href='/login'>Login</Link> :
            <Link href='/orders'>Orders</Link> }

            {/* TODO: return CartIcon component link */}
            <Link href='/cart'>
                Cart (3)
                {/* <CartIcon /> */}
            </Link>

        </div>
        )}

    </div>
  )
}

export {Menu}