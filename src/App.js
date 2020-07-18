// react imports
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// custom component imports
import Home from "./components/Home";
import Director from './components/Director';
import Bio from './components/Bio';
import About from './components/About';
import Tools from './components/Tools';

import Nav from "./components/Nav";

// styles import
import "./components/styles/app.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faAngleDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCheckSquare, faCoffee, faAngleDown);

function App() {
  const profile = 'profile';
  const about = 'ABOUT';
  const projects = 'PROJECTS';
  const tools = 'TOOLS';
  const learn = 'LEARN';

  const [currentPage, setCurrentPage] = useState(profile);
  const [pageSections, setPageSections] = useState([]);
  const [visibleSections, setVisibleSections] = useState([]);
  const [pageClasses, setPageClasses] = useState('page page-offscreen');
  const [directorContent, setDirectorContent] = useState([]);

  const scroll = function () {
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    window.scrollTo(0, vh);
  };

  return (
    <main className='app'>
      <Router>
          <Route
            path="/"
            render={() => (
              <Home setCurrentPage={setCurrentPage} setPageClasses={setPageClasses}></Home>
            )}
          />

          <Route
            path="/about"
            render={() => (
              <About setCurrentPage={setCurrentPage} pageClasses={pageClasses} currentPage={currentPage} setPageClasses={setPageClasses} setDirectorContent={setDirectorContent}></About>
            )}
          />

          <Route
            path="/tools"
            render={() => (
              <Tools setCurrentPage={setCurrentPage} pageClasses={pageClasses} currentPage={currentPage} setPageClasses={setPageClasses} setDirectorContent={setDirectorContent}></Tools>
            )}
          />
          
          <div className={currentPage === profile ? 'nav-wrapper' : 'nav-wrapper sideline'}>
            <div className={'nav-appendage'}>
            {currentPage === profile ? <Bio></Bio> : <Director directorContent={directorContent}></Director>}
            </div>
            <Nav setCurrentPage={setCurrentPage} currentPage={currentPage} setPageClasses={setPageClasses}></Nav>
          </div>
      </Router>
      <div className='dat-gap'></div>
    </main>
  );
}



export default App;