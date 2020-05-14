import React from 'react';

const featureItems = [
  {
    title: 'Lorem',
    img: '/home-expertise.svg'
  },
  {
    title: 'Lorem Ipsum',
    img: '/home-hygiene.svg'
  },
  {
    title: 'Lorem Ipsum',
    img: '/home-lab.svg'
  },
  {
    title: 'Lorem',
    img: '/home-retention.svg'
  },
]

function Features(props) {
  return (
    <div className='features'>
      {featureItems.map((item, idx) => 
        <div key={`${item.title}${idx}`} className="feature-item">
          <div className="feature-img">
            <img src={item.img} alt={item.title}/>
          </div>
          <div className="feature-title">
            {item.title}
          </div>
        </div>
      )}
    </div>
  );
}

export default Features;