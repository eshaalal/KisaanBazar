import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = ({ isAuthenticated }) => {
  console.log('Is authenticated:', isAuthenticated); // Add this line for debugging

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Website Logo" />
        <h1>KisaanBazar</h1>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/gallery-video">Gallery & Video</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        {isAuthenticated ? (
          <li><Link to="/profile">Profile</Link></li>
        ) : (
          <li><Link to="/signup-login">Signup/Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;