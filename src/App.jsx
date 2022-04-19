import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

function Info() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
    </div>
  );
}

export default Info;
