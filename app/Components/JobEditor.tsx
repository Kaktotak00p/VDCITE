'use client'


import React, { useState } from 'react';

interface JobOpening {
    title: string;
    description: string;
}

interface JobEditorProps {
    jobs: JobOpening[];
    setJobs: React.Dispatch<React.SetStateAction<JobOpening[]>>;
}

const JobEditor: React.FC<JobEditorProps> = ({ jobs, setJobs }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addJob = () => {
        const newJobs = [...jobs, { title, description }];
        setJobs(newJobs);
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Job Title" 
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Job Description"
            />
            <button onClick={addJob}>Add Job</button>
        </div>
    );
};

export default JobEditor;
