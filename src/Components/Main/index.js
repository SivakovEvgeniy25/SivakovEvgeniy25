import React, {useState} from 'react'
import Card from '../Card'
import Slider from '../Slider'
import styles from './Main.module.scss'
const Main = () => {
   const [cards] = useState([1,2,3]);
  return (
    <div className={styles.Main}>
        <div className={styles.Main__wrapper}>
           <Slider/>
            <div className={styles.Main__cardWrapper}>               
               {cards.map(()=>{
                    return(
                      <Card/>
                    )
                  })}
            </div>
           
        </div>
        <div className={styles.Main__recomendation}></div>
        <div className={styles.Main__header}>
             <div className={styles.Main__userLogo}></div>
                <div className={styles.Main__userDate}>
                   <div className={styles.Main__userName} >Evgene</div>
                   <div className={styles.Main__userPosition} >Poland</div>              
                </div>   
                <div className={styles.Main__reloc}>
                  Переключиться
                </div>            
       </div>
       </div>
  );
};

export default Main;