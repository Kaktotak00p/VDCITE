/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from 'react';
import Style from '../../public/Styles/Landing.module.css';
import '../../public/Styles/globals.css';
import UserCountDisplay from './reactivetag';
import ScrollLink from './ScrollLink';

import { useTranslation } from "react-i18next";
import './i18n.js';
import SlidingPanel from './slidingPanel';



const landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    function adjustZoomForSafari() {
      const userAgent = navigator.userAgent;
      const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
      const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    
      if (isSafari && isMobile) {
        // If Safari on mobile device, set zoom to 0.8
        // (document.body.style as any).zoom = '0.5';
      } else if (isSafari) {
        // If Safari on desktop, set zoom to 0.9
        (document.body.style as any).zoom = '.70';
      }
    }
    
    adjustZoomForSafari();
    
    
  }, []);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={Style.outerConatiner} id="Landing">
        <div className={Style.mainContainer}>
          <div className={Style.footer}>
            <UserCountDisplay />
          </div>
          <div className={Style.textContainer}>
            <h1 className={Style.mediabuy}>{t('landing.MEDIABUY')}</h1>
            <h1 className={Style.company}>{t("landing.COMPANY")}</h1>
            <p className={Style.descrleft}>{t("landing.Dscr")}</p>
          </div>
          <div className={Style.imageContainer}>
            <img style={{
              marginBottom:"-7%",
              zIndex:"0"
            }} 
             src="./partners/elements/makakich.png" alt="Media Buying Company" />
            <div className={Style.column}>
              <div className={Style.row} style={{
                justifySelf:"left"
              }}>
                <h1 className='mainText'>://</h1>
                <img src="./dec/flower_nobg (4).png" style={{
                  height: '2em',
                  width: '2em',
                  minWidth:"0%",
                  marginTop:"-.1em",
                  marginLeft:".1em"
                }}></img>
              </div>
              <p className={Style.descrright}>{t("landing.RIGHTDOWN")}</p>
              {/* <button className={Style.button}>[CLICK,ПОСМОТРЕТЬ]</button> */}
              {/* <ScrollLink targetId='Contact' className={Style.button}>{t("landing.BUTTON")}</ScrollLink> */}
              <button className={Style.button} onClick={() => setIsOpen(true)}>{t("landing.BUTTON")}</button>
            </div>
          </div>
        </div>
      </div>
              <SlidingPanel isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
};

export default landing;
