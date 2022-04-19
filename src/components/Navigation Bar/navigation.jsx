import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const navBar = () => (
  <header className="main-nav">
    <div className="main-nav_logo">
      <h1> Wasteless</h1>
    </div>
    <nav className="main-nav_items">
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/info">Info</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
          props
        </li>
      </ul>
    </nav>
  </header>
);

export default navBar;
