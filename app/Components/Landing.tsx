import React from 'react';
import Style from '../../public/Styles/Landing.module.css';
import '../../public/Styles/globals.css';
import UserCountDisplay from './reactivetag';

const landing = () => {
  return (
    <>
      <div className={Style.outerConatiner}>
        <div className={Style.mainContainer}>
            <div className={`${Style.header} mainText`}>TRAFFHUB</div>
          <div className={Style.footer}>
            <UserCountDisplay />
          </div>
          <div className={Style.textContainer}>
            <h1 style={{textAlign:"right"}}>Медиабайинговая </h1>
            <h1>Компания</h1>
            <p>& Text text text Text Text text Text Text text</p>
          </div>
          <div className={Style.imageContainer}>
            <img src="./partners/elements/makakich.png" alt="Media Buying Company" />
            <div className={Style.column}>
              <div className={Style.row}>
                <h1 className='mainText'>://</h1>
                <img src="./dec/flower_nobg (4).png" style={{
                  height: '2em',
                  width: 'auto'
                }}></img>
              </div>
              <p style={{textAlign:"center"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className={Style.button}>[CLICK,ПОСМОТРЕТЬ]</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default landing;
