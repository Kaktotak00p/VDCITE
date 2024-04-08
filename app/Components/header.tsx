'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../public/Styles/header.module.css';
import Link from 'next/link';
import ScrollLink from './ScrollLink';

interface Props {}

const Header: React.FC<Props> = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);

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
            <ScrollLink targetId='Landing'>HOME</ScrollLink>
            <ScrollLink targetId='Section'>О НАС</ScrollLink>
            <ScrollLink targetId='Traffic'>ПРЕИМУЩЕСТВА</ScrollLink>
            <ScrollLink targetId='hh'>ВАКАНСИИ</ScrollLink>
            <ScrollLink targetId='TSources'>ИСТОЧНИКИ</ScrollLink>
            <ScrollLink targetId='Contact'>Contact</ScrollLink>
            </nav>
        </header>
    );
};

export default Header;
