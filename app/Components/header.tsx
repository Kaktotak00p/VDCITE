"use client"
import React, { useState, useEffect } from 'react';
import styles from '../../public/Styles/header.module.css';
import ScrollLink from './ScrollLink';
import { useTranslation } from "react-i18next";
import './i18n.js';
import i18next from 'i18next';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for menu

interface Props { }

const Header: React.FC<Props> = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage burger menu visibility
    const { t, i18n } = useTranslation();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const offset = window.scrollY > 20;
    //         setIsScrolled(offset);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    const toggleLanguages = () => setShowLanguages(!showLanguages);
    const changeLanguage = (lang: string) => {
        i18next.changeLanguage(lang);
        setShowLanguages(false);
    };
    const closeMenu = () => setIsMenuOpen(false); // Toggle the mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu

    const headerClass = isScrolled ? `${styles.header} ${styles.scrolled}` : styles.header;

    return (
        <header className={headerClass}>
            <div className={`${styles.traffhub}`}>TRAFFHUB</div>
            <nav className={`${isMenuOpen ? styles.navActive : ''} ${!isMenuOpen ? styles.hidden : ''}`}>
                <ScrollLink targetId='Section' onClick={closeMenu} block='start'>{t("header.ABOUT_US")}</ScrollLink>
                <ScrollLink targetId='Traffic' onClick={closeMenu}>{t("header.ADVANT")}</ScrollLink>
                <ScrollLink targetId='hh' onClick={closeMenu}>{t("header.VACAN")}</ScrollLink>
                <ScrollLink targetId='TSources' onClick={closeMenu} block='start'>{t("header.SOURCES")}</ScrollLink>
                <ScrollLink targetId='Contact' onClick={closeMenu}>{t("header.CONTACT")}</ScrollLink>
            </nav>

            {showLanguages ? (
                <div className={styles.langDropDown}>
                    <button onClick={() => changeLanguage('en')}>[ EN ]</button>
                    <button onClick={() => changeLanguage('ua')}>[ UA ]</button>
                    <button onClick={() => changeLanguage('ru')}>[ RU ]</button>
                </div>
            ) : (
                <button onClick={toggleLanguages} className={styles.currentLang}>[ {i18n.language.toUpperCase()} ]</button>
            )}
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </header>
    );
};

export default Header;
