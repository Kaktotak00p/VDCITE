"use client"

import React, { useState } from 'react';
import Styles from '../../public/Styles/hh.module.css';
import '../../public/Styles/globals.css';

const jobListings = [
  { title: 'Junior Media Buyer', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'Senior Media Buyer', description: 'Consectetur adipiscing elit.' },
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
        <div className={Styles.outerContainer}>
            <h1 className='mainText' style={{ paddingLeft: "3em" }}>://HeadHunter</h1>
            <div className={Styles.mainContainer}>
                <h1 className={Styles.hunt}>ОХОТА ЗА</h1>
                <h1 className={Styles.heads}> ГОЛОВАМИ</h1>
            </div>
                <img className={Styles.dec} src='./partners/elements/square(2).png' alt='Decorative' />
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
                                        fontSize:".6em",
                                        fontFamily:"Fifaks10dev1"
                                        }}>{index}  </span>{job.title}</p>
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
