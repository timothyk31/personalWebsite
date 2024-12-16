import React from 'react';
import { Link } from 'react-router-dom';
import '../component-styles/navbar.css';

const Navbar = () => {
    return (
      <div className="input">
        <Link className="value" to="/">
          Home
        </Link>
        <Link className="value" to="/experience">
          Experience
        </Link>
        <Link className="value" to="/projects">
          Projects
        </Link>
        <Link className="value" to="/about">  
          About
        </Link>
      </div>
    );
};

export default Navbar;