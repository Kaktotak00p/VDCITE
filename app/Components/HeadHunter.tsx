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
            <img src='https://static.wixstatic.com/media/1c47da_8d9bbf50214d4e72899b1357a125c2c7~mv2.png/v1/crop/x_175,y_81,w_753,h_896/fill/w_249,h_296,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1c47da_8d9bbf50214d4e72899b1357a125c2c7~mv2.png'></img>
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