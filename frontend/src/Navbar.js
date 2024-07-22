import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/memories" className="nav-link">Memories</Link>
      <Link to="/future-plans" className="nav-link">Future Plans</Link>
    </div>
  );
};

export default Navbar;
