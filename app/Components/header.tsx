"use client"
import React, { useState, useEffect } from 'react';
import styles from '../../public/Styles/header.module.css';
import ScrollLink from './ScrollLink';
import { useTranslation } from "react-i18next";
import './i18n.js';
import i18next from 'i18next';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for menu

interface Props {}

const Header: React.FC<Props> = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage burger menu visibility
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY > 20;
            setIsScrolled(offset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);
    

    const toggleLanguages = () => setShowLanguages(!showLanguages);
    const changeLanguage = (lang: string) => {
        i18next.changeLanguage(lang);
        setShowLanguages(false);
    };
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu

    const headerClass = isScrolled ? `${styles.header} ${styles.scrolled}` : styles.header;

    return (
        <header className={headerClass}>
            <div className={`${styles.traffhub}`}>TRAFFHUB</div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <nav className={`${isMenuOpen ? styles.navActive : ''} ${!isMenuOpen ? styles.hidden : ''}`}>
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
