import React from 'react';
import '../../public/Styles/Traffic.css';
import '../../public/Styles/globals.css';
import CardGreen from '../pictures/CardGreenShort.png'

const trafic: React.FC = () => {
    return (
        <div className='outerConatiner'>
            <div className="mainContainer">
                <h1>НАШИ ПРЕИМУЩЕСТВА</h1>
            </div>
                <div className='cardsContainer'>
                    <div className='row'>
                        <div className="cardContainer">
                            <img src="https://static.wixstatic.com/media/1c47da_f5ac5ab022434fe0b08a4c7244fa63e4~mv2.png/v1/crop/x_529,y_47,w_934,h_646/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <div className="overlayText">Лей Без Лимитов</div>
                        </div>
                        <div className="cardContainer">
                            <img src="https://static.wixstatic.com/media/1c47da_f5ac5ab022434fe0b08a4c7244fa63e4~mv2.png/v1/crop/x_529,y_47,w_934,h_646/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <div className="overlayText">Высокие Ставки</div>
                        </div>
                        <div className="cardContainer">
                            <img src="https://static.wixstatic.com/media/1c47da_f5ac5ab022434fe0b08a4c7244fa63e4~mv2.png/v1/crop/x_529,y_47,w_934,h_646/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/CardGreenShort.png" alt="Descriptive Alt Text" />
                            <div className="overlayText">Дружная Команда</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="cardContainer">
                            <img src="https://static.wixstatic.com/media/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png/v1/crop/x_537,y_48,w_927,h_640/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png" alt="Descriptive Alt Text" />
                            <div className="overlayText">Лучшее качество траффика</div>
                        </div>
                        <div className="cardContainer">
                            <img src="https://static.wixstatic.com/media/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png/v1/crop/x_537,y_48,w_927,h_640/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png" alt="Descriptive Alt Text" />
                            <div className="overlayText">Лучшее качество траффика</div>
                        </div>
                        <div className="cardContainer">
                            <img src="https://static.wixstatic.com/media/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png/v1/crop/x_537,y_48,w_927,h_640/fill/w_266,h_184,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1c47da_da1fa0146f2840778079e0c67afffadc~mv2.png" alt="Descriptive Alt Text" />
                            <div className="overlayText">Лучшее качество траффика</div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default trafic;
