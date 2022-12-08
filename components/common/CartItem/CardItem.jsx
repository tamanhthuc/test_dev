import styles from './CardItem.module.scss'
export default function CardItem({item}) {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.img}>
                    <img src={item.image} alt="" />
                </div>

                <div className={styles.name}>
                    {item.name}
                </div>

                <div className={styles.price}>
                    <span className={styles['price_new']}>{item.price}</span>
                    <span className={styles['price_old']}>{item.price_old}</span>
                </div>
                </div>
           
        </div>
    )
}