'use client'

import React, { useState } from 'react';
import axios from 'axios';
import ContactField from './ContactField.client';
import Styles from '../../public/Styles/Contact.module.css';

const ContactForm = () => {
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

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.row}>
        <h1 className={Styles.h1}>Есть о чем поговорить?</h1>
        <button className={Styles.button} onClick={() => setIsOpen(true)}>Напишите нам</button>
        <div className={`${Styles.slidingPanel} ${isOpen ? Styles.show : ''}`}>
          <div className={Styles.closeBtn} onClick={() => setIsOpen(false)}>&times;</div>
          <div className={Styles.contactformcontainer}>
            <form onSubmit={handleSubmit} className={Styles.contactform}>
              <div className={Styles.formrow}>
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
              <div className={Styles.formrow}>
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
              <div className={Styles.formrow}>
                <ContactField
                  id="message"
                  label="Message"
                  type="text"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className={Styles.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
