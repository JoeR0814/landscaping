import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>
        <div className="nav-icon" onClick={toggleMenu}>
          <div className="nav-icon-bar"></div>
          <div className="nav-icon-bar"></div>
          <div className="nav-icon-bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
