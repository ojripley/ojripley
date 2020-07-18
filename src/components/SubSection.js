import React from 'react';

import useIntersect from '../hooks/useIntersect';

const Component = React.forwardRef((props, ref) => {
  return (<div {...props} ref={ref} />);
});

export default function SubSection(props) {
  const [ref, entry] = useIntersect({ threshold: Array.from(Array(10).keys(), i => i / 10) });

  // console.log(entry);

  if (props.text.subheader) {  
    if (entry.intersectionRatio > 0) {
      const element = document.querySelector(`#${props.text.subheader.toLowerCase().replace(/\s|\.+/g, '')}-director-label`);
      if (element) {
        element.classList.add('focused');
      }
    } else if (entry.intersectionRatio === 0) {
      const element = document.querySelector(`#${props.text.subheader.toLowerCase().replace(/\s|\.+/g, '')}-director-label`);
      if (element) {
        element.classList.remove('focused');
      }
    }
  }

  let paragraphComponents = null;

  if (props.text && props.text.paragraphs) {

    paragraphComponents = props.text.paragraphs.map((paragraph) => {
  
      return(
        <div className={'paragraph'}>
          {paragraph}
        </div>
      )
    });
  }

  return (
    <Component className={'sub-section'} ref={ref}>
      {props.text.subheader ?       
        <p className={'sub-section-header'} id={`${props.text.subheader.toLowerCase().replace(/\s|\.+/g, '')}-section`}>
          {props.text.subheader}
        </p> :
        null
      }

      {/* {props.text.paragraph ?
        <p className={'paragraph'}>
          {props.text.paragraph}
        </p> :
        null
      } */}

      {paragraphComponents}
    </Component>
  );
};