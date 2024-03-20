import React from 'react';
import Styles from '../../public/Styles/hh.module.css';
import '../../public/Styles/globals.css';

const HeadHunter = () => {
    return (
        <div className={Styles.outerConatiner}>
            <div className={Styles.mainContainer}>
                <h1>Охота за головами</h1>
            </div>
            <div className={Styles.row}>
            <img className={Styles.img} src='./partners/elements/005.png'></img>
                <ol>
                    <li className={Styles.layoutContainer}>
                        <div className={`${Styles.row} ${Styles.entry}`}>
                            <p className={Styles.p}>Junior Media Buyer</p>
                            <p className={Styles.p}>Lorem ipsum dolor sit amet.</p>
                            <button className={Styles.button}>Вакансия</button>
                        </div>
                    </li>
                    <li className={Styles.layoutContainer}>
                        <div className={`${Styles.row} ${Styles.entry}`}>
                            <p className={Styles.p}>Junior Media Buyer</p>
                            <p className={Styles.p}>Lorem ipsum dolor sit amet.</p>
                            <button className={Styles.button}>Вакансия</button>
                        </div>
                    </li>
                    <li className={Styles.layoutContainer}>
                        <div className={`${Styles.row} ${Styles.entry}`}>
                            <p className={Styles.p}>Junior Media Buyer</p>
                            <p className={Styles.p}>Lorem ipsum dolor sit amet.</p>
                            <button className={Styles.button}>Вакансия</button>
                        </div>
                    </li>
                    <li className={Styles.layoutContainer}>
                        <div className={`${Styles.row} ${Styles.entry}`}>
                            <p className={Styles.p}>Junior Media Buyer</p>
                            <p className={Styles.p}>Lorem ipsum dolor sit amet.</p>
                            <button className={Styles.button}>Вакансия</button>
                        </div>
                    </li>
                    <li className={Styles.layoutContainer}>
                        <div className={`${Styles.row} ${Styles.entry}`}>
                            <p className={Styles.p}>Junior Media Buyer</p>
                            <p className={Styles.p}>Lorem ipsum dolor sit amet.</p>
                            <button className={Styles.button}>Вакансия</button>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
};

export default HeadHunter;