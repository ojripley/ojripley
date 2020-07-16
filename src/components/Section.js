import React from 'react';

import useIntersect from '../hooks/useIntersect';

import './styles/section.css';

const Component = React.forwardRef((props, ref) => {
  return (<div {...props} ref={ref} />);
});

export default function Section(props) {
  const [ref, entry] = useIntersect({ threshold: Array.from(Array(10).keys(), i => i / 10)});

  // console.log(entry);

  console.log(entry.intersectionRatio);

  let i = 0;
  const contentComponents = props.text.map((text) => {

    i++;

    if (text.subheader) {
      return (
        <div
          key={i}>
          <p className={'section-subheader'}>
            {text.subheader}
          </p>

          <p className={'section-paragraph'}>
            {text.paragraph}
          </p>

        </div>
      )
    } else {
      return (
        <div
          key={i}>
          <p className={'section-paragraph'}>
            {text.paragraph}
          </p>

        </div>
      )
    }

    // return null;
  });

  return(
    <Component className={'section'} id={'profile-section'} ref={ref}
    style={{
      backgroundColor: entry.intersectionRatio > 0.5 ? 'red' : 'blue'
    }}>
      <p className={'.section-header'}>
        {props.header}
      </p>
      {contentComponents}
    </Component>
  );
};