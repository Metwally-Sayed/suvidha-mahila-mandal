import React from 'react';
// import heroSectionImages from '../images/homepic.png';
import heroSectionCss from './Hero.module.css';
const Hero = () => {
  return (
    <div className={heroSectionCss.heroSection}>
      <div className={heroSectionCss.textSection}>
        <div className={heroSectionCss.box1}>
          <h1 className={heroSectionCss.heading}>CODING BOOTCAMP FOR KIDS</h1>
          <h3 className={heroSectionCss.h3_1}>BROUGHT TO YOU BY</h3>
          <a href="/" className={heroSectionCss.a}>
            MAIN WEBSITE LINK
          </a>
          <br />
        </div>
        <div className={heroSectionCss.box2}>
          <a href="/">REGISTER TODAY AND BOOK A FREE DEMO SESSION</a>
        </div>
        <div className={heroSectionCss.box3}>
          <h3>CODING IS THE NEW LITERACY</h3>
          <p>
            According to a research from NASA, the kids creativity is at its
            peak during this age i.e 6-16. “NOW” is the perfect time to
            introduce your kid to the coding culture .
          </p>
        </div>
      </div>
      <div className={heroSectionCss.imgSection}>
        {/* <img src={heroSectionImages} alt="heroSectionImage"></img> */}
      </div>
    </div>
  );
};

export default Hero;
