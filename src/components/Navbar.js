import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light navbar-fixed-top">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-controls="navbarNav"
        aria-expanded={isExpanded}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon white-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <form className="search-form">
          <input
            type="text"
            placeholder="Search for a movie"
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
