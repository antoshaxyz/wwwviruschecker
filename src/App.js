import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SiteMap from "./components/SiteMap";
import ScanPage from "./components/ScanPage";
import AboutTeam from "./components/AboutTeam";
import "./App.css";


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">
            <span className="logo-icon">🌀</span>
            <h1>CheckVirus</h1>
          </div>
          <nav className="menu">
            <Link to="/home">Home</Link>
            <Link to="/scan">Scan</Link>
            <Link to="/site-map">Site Map</Link>
            <Link to="/team">Our Team</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/site-map" element={<SiteMap />} />
          <Route path="/team" element={<AboutTeam />} />
        </Routes>

        <footer className="footer">
          <p>© 2024 CheckVirus. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
