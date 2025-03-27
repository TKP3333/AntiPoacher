import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";
import { FaBars, FaTimes, FaTree, FaChartLine, FaMapMarkedAlt, FaBell } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and title */}
        <Link to="/" className="navbar-logo">
          <FaTree className="logo-icon" /> Wildlife Dashboard
        </Link>

        {/* Navigation links */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <FaChartLine /> Dashboard
            </Link>
          </li>
          </ul>

        {/* Mobile menu button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
