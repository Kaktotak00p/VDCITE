'use client'
import React, { useState } from 'react';
import styles from '../../public/Styles/ContactSection.module.css';
import ContactField from './ContactField.client';
import axios from 'axios';

const ContactSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telegramNickname: '',
    message: '',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const target = e.target as HTMLInputElement;  // Cast to HTMLInputElement
    if (target.type === 'file') {
        // Handle file inputs with a type assertion
        const file = target.files && target.files.length > 0 ? target.files[0] : null;
        setFile(file);
    } else {
        // Handle other inputs (text, email, etc.)
        setFormData({ ...formData, [target.id]: target.value });
    }
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const dataToSend = new FormData();
    // Append text fields to FormData
    Object.entries(formData).forEach(([key, value]) => {
      dataToSend.append(key, value);
    });
    // Append file to FormData if it exists
    if (file) {
      dataToSend.append('file', file);
    }
  
    // Send the form data with the file
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/send-to-telegram',
        data: dataToSend,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Form successfully submitted:', response.data);
      // Handle success, reset form, etc.
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };
  return (<>
    <div className={styles.svgContainer}>
      <img src='./svg/stick3.svg' className='svg-img' />
    </div>
    <div className={styles.container} id="Contact">
      <div className={styles.column}>
        <div className={styles.contactInfo}>
          <div className={styles.contactLabel}>CONTACT US</div>
          <div className={styles.email}>TRAFFHUB@GMAIL.COM</div>
        </div>
        <div className={styles.logo}>
          <button className={`${styles.button} ${styles.contactButton}`} onClick={() => setIsOpen(true)} >CONTACT</button>
        </div>
        <div className={styles.links}>
          <h2>SOCIAL</h2>
          <a href=""><img src='./partners/elements/tg.png' /></a>
          <a href=""><img src='./partners/elements/inst.png' /></a>
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
            color: "grey"
          }}>ТУТ МОЖНО ЕБАНУТЬ <br />ПРИДУМАТЬ <span style={{ color: "white" }}>НАШ СЛОГАН</span> <br />
            <span style={{ color: "white" }}>EREFFSFG</span> AND JEJXK YOU <br />
            <span style={{ color: "white" }}>BLA BLA PERFECT OP</span> <br />
            KDKSJAFSD TO DKF TJA <br />
            <span style={{ color: "white" }}>TRAFFHUB.</span>
          </p>
        </div>
      </div>
      <div className={`${styles.slidingPanel} ${isOpen ? styles.show : ''}`}>
        <div className={styles.closeBtn} onClick={() => setIsOpen(false)}>&times;</div>
        {/* <h1 style={{
          margin: "1em"
        }}>ЗАПОЛНИТЕ ФОРМУ</h1> */}
        <div className={styles.svgContainer} style={{

        }}>
          <img src='./svg/stick3.svg' className='svg-img' />
        </div>
        <div className={styles.formheader}>
          <img src='./dec/heart_contact.png' className={styles.heart} />
        </div>
        <form onSubmit={handleSubmit} className={`${styles.contactform} ${styles.row}`}>
          <div>
            <h1 className={styles.formlogo}>ЗАПОЛНИТЕ ФОРМУ</h1>
            <button type="submit" className={`${styles.button} ${styles.submitButton}`}>ОТКЛИКНУТЬСЯ</button>
          </div>
          <div className={styles.singleLines}>
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
            <ContactField
              id="message"
              label="Message"
              type="message"
              value={formData.message}
              onChange={handleChange}
            />
            <ContactField
              id="file"
              label="file"
              type="file"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
        </form>
        <img className={styles.dec} src="./dec/logo/1.png" />
        <div className={styles.footer}>
          <h1>TRAFFHUB</h1>
        </div>
      </div>
    </div>
  </>
  );
};

export default ContactSection;
