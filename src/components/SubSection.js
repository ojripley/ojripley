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
    <Component className={'sub-section'} ref={ref} href={props.text.link ? props.text.link : null} >
      <div className={props.text.img ? 'image-title-container' : ''}>

        {props.text.img ? 
          <div className='sub-section-image-bracer'>
            <img src={props.text.img} className='sub-section-image' alt='Example of site.'></img>
          </div>
         : null}
        {props.text.subheader ?       
          <a className={`sub-section-header ${props.text.link ? 'sub-header-link' : ''}`} id={`${props.text.subheader.toLowerCase().replace(/\s|\.+/g, '')}-section`} href={props.text.link ? props.text.link : null} rel='noopener noreferrer' target='_blank'>
            {props.text.subheader}
            {props.text.link ? <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="13" y1="18" x2="19" y2="12" />
              <line x1="13" y1="6" x2="19" y2="12" />
            </svg> : null}
          </a> :
          null
        }
      </div>

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