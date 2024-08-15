// Navbar.js
import React, { useState } from "react";
import logo from "./assets/image.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} className="logo-img" />
        </a>
      </div>
      <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <p>x</p>
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
