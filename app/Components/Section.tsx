import React from 'react';
import styles from '../../public/Styles/Section.module.css';

const TrafficSection: React.FC = () => {
  return (
    <div className={styles.trafficContainer}>
      <div className={`${styles.header} mainText`} style={{color:"white"}}>
        <h1>://TRAFFIC</h1>
      </div>
      <div className={styles.content}>
        <p>
        Текст ола да текст ола да текст ола да текст <br/>
        ола да текст ола би ола да текст ола да текст ола A<br/>
        a текст ола да текст ола<br/>
        да текст ола A текст ола да текст.
        </p>
      </div>
      <div className={styles.footer}>
      <p style={{
        fontFamily:"Fifaks10dev1",
      }}>://ПРИДУМАТЬ СЮДА ТЕКСТ ...</p>
      <img className={styles.dec} src='./partners/elements/square(2).png' alt='Decorative' />
      </div>
    </div>
  );
};

export default TrafficSection;
