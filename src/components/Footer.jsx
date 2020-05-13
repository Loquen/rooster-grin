import React from 'react';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='follow'>
        Follow Us:
      </div>
      <div className='social'>
        <img src='/instagram.svg' alt='Instagram'/>
        <img src='/facebook.svg' alt='Facebook'/>
      </div>
    </div>
  );
}

export default Footer;