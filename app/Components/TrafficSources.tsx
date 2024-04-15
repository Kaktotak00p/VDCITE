"use client"
import React from 'react';
import Styles from '../../public/Styles/trafSources.module.css';
import '../../public/Styles/globals.css';
import TypingAnimation from '../TypingAnimation/typingAnimation';

import { useTranslation } from "react-i18next";
import './i18n.js';

const TrafSources: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className={Styles.outerContainer} id="TSources">
            <div className={Styles.row}>
                <TypingAnimation text='://TrafficSources' typingSpeed={50} />
            </div>
            <div className={Styles.mainContainer}>
                <div className={Styles.textContainer}>
                    <h1>{t("Sources.NAME")}</h1>
                    <img src='./dec/skull (2).png' style={{
                        width: "auto",
                        height: "3em"
                    }} />
                </div>
                <div className={`${Styles.imageContainer} ${Styles.row}`}>
                    <img className={Styles.logoBorder} src='./partners/elements/traffSourcesborder.png' />
                    {/* Each set now includes an outer frame image and an inner logo image */}
                    <div className={Styles.logoContainer}>
                        <img className={Styles.logoImage} src='./partners/elements/tt.png' alt='Лого компаний'></img>
                    </div>
                    <div className={Styles.logoContainer}>
                        <img className={Styles.logoImage} src='./partners/elements/fb.png' alt='Лого компаний'></img>
                    </div>
                    <div className={Styles.logoContainer}>
                        <img className={Styles.logoImage} src='./partners/elements/google.png' alt='Лого компаний'></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrafSources;
