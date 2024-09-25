// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h1>My Navbar</h1>
      <button onClick={toggleTheme} className="toggle-button">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
