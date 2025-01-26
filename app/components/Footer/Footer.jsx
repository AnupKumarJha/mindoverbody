import Link from "next/link";

import styles from './Footer.module.css'
import mainStyles from '../../main.module.css'

export default function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <div className={mainStyles.container}>
                    <nav className={styles.nav}>
                        <div className={styles.left}>
                            <h4 className={styles.logo}>Fusion</h4>
                            <Link className={styles.contact} href='tel:+78885553535'>
                                <p className={styles.text}>Phone number:</p>
                                <p className={styles.text}>+7 888 555 35 35</p>
                            </Link>
                            <Link className={styles.contact} href='mailto:thisemailisnotexist@gmail.com'>
                                <p className={styles.text}>Email:</p>
                                <p className={styles.text}>thisemailisnotexist@gmail.com</p>
                            </Link>
                        </div>
                        <ul className={styles.menu}>
                            <li className={styles.menuItem}>
                                <Link className={styles.text} href='/'>Home</Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link className={styles.text} href='/card'>Card</Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link className={styles.text} href='/schedule'>Schedule</Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link className={styles.text} href='/contacts'>Contacts and Gallery</Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link className={styles.text} href='/fit-bar'>Fitness Bar</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    )
}
