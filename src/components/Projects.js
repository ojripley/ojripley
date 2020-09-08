import React, { useEffect, useState } from 'react';

import Section from './Section';

import './styles/page.css';

import projectInclementPi from '../images/project_inclement_pi.png';
import projectTheDrawingBoard from '../images/project_the_drawing_board.png';
import projectGrandfathersCoffeeTable from '../images/project_grandfathers_coffee_table.png';
import projectToJSX from '../images/project_to-jsx.png';

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
        paragraphs: ['A custom built weather monitoring station, powered by a Raspberry Pi outfitted with pressure, humidity and camera sensors.'],
        // link: 'https://www.fontawesome.com',
        secondaryLink: {
          link: 'https://www.github.com/ojripley/inclementpi',
          title: 'Github Repo',
          text: ''
        },
        img: projectInclementPi
      },
      {
        subheader: 'To-JSX',
        paragraphs: ['An easy to use tool that converts HTML to equivalent JSX syntax. Features coming soon: syntax highlighting, and JSX to HTML!'],
        link: 'https://tojsx.com',
        secondaryLink: {
          link: 'https://www.github.com/ojripley/to-jsx',
          title: 'Github Repo',
          text: ''
        },
        img: projectToJSX
      },
      {
        subheader: 'Grandfather\'s Coffee Table',
        paragraphs: ['A multiplayer card game hosting app. Sit at the table and play multiple various card games simultaneously - against real people!'],
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
      <p className={'page-description'}>A slowly growing list of things made by yours truly.</p>
      </div>
      {/* <div className='title-spacer'></div> */}
      {/* <p className={'page-secondary-description'}>Disclaimer: I don't own any of these, nor did I contribute to any of these.</p> */}
      {/* <p className='page-secondary-description'>If you find any of these tools useful, please consider donating to its creator.</p> */}
      {/* <hr></hr> */}
      {contentComponents}
    </div>
  );
};