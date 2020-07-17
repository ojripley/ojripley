import React from 'react';

import './styles/director.css';

export default function Director(props) {

  let directorContentComponents = null;

  console.log(props.directorContent);

  if (props.directorContent) {
    let i = 0;
    directorContentComponents = props.directorContent.map((data) => {
      i++;

      if (data.sectionHeader) {
        return (
          <div key={i} id={`${data.sectionHeader.toLowerCase()}-director-label`} className={'director-label label-header'}>{data.sectionHeader}</div>
        )
      } else if (data.subheader) {
        return (
          <div key={i} id={`${data.subheader.toLowerCase()}-director-label`} className={'director-label label-subheader'}>{data.subheader}</div>
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