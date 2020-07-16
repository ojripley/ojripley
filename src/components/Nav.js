import React, { useState, useEffect } from 'react';
import "./styles/nav.css";

import { motion, useViewportScroll } from 'framer-motion';

import NavLink from "./NavLink";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faAngleDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCheckSquare, faCoffee, faAngleDown);


export default function Nav(props) {
  const { scrollY } = useViewportScroll();
  // const [navTopOffset, setNavTopOffset] = useState(Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - scrollY.current);
  const [navTopOffset, setNavTopOffset] = useState('200em');
  const [positionType, setPositionType] = useState('absolute');
  const [borderRadius, setBorderRadius] = useState('0px');
  const [boxShadow, setBoxShadow] = useState('none');

  // const scrollDifference = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - scrollY.current;

  // const scroll = function () {
  //   const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  //   window.scrollTo(0, vh);
  // };

  return (
    <div className={'nav'}>
      <NavLink text={'profile'} address={'/'} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setPageClasses={props.setPageClasses}>
      </NavLink>
      <NavLink text={'about'} address={'/about'} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setPageClasses={props.setPageClasses}>
      </NavLink>
      <NavLink text={'projects'} address={'/projects'} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setPageClasses={props.setPageClasses}>
      </NavLink>
      <NavLink text={'tools'} address={'/tools'} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setPageClasses={props.setPageClasses}>
      </NavLink>
      <NavLink text={'learn'} address={'learn'} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} setPageClasses={props.setPageClasses}>
      </NavLink>
    </div>
  );
};