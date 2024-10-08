import React from 'react';
import './Circle.css';

const Circle = ({ number, title1, title2 }) => {
  return (
    <div className='circle-container'>
      <h2>{ title1 }</h2>
      <div className='circle'>
        { number }
      </div>
      <h2>{ title2 }</h2>
    </div>
  )
}

export default Circle