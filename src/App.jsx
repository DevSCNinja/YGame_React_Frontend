import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Home from './pages/Home';
import HomeLogged from './pages/HomeLogged';
import Page1 from './pages/Page1';

import NotFound1 from './pages/NotFound1';
import NotFound2 from './pages/NotFound2';
import NotFound3 from './pages/NotFound3';
import NotFound4 from './pages/NotFound4';
import NotFound5 from './pages/NotFound5';

import LoginPage1 from './pages/Login/Page1';
import LoginPage2 from './pages/Login/Page2';
import LoginPage3 from './pages/Login/Page3';
import LoginPage4 from './pages/Login/Page4';
import LoginPage5 from './pages/Login/Page5';
import LoginPage6 from './pages/Login/Page6';


function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/home" />
        <Route component={HomeLogged} path="/home_logged" />
        <Route component={Page1} path="/page5" />

        <Route component={NotFound2} path="/page1" />
        <Route component={NotFound3} path="/page2" />
        <Route component={NotFound4} path="/page3" />
        <Route component={NotFound5} path="/page4" />

        <Route component={LoginPage1} path="/login/page1" />
        <Route component={LoginPage2} path="/login/page2" />
        <Route component={LoginPage3} path="/login/page3" />
        <Route component={LoginPage4} path="/login/page4" />
        <Route component={LoginPage5} path="/login/page5" />
        <Route component={LoginPage6} path="/login/page6" />

        <Route component={NotFound1} path="/" />
        
      </Switch>
    </Router>
  )
}

export default App
