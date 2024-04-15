'use client'
import React from 'react';
import styles from '../../public/Styles/Section.module.css';

import { useTranslation, Trans } from "react-i18next";
import './i18n.js';
import TypingAnimation from '../TypingAnimation/typingAnimation';


const TrafficSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.trafficContainer} id="Section">
      <div className={`${styles.header} mainText`} style={{color:"white"}}>
      <TypingAnimation text="://TRAFFIC" typingSpeed={50} style={{color:'white'}}/>
      </div>
      <div className={styles.content}>
        <Trans i18nKey={"advantages.ABOUT_US"}/>
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
