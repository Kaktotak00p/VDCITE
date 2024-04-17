'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../public/Styles/header.module.css';
import ScrollLink from './ScrollLink';
import { useTranslation } from "react-i18next";
import './i18n.js';
import i18next from 'i18next';

interface Props {}

const Header: React.FC<Props> = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false); // State to manage language dropdown visibility
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY > 20;
            setIsScrolled(offset);
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the scroll event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle the display of the language options
    const toggleLanguages = () => setShowLanguages(!showLanguages);

    // Change the language and hide the dropdown
    const changeLanguage = (lang: string) => {
        i18next.changeLanguage(lang);
        setShowLanguages(false); // Close the dropdown after selection
    };

    // Combine the header style with the 'scrolled' class when isScrolled is true
    const headerClass = isScrolled ? `${styles.header} ${styles.scrolled}` : styles.header;

    return (
        <header className={headerClass}>
            <div className={`${styles.traffhub}`}>TRAFFHUB</div>
            <nav>
                <ScrollLink targetId='Section'>{t("header.ABOUT_US")}</ScrollLink>
                <ScrollLink targetId='Traffic'>{t("header.ADVANT")}</ScrollLink>
                <ScrollLink targetId='hh'>{t("header.VACAN")}</ScrollLink>
                <ScrollLink targetId='TSources'>{t("header.SOURCES")}</ScrollLink>
                <ScrollLink targetId='Contact'>{t("header.CONTACT")}</ScrollLink>
                
                {showLanguages ? (
                    <div className={styles.langDropDown}>
                        <button onClick={() => changeLanguage('en')}>[ EN ]</button>
                        <button onClick={() => changeLanguage('ua')}>[ UA ]</button>
                        <button onClick={() => changeLanguage('ru')}>[ RU ]</button>
                    </div>
                ) : (
                    <button onClick={toggleLanguages} className={styles.currentLang}>[ {i18n.language.toUpperCase()} ]</button>
                )}
            </nav>
        </header>
    );
};

export default Header;
