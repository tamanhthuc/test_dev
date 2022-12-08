import BaseButton from '../../../common/Button/BaseButton'
import CardItem from '../../../common/CartItem/CardItem'
import styles from './Content.module.scss'
export default function Content({discount, note, items}) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.discount}>
                    {discount} <span className={styles['discount-off']}>off</span>  
                </div>
                <div className={styles['discount_mobile']}>
                    {discount} <sup className={styles['discount-off']}>off</sup>  
                </div>
                <div className={styles.note}>
                    {note}
                </div>
            </div>
            <div className={`${styles.items} gird sm:grid-cols-12`}>
                {
                    items?.map((item, index) => {
                        return (
                            <div  key={index} className="sm:col-span-6">
                                <CardItem item={item} />
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className={styles['button-mobile']}>
                <BaseButton>SHOP ALL</BaseButton>
            </div>
        </div>
    )
}