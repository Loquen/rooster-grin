import React, { useState } from 'react';

const reviews = [
  {
    title: 'Jebidiah Jenkins 08/08/2019',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Oprah Winfrey 03/08/2020',
    body: 'Rhoncus eros nibh nostra aliquam volutpat dui fusce, integer luctus quis torquent rhoncus id feugiat, placerat dictumst tempus posuere taciti torquent nunc porttitor lectus viverra vulputate nec suspendisse dictumst sociosqu donec tortor sit porta.',
  },
  {
    title: 'Bill Murray 10/10/2019',
    body: 'Elementum mi pulvinar ut viverra scelerisque a vestibulum ullamcorper, et vestibulum integer nulla potenti dapibus aptent aliquam leo, dictum in potenti ligula aenean class eleifend orci tellus conubia scelerisque est adipiscing.',
  },
];

function Carousel(props) {
  const [activeReview, setActiveReview] = useState(0);

  const handleClick = (direction) => () => {
    console.log(activeReview + direction);

    const nextReview = activeReview + direction;

    if(nextReview >= 0 && nextReview < reviews.length){
      setActiveReview(nextReview);
    }
  }

  return (
    <div className='carousel'>
      <div className="carousel-slider">
        <div 
          className="carousel-arrow"
          onClick={handleClick(-1)}
        >
          {'<'}
        </div>
        <div className="carousel-content">
          <div className="carousel-title">
            {reviews[activeReview].title}
          </div>
          <div className="carousel-body">
            {reviews[activeReview].body}
          </div>
        </div>
        <div 
          className="carousel-arrow"
          onClick={handleClick(1)}
        >
          >
        </div>
      </div>
      <div className="selector-list">
        <div className="selector"></div>
        <div className="selector"></div>
        <div className="selector"></div>
      </div>
    </div>
  );
}

export default Carousel;