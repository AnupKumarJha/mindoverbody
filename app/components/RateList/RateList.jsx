'use client'

import {useState} from 'react'

import mainStyles from '../../main.module.css'
import styles from './RateList.module.css'

export default function RateList({onChange}) {
    const [btnActive, setBtnActive] = useState(1)

    const onClickBtn = (event) => {
        setBtnActive(event.target.id)
        onChange(event.target.value)
    }

    return(
        <>
            <div className={styles.list}>
                <button onClick={onClickBtn} value='1.20' id='1' className={`${styles.btn} ${btnActive == 1 && styles.btnActive}`} type='button'>Basic</button>
                <button onClick={onClickBtn} value='1.80' id='2' className={`${styles.btn} ${btnActive == 2 && styles.btnActive}`} type='button'>Advanced</button>
                <button onClick={onClickBtn} value='2.50' id='3' className={`${styles.btn} ${btnActive == 3 && styles.btnActive}`} type='button'>All Inclusive</button>
                <button onClick={onClickBtn} value='1.10' id='4' className={`${styles.btn} ${btnActive == 4 && styles.btnActive}`} type='button'>Student</button>
            </div>
            <div className={styles.textSection}>
                {btnActive == 1 && <p className={mainStyles.text}>You will have access to the gym with the latest equipment, a spacious cardio area, and access to lockers, towels, and showers.</p>}
                {btnActive == 2 && <p className={mainStyles.text}>You will have everything in the basic package, plus access to the gaming area, yoga zone, martial arts hall, and stretching.</p>}
                {btnActive == 3 && <p className={mainStyles.text}>You will have everything in the advanced package, plus the opportunity to use the solarium for free once every two weeks and get one product from the fitness bar for free three times a week.</p>}
                {btnActive == 4 && <p className={mainStyles.text}>You will have access to the gym with the latest equipment, a spacious cardio area, and access to lockers, towels, and showers. BUT you must show your student ID or other proof that you are a student.</p>}
            </div>
        </>
    )
}