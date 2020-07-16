import React from 'react';

export default function Director(props) {

  let directorContentComponents = null;

  console.log(props.directorContent);

  if (props.directorContent) {
    let i = 0;
    directorContentComponents = props.directorContent.map((data) => {
      i++;

      if (data.sectionHeader) {
        return (
          <div key={i}>{data.sectionHeader}</div>
        )
      } else if (data.subheader) {
        return (
          <div key={i}>{data.subheader}</div>
        )
      }
  
      return null;
    });
  }

  return (
    <>
      {directorContentComponents}
    </>
  );
};