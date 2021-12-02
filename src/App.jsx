import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import NotFound1 from './pages/NotFound1';
import NotFound2 from './pages/NotFound2';
import NotFound3 from './pages/NotFound3';
import NotFound4 from './pages/NotFound4';
import NotFound5 from './pages/NotFound5';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/home" />

        <Route component={NotFound2} path="/page1" />
        <Route component={NotFound3} path="/page2" />
        <Route component={NotFound4} path="/page3" />
        <Route component={NotFound5} path="/page4" />

        <Route component={NotFound1} path="/" />
        
      </Switch>
    </Router>
  )
}

export default App
