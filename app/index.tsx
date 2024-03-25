import React from 'react';
import Landing from "./Components/Landing";
import Trafic from "./Components/Traffic";
import HeadHunter from "./Components/HeadHunter"
import TrafSources from "./Components/TrafficSources"
import Partners from "./Components/Partners"
import type { ReactElement } from 'react'
import ContactNew from "./Components/ContactNEW"


import dynamic from 'next/dynamic';
import RootLayout from './layout';

const ContactFormClient = dynamic(() => import('./Components/ContactForm.client'), { ssr: false });


const Home = () => {
  return (
    <>
    <Landing />
    <Trafic />
    <HeadHunter />
    <TrafSources />
    <Partners />
    {/* <ContactFormClient /> */}
    <ContactNew/>
    </>
    )
};


export default Home;
