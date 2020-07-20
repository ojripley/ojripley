import React, { useEffect, useState } from 'react';

import Section from './Section';

import './styles/page.css';

const pageContent = [
  {
    type: 'section',
    sectionHeader: 'Intro',
    text: [
      {
        subheader: null,
        paragraphs: ['Blah Blah Blah stuff about me']
      }
    ]
  },
  {
    type: 'section',
    sectionHeader: 'test',
    text: [
      {
        subheader: 'testing',
        paragraphs: ['testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing ']
      }
    ]
  }
];

export default function About(props) {
  const [classNames, setClassNames] = useState('page page-offscreen');

  useEffect(() => {
    props.setCurrentPage('ABOUT');
    setTimeout(() => {
      setClassNames('page');
    }, 100);
  });

  const setDirectorContent = props.setDirectorContent;
  useEffect(() => {
    const tempDirectorContent = [];
    for (let content of pageContent) {
      if (content.type === 'section') {
        if (content.sectionHeader) {
          tempDirectorContent.push({ sectionHeader: content.sectionHeader });
        }

        if (content.text) {
          for (let text of content.text) {
            if (text.subheader) {
              tempDirectorContent.push({ subheader: text.subheader });
            }
          }
        }
      }

    }

    setDirectorContent(tempDirectorContent);
  }, [setDirectorContent]);

    let i = 0;

    const contentComponents = pageContent.map((content) => {

      i++;

      if (content.type === 'section') {
        return (
          <Section 
            key={i}
            header={content.sectionHeader ? content.sectionHeader : null} 
            text={content.text ? content.text : null}>

          </Section>
        )
      }

      return null;
    });

  return (
    <>
      <div className={classNames}>
        <div className={'title-container'}>
          <p className={'page-title'}>ojripley.com/<span className={'title-emphasis'}>about</span></p>
        </div>
        <div className='title-spacer'></div>
        {contentComponents}
      </div>
    </>
  );
};