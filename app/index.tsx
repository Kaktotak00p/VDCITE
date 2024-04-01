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
import Header from './Components/header';



const Home = () => {
  return (
    <>
    <Header/>
    <Landing />
    <Trafic />
    <HeadHunter />
    <TrafSources />
    <Partners />
    <ContactNew/>
    </>
    )
};


export default Home;
