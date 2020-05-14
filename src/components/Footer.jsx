import React from 'react';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='follow'>
        Follow Us:
      </div>
      <div className='social'>
        <a href="https://www.instagram.com">
          <img src='/instagram.svg' alt='Instagram'/>
        </a>
        <a href="https://www.facebook.com">
          <img src='/facebook.svg' alt='Facebook'/>
        </a>
      </div>
    </div>
  );
}

export default Footer;