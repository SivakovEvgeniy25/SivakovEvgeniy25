import React from 'react'
import styles from './Card.module.scss'
const Card = () => {
  return (
    <div className={styles.Card}>
       <div className={styles.Card__header}>
             <div className={styles.Card__userLogo}>img</div>
                <div className={styles.Card__userDate}>
                   <div className={styles.Card__userName} >Evgene</div>
                   <div className={styles.Card__userPosition} >Polond</div>              
                </div>
                 <div className={styles.Card__reloc}>
                  . . .
                </div>
          </div>
          <div className={styles.Card__content} ></div>
          <div className={styles.Card__communication} >
               <span className='material-icons'>
                  favorite
                </span>
                <span className='material-icons'>
                  send
                </span>
          </div>
          <div className={styles.Card__footer} >
              <input type='text' placeholder='Добавьте комментарий' className={styles.Card__inputComment}/>
              <div className={styles.Card__button} >Поделиться</div>
          </div>
    </div>
  )
}

export default Card