import React from 'react';

import './styles/bio.css';

import headshot from '../images/dapper_headshot.jpeg';

export default function Bio() {

  return(
    <div className='bio'>
      
      <hr className='bio-divide'></hr>
      <div className='bio-text-section'>
        <p className='bio-text-1'></p>
        <p className='bio-text-1'>Developer!</p>
        <p className='bio-text-1'>Developer!</p>
      </div>
    </div>
  );
};