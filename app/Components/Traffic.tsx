import React from 'react';
import Styles from '../../public/Styles/Traffic.module.css';
import '../../public/Styles/globals.css';
import CardGreen from '../pictures/CardGreenShort.png'

const trafic: React.FC = () => {
    return (
        <div className={Styles.outerConatiner}>
            <h1 className='mainText' style={{paddingLeft:"3em"}}>://Traffic</h1>
            <div className={Styles.mainContainer}>
                <h1>НАШИ ПРЕИМУЩЕСТВА</h1>
            </div>
                <div className={Styles.column}>
                    <div className={Styles.row} style={{
                    }}>
                        <div className={Styles.cardContainer} style={{ opacity: '0'}}>
                            <img src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Лей Без Лимитов</div>
                        </div>
                        <div className={Styles.cardContainer}>
                            <img src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Лей Без Лимитов</div>
                        </div>
                        <div className={Styles.cardContainer}>
                            <img src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Высокие Ставки</div>
                        </div>
                        <div className={Styles.cardContainer}>
                            <img src="./partners/elements/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Дружная Команда</div>
                        </div>
                    </div>
                    <div className={Styles.row} style={{
                    }}>
                        <div className={Styles.cardContainer}>
                            <img src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Лучшее качество траффика</div>
                        </div>
                        <div className={Styles.cardContainer}>
                            <img src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Лучшее качество траффика</div>
                        </div>
                        <div className={Styles.cardContainer}>
                            <img src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Лучшее качество траффика</div>
                        </div>
                        <div className={Styles.cardContainer} style={{ opacity: '0'}}>
                            <img src="./partners/elements/CardPinkShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Лучшее качество траффика</div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default trafic;
