'use client'
import React from 'react';
import styles from '../../public/Styles/Section.module.css';

import { useTranslation } from "react-i18next";
import './i18n.js';


const TrafficSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.trafficContainer} id="Section">
      <div className={`${styles.header} mainText`} style={{color:"white"}}>
        <h1>://TRAFFIC</h1>
      </div>
      <div className={styles.content}>
        <p>{t("advantages.ABOUT_US")};
        </p>
      </div>
      <div className={styles.footer}>
      <p style={{
        fontFamily:"Fifaks10dev1",
      }}>{t('advantages.THINK')}</p>
      <img className={styles.dec} src='./partners/elements/square(2).png' alt='Decorative' />
      </div>
    </div>
  );
};

export default TrafficSection;
