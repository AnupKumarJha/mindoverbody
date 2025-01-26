import styles from './Benefit.module.css'
import Image from 'next/image'

export default function Benefit({img, title, text}){
    return(
        <div className={styles.benefitItem}>
            <div className={styles.top}>
                <Image
                    src={img}
                    alt="Description of the image"
                    width={500}
                    height={300}
                />
                <h4 className={styles.benefitTitle}>{title}</h4>
            </div>
            <p className={styles.benefitText}>{text}</p>
        </div>
    )
}