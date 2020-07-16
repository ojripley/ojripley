import React, {useState, useEffect, forwardRef} from 'react';

import Section from './Section';

import "./styles/home.css";
import mast from '../images/austin-walker-78Dvwo_7xt4-unsplash.jpg';
import { useViewportScroll } from "framer-motion";
// import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';
library.add(faCheckSquare, faCoffee, faAngleDown);


export default function Home(props) {

  return(
    <>
    <div className={'home'}>
      {/* <img className={'title-image'} src={mast} alt={'Sail mast and blue sky.'}></img>

      <div className={'title-section'}>
        <h1>
          - Owen J. Ripley -
        </h1>

        {/* <Nav></Nav> */}
        {/* <div className={'scroll-button'} onClick={() => scroll()}>
            <FontAwesomeIcon icon="angle-down" className={'scroll-down-arrow'}/>
        </div> */}
      {/* </div> */}

      {/* <Section className={'section'} id={'about-section'} content={'PROFILE GOES HERE'} >
      </Section> */}
    </div>
    </>
  )
};