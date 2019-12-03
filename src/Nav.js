import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';



import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function Nav() {
  return (

      <nav>
          <ul>
            <li><img id="logo" src={logo} alt="logo" /></li>
            <li><a href="/">Home</a></li>
            <li><a href="/tablas">Tabla</a></li>
            <li><a href="/fixture">Fixture</a></li>
          </ul>
      </nav>

  );
}

export default Nav;