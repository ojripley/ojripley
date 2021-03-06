import React from 'react';

import SubSection from './SubSection';

import useIntersect from '../hooks/useIntersect';

const Component = React.forwardRef((props, ref) => {
  return (<div {...props} ref={ref} />);
});

export default function Section(props) {
  const [ref, entry] = useIntersect({ threshold: Array.from(Array(10).keys(), i => i / 10)});

  if (props.header) {
    if (entry.intersectionRatio > 0) {
      const element = document.querySelector(`#${props.header.toLowerCase().replace(/\s|\.|'+/g, '')}-director-label`);
      if (element) {
        element.classList.add('focused');
      }
    } else if (entry.intersectionRatio === 0) {
      const element = document.querySelector(`#${props.header.toLowerCase().replace(/\s|\.|'+/g, '')}-director-label`);
      if (element) {
        element.classList.remove('focused');
      }
    }
  }

  let i = 0;
  const contentComponents = props.text.map((text) => {

    i++;

    if (text) {
      // console.log(text);
      return (

        <SubSection
          text={text}
          key={i}
        >

        </SubSection>
      )
    } 
    // else {
    //   return (
    //     <div
    //       key={i}>
    //       <p className={'paragraph'}>
    //         {text.paragraph}
    //       </p>

    //     </div>
    //   )
    // }

    return null;
  });

  return(
    <Component className={'section'} ref={ref} id={`${props.header.toLowerCase().replace(/\s|\.|'+/g, '')}-section`}>
      {props.header ?       
        <p className={`section-header`} >
          {props.header}
        </p>
      : null}

      {contentComponents}

      {/* <p className='section-close-bracket'>{`}`}</p> */}
      <p className='section-close-bracket'>&nbsp;&nbsp;&nbsp;</p>
    </Component>
  );
};