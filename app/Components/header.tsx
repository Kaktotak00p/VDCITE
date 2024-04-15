'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../public/Styles/header.module.css';
import Link from 'next/link';
import ScrollLink from './ScrollLink';

import { useTranslation } from "react-i18next";
import './i18n.js';
import i18n from './i18n.js';
import i18next from 'i18next';


interface Props {}

const Header: React.FC<Props> = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useTranslation();

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

    // Combine the header style with the 'scrolled' class when isScrolled is true
    const headerClass = isScrolled ? `${styles.header} ${styles.scrolled}` : styles.header;

    return (
        <header className={headerClass}>
            <div className={`${styles.traffhub}`}>TRAFFHUB</div>
            <nav>
            {/* <Link href="/"> Home</Link>
            <Link href="/admin">Admin</Link> */}
            <button onClick={() => i18next.changeLanguage('en')}>EN</button>
            <button onClick={() => i18next.changeLanguage('ua')}>UA</button>
            <button onClick={() => i18next.changeLanguage('ru')}>RU</button>
            <ScrollLink targetId='Landing'>[ HOME ]</ScrollLink>
            <ScrollLink targetId='Sec tion'>{t("header.ABOUT_US")}</ScrollLink>
            <ScrollLink targetId='Traffic'>{t("header.ADVANT")}</ScrollLink>
            <ScrollLink targetId='hh'>{t("header.VACAN")}</ScrollLink>
            <ScrollLink targetId='TSources'>{t("header.SOURCES")}</ScrollLink>
            <ScrollLink targetId='Contact'>{t("header.CONTACT")}</ScrollLink>
            </nav>
        </header>
    );
};

export default Header;
