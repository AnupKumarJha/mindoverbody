import Link from "next/link";
import localFont from 'next/font/local'

import Benefit from './components/Benefit/Benefit'
import TrainingAccordions from "./components/TrainingAccordions/TrainingAccordions";
import HomeSwiper from "./components/HomeSwiper/HomeSwiper";

import benefitsData from './database/benefitsData'

import styles from './page.module.css'
import mainStyles from './main.module.css'
import 'swiper/css';

const myFont = localFont({
    src: './fonts/RS-semibold.otf',
    display: 'swap',
})

export default function HomeFitness(){
    return(
        <>
            <section style={{backgroundImage: `url("./fusion-fitness/home-images/top-bg.jpg")`}} className={styles.top}>
                <div className={styles.container}>
                    <div className={styles.topInner}>
                        <h1 className={`${styles.topTitle} ${myFont.className}`}>Fitness Club in the Center of Yekaterinburg</h1>
                        <h2 className={styles.topSubtitle}>
                            Reach new heights with our professional trainers and modern equipment
                        </h2>
                        <Link href='/card'>
                            <button className={styles.topBtn}>Buy Card</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.benefits}>
                <div className={mainStyles.container}>
                    <h3 className={mainStyles.title}>What You Will Get:</h3>
                    <div className={styles.benefitsInner}>
                    {benefitsData.map((benefit, index) => (
                        <Benefit key={index} img={benefit.img} title={benefit.title} text={benefit.text} />
                    ))}
                    </div>
                </div>
            </section>

            <section className={styles.trainings}>
                <div className={mainStyles.container}>
                    <div className={styles.trainingsInner}>
                        <div className={styles.trainingsLeft}>
                            <h3 className={mainStyles.title}>Immerse Yourself in the Training Process</h3>
                            <p className={mainStyles.text}>
                                We strive to provide you with the most effective workouts and optimal development of your physical condition. Our training process is a harmonious combination of modern approaches, professional guidance, and an individual approach to each participant.
                            </p>
                            <div className={styles.accordionList}>
                                <TrainingAccordions/>
                            </div>
                        </div>
                        <div className={styles.trainingsRight}>
                            <img className={styles.trainingsNonAdaptive} src="./fusion-fitness/home-images/trainings-img.jpg" alt="" />
                            <Link href='/schedule'>
                                <button className={styles.trainingsBtn}>Trainings</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.gallery}>
                <video preload="auto" autoPlay loop muted playsInline style={{ width: '100%', height: '652px', objectFit: 'cover' }}>
                    <source src="fusion-fitness/videos/background-video.mp4" type="video/mp4" />
                </video>
                <div className={`${mainStyles.container} ${styles.galleryContainer}`}>
                    <div className={styles.galleryInner}>
                        <Link href='/contacts'>
                            <button className={styles.galleryBtn}>Club Gallery</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.bar}>
                <div className={mainStyles.container}>
                    <div className={styles.barInner}>
                        <h3 className={mainStyles.title}>Fitness Bar</h3>
                        <p className={`${mainStyles.text} ${styles.marginBottom}`}>
                            The perfect place to recharge and meet your nutritional needs after a workout. In our fitness bar, you will find a wide selection of fresh and healthy drinks, isotonic drinks, smoothies, and nutritious snacks to replenish your energy and maintain a healthy lifestyle.
                        </p>
                        <HomeSwiper/>
                        <Link href='/fit-bar'>
                            <button className={styles.barBtn}>Go to</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.card}>
                <div className={mainStyles.container}>
                    <h3 className={mainStyles.title}>Card</h3>
                    <div className={styles.cardInner}>
                        <div className={styles.cardLeft}>
                            <p className={mainStyles.text}>
                                We offer a pass card that will be your reliable companion on the path to fitness and health. Here's why our pass card is one of our key advantages:
                            </p>
                            <ol className={styles.cardList}>
                                <li className={styles.cardItem}>
                                    <p className={mainStyles.text}>
                                        Your card provides full access to everything Fusion offers. You will visit all available places and procedures within your tariff.
                                    </p>
                                </li>
                                <li className={styles.cardItem}>
                                    <p className={mainStyles.text}>
                                        In case of loss or theft of the card, you can easily block it and get a replacement.
                                    </p>
                                </li>
                                <li className={styles.cardItem}>
                                    <p className={mainStyles.text}>
                                        The card allows you to simplify the payment process for fitness club services. You can link your card to your financial resources.
                                    </p>
                                </li>
                            </ol>
                            <Link href='/card'>
                                <button className={`${styles.cardBtn} ${styles.cardNonAdaptive}`}>Purchase</button>
                            </Link>
                        </div>
                        <div className={styles.cardRight}>
                            <Link href='/card'>
                                <button className={`${styles.cardBtn} ${styles.cardAdaptive}`}>Purchase</button>
                            </Link>
                            <img src="./fusion-fitness/home-images/card-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
