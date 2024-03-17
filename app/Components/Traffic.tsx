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
                <div className={Styles.column}>
                    <div className={Styles.row}>
                        <div className={Styles.cardContainer}>
                            <img src="https://static.wixstatic.com/media/1c47da_f5ac5ab022434fe0b08a4c7244fa63e4~mv2.png/v1/crop/x_529,y_47,w_934,h_646/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Лей Без Лимитов</div>
                        </div>
                        <div className={Styles.cardContainer}>
                            <img src="https://static.wixstatic.com/media/1c47da_f5ac5ab022434fe0b08a4c7244fa63e4~mv2.png/v1/crop/x_529,y_47,w_934,h_646/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Высокие Ставки</div>
                        </div>
                        <div className={Styles.cardContainer}>
                            <img src="https://static.wixstatic.com/media/1c47da_f5ac5ab022434fe0b08a4c7244fa63e4~mv2.png/v1/crop/x_529,y_47,w_934,h_646/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Дружная Команда</div>
                        </div>
                    </div>
                    <div className={Styles.row}>
                        <div className={Styles.cardContainer}>
                            <img src="https://static.wixstatic.com/media/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png/v1/crop/x_537,y_48,w_927,h_640/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Лучшее качество траффика</div>
                        </div>
                        <div className={Styles.cardContainer}>
                            <img src="https://static.wixstatic.com/media/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png/v1/crop/x_537,y_48,w_927,h_640/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Лучшее качество траффика</div>
                        </div>
                        <div className={Styles.cardContainer}>
                            <img src="https://static.wixstatic.com/media/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png/v1/crop/x_537,y_48,w_927,h_640/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png" alt="Descriptive Alt Text" />
                            <div className={Styles.overlayText}>Лучшее качество траффика</div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default trafic;
