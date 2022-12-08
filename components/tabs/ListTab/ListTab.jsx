import React, { useState } from "react";
import ReactDOM from "react-dom";
import {tabs} from "../../../api/fake/tabs"
import ItemTab from "../ItemTab/ItemTab"
import TabItemContent from "../TabItemContent/TabItemContent";
import TabItemContentMobile from "../TabItemContent/TabItemContentMobile";
import styles from './ListTab.module.scss'
export default function ListTab() {
    const [toggleState, setToggleState] = useState(1);
    const handleToggleTab = (index) => {
        setToggleState(index);
      };



    return (
        <div>
            <div className={styles.tabs}>
                {tabs.map((item, index) => {
                    return (
                      <div key={index} className={`${styles['item-tab']} ${toggleState === index ? styles['active'] : ""}`}>
                        <ItemTab  item={item} onChange={() => handleToggleTab(index)}  />
                        <div className={styles['content-mobile']}>
                          <div className={toggleState === index ? styles['content-active'] : styles['hidden']}>
                            <TabItemContentMobile content={item.content} />
                          </div>
                        </div>
                       
                      </div>
                        
                    )
                })}
            </div>

            <div className={styles['content-tabs']}>
                {tabs?.map((item, index) => {
                    return (
                      <div key={index} className={toggleState === index ? styles['content-active'] : styles['hidden']}>
                        <TabItemContent  content={item.content} />
                      </div>
                        
                    )
                })}
              
            </div>
        </div>
    )
}