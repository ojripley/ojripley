import React, { useState, useEffect } from 'react';
import "./styles/nav.css";

import { motion, useViewportScroll } from 'framer-motion';

import NavLink from "./NavLink";

export default function Nav(props) {
  const { scrollY } = useViewportScroll();
  // const [navTopOffset, setNavTopOffset] = useState(Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - scrollY.current);
  const [navTopOffset, setNavTopOffset] = useState('200em');
  const [positionType, setPositionType] = useState('absolute');
  const [borderRadius, setBorderRadius] = useState('0px');

  const scrollDifference = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - scrollY.current;

  scrollY.onChange(() => {

    // console.log(scrollY.current);

    const scrollDifference = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - scrollY.current;

    // console.log(scrollY.current);
    // console.log(scrollDifference);

    if (scrollDifference < 70) {
      setNavTopOffset(70);
      setPositionType('fixed');
      setBorderRadius('5px');
    } else {
      setNavTopOffset('20em');
      setPositionType('relative');
      setBorderRadius('0px');
    }
  });

  return (
    <motion.div className={'nav-container'}
      style={{
        top: navTopOffset,
        position: positionType,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius
      }}>
      <NavLink text={'profile'}>
      </NavLink>
      <NavLink text={'projects'}>
      </NavLink>
      <NavLink text={'contact'}>
      </NavLink>
    </motion.div>
  );
};