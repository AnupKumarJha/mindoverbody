'use client'

import { useState } from 'react'
import localFont from 'next/font/local'

import MonthsItems from '../components/MonthsItem/MonthsItems'
import RateList from '../components/RateList/RateList'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

const myFont = localFont({
    src: '../fonts/RS-semibold.otf',
    display: 'swap',
})

export default function Card() {
    const [months, setMonths] = useState(2000)
    const [selectedRate, setSelectedRate] = useState(1.20)
    const [nameInput, setNameInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')
    const [modalOpened, setModalOpened] = useState(false)

    const handleMonthsChange = (month) => {
        setMonths(month);
    };
    
      // Функция для обработки выбора тарифа
    const handleRateChange = (rate) => {
        setSelectedRate(rate);
    };

    const totalSumm = () => {
        return Number(months * selectedRate).toFixed(0)
    }
     
    const onChangeName = (event) => {
        const value = event.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
        setNameInput(value);
    }

    const onChangePhone = (event) => {
        const value = event.target.value.replace(/[^\d+]/g, '')
        setPhoneInput(value);
    }

    const onSubmit = () => {
        if (nameInput == '' || phoneInput == '') {
            alert('Please enter your details')
        } else{
            setModalOpened(true)
        }
    }

    const closeModal = () => {
        setModalOpened(false)
        setNameInput('')
        setPhoneInput('')
    }

    return(
        <>
            <div className={`${styles.modal} ${modalOpened && styles.modalOpened}`}>
                <div className={styles.modalDialog}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalInner}>
                            <h1 className={`${styles.modalTitle} ${myFont.className}`}>Thank you for your order!</h1>
                            <h3 className={styles.modalSubtitle}>We will contact you soon</h3>
                            <button onClick={closeModal} className={`${styles.modalBtn} ${myFont.className}`}>Return</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.card}>
                <div className={mainStyles.container}>
                    <form className={styles.cardInner}>
                        <h3 className={`${mainStyles.pagesTitle} ${styles.margin}`}>Card Purchase</h3>
                        <div className={styles.months}>
                            <h4 className={styles.cardTitle}>Select the number of months:</h4>
                            <MonthsItems onChange={handleMonthsChange}/>
                        </div>
                        <div className={styles.rate}>
                            <h4 className={styles.cardTitle}>Select a rate:</h4>
                            <RateList onChange={handleRateChange}/>
                        </div>
                        <div className={styles.data}>
                            <h4 className={styles.cardTitle}>Enter your details:</h4>
                            <div className={styles.inputs}>
                                <input value={nameInput} onChange={onChangeName} type="text" className={styles.input} placeholder='Name'/>
                                <input value={phoneInput} onChange={onChangePhone} type="phone" className={styles.input} placeholder='Phone'/>
                            </div>
                        </div>
                        <div className={styles.price}>
                            <span className={styles.totalSumm}>Total price:</span>
                            <span className={styles.totalSumm}>{totalSumm()}</span>
                        </div>
                        <button onClick={onSubmit} className={styles.submitBtn} type='button'>Purchase</button>
                    </form>
                </div>
            </section>
        </>
    )
}
