"use client"
import React, { useState } from 'react';
import style from "../../public/Styles/fileInput.module.css";

interface FileInputProps {
    id: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({ id, label, onChange }) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event); // Call the passed onChange to handle any additional behaviors
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            setFileName(file.name);
        } else {
            setFileName(""); // Reset if no file is selected
        }
    };

    return (
        <div className={style.outerContainer}>
            <label htmlFor={id} className={`${style.fileuploadcontainer} ${fileName ? style.greenButton : style.whiteButton}`}>
                {fileName || label}
                {/* <img src='./dec/heart (1).png' style={{
                    width:"auto",
                    height:"4em"
                }}/> */}
                <input
                    id={id}
                    type="file"
                    onChange={handleFileChange}
                    className={style.hiddenEl}
                    accept=".pdf, .docx, .doc"
                />
            </label>
        </div>
    );
};

export default FileInput;
