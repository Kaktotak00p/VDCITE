"use client"
import React, { useState } from 'react';
import Styles from '../../public/Styles/hh.module.css';
import '../../public/Styles/globals.css';
import TypingAnimation from '../TypingAnimation/typingAnimation';
import './i18n.js';
import { useTranslation } from "react-i18next";


// const jobListings = [
//   { title: 'JUNIOR MEDIA BUYER', description: "-МЕГА ВИСОКА бонусна сітка\n-Офісний/віддалений формат\n-Реальний вплив на робочий процес\n-Ідеально налагоджена інфраструктура\n-Все, що потрібно для твої комфортної роботи та розвитку\nГоловне завдання баєра в команді - заливатися в плюс, все інше беремо на себе" },
//   { title: 'JUNIOR MEDIA BUYER', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odit ab corporis quaerat doloremque ut nisi optio. Voluptate, illum voluptatem?' },
//   { title: 'JUNIOR MEDIA BUYER', description: 'Consectetur adipiscing elit.' },
//   // Add more job listings as needed
// ];
const HeadHunter = () => {
    const jobListings = [
        { title: 'JUNIOR MEDIA BUYER', description: "-МЕГА ВИСОКА бонусна сітка\n-Офісний/віддалений формат\n-Реальний вплив на робочий процес\n-Ідеально налагоджена інфраструктура\n-Все, що потрібно для твої комфортної роботи та розвитку\nГоловне завдання баєра в команді - заливатися в плюс, все інше беремо на себе" },
        { title: 'JUNIOR MEDIA BUYER', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odit ab corporis quaerat doloremque ut nisi optio. Voluptate, illum voluptatem?' },
        { title: 'JUNIOR MEDIA BUYER', description: 'Consectetur adipiscing elit.' },
        // Add more job listings as needed
    ];
    const { t } = useTranslation();
    const [visibleDescription, setVisibleDescription] = useState(Array(jobListings.length).fill(false));

    const toggleDescription = (index: number) => {
        setVisibleDescription(visibleDescription.map((item, idx) => idx === index ? !item : item));
    };

    const renderDescription = (text: string) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <div className={Styles.outerContainer} id="hh">
            <TypingAnimation text="://HeadHunter" typingSpeed={50} />
            <div className={Styles.mainContainer}>
                <h1 className={Styles.hunt}>{t("headHunter.HUNT")}</h1>
                <h1 className={Styles.heads}>{t("headHunter.HEADS")}</h1>
                <img className={Styles.dec} src='./partners/elements/square(2).png' alt='Decorative' />
            </div>
            <div className={Styles.row} >
                <img className={Styles.img} src='./partners/elements/005.png' alt='Decorative' />
                <div style={{ marginRight: "-15%" }}>
                    <h2 className={Styles.vacancies}>{t("headHunter.VACANCIES")}:</h2>
                    <div className={Styles.ol}>
                        <ol>
                            {jobListings.map((job, index) => (
                                <li key={index} className={Styles.layoutContainer}>
                                    <div className={`${Styles.row} ${Styles.entry}`}>
                                        <div className={Styles.mobileColumn}>
                                            <p className={`${Styles.p} ${Styles.jobName}`} style={{ textAlign: 'left' }}>
                                                <span style={{ color: "rgb(var(--green))", fontSize: ".5em", fontFamily: "Fifaks10dev1", marginRight: "1em" }}>://{index} </span>{job.title}
                                            </p>
                                            <div className={`${Styles.description} ${visibleDescription[index] ? Styles.expanded : ''}`}>
                                                <p className={`${Styles.decrHeader} ${visibleDescription[index] ? Styles.hidden : ''}`}>ОПИСАНИЕ:</p>
                                                <p className={`${Styles.p} ${!visibleDescription[index] ? Styles.hidden : ''}`}>{renderDescription(job.description)}</p>
                                            </div>
                                        </div>
                                        <button className={Styles.button} onClick={() => toggleDescription(index)} style={{ alignSelf: "end" }}>[ Вакансия ]</button>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadHunter;
