import styles from './BaseButton.module.scss'
export default function BaseButton({children}) {
    return (
        <button className={styles.container}>{children}</button>
    )
}