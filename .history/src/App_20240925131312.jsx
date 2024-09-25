// src/App.jsx
import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <main>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}

export default App;
