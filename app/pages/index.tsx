'use client'

import Landing from "../Components/Landing";
import Trafic from "../Components/Traffic";
import HeadHunter from "../Components/HeadHunter"
import TrafSources from "../Components/TrafficSources"
import Partners from "../Components/Partners"
import Header from '../Components/header';
import type { ReactElement } from 'react'


import dynamic from 'next/dynamic';
import RootLayout from '../layout';


const Home = () => {
  ;
  return (
    <>
    <Header/>
    <Landing />
    <Trafic />
    <HeadHunter />
    <TrafSources />
    <Partners />
    </>
    )
};


export default Home;
