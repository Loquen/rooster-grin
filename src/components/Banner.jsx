import React from 'react';

function Banner({data}) {
  return (
    <div className={`banner ${data.align}`}>
      <div className="content">
        <div className='title'>
          <h1>{data.title}</h1>
        </div>
        <div className="body">
          {data.body}
        </div>
        <button className='btn'>
          Button Button
        </button>
      </div>
    </div>
  );
}

export default Banner;