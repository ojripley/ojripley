import React from 'react';

import './styles/director.css';

export default function Director(props) {

  const handleScrollToElement = function (identifier) {

    console.log('looking for ' + identifier);

    const element = document.querySelector(`#${identifier}-section`);

    console.log(element);

    if (element && element.getBoundingClientRect) {
      window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY - 20);
    }
  };

  let directorContentComponents = null;

  if (props.directorContent) {
    let i = 0;
    directorContentComponents = props.directorContent.map((data) => {
      i++;

      if (data.sectionHeader) {
        return (
          <div key={i} id={`${data.sectionHeader.toLowerCase()}-director-label`} className={'director-label label-header'} onClick={() => handleScrollToElement(`${data.sectionHeader.toLowerCase()}`)}>{data.sectionHeader}</div>
        )
      } else if (data.subheader) {
        return (
          <div key={i} id={`${data.subheader.toLowerCase()}-director-label`} className={'director-label label-subheader'} onClick={() => handleScrollToElement(`${data.subheader.toLowerCase()}`)}>{data.subheader}</div>
        )
      }
  
      return null;
    });
  }

  return (
    <div className={'director'}>
      {directorContentComponents}
    </div>
  );
};