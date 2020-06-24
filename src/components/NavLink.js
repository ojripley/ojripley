import React, { useState, useEffect } from 'react';

export default function NavLink(props) {

  const handleScrollToElement = function() {

    const element = document.querySelector(`#${props.text}-section`);

    if (element && element.getBoundingClientRect) {
      window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY);
    }
  };

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