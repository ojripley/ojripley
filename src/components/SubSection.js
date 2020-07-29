import React from 'react';

import useIntersect from '../hooks/useIntersect';

const Component = React.forwardRef((props, ref) => {
  return (<div {...props} ref={ref} />);
});

export default function SubSection(props) {
  const [ref, entry] = useIntersect({ threshold: Array.from(Array(10).keys(), i => i / 10) });
  
  // const focusImage = (id) => {
  //   const image = document.querySelector(`#${id}`);
  //   const icon = document.querySelector(`#${ props.text.subheader.toLowerCase().replace(/\s|\.|'+/g, '') }-close-icon`);

  //   icon.classList.add('visible-close');

  //   image.classList.add('focused-image');
  // }
  

  // console.log(entry);

  if (props.text.subheader) {  
    if (entry.intersectionRatio > 0) {
      const element = document.querySelector(`#${props.text.subheader.toLowerCase().replace(/\s|\.|'+/g, '')}-director-label`);
      if (element) {
        element.classList.add('focused');
      }
    } else if (entry.intersectionRatio === 0) {
      const element = document.querySelector(`#${props.text.subheader.toLowerCase().replace(/\s|\.|'+/g, '')}-director-label`);
      if (element) {
        element.classList.remove('focused');
      }
    }
  }

  let paragraphComponents = null;

  if (props.text && props.text.paragraphs) {

    let i = 0;
    paragraphComponents = props.text.paragraphs.map((paragraph) => {
  
      i++;
      return(
        <div className={'paragraph'} key={i}>
          {paragraph}
        </div>
      )
    });
  }

  return (
    <Component className={'sub-section'} ref={ref} href={props.text.link ? props.text.link : null} >
      <div className={props.text.img ? 'image-title-container' : ''}>

        {props.text.img ? 
          <>
            <div className='sub-section-image-bracer'>
              <img src={props.text.img} className='sub-section-image' alt='Example of site.' id={`${props.text.subheader.toLowerCase().replace(/\s|\.|'+/g, '')}-image`} onClick={() => focusImage(`${props.text.subheader.toLowerCase().replace(/\s|\.|'+/g, '')}-image`)}></img>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-arrows-minimize" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff0000" fill="none" stroke-linecap="round" stroke-linejoin="round" id={`${props.text.subheader.toLowerCase().replace(/\s|\.|'+/g, '')}-close-icon`}>
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="5 9 9 9 9 5" />
              <line x1="3" y1="3" x2="9" y2="9" />
              <polyline points="5 15 9 15 9 19" />
              <line x1="3" y1="21" x2="9" y2="15" />
              <polyline points="19 9 15 9 15 5" />
              <line x1="15" y1="9" x2="21" y2="3" />
              <polyline points="19 15 15 15 15 19" />
              <line x1="15" y1="15" x2="21" y2="21" />
            </svg>
          </>
         : null}
         <div className='sub-section-link-container'>

          {props.text.subheader ?       
            <a className={`sub-section-header ${props.text.link ? 'sub-header-link' : ''}`} id={`${props.text.subheader.toLowerCase().replace(/\s|\.|'+/g, '')}-section`} href={props.text.link ? props.text.link : null} rel='noopener noreferrer' target='_blank'>
              {props.text.subheader}
              {props.text.link ? 
              
              // <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              //   <path stroke="none" d="M0 0h24v24H0z" />
              //   <line x1="5" y1="12" x2="19" y2="12" />
              //   <line x1="13" y1="18" x2="19" y2="12" />
              //   <line x1="13" y1="6" x2="19" y2="12" />
              // </svg>

                // <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-forward" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                //   <path stroke="none" d="M0 0h24v24H0z" />
                //   <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                // </svg>

                // <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-corner-down-right" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                //   <path stroke="none" d="M0 0h24v24H0z" />
                //   <path d="M6 6v6a3 3 0 0 0 3 3h10l-5 -5m0 10l5 -5" />
                // </svg>

                // <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-right" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                //   <path stroke="none" d="M0 0h24v24H0z" />
                //   <line x1="20" y1="12" x2="10" y2="12" />
                //   <line x1="20" y1="12" x2="16" y2="16" />
                //   <line x1="20" y1="12" x2="16" y2="8" />
                //   <line x1="4" y1="4" x2="4" y2="20" />
                // </svg>

                // <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                //   <path stroke="none" d="M0 0h24v24H0z" />
                //   <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                //   <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                // </svg>

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right-circle" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="16" y1="12" x2="8" y2="12" />
                  <line x1="16" y1="12" x2="12" y2="16" />
                  <line x1="16" y1="12" x2="12" y2="8" />
                </svg>
              
              : null}
            </a> :
            null
          }
          {props.text.secondaryLink ?
            <a className='sub-section-secondary-link' href={props.text.secondaryLink.link} rel='noopener noreferrer' target='_blank'>
              {props.text.secondaryLink.title}
              {props.text.secondaryLink.text ? `: ${props.text.secondaryLink.text}` : null}
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                <line x1="10" y1="14" x2="20" y2="4" />
                <polyline points="15 4 20 4 20 9" />
              </svg> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <line x1="16" y1="12" x2="8" y2="12" />
                <line x1="16" y1="12" x2="12" y2="16" />
                <line x1="16" y1="12" x2="12" y2="8" />
              </svg>
            </a> :
            null
          }

          {props.text.tertiaryLink ?
            <a className='sub-section-secondary-link' href={props.text.tertiaryLink.link} rel='noopener noreferrer' target='_blank'>
              {props.text.tertiaryLink.title}
              {props.text.tertiaryLink.text ? `: ${props.text.tertiaryLink.text}` : null}
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                <line x1="10" y1="14" x2="20" y2="4" />
                <polyline points="15 4 20 4 20 9" />
              </svg>
            </a> :
            null
          }
         </div>
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