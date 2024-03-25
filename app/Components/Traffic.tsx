import React from 'react';
import Styles from '../../public/Styles/Traffic.module.css';
import '../../public/Styles/globals.css';
import CardGreen from '../pictures/CardGreenShort.png'

const trafic: React.FC = () => {
    return (
        <div className={Styles.outerConatiner}>
            <h1 className='mainText' style={{paddingLeft:"3em"}}>://Traffic</h1>
            <h1 className='mainText' style={{paddingLeft:"3em"}}>://♠</h1>
            <div className={Styles.mainContainer}>
                <h1>НАШИ ПРЕИМУЩЕСТВА</h1>
            </div>
                <div className={Styles.cardGrid}>
                        <div className={`${Styles.cardContainer} ${Styles.item1}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/flower (4).png" ></img>
                            <div className={Styles.overlayText}>Лей Без Лимитов</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item2}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/flower_nobg (3).png" ></img>
                            <div className={Styles.overlayText}>Высокие Ставки</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item3}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/petals (3).png" ></img>
                            <div className={Styles.overlayText}>Дружная Команда</div>
                    </div>
                    <div className={`${Styles.row} ${Styles.secondRow}`}>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item4}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/petals (1).png" ></img>
                            <div className={Styles.overlayText}>Лучшее качество траффика</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item5}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/flower_nobg (1).png" ></img>
                            <div className={Styles.overlayText}>Лучшее качество траффика</div>
                        </div>
                        <div className={`${Styles.cardContainer} ${Styles.item6}`}>
                            <img className={Styles.card_bg} src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <img className={Styles.innerImage} src="./dec/flower (1).png" ></img>
                            <div className={Styles.overlayText}>Лучшее качество траффика</div>
                    </div>
                </div>
            </div>
    )
};

export default trafic;
