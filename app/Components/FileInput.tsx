"use client"
import React, { useState } from 'react';
import style from "../../public/Styles/fileInput.module.css"

interface FileInputProps {
    id: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Define the type for the onChange prop
}

const FileInput: React.FC<FileInputProps> = ({ id, label, onChange }) => {
    return (<div className={style.outerContainer}>
        <label htmlFor={id} className={style.fileuploadcontainer}>
            {label}
            <input
                id={id}
                type="file"
                onChange={onChange} // Use the passed down onChange function
                className={style.hiddenEl} // This hides the actual input element
                accept='.pdf'
            />
        </label>
    </div>
    );
};

export default FileInput;