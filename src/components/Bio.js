import React from 'react';

import './styles/bio.css';

import headshot from '../images/dapper_headshot.jpeg';

export default function Bio() {

  return(
    <div className='bio'>
      <img src={headshot} alt='headshot of Owen' className='headshot-img'></img>

      <div className='media-links'>
        <a href='https://www.instagram.com/ojripley' className='media-icon'>IG</a>
        <a href='https://www.instagram.com' className='media-icon'>GH</a>
        <a href='https://www.instagram.com' className='media-icon'>LI</a>
        <a href='https://www.instagram.com' className='media-icon'>IG</a>
      </div>
    </div>
  );
};