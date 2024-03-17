'use client'

import React, { useState } from 'react';
import Landing from "../Components/Landing";
import Trafic from "../Components/Traffic";
import HeadHunter from "../Components/HeadHunter"
import TrafSources from "../Components/TrafficSources"
import Partners from "../Components/Partners"
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
    <Landing />
    <Trafic />
    <HeadHunter />
    <TrafSources />
    <Partners />
    <ContactFormClient />
    </>
    )
};


export default Home;
