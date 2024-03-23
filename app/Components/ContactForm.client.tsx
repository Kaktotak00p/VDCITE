'use client'

import React, { useState } from 'react';
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
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      console.log('Form successfully submitted:', result);
      // Clear form or show success message
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
            <img className={Styles.formImage} src="./partners/elements/002.png" alt="Decorative"></img>
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
