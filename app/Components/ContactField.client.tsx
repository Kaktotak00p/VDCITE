import React from 'react';
import Styles from '../../public/Styles/ContactSection.module.css';

interface ContactFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ContactField: React.FC<ContactFieldProps> = ({ id, label, type, value, onChange }) => {
  // Determine whether to use an input or a textarea based on the type
  const isMessageField = type === 'message';
  
  return (
    <div className={Styles.contactfield} id={id}>
      <label className={Styles.label} htmlFor={id}>{label}</label>
      {isMessageField ? (
        <textarea id={id} value={value} onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>} />
      ) : (
        <input id={id} type={type} value={value} onChange={onChange as React.ChangeEventHandler<HTMLInputElement>} />
      )}
    </div>
  );
};

export default ContactField;
