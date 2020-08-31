import React from 'react';

import './styles/controlBar.css';

import headshot from '../images/dapper_headshot.jpeg';

export default function ControlBar() {

  return(
    <div className='control-bar'>
      <div className='profile-wrapping'>
        <div className='greeting-section'>
            <div className='greeting'>Hi, I'm <p className='greeting-emphasis'>Owen Ripley</p></div>
        </div>
        <div className='headshot-container'>
          <img src={headshot} alt='headshot of Owen' className='headshot-img'></img>
          <p className='bio-image-caption'>Yes, the moustache is fake.</p>
          <p className='bio-image-caption'> Game on, facial recognition bots.</p>
        </div>
      </div>
      <div className='control-section'>
        <div className='media-links'>
          <a href="mailto:ojripley19@gmail.com" className='media-icon' target="_blank" rel="noopener noreferrer">
            <p className='media-caption'>
              Let's chat!
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </a>
          <a href='https://www.github.com/ojripley' className='media-icon' target="_blank" rel="noopener noreferrer">
            <p className='media-caption'>
              Browse my projects
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </a>
          <a href='https://www.instagram.com/ojripley' className='media-icon' target="_blank" rel="noopener noreferrer">
            <p className='media-caption'>
              My life outside coding
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </a>
          <a href='https://www.paypal.me/ojripley' className='media-icon' target="_blank" rel="noopener noreferrer">
            <p className='media-caption'>
              Buy me a coffee!
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-paypal" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M10 13l2.538-.003c2.46 0 4.962-2.497 4.962-4.997 0-3-1.89-5-4.962-5H7c-.5 0-1 .5-1 1L4 18c0 .5.5 1 1 1h2.846L9 14c.089-.564.43-1 1-1zm7.467-5.837C19.204 8.153 20 10 20 12c0 2.467-2.54 4.505-5 4.505h.021-2.629l-.576 3.65a.998.998 0 01-.988.844l-2.712-.002a.5.5 0 01-.494-.578L7.846 19" />
            </svg>
          </a>
          {/* <a href='https://www.paypal.me/ojripley' className='media-icon' target="_blank" rel="noopener noreferrer">
            <p className='media-caption'>
              Scan to open on phone
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-qrcode" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="4" y="4" width="6" height="6" rx="1" />
              <line x1="7" y1="17" x2="7" y2="17.01" />
              <rect x="14" y="4" width="6" height="6" rx="1" />
              <line x1="7" y1="7" x2="7" y2="7.01" />
              <rect x="4" y="14" width="6" height="6" rx="1" />
              <line x1="17" y1="7" x2="17" y2="7.01" />
              <line x1="14" y1="14" x2="17" y2="14" />
              <line x1="20" y1="14" x2="20" y2="14.01" />
              <line x1="14" y1="14" x2="14" y2="17" />
              <line x1="14" y1="20" x2="17" y2="20" />
              <line x1="17" y1="17" x2="20" y2="17" />
              <line x1="20" y1="17" x2="20" y2="20" />
            </svg>
          </a> */}
        </div>

        {/* <div className='site-controls'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
          </svg>
        </div> */}
      </div>
    </div>
  );
}