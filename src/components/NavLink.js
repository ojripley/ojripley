import React, { useState, useEffect } from 'react';

export default function NavLink(props) {

  const handleScrollToElement = function() {
    // const tesNode = ReactDOM.findDOMNode(this.refs.test)
    // if (some_logic) {
    //   window.scrollTo(0, tesNode.offsetTop);
    // }

    console.log(`.${props.text}-section`)

    const element = document.querySelector(`.${props.text}-section`);

    console.log(element.getBoundingClientRect().top + window.scrollY);
    
    window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY);
  }

  return (
    <div className={'nav-link'} onClick={handleScrollToElement}>
      <div className={'highlight'}>
      </div>
      <p className={'link-text'}>
        {props.text}
      </p>
    </div>
  );
};