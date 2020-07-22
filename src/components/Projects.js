import React, { useEffect, useState } from 'react';

import Section from './Section';

import './styles/page.css';

import projectInclementPi from '../images/project_inclement_pi.png';
import projectTheDrawingBoard from '../images/project_the_drawing_board.png';
import projectGrandfathersCoffeeTable from '../images/project_grandfathers_coffee_table.png';

const pageContent = [
  {
    type: 'section',
    sectionHeader: 'Completed',
    text: [
      {
        subheader: 'The Drawing Board',
        paragraphs: ['A collaborative project, The Drawing Board is a meeting and document review technology that provides users with multiple communication modes in a single digital setting. Participants can use laser pointers, highlighters and pens on any uploaded digital document - and save for later. All while communicating with colleagues via a peer to peer voice chat.'],
        link: 'https://www.thedrawingboard.site',
        secondaryLink: {
          link: 'https://www.github.com/ojripley/thedrawingboard',
          title: 'Github Repo',
          text: ''
        },
        // tertiaryLink: {
        //   link: 'https://www.thedrawingboard.site',
        //   title: 'Live Site',
        //   text: ''
        // },
        img: projectTheDrawingBoard
      },
      {
        subheader: 'Inclement Pi',
        paragraphs: ['"The web\'s most popular icon set." - You want it, they\'ve got it.'],
        // link: 'https://www.fontawesome.com',
        secondaryLink: {
          link: 'https://www.github.com/ojripley/inclementpi',
          title: 'Github Repo',
          text: ''
        },
        img: projectInclementPi
      },
      {
        subheader: 'Grandfather\'s Coffee Table',
        paragraphs: ['Play cards!'],
        link: 'https://grandfatherscoffeetable.herokuapp.com/',
        secondaryLink: {
          link: 'https://www.github.com/ojripley/grandfatherscoffeetable',
          title: 'Github Repo',
          text: ''
        },
        // tertiaryLink: {
        //   link: 'https://grandfatherscoffeetable.herokuapp.com/',
        //   title: 'Live Site',
        //   text: ''
        // },
        img: projectGrandfathersCoffeeTable
      }
    ]
  },
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