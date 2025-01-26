import styles from './BarItem.module.css'
import Image from 'next/image'

export default function BarItem({img, manufacturer, title, price}) {
    return(
        <div className={styles.barItem}>
            <Image
                src={img}
                alt={title}
                width={500}
                height={300}
            />
            <h6 className={styles.barManufacturer}>{manufacturer}</h6>
            <p className={styles.barName}>{title}</p>
            <p className={styles.price}>{`${price} ₽`}</p>
        </div>
    )
}