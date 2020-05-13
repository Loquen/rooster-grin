import React from 'react';
import Navbar from './Navbar';

function Hero(props) {
  return (
    <div className='hero'>
      <Navbar />
      <div className="hero-text">
        <h1><span id='welcome'>Welcome To</span> Rooster Grin</h1>
        <button class='btn hero-btn'>Button Button</button>
      </div>
    </div>
  );
}

export default Hero;