import * as React from 'react';
import './App.css';

/* About Page */
function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="aboutPage">About Wasteless:</h3>
        {/* who are we? */}
        <p className="aboutPage">
          Wasteless is a mobile application designed and developed by students at UCI.
        </p>
        {/* what this app about  */}

        <h3 className="aboutPage">Our Mission: </h3>
        <p className="aboutPage">
          This project started out as an interest in environmental sustainability.
          <br />
          We wanted to create something that would help users find recycling locations
          <br />
          so that they could reduce their overall waste.
        </p>

        {/* team members + pictures */}
        <p>pictures</p>

        {/* contact */}
        <p>contact info:</p>
      </header>
    </div>
  );
}

export default About;
