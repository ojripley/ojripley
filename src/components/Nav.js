import React, { useState, useEffect } from 'react';
import "./styles/nav.css";

import { motion, useViewportScroll } from 'framer-motion';

import NavLink from "./NavLink";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faAngleDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCheckSquare, faCoffee, faAngleDown);


export default function Nav(props) {
  return (
    <div className={'nav'}>
      {/* <div className='control-bar'>
        <div className='dark-mode-toggle'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#002539" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#002539" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
          </svg>
        </div>
      </div> */}
      <NavLink text={'profile'} address={'/'} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setPageClasses={props.setPageClasses} id={'nav-link-top'}>
      </NavLink>
      <NavLink text={'about'} address={'/about'} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setPageClasses={props.setPageClasses}>
      </NavLink>
      <NavLink text={'projects'} address={'/projects'} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setPageClasses={props.setPageClasses}>
      </NavLink>
      <NavLink text={'tools'} address={'/tools'} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setPageClasses={props.setPageClasses}>
      </NavLink>
      <NavLink text={'learn'} address={'learn'} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setPageClasses={props.setPageClasses} id={'nav-link-bottom'}>
      </NavLink>
    </div>
  );
};