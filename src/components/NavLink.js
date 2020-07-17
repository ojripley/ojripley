import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavLink(props) {

  const handlePageSelect = () => {
    props.setCurrentPage(props.text);
  };

  return (
    <Link to={props.address} className={props.currentPage.toLowerCase() === props.text ? 'nav-link current-page' : 'nav-link'} onClick={() => handlePageSelect()}>
      <p className={'link-text'}>
        {props.text}
      </p>
      <div className={'highlight'}>
      </div>
    </Link>
  );
};