import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Interest from './pages/Interest';
import HomeLogged from './pages/HomeLogged';
import Product from './pages/Product';
import Search from './pages/Search';
import Checkout from './pages/Checkout';

import MyPage from './pages/MyPage';

import NotFound1 from './pages/NotFound1';
import NotFound2 from './pages/NotFound2';
import NotFound3 from './pages/NotFound3';
import NotFound4 from './pages/NotFound4';
import NotFound5 from './pages/NotFound5';


function App() {

  if (localStorage.getItem('login') == null) localStorage.setItem('login', false);
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/home" />
        <Route component={Register} path="/register" />
        <Route component={Interest} path="/tastes" />

        <Route component={HomeLogged} path="/home_logged" />
        <Route component={MyPage} path="/mypage" />
        <Route component={Product} path="/product" />
        <Route component={Search} path="/search" />
        <Route component={Checkout} path="/checkout" />

        <Route component={NotFound2} path="/page1" />
        <Route component={NotFound3} path="/page2" />
        <Route component={NotFound4} path="/page3" />
        <Route component={NotFound5} path="/page4" />

        <Route component={Login} path="/login" />

        <Route component={NotFound1} path="/" />

      </Switch>
    </Router>
  )
}

export default App
