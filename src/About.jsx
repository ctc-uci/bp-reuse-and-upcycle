import * as React from 'react';
import './About.css';
import logo from './logo.svg';

/* About Page */
function About() {
  return (
    <div className="about-div">
      <header className="about-header">
        <h3 className="about-h3">About Wasteless:</h3>
        {/* who are we? */}
        <p className="about-p">
          Wasteless is a mobile application designed and developed by students at UCI.
        </p>
        {/* what this app about  */}

        <h3 className="about-h3">Our Mission:</h3>
        <p className="about-p">
          This project started out as an interest in environmental sustainability.
          <br />
          We wanted to create something that would help users find recycling locations
          <br />
          so that they could reduce their overall waste.
        </p>

        <h2 className="about-meet"> Meet the Team</h2>

        <h1 className="about-team"> Meet the team!</h1>

        {/* Team members */}
        <h3 className="about-h3">Team Members:</h3>
        <p className="about-p">Dang Nguyen, Ethan So, Mazen Ghosn, Juhi Patel</p>
      </header>
      <img src={logo} className="app-logo" alt="logo" />
    </div>
  );
}

export default About;
