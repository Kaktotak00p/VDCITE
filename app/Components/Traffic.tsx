import React from 'react';
import Styles from '../../public/Styles/Traffic.module.css';
import '../../public/Styles/globals.css';
import CardGreen from '../pictures/CardGreenShort.png'

const trafic: React.FC = () => {
    return (
        <div className={Styles.outerConatiner}>
            <div className={Styles.mainContainer}>
                <h1>НАШИ ПРЕИМУЩЕСТВА</h1>
            </div>
                <div className={Styles.cardGrid}>
                    <h1 className='mainText' style={{
                        marginTop:"-2em",
                        marginLeft:"40%",
                        gridRow:"1",
                        gridColumn:"1",
                        color:"white",
                        fontFamily:"Fifaks10Dev1",
                        fontSize:"2em"}}>://Traffic</h1>
                    <h1 className='mainText' style={{
                        marginLeft:"40%",
                        gridRow:"1",
                        gridColumn:"1",
                        fontSize:"2em"
                        }}>://♠</h1>
                        <div className={`${Styles.cardContainer} ${Styles.item1}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/petals (3).png" ></img>
                            <div className={Styles.overlayTextGreen}>ЛЕЙ БЕЗ ЛИМИТОВ</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item2}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/flower_nobg (3).png" ></img>
                            <div className={Styles.overlayTextGreen}>ВЫСОКИЕ СТАВКИ</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item3}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/flower (4).png" ></img>
                            <div className={Styles.overlayTextGreen}>ДРУЖНАЯ КОМАНДА</div>
                    </div>
                    <div className={`${Styles.row} ${Styles.secondRow}`}>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item4}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/flower (4).png" ></img>
                            <div className={Styles.overlayTextPurple}>ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item5}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/flower_nobg (3).png" ></img>
                            <div className={Styles.overlayTextPurple}>ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item6}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/petals (3).png" ></img>
                            <div className={Styles.overlayTextPurple}>ЛУЧШЕЕ КАЧЕСТВО ТРАФФИКА</div>
                    </div>
                </div>
            </div>
    )
};

export default trafic;
