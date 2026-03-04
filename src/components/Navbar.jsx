import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Shanruck Technologies
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-links ${isActive('/')}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-links ${isActive('/about')}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/programs"
              className={`nav-links ${isActive('/programs')}`}
              onClick={closeMenu}
            >
              Programs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/learners"
              className={`nav-links ${isActive('/learners')}`}
              onClick={closeMenu}
            >
              Learners
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-links ${isActive('/contact')}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links enquiry-btn"
              onClick={closeMenu}
            >
              Enquiry
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
