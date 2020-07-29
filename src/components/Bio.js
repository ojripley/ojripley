import React from 'react';

import './styles/bio.css';

import headshot from '../images/dapper_headshot.jpeg';

export default function Bio() {

  return(
    <div className='bio'>
      
      {/* <hr className='bio-divide'></hr> */}
      <div className='bio-text-section'>
        <p className='bio-header'>Who am I?</p>
        {/* <p className='bio-text'>&nbsp;&nbsp;&nbsp;&nbsp; Software Developer. &nbsp;&nbsp;&nbsp;&nbsp; Runner. &nbsp;&nbsp;&nbsp;&nbsp; Presser of Buttons. &nbsp;&nbsp;&nbsp;&nbsp; Freshwater Surfer. &nbsp;&nbsp;&nbsp;&nbsp;</p> */}
        <p className='bio-text'>Software Developer. Distance Runner. Sailor, Surfer. Presser of Buttons.</p>
        {/* <p className='bio-text'>Distance Runner.</p>
        <p className='bio-text'>Sailor, Surfer.</p>
        <p className='bio-text'>Presser of Buttons.</p>*/}
        <p className='bio-header'>Okay, but seriously...</p>
        <p className='bio-text'>I am a fullstack software developer, based out of <span className='bio-text-emphasized'>Toronto, Ontario</span>. I like discovering the unknown, spending time outdoors, reading books and having enough phone battery to roll to the other side of the bed.</p>
        <p className='bio-header'>What can I do?</p>
        <p className='bio-text'>I develop websites, build databases and construct APIs. My ever-expanding tech stack includes <span className='bio-text-emphasized'>ReactJS</span>, <span className='bio-text-emphasized'>PostgreSQL</span>, <span className='bio-text-emphasized'>Express</span>, <span className='bio-text-emphasized'>Python</span>, and <span className='bio-text-emphasized'>Node-sass</span>.</p>
        <p className='bio-text'>I'm looking for work! Send me an email and let's get started.</p>
      </div>
    </div>
  );
};