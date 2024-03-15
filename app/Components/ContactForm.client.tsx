import React, { useState } from 'react';
import ContactField from './ContactField.client';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <form onSubmit={handleSubmit}>
      <ContactField
        id="name"
        label="Name"
        type="text"
        value={formData.name}
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
        id="message"
        label="Message"
        type="text"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
