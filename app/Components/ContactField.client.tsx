import React from 'react';
import Styles from '../../public/Styles/ContactSection.module.css';
import FileInput from './FileInput';

interface ContactFieldProps {
  id: string;
  label: string;
  type: string;
  value?: string; // Make value optional since file inputs do not use value prop
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactField: React.FC<ContactFieldProps> = ({ id, label, type, value, onChange }) => {
  const isMessageField = type === 'message';
  const isFileField = type === 'file';
  
  return (
    <div className={Styles.contactfield} id={id}>
      {isMessageField ? (
        // Use textarea for 'message' type, with label text as placeholder
        <textarea
          id={id}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          placeholder={label}
        />
      ) : isFileField ? (
        // Use input type file for 'file', without using the value prop
        <>
        {/* <input
          id={id}
          type="file"
          name='file-upload'
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          placeholder={label} // Placeholder won't actually work for file inputs but kept for consistency
          /> */}
        <FileInput id={id} label="РЕЗЮМЕ" onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}/>
          </>
      ) : (
        // Use input for other types, with label text as placeholder
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          placeholder={label}
        />
      )}
    </div>
  );
};

export default ContactField;
