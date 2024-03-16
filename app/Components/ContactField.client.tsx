import React from 'react';
import '../../public/Styles/Contact.css';

interface ContactFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactField: React.FC<ContactFieldProps> = ({ id, label, type, value, onChange }) => (
  <div className="contact-field">
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} value={value} onChange={onChange} />
  </div>
);

export default ContactField;
