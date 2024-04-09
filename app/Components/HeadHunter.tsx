"use client"

import React, { useState } from 'react';
import Styles from '../../public/Styles/hh.module.css';
import '../../public/Styles/globals.css';
import TypingAnimation from '../TypingAnimation/typingAnimation';
// import ScrollingBanner from '../rollingtext/rollingText';

const jobListings = [
  { title: 'Junior Media Buyer', description: "-МЕГА ВИСОКА бонусна сітка\n-Офісний/віддалений формат\n-Реальний вплив на робочий процес\n-Ідеально налагоджена інфраструктура\n-Все, що потрібно для твоєї комфортної роботи та розвитку\nГоловне завдання баєра в команді - заливатися в плюс, все інше беремо на себе\n\n✨Якщо ти справжній профі, який:\n- має досвід на позиції Media Buyer в вертикалі Gambling від 8 місяців\n-може похизуватися успішними кейсами та актуальною статистикою за останній час\n-працював з великими бюджетами\n-вміє шукати зв’язки та унікальні підходи\n\nТоді ми точно підходимо один одному!" },
  { title: 'Senior Media Buyer', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odit ab corporis quaerat doloremque ut nisi optio. Voluptate, illum voluptatem?' },
  { title: 'Senior Media Buyer', description: 'Consectetur adipiscing elit.' },
  { title: 'Senior Media Buyer', description: 'Consectetur adipiscing elit.' },
  { title: 'Senior Media Buyer', description: 'Consectetur adipiscing elit.' },
  // Add more job listings as needed
];

const HeadHunter = () => {
    const [visibleDescription, setVisibleDescription] = useState(Array(jobListings.length).fill(false));

    const toggleDescription = (index: number) => {
        setVisibleDescription(visibleDescription.map((item, idx) => idx === index ? !item : item));
    };

    return (
        <div className={Styles.outerContainer} id="hh">
            {/* <ScrollingBanner text="://HeadHunter" className="mainText" /> */}
            <TypingAnimation text="://HeadHunter" typingSpeed={50} />
            <div className={Styles.mainContainer}>
                <h1 className={Styles.hunt}>ОХОТА ЗА</h1>
                <h1 className={Styles.heads}> ГОЛОВАМИ</h1>
                <img className={Styles.dec} src='./partners/elements/square(2).png' alt='Decorative' />
            </div>
            <div className={Styles.row} >
                <img className={Styles.img} src='./partners/elements/005.png' alt='Decorative' />
                <div style={{
                    marginRight:"-15%"
                }}>
                <h2 className={Styles.vacancies}>ВАКАНСИИ:</h2>
                <div className={Styles.ol}>
                    <ol>
                        {jobListings.map((job, index) => (
                            <li key={index} className={Styles.layoutContainer}>
                                <div className={`${Styles.row} ${Styles.entry}`}>
                                    <p className={`${Styles.p} ${Styles.jobName}`} style={{textAlign:'left'}}><span style={{
                                        color:"rgb(var(--green))",
                                        fontSize:".5em",
                                        fontFamily:"Fifaks10dev1",
                                        marginRight:"1em"
                                        }}>://{index} </span>{job.title}</p>
                                    <div className={`${Styles.description} ${visibleDescription[index] ? Styles.expanded : ''}`}>
                                        <p className={Styles.p}>{job.description}</p>
                                    </div>
                                    <button className={Styles.button} onClick={() => toggleDescription(index)} style={{alignSelf:"end"}}>[ Вакансия ]</button>
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
