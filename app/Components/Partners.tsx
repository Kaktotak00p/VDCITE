import React from 'react';
import Styles from '../../public/Styles/partners.module.css';
import '../../public/Styles/globals.css';

const Partners = () => {
    return (
        <div className={Styles.outerConatiner}>
            <div className={Styles.mainContainer}>
                <h1>Партнеры</h1>
            </div>
            <div className={Styles.column}>
                <div className={`${Styles.imageContainer} ${Styles.row}`}>
                    {/* Each set now includes an outer frame image and an inner logo image */}
                    <div className={Styles.logoContainer}>
                        <img className={Styles.frameImage} src='./partners/elements/square(1).png' alt='Frame'></img>
                        <img className={Styles.logoImage} src='./partners/247.png' alt='Лого компаний'></img>
                    </div>
                    <div className={Styles.logoContainer}>
                        <img className={Styles.frameImage} src='./partners/elements/square(1).png' alt='Frame'></img>
                        <img className={Styles.logoImage} src='./partners/betman.png' alt='Лого компаний'></img>
                    </div>
                    <div className={Styles.logoContainer}>
                        <img className={Styles.frameImage} src='./partners/elements/square(1).png' alt='Frame'></img>
                        <img className={Styles.logoImage} src='./partners/chilli.png' alt='Лого компаний'></img>
                    </div>
                </div>
                <div className={`${Styles.imageContainer} ${Styles.row}`}>
                    {/* Each set now includes an outer frame image and an inner logo image */}
                    <div className={Styles.logoContainer}>
                        <img className={Styles.frameImage} src='./partners/elements/square(1).png' alt='Frame'></img>
                        <img className={Styles.logoImage} src='./partners/glory.png' alt='Лого компаний'></img>
                    </div>
                    <div className={Styles.logoContainer}>
                        <img className={Styles.frameImage} src='./partners/elements/square(1).png' alt='Frame'></img>
                        <img className={Styles.logoImage} src='./partners/mostb.png' alt='Лого компаний'></img>
                    </div>
                    <div className={Styles.logoContainer}>
                        <img className={Styles.frameImage} src='./partners/elements/square(1).png' alt='Frame'></img>
                        <img className={Styles.logoImage} src='./partners/mrbet.png' alt='Лого компаний'></img>
                    </div>
                    <div className={Styles.logoContainer}>
                        <img className={Styles.frameImage} src='./partners/elements/square(1).png' alt='Frame'></img>
                        <img className={Styles.logoImage} src='./partners/v.png' alt='Лого компаний'></img>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Partners;