import React from 'react';
import '../public/Styles/Header.css';
import '../public/Styles/globals.css';
import Header from "./Components/Header";
import Trafic from "./Components/Traffic";
import HeadHunter from "./Components/HeadHunter"
import TrafSources from "./Components/TrafficSources"
import Partners from "./Components/Partners"

import dynamic from 'next/dynamic';

//const ContactFormClient = dynamic(() => import('./Components/ContactForm.client'), { ssr: false });


const Home = () => {
  return (
    <>
    <Header />
    <Trafic />
    <HeadHunter />
    <TrafSources />
    <Partners />
  {/*  <ContactFormClient />*/}
    </>
    )
};

export default Home;
