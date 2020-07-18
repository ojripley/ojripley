import React from 'react';

import './styles/bio.css';

import headshot from '../images/dapper_headshot.jpeg';

export default function Bio() {

  return(
    <div className='bio'>
      <div className={'bio-image-container'}>
        <img src={headshot} alt='headshot of Owen' className='headshot-img'></img>
        <div className='media-links'>
          <a href="mailto:ojripley19@gmail.com" className='media-icon' target="_blank" and rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <p className='media-caption'>
              Email me!
            </p>
          </a>
          <a href='https://www.github.com/ojripley' className='media-icon' target="_blank" and rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
            <p className='media-caption'>
              Promise me you'll only look at the finished stuff
            </p>
          </a>
          <a href='https://www.instagram.com/ojripley' className='media-icon' target="_blank" and rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
            <p className='media-caption'>
              For the creeps &nbsp;&nbsp;: )
            </p>
          </a>
          <a href='https://www.paypal.me/ojripley' className='media-icon' target="_blank" and rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-paypal" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M10 13l2.538-.003c2.46 0 4.962-2.497 4.962-4.997 0-3-1.89-5-4.962-5H7c-.5 0-1 .5-1 1L4 18c0 .5.5 1 1 1h2.846L9 14c.089-.564.43-1 1-1zm7.467-5.837C19.204 8.153 20 10 20 12c0 2.467-2.54 4.505-5 4.505h.021-2.629l-.576 3.65a.998.998 0 01-.988.844l-2.712-.002a.5.5 0 01-.494-.578L7.846 19" />
            </svg>
            <p className='media-caption'>
              Like the site? Learn anything useful? Buy me a beer! Pay my rent!
            </p>
          </a>
      </div>

      </div>
      <p className='bio-image-caption'>Yes, the moustache is fake. Game on, facial recognition bots.</p>
      <hr className='bio-divide'></hr>
    </div>
  );
};