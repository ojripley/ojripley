import React, { useEffect, useState } from 'react';

import Section from './Section';

import './styles/page.css';

const pageContent = [
  // {
  //   type: 'section',
  //   sectionHeader: 'Icons and Images',
  //   text: [
  //     {
  //       subheader: 'Font Awesome',
  //       paragraphs: ['"The web\'s most popular icon set." - You want it, they\'ve got it.'],
  //       link: 'https://www.fontawesome.com',
  //       img: toolFontAweseome
  //     },
  //   ]
  // },
];

export default function Projects(props) {
  const [classNames, setClassNames] = useState('page page-offscreen');

  useEffect(() => {
    props.setCurrentPage('PROJECTS');
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
          console.log('sec header');
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
    <div className={classNames}>
      <div className={'title-container'}>
        <p className={'page-title'}>ojripley.com/<span className={'title-emphasis'}>projects</span></p>
      </div>
      <div className='title-spacer'></div>
      <p className={'page-description'}>A slowly growing list of things made by yours truly.</p>
      {/* <p className={'page-secondary-description'}>Disclaimer: I don't own any of these, nor did I contribute to any of these.</p> */}
      {/* <p className='page-secondary-description'>If you find any of these tools useful, please consider donating to its creator.</p> */}
      <hr></hr>
      {contentComponents}
    </div>
  );
};