import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand"><h1>Home</h1></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/aschome" className="nav-link navbar-link">ASC home</Link>
          </li>
          <li className="nav-item">
            <Link to="/divhome" className="nav-link navbar-link">Division Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/unihome" className="nav-link navbar-link">Unit Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
