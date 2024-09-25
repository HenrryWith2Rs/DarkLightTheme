// src/App.jsx
import React, { useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  // Update CSS variables based on the theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--text-color', '#000000');
    } else {
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--text-color', '#ffffff');
    }
  }, [theme]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}

export default App;
