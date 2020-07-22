import React, { useEffect, useState } from 'react';

import Section from './Section';

import './styles/page.css';
import toolTablerIcons from '../images/tool_tabler_icons.png';
import toolCoolors from '../images/tool_coolors.png';
import toolFontAweseome from '../images/tool_font_awesome.png';
import toolUnsplash from '../images/tool_unsplash.png';
import toolFavicon from '../images/tool_favicon.png';
import toolSocket from '../images/tool_socket.png';
import toolPeerJS from '../images/tool_peer_js.png';

const pageContent = [
  {
    type: 'section',
    sectionHeader: 'Icons and Images',
    text: [
      {
        subheader: 'Font Awesome',
        paragraphs: ['"The web\'s most popular icon set." - You want it, they\'ve got it.'],
        link: 'https://www.fontawesome.com',
        img: toolFontAweseome
      },
      {
        subheader: 'Tabler Icons',
        paragraphs: ['A handmade collection of easy to use svg icons. Easy on the eyes and easier to use! Click to copy, and you\'re a paste away from visual candy.'],
        link: 'https://tablericons.com',
        img: toolTablerIcons
      },
      {
        subheader: 'Unsplash',
        paragraphs: ['A handmade collection of easy to use svg icons. Easy on the eyes and easier to use! Click to copy, and you\'re a paste away from visual candy.'],
        link: 'https://unsplash.com',
        img: toolUnsplash
      },
      {
        subheader: 'Favicon.io',
        paragraphs: [''],
        link: 'https://www.favicon.io',
        img: toolFavicon
      }
    ]
  },
  {
    type: 'section',
    sectionHeader: 'Libraries',
    text: [
      {
        subheader: 'Socket.io',
        paragraphs: [''],
        link: 'https://www.socket.io',
        img: toolSocket
      },
      {
        subheader: 'PeerJS',
        paragraphs: [''],
        link: 'https://peerjs.com/index.html',
        img: toolPeerJS
      }
    ]
  },
  {
    type: 'section',
    sectionHeader: 'Miscellaneous',
    text: [
      {
        subheader: 'Coolors.co',
        paragraphs: ['A handmade collection of easy to use svg icons. Easy on the eyes and easier to use! Click to copy, and you\'re a paste away from visual candy.'],
        link: 'https://coolors.co',
        img: toolCoolors
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
      <p className={'page-description'}>A collection of useful software development/design tools! Suggestions welcome.</p>
      <p className={'page-secondary-description'}>Disclaimer: I don't own any of these, nor did I contribute to any of these.</p>
      <p className='page-secondary-description'>If you find any of these tools useful, please consider donating to its creator.</p>
      <hr></hr>
      {contentComponents}
    </div>
  );
};