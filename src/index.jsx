import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'leaflet/dist/leaflet.css';
import NavBar from './components/Navigation Bar/navigation';
import Map from './components/Map/Map';
import Info from './App';
import About from './About';
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <>
      <NavBar />
      <main className="content">
        <Routes>
          <Route exact path="/" element={<Map />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  </BrowserRouter>,
  document.getElementById('root'),
);
