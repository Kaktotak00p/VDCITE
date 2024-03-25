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

    const toggleDescription = (index) => {
        setVisibleDescription(visibleDescription.map((item, idx) => idx === index ? !item : item));
    };

    return (
        <div className={Styles.outerContainer}>
            <h1 className='mainText' style={{ paddingLeft: "3em" }}>://HeadHunter</h1>
            <div className={Styles.mainContainer}>
                <h1 style={{
                    width:"100%",
                    textAlign:"left",
                }}>Охота за</h1>
                <h1 style={{
                    width:"100%",
                    textAlign:"right"
                }}> головами</h1>
            </div>
                <img className={Styles.dec} src='./partners/elements/square(2).png' alt='Decorative' />
            <div className={Styles.row}>
                <img className={Styles.img} src='./partners/elements/005.png' alt='Decorative' style={{
                    alignSelf:"baseline"
                }}/>
                <div>
                <h2 style={{
                    color: "white",
                    fontSize:"2em",
                    marginTop:"2em",
                    marginBottom:"1em"
                }}>Вакансии:</h2>
                <div className={Styles.ol}>
                    <ol>
                        {jobListings.map((job, index) => (
                            <li key={index} className={Styles.layoutContainer}>
                                <div className={`${Styles.row} ${Styles.entry}`}>
                                    <p className={`${Styles.p} ${Styles.jobName}`}>{job.title}</p>
                                    <div className={`${Styles.description} ${visibleDescription[index] ? Styles.expanded : ''}`}>
                                        <p className={Styles.p}>{job.description}</p>
                                    </div>
                                    <button className={Styles.button} onClick={() => toggleDescription(index)}>Вакансия</button>
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
