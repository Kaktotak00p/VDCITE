'use client'
import React from 'react';
import useWebSocket from 'react-use-websocket';
import Style from '../../public/Styles/tag.module.css';

const UserCountDisplay: React.FC = () => {
  const { lastJsonMessage } = useWebSocket('ws://localhost:3001');

  return (
    <div className={Style.tagContainer}>
        <img src='./dec/DecorPlashka.png' className={Style.tag_bg}></img>
        <h2 className={Style.overlayText}>ARBITRAGE TRAFFIC</h2>
        {/* <p className={Style.overlayText}>{lastJsonMessage?.vlitoCounter ?? 0}</p> */}
    </div>
  );
};

export default UserCountDisplay;
