'use client'
import React, { useState } from 'react';
import styles from '../../public/styles/ContactSection.module.css';
import ContactField from './ContactField.client';
import axios from 'axios';

const ContactSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telegramNickname: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Form successfully submitted:', formData);
      const response = await axios.post('http://localhost:3001/send-to-telegram', formData);
        body: JSON.stringify(formData),
        
        console.log('Form successfully submitted:', response);
    } catch (error) {
        console.error('Error submitting form:', error);
      // Show error message to the user
    }
  };
  return (<>
  <div className={styles.svgContainer}>
      <img src='./svg/палка3.svg' className='svg-img'/>
  </div>
    <div className={styles.container}>
      <div className={styles.column}>
      <div className={styles.contactInfo}>
        <div className={styles.contactLabel}>CONTACT US</div>
        <div className={styles.email}>TRAFFHUB@GMAIL.COM</div>
      </div>
      <div className={styles.logo}>
        <button className={styles.button} onClick={() => setIsOpen(true)} style={{
          fontFamily: "NuMono",
        }}>CONTACT</button>
      </div>
        <div className={styles.links}>
          <h2>SOCIAL</h2>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
        {/* <div className={styles.links}>
          <h2>Discover <br/>mode</h2>
          <a href="/story">/ STORY</a>
          <a href="/aboutus">/ ABOUT US</a>
          <a href="/events">/ EVENTS</a>
          <a href="/media">/ MEDIA</a>
        </div> */}
      </div>
      <div className={styles.socialAndCompany}>
        {/* <div className={styles.social}>
          <span>SOCIAL - </span>
          <a href="http://example.com"><img src="/path-to-your-icon/telegram.svg" alt="Telegram" /></a>
          <a href="http://instagram.com"><img src="/path-to-your-icon/instagram.svg" alt="Instagram" /></a>
          <a href="http://facebook.com"><img src="/path-to-your-icon/facebook.svg" alt="Facebook" /></a>
        </div> */}
        <div className={styles.companyInfo}>
          <h2 className={styles.company}>TRAFFHUB</h2>
          <p style={{
            color:"grey"
          }}>ТУТ МОЖНО ЕБАНУТЬ <br/>
            /// ПРИДУМАТЬ <span style={{color:"white"}}>НАШ СЛОГАН</span> <br/>
            <span style={{color:"white"}}>EREFFSFG</span> AND JEJXK YOU <br/>
            <span style={{color:"white"}}>BLA BLA PERFECT OP</span> <br/>
            KDKSJAFSD TO DKF TJA <br/>
            <span style={{color:"white"}}>TRAFFHUB.</span>
          </p>
        </div>
      </div>
      <div className={`${styles.slidingPanel} ${isOpen ? styles.show : ''}`}>
          <div className={styles.closeBtn} onClick={() => setIsOpen(false)}>&times;</div>
          <div className={styles.contactformcontainer}>
            <img className={styles.formImage} src="./partners/elements/002.png" alt="Decorative"></img>
            <form onSubmit={handleSubmit} className={styles.contactform}>
              <div className={styles.formrow}>
                <ContactField
                  id="firstName"
                  label="First name"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <ContactField
                  id="lastName"
                  label="Last name"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  />
              </div>
              <div className={styles.formrow}>
                <ContactField
                  id="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  />
                <ContactField
                  id="telegramNickname"
                  label="Telegram Nickname"
                  type="text"
                  value={formData.telegramNickname}
                  onChange={handleChange}
                  />
              </div>
              <div className={styles.formrow}>
                <ContactField
                  id="message"
                  label="Message"
                  type="text"
                  value={formData.message}
                  onChange={handleChange}
                  />
              </div>
              <button type="submit" className={styles.button}>Submit</button>
            </form>
          </div>
        </div>

    </div>
                  </>
  );
};

export default ContactSection;
