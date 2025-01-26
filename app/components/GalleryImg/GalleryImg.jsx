'use client'

import { useState } from 'react'
import Image from 'next/image'

import styles from './Gallery.module.css'

export default function GalleryImg({img}) {
    const [imgOpen, setImgOpen] = useState(false)

    const onClickImg = () => {
        setImgOpen(!imgOpen)
    }

    return(
        <>
            <div onClick={onClickImg} className={styles.galleryItem}>
                <Image
                    src={img}
                    alt="Description of the image"
                    width={500}
                    height={300}
                    className={styles.gridImg}
                />
            </div>
            { imgOpen &&
                <div onClick={onClickImg} className={`${styles.modal} ${imgOpen && styles.modalOpened}`}>
                    <div className={styles.modalDialog}>
                        <div className={styles.modalContent}>
                            <Image
                                src={img}
                                alt="Description of the image"
                                width={500}
                                height={300}
                                className={styles.modalImg}
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}