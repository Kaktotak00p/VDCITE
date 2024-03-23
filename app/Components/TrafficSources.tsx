import React from 'react';
import Styles from '../../public/Styles/trafSources.module.css';
import '../../public/Styles/globals.css';

const TrafSources: React.FC = () => {
    return (
        <div className={Styles.outerContainer}>
            <div className={Styles.row}>
            <h1 className='mainText' style={{paddingLeft:"3em"}}>://TrafficSources</h1>
            <img src='./dec/skull (2).png' style={{
                width:"auto",
                height:"2em"
            }}></img>
            </div>
            <div className={Styles.mainContainer}>
                <h1>Источники Траффика</h1>
            </div>
            <div className={`${Styles.imageContainer} ${Styles.row}`}>
                {/* Each set now includes an outer frame image and an inner logo image */}
                <div className={Styles.logoContainer}>
                    <img className={Styles.frameImage} src='./partners/elements/square(3).png' alt='Frame'></img>
                    <img className={Styles.logoImage} src='./partners/elements/tt.png' alt='Лого компаний'></img>
                </div>
                <div className={Styles.logoContainer}>
                    <img className={Styles.frameImage} src='./partners/elements/square(3).png' alt='Frame'></img>
                    <img className={Styles.logoImage} src='./partners/elements/fb.png' alt='Лого компаний'></img>
                </div>
                <div className={Styles.logoContainer}>
                    <img className={Styles.frameImage} src='./partners/elements/square(3).png' alt='Frame'></img>
                    <img className={Styles.logoImage} src='./partners/elements/google.png' alt='Лого компаний'></img>
                </div>
            </div>
        </div>
    );
};

export default TrafSources;
