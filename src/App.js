// react imports
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

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
              <div className='page-container'>

                <About setCurrentPage={setCurrentPage} pageClasses={pageClasses} currentPage={currentPage} setPageClasses={setPageClasses} setDirectorContent={setDirectorContent}></About>
                <div className='dat-gap'></div>
              </div>
            )}
          />

          <Route
            path="/tools"
            render={() => (
              <Tools setCurrentPage={setCurrentPage} pageClasses={pageClasses} currentPage={currentPage} setPageClasses={setPageClasses} setDirectorContent={setDirectorContent}></Tools>
            )}
          />

        <Route
          path="/projects"
          render={() => (
            <Projects setCurrentPage={setCurrentPage} pageClasses={pageClasses} currentPage={currentPage} setPageClasses={setPageClasses} setDirectorContent={setDirectorContent}></Projects>
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