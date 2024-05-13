'use client'
import React, { useState } from 'react';
import styles from '../../public/Styles/ContactSection.module.css';
import ContactField from './ContactField.client';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import './i18n.js';
import SlidingPanel from './slidingPanel';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <div className={styles.svgContainer} style={{
      marginLeft: "-30em"
    }}>
      <img src='./svg/stick3.svg' className='svg-img' />
    </div>
    <div className={styles.container} id="Contact">
      <div className={styles.column}>
        {/* <div className={styles.contactInfo}>
          <div className={styles.contactLabel}>CONTACT US</div>
          <div className={styles.email}>TRAFFHUB@GMAIL.COM</div>
        </div> */}
        <div className={styles.contactInfo}>
          <div className={styles.contactLabel}>CONTACT US</div>
          <div className={styles.email}><a href="mailto:TRAFFHUB@GMAIL.COM">TRAFFHUB@GMAIL.COM</a></div>
        </div>
        {/* <div className={styles.links}>
          <h2>SOCIAL</h2>
          <a href=""><img src='./partners/elements/tg.png' /></a>
          <a href=""><img src='./partners/elements/inst.png' /></a>
        </div> */}
        <div className={styles.links}>
          <h2>SOCIAL</h2>
          <div>
            <a href=""><img src='./partners/elements/tg.png' /></a>
            <a href="https://www.instagram.com/traffhub.ua?igsh=NXRiNTN5MGdmbzZm" target='_blank' rel="noopener noreferrer"><img src='./partners/elements/inst.png' /></a>
          </div>
        </div>
        {/* <div className={styles.links}>
          <h2>Discover <br/>mode</h2>
          <a href="/story">/ STORY</a>
          <a href="/aboutus">/ ABOUT US</a>
          <a href="/events">/ EVENTS</a>
          <a href="/media">/ MEDIA</a>
        </div> */}
      </div>
        <div className={styles.logo}>
          <button className={`${styles.button} ${styles.contactButton}`} onClick={() => setIsOpen(true)} >CONTACT</button>
          </div>
      <div className={styles.socialAndCompany}>
          <div className={styles.companyInfo}>
          <h2 className={styles.company}>TRAFFHUB</h2>
          <p style={{
            color: "grey"
          }}>ТУТ МОЖНО ЕБАНУТЬ <br />ПРИДУМАТЬ <span style={{ color: "white" }}>НАШ СЛОГАН</span> <br />
            <span style={{ color: "white" }}>EREFFSFG</span> AND JEJXK YOU <br />
            <span style={{ color: "white" }}>BLA BLA PERFECT OP</span> <br />
            KDKSJAFSD TO DKF TJA <br />
            <span style={{ color: "white" }}>TRAFFHUB.</span>
          </p>
        </div>
        {/* <div className={styles.social}>
          <span>SOCIAL - </span>
          <a href="http://example.com"><img src="/path-to-your-icon/telegram.svg" alt="Telegram" /></a>
          <a href="http://instagram.com"><img src="/path-to-your-icon/instagram.svg" alt="Instagram" /></a>
          <a href="http://facebook.com"><img src="/path-to-your-icon/facebook.svg" alt="Facebook" /></a>
        </div> */}
      </div>
    </div>
    <SlidingPanel isOpen={isOpen} setIsOpen={setIsOpen} />
  </>
  );
};

export default ContactSection;
