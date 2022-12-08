import BaseButton from '../../../common/Button/BaseButton'
import styles from './SideBar.module.scss'
export default function SideBar({des, menu}) {
    return (
        <div className={styles.container}>
            <div className={styles['des_mobile']}>
                {des}
            </div>
            <div className={styles['menu-mobile']}>
                <ul className="grid gap-4 grid-cols-12">
                    {menu?.map((item, index) => {
                        return (
                            <li className="col-span-6" key={index}>{item}</li>
                        )
                    })}
                </ul>
            </div>
            
        </div>
    )
}