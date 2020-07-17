import React from 'react';

import SubSection from './SubSection';

import useIntersect from '../hooks/useIntersect';

const Component = React.forwardRef((props, ref) => {
  return (<div {...props} ref={ref} />);
});

export default function Section(props) {
  const [ref, entry] = useIntersect({ threshold: Array.from(Array(10).keys(), i => i / 10)});

  // console.log(entry);

  console.log(entry.intersectionRatio);

  if (entry.intersectionRatio > 0) {
    const element = document.querySelector(`#${props.header.toLowerCase()}-director-label`);
    if (element) {
      element.classList.add('focused');
    }
  } else if (entry.intersectionRatio === 0) {
    const element = document.querySelector(`#${props.header.toLowerCase()}-director-label`);
    if (element) {
      element.classList.remove('focused');
    }
  }

  let i = 0;
  const contentComponents = props.text.map((text) => {

    i++;

    if (text.subheader) {
      return (

        <SubSection text={text}>

        </SubSection>
      )
    } else {
      return (
        <div
          key={i}>
          <p className={'paragraph'}>
            {text.paragraph}
          </p>

        </div>
      )
    }

    // return null;
  });

  return(
    <Component className={'section'} ref={ref}>
      <p className={`section-header`} id={`${props.header.toLowerCase()}-section`}>
        {props.header}
      </p>
      {contentComponents}
    </Component>
  );
};