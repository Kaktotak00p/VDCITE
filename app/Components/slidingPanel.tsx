"use client"
import React, { useState } from 'react';
import styles from '../../public/Styles/ContactSection.module.css';
import ContactField from './ContactField.client';
import { useTranslation } from "react-i18next";
import './i18n.js';
import axios from 'axios';

interface SlidingPanelProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SlidingPanel: React.FC<SlidingPanelProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telegramNickname: '',
    message: '',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const target = e.target as HTMLInputElement; 
    if (target.type === 'file') {
        const file = target.files && target.files.length > 0 ? target.files[0] : null;
        setFile(file);
    } else {
        setFormData({ ...formData, [target.id]: target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      dataToSend.append(key, value);
    });
    if (file) {
      dataToSend.append('file', file);
    }
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/send-to-telegram',
        data: dataToSend,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Form successfully submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
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
          <div className={styles.leftText}>
            <h1 className={styles.formlogo}>{t("ContactForm.FillForm")}</h1>
            <button type="submit" className={`${styles.button} ${styles.submitButton}`}>{t("ContactForm.submit")}</button>
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
  );
};

export default SlidingPanel;