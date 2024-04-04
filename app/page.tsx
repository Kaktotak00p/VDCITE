import React from 'react';
import type { NextPage } from 'next';
import Landing from "./Components/Landing";
import Trafic from "./Components/Traffic";
import HeadHunter from "./Components/HeadHunter"
import TrafSources from "./Components/TrafficSources"
import Partners from "./Components/Partners"
import type { ReactElement } from 'react'
import ContactNew from "./Components/ContactNEW"
import Styles from '../public/Styles/index.module.css';


import dynamic from 'next/dynamic';
import RootLayout from './layout';
import Header from './Components/header';
import TrafficSection from './Components/Section';
import Link from 'next/link';



const Home: NextPage = () => {
  return (
    <RootLayout>
    <Link href="/"> <a>Home</a></Link>
    <Link href="/admin"> <a>Admin</a></Link>
    <img src='./svg/палка1.svg' className={Styles.svgleft}/>
    <img src='./svg/палка2.svg' className={Styles.svgright}/>
    <Header/>
    <Landing />
    <TrafficSection/>
    <Trafic />
    <HeadHunter />
    <TrafSources />
    <Partners />
    <ContactNew/>
    </RootLayout>
    )
};


export default Home;
