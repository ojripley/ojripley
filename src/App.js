// react imports
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// custom component imports
import Home from "./components/Home";
import InclementPi from "./components/InclementPi";
import DuckDuckDebug from "./components/DuckDuckDebug";

// styles import
import "./components/styles/app.css";

function App() {
  return (
    <Router>
      <main>
        <nav>
          {/* <ul>
            <li><Link to="/">ojripley/</Link></li>
            <li><Link to="/inclementpi">ojripley/inclementpi</Link></li>
            <li><Link to="/duckduckdebug">ojripley/duckduckdebug</Link></li>
          </ul> */}
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/inclementPi" component={InclementPi} />
          <Route path="/duckduckdebug" component={DuckDuckDebug} />
        </Switch>
      </main>
    </Router>
  );
}


export default App;
