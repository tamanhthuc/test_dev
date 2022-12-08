import styles from './Item.module.scss'

export default function ItemTab({item , onChange}) {
    const handleClick = () => {
        onChange(item.id ? item.id : null)
    }
    return (
       <div className={styles.container} onClick={handleClick}>
         <div className={styles.item}>
            <div className={styles['item-left']}>
                <div className={styles.img}>
                <img src={item.img ? item.img : ""} alt="item" />
                </div>

                <div className={styles.text}>
                    {item.text}
                </div>
            </div>
        
            <div className={styles['image_mobile']}>
                <img src="./arrow-down.png" alt="" />
            </div>
            
        </div>
       </div>
    )
}