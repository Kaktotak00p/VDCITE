'use client'
import React, { useEffect, useState } from 'react';
import Style from '../../public/Styles/tag.module.css';

const UserCountDisplay: React.FC = () => {
  const [vlitoCounter, setVlitoCounter] = useState(0);

  // Fetch vlitoCounter from the server API
  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const response = await fetch(`http://127.1.2.99:3000/api/counter`);
        console.log(`http://${process.env.HOST}:${process.env.port}/api/counter`);
        const data = await response.json();
        setVlitoCounter(data.vlitoCounter);
      } catch (error) {
        console.error('Failed to fetch vlitoCounter', error);
      }
    };

    fetchCounter();
    const interval = setInterval(fetchCounter, 3000); // Poll every 3000 milliseconds (3 seconds)
    return () => clearInterval(interval);
  }, []);

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
