import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import Nav from './Nav.js';
import Home from './Home.js';
import Tablas from './Tablas.js';
import Fixture from './Fixture.js';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/tablas" exact component={Tablas}/>
          <Route path="/fixture" exact component={Fixture}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;