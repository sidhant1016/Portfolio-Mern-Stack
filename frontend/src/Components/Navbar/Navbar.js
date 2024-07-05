import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Portfolio</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
        <li><Link to="/about"><i className="fas fa-user"></i> About</Link></li>
        <li><a href="https://www.linkedin.com/in/sidhant-gagrani-07b816208/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
        <li><a href="https://github.com/sidhant1016" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a></li>
        <li><Link to="/project"><i className="fas fa-project-diagram"></i> Project</Link></li>
        <li><Link to="/contact"><i className="fas fa-envelope"></i> Contact</Link></li>
        <li><a href="https://tomato-isis-66.tiiny.site/" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-alt"></i> Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
