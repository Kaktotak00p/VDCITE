'use client'
import React, { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import Style from '../../public/Styles/tag.module.css';

const UserCountDisplay: React.FC = () => {
  // useState to store the counter value
  const [vlitoCounter, setVlitoCounter] = useState(0);

  // Using useEffect to ensure WebSocket is used client-side
  const { sendMessage, lastMessage } = useWebSocket('ws://164.132.200.91:3001', {
    onMessage: (e) => {
      const messageData = JSON.parse(e.data);
      if (messageData.vlitoCounter !== undefined) {
        setVlitoCounter(messageData.vlitoCounter);
      }
    }
  });

  return (
    <div className={Style.tagContainer}>
        <img src='/dec/DecorPlashka.png' className={Style.tag_bg} alt="Background" />
        <img className={Style.dec} src="/dec/logo/bibizyan.png" alt="Logo" />
        <h2 className={Style.overlayText}>FTD COUNT</h2>
        <p className={Style.overlayText}>{vlitoCounter}</p>
    </div>
  );
};

export default UserCountDisplay;

