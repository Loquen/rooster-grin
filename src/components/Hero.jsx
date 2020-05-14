import React from 'react';
import Navbar from './Navbar';

function Hero(props) {
  return (
    <div id='hero' className='hero'>
      <Navbar />
      <div className='hero-text'>
        <h1><span id='welcome'>Welcome To</span> Rooster Grin</h1>
        <button className='btn hero-btn'>Button Button</button>
      </div>
    </div>
  );
}

export default Hero;