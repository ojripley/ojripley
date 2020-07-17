import React from 'react';

import './styles/bio.css';

import headshot from '../images/dapper_headshot.jpeg';

export default function Bio() {

  return(
    <div className='bio'>
      <img src={headshot} alt='headshot of Owen' className='headshot-img'></img>

      <div className='media-links'>
        <a href='https://www.instagram.com/ojripley' className='media-icon' target="_blank" and rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
        <a href='https://www.github.com/ojripley' className='media-icon' target="_blank" and rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
          </svg>
        </a>
        <a href='https://www.instagram.com' className='media-icon' target="_blank" and rel="noopener noreferrer">LI</a>
        <a href='https://www.instagram.com' className='media-icon' target="_blank" and rel="noopener noreferrer">IG</a>
      </div>
    </div>
  );
};