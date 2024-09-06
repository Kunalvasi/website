import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = () => {
    navigate("/signup"); // Navigates to the Signup page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="C:\Users\hp\Downloads\prabhupadalogo.png" alt="Logo" />
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <input
            type="text"
            className="navbar-search"
            placeholder="Search..."
          />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/eBook">e-Book</Link>
        </li>
        <li>
          <Link to="/orderprasadam">Order Prasadam</Link>
        </li>
        <li>
          <Link to="announcement">Anouncement</Link>
        </li>
      </ul>
      <button className="navbar-cta" onClick={handleNavigate}>
        Sign Up
      </button>
      <div
        className={`navbar-hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
