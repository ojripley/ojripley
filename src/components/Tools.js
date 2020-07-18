import React, { useEffect, useState } from 'react';

import Section from './Section';

import './styles/page.css';

const pageContent = [
  {
    type: 'section',
    sectionHeader: 'Icons',
    text: [
      {
        subheader: 'Font Awesome',
        paragraphs: ['"The web\'s most popular icon set."', 'A massive library of icons. You want it, they\'ve got it.']
      },
      {
        subheader: 'Tabler Icons',
        paragraphs: ['A handmade collection of easy to use svg icons. Easy on the eyes and easier to use! Click to copy, and you\'re a paste away from visual candy.']
      }
    ]
  },
  {
    type: 'section',
    sectionHeader: 'Libraries',
    text: [
      {
        subheader: 'Socket.io',
        paragraphs: ['I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! ']
      },
      {
        subheader: 'PeerJS',
        paragraphs: ['Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away ', 'elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke ']
      }
    ]
  },
  {
    type: 'section',
    sectionHeader: 'Miscellaneous',
    text: [
      {
        subheader: 'testing',
        paragraphs: ['I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! ', 'testing testing test test testing test testing testing test test testing test testing testing test test testing test testing testing test test testing test testing testing test test testing test testing testing test test testing test testing testing test test testing test testing testing test test testing test testing testing test test testing test ']
      },
      {
        subheader: 'Coolors.co',
        paragraphs: ['hehehfhfe', 'eiofjiejfeifj']
      },
      {
        subheader: 'Favicon.io',
        paragraphs: ['']
      }
    ]
  }
];

export default function Tools(props) {
  const [classNames, setClassNames] = useState('page page-offscreen');

  useEffect(() => {
    props.setCurrentPage('TOOLS');
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
        <p className={'page-title'}>ojripley.com/<span className={'title-emphasis'}>tools</span></p>
      </div>
      <div className='title-spacer'></div>
      <p className={'page-description'}>A collection of useful software development/design tools! Suggested additions welcome.</p>
      <p className={'page-secondary-description'}>Note - I don't own any of these, and do my best to give credit where credit is due.</p>
      <hr></hr>
      {contentComponents}
    </div>
  );
};