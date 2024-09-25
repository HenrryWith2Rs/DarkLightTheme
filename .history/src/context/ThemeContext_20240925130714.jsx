// src/context/ThemeContext.jsx
import { useState, createContext } from 'react';

// Create a context with default value 'dark'
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
};
