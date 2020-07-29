// react imports
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

// custom component imports
import Director from './components/Director';
import Bio from './components/Bio';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';
import ControlBar from './components/ControlBar';

import Nav from "./components/Nav";

// styles import
import "./components/styles/app.css";

function App() {
  const profile = 'profile';
  // const about = 'ABOUT';
  // const projects = 'PROJECTS';
  // const tools = 'TOOLS';
  // const learn = 'LEARN';

  const [currentPage, setCurrentPage] = useState(profile);
  const [pageClasses, setPageClasses] = useState('page page-offscreen');
  const [directorContent, setDirectorContent] = useState([]);

  useEffect(() => {    
    if (currentPage === 'profile') {
      const bioText = document.querySelector('.bio-text-section');
      setTimeout(() => {
        bioText.classList.add('bio-text-section-visible');
      }, 200);
    }
  }, [currentPage]);

  return (
    <main className='app'>
      <Router>
          <Route
            path="/"
            render={() => (
              // <Home setCurrentPage={setCurrentPage} setPageClasses={setPageClasses}></Home>
              <></>
            )}
          />

          <Route
            path="/about"
            render={() => (
              <>
                <Link to='/profile' className='menu-button' onClick={() => setCurrentPage('profile')}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#002539" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="9" y1="6" x2="20" y2="6" />
                    <line x1="9" y1="12" x2="20" y2="12" />
                    <line x1="9" y1="18" x2="20" y2="18" />
                    <line x1="5" y1="6" x2="5" y2="6.01" />
                    <line x1="5" y1="12" x2="5" y2="12.01" />
                    <line x1="5" y1="18" x2="5" y2="18.01" />
                  </svg>
                </Link>
                <About setCurrentPage={setCurrentPage} pageClasses={pageClasses} currentPage={currentPage} setPageClasses={setPageClasses} setDirectorContent={setDirectorContent}></About>
                <div className='dat-gap'></div>
              </>
            )}
          />

          <Route
            path="/tools"
            render={() => (
              <>
                <Link to='/profile' className='menu-button' onClick={() => setCurrentPage('profile')}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#002539" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="9" y1="6" x2="20" y2="6" />
                    <line x1="9" y1="12" x2="20" y2="12" />
                    <line x1="9" y1="18" x2="20" y2="18" />
                    <line x1="5" y1="6" x2="5" y2="6.01" />
                    <line x1="5" y1="12" x2="5" y2="12.01" />
                    <line x1="5" y1="18" x2="5" y2="18.01" />
                  </svg>
              </Link>
                <Tools setCurrentPage={setCurrentPage} pageClasses={pageClasses} currentPage={currentPage} setPageClasses={setPageClasses} setDirectorContent={setDirectorContent}></Tools>
              </>
            )}
          />

        <Route
          path="/projects"
          render={() => (
            <>
              <Link to='/profile' className='menu-button' onClick={() => setCurrentPage('profile')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#002539" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="9" y1="6" x2="20" y2="6" />
                  <line x1="9" y1="12" x2="20" y2="12" />
                  <line x1="9" y1="18" x2="20" y2="18" />
                  <line x1="5" y1="6" x2="5" y2="6.01" />
                  <line x1="5" y1="12" x2="5" y2="12.01" />
                  <line x1="5" y1="18" x2="5" y2="18.01" />
                </svg>
              </Link>
            <Projects setCurrentPage={setCurrentPage} pageClasses={pageClasses} currentPage={currentPage} setPageClasses={setPageClasses} setDirectorContent={setDirectorContent}></Projects>
            </>
          )}
        />
          <div className={currentPage === profile ? 'nav-wrapper' : 'nav-wrapper sideline'}>
            <ControlBar></ControlBar>
            <div className='nav-container-2'>

              <div className={'nav-appendage'}>
                {currentPage === profile ? <Bio></Bio> : <Director directorContent={directorContent}></Director>}
              </div>
              <Nav setCurrentPage={setCurrentPage} currentPage={currentPage} setPageClasses={setPageClasses}></Nav>

            </div>
          </div>
      </Router>
      <div className='dat-gap'></div>
    </main>
  );
}



export default App;