'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../public/Styles/partners.module.css';
import '../../public/Styles/globals.css';
import TypingAnimation from '../TypingAnimation/typingAnimation';
// import ScrollingBanner from '../rollingtext/rollingText';

import { useTranslation } from "react-i18next";
import './i18n.js';

interface PartnerLogo {
    src: string;
    alt: string;
}

const logoData: PartnerLogo[] = [
    { src: './partners/247.png', alt: 'Company Logo' },
    { src: './partners/betman.png', alt: 'Company Logo' },
    { src: './partners/chilli.png', alt: 'Company Logo' },
    { src: './partners/glory.png', alt: 'Company Logo' },
    { src: './partners/mioMedia.png', alt: 'Company Logo' },
    { src: './partners/mrbet.png', alt: 'Company Logo' },
    { src: './partners/v.png', alt: 'Company Logo' },
];

const Partners: React.FC = () => {
    const { t } = useTranslation();
    const [visibleLogos, setVisibleLogos] = useState<PartnerLogo[]>([]);
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        // Initialize the visible logos
        setVisibleLogos(logoData.slice(0, 3));

        const updateLogos = () => {
            setAnimate(false); // Reset animation
            setTimeout(() => {
                setVisibleLogos((prevLogos) => {
                    // Determine new logos, cycling through the array
                    const startIndex = logoData.indexOf(prevLogos[0]);
                    const nextIndex = (startIndex + 1) % logoData.length;
                    return [
                        logoData[nextIndex],
                        logoData[(nextIndex + 1) % logoData.length],
                        logoData[(nextIndex + 2) % logoData.length],
                        logoData[(nextIndex + 3) % logoData.length],
                    ];
                });
                setAnimate(true); // Trigger new animation
            }, 100); // Short delay to reset animation
        };

        const interval = setInterval(updateLogos, 5000); // Update logos every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.outerContainer}>
            <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
            }}>
            {/* <ScrollingBanner text="://Partners" style={{paddingBottom:"3em"}} className='mainText'/> */}
            <TypingAnimation text="://Partners" typingSpeed={50}/>
            </div>
            <div className={styles.mainContainer}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
            }}>
                <h1 className={styles.partners} >{t("Partners.NAME")}</h1>
            <img src='./dec/arrow (2).png' className={styles.arrow}></img>
            <img src='./dec/arrow (2).png' className={styles.arrow}></img>
            </div>
            </div>
            <div className={styles.carouselContainer}>
                {visibleLogos.map((logo, i) => (
                    <div key={i} className={`${styles.logoContainer} ${animate ? styles.animateLogo : ''}`}>
                        <img className={styles.frameImage} src='./partners/elements/square_empty(2).png' alt='Frame'></img>
                        <img className={styles.logoImage} src={logo.src} alt={logo.alt}></img>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
