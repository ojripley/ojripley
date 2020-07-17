import React from 'react';

import useIntersect from '../hooks/useIntersect';

const Component = React.forwardRef((props, ref) => {
  return (<div {...props} ref={ref} />);
});

export default function SubSection(props) {

  console.log(props);
  const [ref, entry] = useIntersect({ threshold: Array.from(Array(10).keys(), i => i / 10) });

  // console.log(entry);

  console.log(entry.intersectionRatio);

  if (entry.intersectionRatio > 0.3) {
    const element = document.querySelector(`#${props.text.subheader.toLowerCase()}-director-label`);
    if (element) {
      element.classList.add('focused');
    }
  } else if (entry.intersectionRatio < 0.3) {
    const element = document.querySelector(`#${props.text.subheader.toLowerCase()}-director-label`);
    if (element) {
      element.classList.remove('focused');
    }
  }

  return (
    <Component className={'sub-section'} id={'profile-section'} ref={ref}>
      <p className={'sub-section-header'}>
        {props.text.subheader}
      </p>
      <p className={'paragraph'}>
        {props.text.paragraph}
      </p>
    </Component>
  );
};