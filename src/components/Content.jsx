import React from 'react';

function Content({title, body, link, stars}) {
  return (
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <div className='body'>
        {body}
      </div>
      <div className='link'>
        <a href='#'>> {link}</a>
      </div>
      {stars ? 
        <div className='stars'></div>
        : null
      }
    </div>
  );
}

export default Content;