import React from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
const Header =() => {
  return(
      <div className={styles.Header}>
           <div className={styles.Header__logo}>Instagram</div>
           <input type='text' placeholder='Поиск' className={styles.Header__search}/>
           <div className={styles.Header__wrapper}>
             <Link to="/" className={styles.Header__item}>
               <span className='material-icons'>
                  home
                </span>
             </Link>
             <div className={styles.Header__item}>
             <span className='material-icons'>
                  send
                </span>
             </div>
             <div className={styles.Header__item}>
             <span className='material-icons'>
                  explore
                </span>
             </div>
             <div className={styles.Header__item}>
             <span className='material-icons'>
                  favorite
                </span>
             </div>
             <Link to="/profile" className={styles.Header__item}></Link>
           </div>
      </div>
  );
}
 

export default Header;