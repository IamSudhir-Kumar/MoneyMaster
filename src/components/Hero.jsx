import React from 'react';
import VedioBg from '../assets/VedioBg.mp4';
import './Hero.css';

function Hero() {
  return (
    <div className="video">
      <video src={VedioBg} autoPlay loop muted />
      <div className="text-overlay">
        <h1>Welcome to My Website</h1>
        <p>Some additional text or content here</p>
      </div>
    </div>
  );
}

export default Hero;
