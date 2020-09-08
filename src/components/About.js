import React, { useEffect, useState } from 'react';

import Section from './Section';

import './styles/page.css';

const pageContent = [
  {
    type: 'section',
    sectionHeader: 'Work Experience',
    text: [
      {
        subheader: 'Shoal App Inc.',
        paragraphs: ['Product Director / Lead Software Developer | April 2020 - Present', '-- Manages a team of contractors developing Shoal\'s product, a mobile app', '-- Developed and maintains the company\'s marketing website']
      },
      {
        subheader: 'Enbridge Inc.',
        paragraphs: ['Technical Documentation Specilist | May 2018 - September 2018', ' -- Constructed new documents and templates using Microsoft Excel and Visio', '-- Completed a 4 month document conversion project in half the estimated time']
      },
      {
        subheader: 'Chatham-Kent Recreation',
        paragraphs: ['Lifeguard and Swim Instructor | May 2014 - January 2019', ' -- Taught youth swimming lessons, competitive swim team, and senior aquafit', '-- Oversaw the training of recruit lifeguards']
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
        <p className={'page-description'}>A tech enthusiast with a background in computer science. I have interests in nature and technological innovation, and I look foward to building a future where they work in harmony!</p>
        </div>
        {/* <div className='title-spacer'></div> */}

        {/* <p className={'page-secondary-description'}></p> */}
        {/* <p className='page-secondary-description'>If you find any of these tools useful, please consider donating to its creator.</p> */}
        {/* <hr></hr> */}
        {contentComponents}
      </div>
    </>
  );
};