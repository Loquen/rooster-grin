import React from 'react';

function Content({title, body, link, stars}) {
  return (
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <div className='body'>
        {body}
      </div>
      {link ? 
        <div className='link'>
          <a href='#'>> {link}</a>
        </div>
        : null
      }
      {stars ? 
        <div className='stars'>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        : null
      }
    </div>
  );
}

export default Content;