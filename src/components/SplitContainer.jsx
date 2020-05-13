import React from 'react';

import Content from './Content';
import Features from './Features';
import Carousel from './Carousel';

function SplitContainer({data, features, carousel}) {
  return (
    <div className='split-container'>
      <Content 
        title={data.title}
        body={data.body}
        link={data.link}
        stars={data.stars}
      />
      {features ? <Features/>
      : carousel ? <Carousel/>
      : <div className='img'>
          <img src='/img-1.jpg' alt='Friends Hiking'/>
        </div>
      }
    </div>
  );
}

export default SplitContainer;