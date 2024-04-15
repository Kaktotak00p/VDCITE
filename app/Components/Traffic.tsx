'use client'
import React from 'react';
import Styles from '../../public/Styles/Traffic.module.css';
import '../../public/Styles/globals.css';
import CardGreen from '../pictures/CardGreenShort.png';

import './i18n.js';
import { useTranslation } from "react-i18next";


const trafic: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className={Styles.outerConatiner} id="Traffic">
            <div className={Styles.mainContainer}>
                <h1>{t("advantages.NAME")}</h1>
            </div>
                <div className={Styles.cardGrid}>
                    <h1 className={`mainText ${Styles.traffic}`} >://Traffic</h1>
                    <h1 className={`mainText ${Styles.piki}`} >://♠</h1>
                        <div className={`${Styles.cardContainer} ${Styles.item1}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/petals (3).png" ></img>
                            <div className={Styles.overlayTextGreen}>{t("advantages.Card1")}</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item2}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/flower_nobg (3).png" ></img>
                            <div className={Styles.overlayTextGreen}>{t("advantages.Card2")}</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item3}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/flower (4).png" ></img>
                            <div className={Styles.overlayTextGreen}>{t("advantages.Card3")}</div>
                    </div>
                    <div className={`${Styles.row} ${Styles.secondRow}`}>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item4}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/heart (1).png" ></img>
                            <div className={Styles.overlayTextPurple}>{t("advantages.Card4")}</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item5}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/heart (3).png" ></img>
                            <div className={Styles.overlayTextPurple}>{t("advantages.Card5")}</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item6}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/heart (2).png" ></img>
                            <div className={Styles.overlayTextPurple}>{t("advantages.Card6")}</div>
                    </div>
                </div>
            </div>
    )
};

export default trafic;
