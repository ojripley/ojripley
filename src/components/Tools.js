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
        paragraphs: ['A tech enthusiast with a background in computer science, passionate for innovation who believes any problem can be solved and every solution optimized.']
      }
    ]
  },
  {
    type: 'section',
    sectionHeader: 'Libraries',
    text: [
      {
        subheader: 'socket.io',
        paragraphs: ['I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! I love to run! ']
      },
      {
        subHeader: 'Guitar',
        paragraphs: ['Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away Over the Hills and Far Away ']
      },
      {
        subheader: null,
        paragraphs: ['elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke elementary backstroke ']
      },
      {
        subheader: null,
        paragraphs: ['Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! Machu Picchu! Peru! ']
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
      <p className={'page-description'}>A collection of useful tools I use while developing. I don't claim ownership of these, and do my best to give credit where credit is due! Suggested additions are welcome.</p>
      <hr></hr>
      {contentComponents}
    </div>
  );
};