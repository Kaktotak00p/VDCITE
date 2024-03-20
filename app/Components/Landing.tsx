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
    </div>
  </div>
  <div className={Style.imageContainer}>
    <img src="./partners/elements/makakich.png" alt="Media Buying Company" />
    <div className={Style.column}>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis, cumque nam sit unde velit delectus nobis enim voluptatum consequuntur.</p>
      <button className={Style.button}>[ CLICK, ПОСМОТРЕТЬ ]</button>
    </div>
  </div>
</div>
  </div>
</>
    )
};

export default landing;
