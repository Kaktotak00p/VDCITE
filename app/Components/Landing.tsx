import React from 'react';
import Style from '../../public/Styles/Landing.module.css';
import '../../public/Styles/globals.css';
import UserCountDisplay from './reactivetag';

const landing = () => {
  return (
    <>
      <div className={Style.outerConatiner}>
        <div className={Style.mainContainer}>
          <div className={Style.footer}>
            <UserCountDisplay />
          </div>
          <div className={Style.textContainer}>
            <h1 style={{textAlign:"right"}}>МЕДИАБАИНГОВАЯ </h1>
            <h1 className={Style.company}>КОМПАНИЯ</h1>
            <p className={Style.descr}>& Text text text Text Text text Text Text text</p>
          </div>
          <div className={Style.imageContainer}>
            <img style={{
              marginBottom:"-2em",
              width:"40em",
            }} src="./partners/elements/makakich.png" alt="Media Buying Company" />
            <div className={Style.column}>
              <div className={Style.row} style={{
                justifySelf:"left"
              }}>
                <h1 className='mainText'>://</h1>
                <img src="./dec/flower_nobg (4).png" style={{
                  height: '2em',
                  width: '2em',
                  minWidth:"0%"
                }}></img>
              </div>
              <p className={Style.descr} style={{textAlign:"left"
              }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className={Style.button}>[CLICK,ПОСМОТРЕТЬ]</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default landing;
