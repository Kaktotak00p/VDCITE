import React from 'react';
import styles from '../../public/Styles/ContactSection.module.css';

const ContactSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <div className={styles.contactLabel}>CONTACT US</div>
        <div className={styles.email}>TRAFFHUB@GMAIL.COM</div>
      </div>
      <div className={styles.logo}>CNTRS</div>
      <div className={styles.socialAndCompany}>
        <div className={styles.social}>
          <span>SOCIAL - </span>
          <a href="http://example.com"><img src="/path-to-your-icon/telegram.svg" alt="Telegram" /></a>
          <a href="http://instagram.com"><img src="/path-to-your-icon/instagram.svg" alt="Instagram" /></a>
          <a href="http://facebook.com"><img src="/path-to-your-icon/facebook.svg" alt="Facebook" /></a>
        </div>
        <div className={styles.links}>
          <a href="/story">/ STORY</a>
          <a href="/aboutus">/ ABOUT US</a>
          <a href="/events">/ EVENTS</a>
          <a href="/media">/ MEDIA</a>
        </div>
        <div className={styles.companyInfo}>
          <div className={styles.company}>COMPANY</div>
          <p>ТУТ МОЖНО ЕБАНУТЬ <br/>
            /// ПРИДУМАТЬ НАШ СЛОГАН <br/>
            EREFFSFG AND JEJXK YOU <br/>
            BLA BLA PERFECT OP <br/>
            KDKSJAFSD TO DKF TJA <br/>
            TRAFFHUB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
