import { useState, useEffect } from 'react';
import ListGallery from '../tabs/Gallery/ListGallery/ListGallery';
import ListTab from '../tabs/ListTab/ListTab';
import styles from "./ContainerApp.module.scss"
export default function ContainerApp() {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState("activeSlide")
  useEffect(() => {
     const lastIndex = 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex){
      setIndex(0)
    }
  }, [index])

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1)
  //   }, 10000);
  //   return () => clearInterval(slider)
  // }, [index])

    
    return (
      <div className={styles.container}>
        <div className={``}>
    
            <div className={`${styles.content} ${styles.slide} ${index === 0 ? styles.activeSlide : ""}`}>
              <ListTab />
            </div>

            <div className={`${styles.slide} ${index === 1 ? styles.activeSlide : ""}`}>
              <ListGallery />
            </div>
        </div>

        <div className={styles['container-dot']}>
          <span className={`${styles.dot} ${index === 0 ? styles.active : ""}`}  onClick={() => setIndex(0)}></span> 
          <span className={`${styles.dot} ${index === 1 ? styles.active : ""}`} onClick={() => setIndex(1)}></span> 
        </div>
        
      </div>
    );
}