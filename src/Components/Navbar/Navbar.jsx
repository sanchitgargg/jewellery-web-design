import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import red_square from '../../assets/red_square.png';
import user from '../../assets/user.png';
import heart from '../../assets/heart.png';
import cart from '../../assets/cart.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="announcement-bar">
        <p>This year, we're getting into art - shop tanvi antique</p>
      </div>
      <div className="navbar-section">
        <div className="nav-left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-middle ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>New Arrivals</li>
            <li>Tanvi Antique</li>
            <li>Tamanna Pearls</li>
            <li>Innayat</li>
            <li>Aabhushan</li>
            <li>Matti</li>
            <li>Our Story</li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="search-container">
            <input type="search" name="search-bar" placeholder="Search..." />
            <img src={search} alt="Search" className="search-icon" />
          </div>
          <div className="img-container">
            <img src={red_square} alt="Red Square" id="red-square" />
            <img src={user} alt="User" id="user" />
            <img src={heart} alt="Heart" id="heart" />
            <img src={cart} alt="Cart" id="cart" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;