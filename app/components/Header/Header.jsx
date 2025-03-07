'use client'

import { useState } from 'react'

import Link from "next/link";

import styles from './Header.module.css'
import mainStyles from '../../main.module.css'

export default function Header(){
    const [menu, setMenu] = useState(false)

    const onClickMenu = () => {
        setMenu(!menu)
    }

    return(
        <>
            <header className={styles.header}>
                <div className={mainStyles.container}>
                    <nav className={`${styles.nav} ${menu ? styles.menuActive : ''}`}>
                        <h4 className={styles.logo}>MINDOVERBODY</h4>
                        <ul className={styles.menu}>
                            <li className={styles.menuItem}>
                                <Link onClick={onClickMenu} href='/'>Home</Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link onClick={onClickMenu} href='/schedule'>Schedule</Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link onClick={onClickMenu} href='/contacts'>Contacts and Gallery</Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link onClick={onClickMenu} href='/fit-bar'>Fitness Bar</Link>
                            </li>
                        </ul>
                        <div className={styles.adaptiveRight}>
                            <button onClick={onClickMenu} className={styles.menuBtn}>
                                <span className={styles.btnLine}></span>
                                <span className={styles.btnLine}></span>
                                <span className={styles.btnLine}></span>
                            </button>
                            <Link onClick={onClickMenu} href='/card'>
                                <button className={styles.button}>Buy Card</button>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}