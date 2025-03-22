import React from 'react';
import './Hero.css';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';
import hero3 from '../../assets/hero3.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>
          Where Timeless Beauty Comes <span>Ali<span id="white-color">ve</span></span>
        </h1>
      </div>
      <div className="hero-right">
        <div className="img-grid">
          <div className="img-1">
            <p>Explore Our Collection <span style={{ fontSize: "18px" }}>→</span></p>
            <img src={hero1} alt="" />
          </div>
          <div className="img-2">
            <img src={hero2} alt="" />
          </div>
          <div className="img-3">
            <img src={hero3} alt="" />
            <p>A shining bright star in the dark night sky. This exclusive collection of diamond & precious gem jewelry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;