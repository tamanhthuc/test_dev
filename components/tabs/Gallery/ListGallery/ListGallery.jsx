import styles from './ListGallery.module.scss'
export default function ListGallery() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
            Packer pen Gallery
            </div>
            <div className={styles['gallery-destop']}>
                <div className="gird grid gap-4 xl:grid-cols-12 items-center">
                    <div className={`xl:col-span-3 ${styles.item}`}>
                        <img src="/Rectangle 23.png" alt="" />
                        <img src="/Rectangle 25.png" alt="" />
                    </div>

                    <div className={`xl:col-span-6 ${styles.item}`}>
                        <img src="/Rectangle 21.png" alt="" />
                        <img src="/Rectangle 24.png" alt="" />
                    </div>

                    <div className={`xl:col-span-3 ${styles.item}`}>
                        <img src="/Rectangle 26.png" alt="" />
                        <img src="/Rectangle 27.png" alt="" />
                        <img src="/Rectangle 28.png" alt="" />
                    </div>
                </div>
            </div>
          

            <div className={styles['gallery-mobile']}>
                <div className="grid gap-1 grid-cols-12">
                    <div className={`col-span-6 ${styles['item_mobile']}`}>
                        <img src="/Rectangle1-mobile.png" alt="" />
                        <img src="/Rectangle2-mobile.png" alt="" />
                    </div>
                    <div className={`col-span-6 ${styles['item_mobile']}`}>
                        <img src="/Rectangle3-mobile.png" alt="" />
                    </div>
                </div>
                <div className="grid gap-1 grid-cols-12">
                    <div className={`col-span-12 ${styles['item_mobile']}`}>
                        <img src="/Rectangle4-mobile.png" alt="" />
                    </div>
                </div>
                <div className="grid gap-1 grid-cols-12">
                    <div className={`col-span-12 ${styles['item_mobile']}`}>
                        <img src="/Rectangle5-mobile.png" alt="" />
                    </div>
                </div>

                <div className="grid gap-1 grid-cols-12">
                    <div className={`col-span-6 ${styles.item}`}>
                        <img src="/Rectangle6-mobile.png" alt="" />
                    </div>
                    <div className={`col-span-6 ${styles.item}`}>
                        <img src="/Rectangle7-mobile.png" alt="" />
                    </div>
                </div>
            </div>
     </div>
    )
}