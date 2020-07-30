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
        paragraphs: ['An extensive source of high quality images, submitted for free use.'],
        link: 'https://unsplash.com',
        img: toolUnsplash
      },
      {
        subheader: 'Favicon.io',
        paragraphs: ['Generates favicons from images, text, and emoji! Flexible and easy to use.'],
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
        paragraphs: ['Socket.io is my go-to for projects that require real time updating - this simple but effective API makes websockets easier than ever.'],
        link: 'https://www.socket.io',
        img: toolSocket
      },
      {
        subheader: 'PeerJS',
        paragraphs: ['Why build your own TURN/STUN server when you can use PeerJS!? Focus on the data transmission, and let PeerJS take care of brokering the P2P connection.'],
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
        paragraphs: ['A must-use for UI and graphic design creators. Easily create colour families and schemes by hand, from images, or randomized palettes!'],
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
      <p className={'page-secondary-description'}>I don't own any of these! If you find a useful resource, please consider donating to its creator.</p>
      {/* <p className='page-secondary-description'></p> */}
      <hr></hr>
      {contentComponents}
      </div>
  );
};