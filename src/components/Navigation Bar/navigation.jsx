import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const navBar = () => (
  <header className="main-nav">
    <nav className="main-nav_logo">
      <NavLink to="/">Wasteless</NavLink>
    </nav>
    <nav className="main-nav_items">
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/info">Info</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default navBar;
