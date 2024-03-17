import React from 'react';
import Style from '../../public/Styles/Landing.module.css';
import '../../public/Styles/globals.css';

const landing = () => {
return(
  <>
  <div className={Style.outerConatiner}>
  <div className={Style.mainContainer}>
  <div className={Style.textContainer}>
    <div className={Style.header}>TRAFFHUB</div>
    <h1>Медиабайинговая Компания</h1>
    <p>& Text text text Text Text text Text Text text</p>
    <div className={Style.footer}>
      <div className="tag">
        <span>[282 394]</span> ARBITRAGE TRAFFIC
      </div>
      <button className={Style.button}>[ CLICK, ПОСМОТРЕТЬ ]</button>
    </div>
  </div>
  <div className={Style.imageContainer}>
    <img src="https://static.wixstatic.com/media/1c47da_5eca29d8f0514b16aa529412e4f83674~mv2.png/v1/fill/w_585,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1c47da_5eca29d8f0514b16aa529412e4f83674~mv2.png" alt="Media Buying Company" />
  </div>
</div>
  </div>
</>
    )
};

export default landing;
