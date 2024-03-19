'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../public/Styles/partners.module.css';
import '../../public/Styles/globals.css';

const Partners: React.FC = () => {
    const [visibleLogos, setVisibleLogos] = useState<number[]>([0, 1, 2, 3, 4]);
    const logoData = [
        './partners/247.png',
        './partners/betman.png',
        './partners/chilli.png',
        './partners/glory.png',
        './partners/mostb.png',
        './partners/mrbet.png',
        './partners/v.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleLogos(prevVisibleLogos => 
                prevVisibleLogos.map(index => (index + 1) % logoData.length)
            );
        }, 3000); // Rotate logos every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.mainContainer}>
                <h1>Партнеры</h1>
            </div>
            <div className={styles.scrollContainer}>
                {visibleLogos.map((index) => (
                    <div key={index} className={`${styles.logoContainer} ${styles.fadeInRight}`}>
                        <img className={styles.frameImage} src='./partners/elements/square(1).png' alt='Frame' />
                        <img className={styles.logoImage} src={logoData[index]} alt='Logo' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
