import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './recycle.svg';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
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

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <p>About Wasteless:</p>
      </header>
    </div>
  );
}

export default App;
