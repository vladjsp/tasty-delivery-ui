'use client'

import {useSession, signIn} from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import styles from './styles.module.css'

const LoginPage = () => {

  const {data, status} = useSession();
  const router = useRouter();

  if(status === 'loading'){
    return <p>...Loading!</p>
  }
  if(status === 'authenticated'){
    router.push('/')
  }

  return (
    <div className={styles.container}>
    {/* BOX */}
    <div className={styles.wrapper}>
      {/* IMAGE CONTAINER */}
      <div className={styles.imageBox}>
        <Image src="/images/loginBg.png" alt="" fill style={{objectFit: 'cover'}} />
      </div>
      {/* FORM CONTAINER */}
      <div className={styles.form}>
        <h1 className={styles.title}>Welcome</h1>
        <p>Log into your account or create a new one using social buttons</p>
        <button className={styles.signInBtn} onClick={() => signIn('google')}>
          <Image
            src="/images/google.png"
            alt=""
            width={20}
            height={20}
            style={{objectFit: 'contain'}}
          />
          <span>Sign in with Google</span>
        </button>
        <button className={styles.signInBtn}>
          <Image
            src="/images/facebook.png"
            alt=""
            width={20}
            height={20}
            style={{objectFit: 'contain'}}
          />
          <span>Sign in with Facebook</span>
        </button>
        <p className={styles.contactUs}>
          {/* TODO: replace link to actual contacts */}
          Have a problem? <Link href="#">Contact us</Link>
        </p>
      </div>
    </div>
  </div>
  )
}

export default LoginPage