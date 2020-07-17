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
        paragraph: 'A tech enthusiast with a background in computer science, passionate for innovation who believes any problem can be solved and every solution optimized.'
      }
    ]
  },
  {
    type: 'section',
    sectionHeader: 'Hobbies',
    text: [
      {
        subheader: 'Running',
        paragraph: 'I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! '
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
      <p className={'page-title'}>ojripley.com/about</p>
      {contentComponents}
    </div>
  );
};