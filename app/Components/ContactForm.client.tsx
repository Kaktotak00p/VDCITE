'use client'

import React, { useState } from 'react';
import ContactField from './ContactField.client';
import '../../public/Styles/Contact.css';

const ContactForm = () => {
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
      const response = await fetch('YOUR_ENDPOINT_URL', {
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
  <div>
    <div className='contact-form-container'>
      <img src="https://static.wixstatic.com/media/1c47da_da2794fb5ff246e7ba55a11348c021af~mv2.png/v1/crop/x_181,y_77,w_746,h_914/fill/w_323,h_396,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1c47da_da2794fb5ff246e7ba55a11348c021af~mv2.png" alt="Decorative" className="form-image"></img>
      <form onSubmit={handleSubmit} className='contact-form'>
      <h1>Contact us</h1>
        <div className='form-row'>
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
        <div className='form-row'>
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
        <div className='form-row'>
          <ContactField
            id="message"
            label="Message"
            type="text"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
  );
};

export default ContactForm;
