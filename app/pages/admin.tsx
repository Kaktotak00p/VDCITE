'use client'

import React, { useState } from 'react';
import JobEditor from "../Components/JobEditor"
import type { ReactElement } from 'react'


import dynamic from 'next/dynamic';
import RootLayout from '../layout';

const ContactFormClient = dynamic(() => import('../Components/ContactForm.client'), { ssr: false });


const Home = () => {
  const [jobs, setJobs] = useState([
    { title: 'Sample Job 1', description: 'Sample Description 1' },
    // Add initial job listings as needed
]);
  return (
  <>
    <JobEditor jobs={jobs} setJobs={setJobs} />
  </>
    )
};


export default Home;
