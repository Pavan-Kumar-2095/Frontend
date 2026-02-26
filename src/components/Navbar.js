import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const storedValue = sessionStorage.getItem("username");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav'>
      {/* Logo on the left */}
      <div className='logo'>
        <h1 className='logor'>Global Insight</h1>
      </div>

      {/* Hamburger menu on right (mobile only) */}
      <div className='hamburger' onClick={toggleMenu}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>

      {/* Links Section */}
      <div className={`option ${isOpen ? 'open' : ''}`}>
        <Link to='/' className='links'>HOME</Link>
        <Link to='/news' className='links'>NEWS</Link>
        <Link to='/add' className='links'>ADD</Link>
        <Link to='/delete' className='links'>DELETE</Link>
        <Link to='/' className='links'>{storedValue}</Link>
      </div>
    </div>
);
}