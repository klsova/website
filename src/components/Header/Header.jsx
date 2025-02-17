import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import themeicon from '../../assets/theme-icon.png';
import './Header.css';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = (event) => {
    const newTheme = event.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className='header'>
      <div className='theme-switch-wrapper'>
        <label className="theme-switch" htmlFor="theme-switch-checkbox">
          <input type="checkbox" id="theme-switch-checkbox" onChange={handleThemeChange} checked={theme === 'dark'} />
          <div className="slider round">
            <img src={themeicon} alt="Theme" className="theme-icon" />
          </div>
        </label>
      </div>
      <div className='button-container'>
        <Link to="/" className='home-button'>Home</Link>
        <Link to="/about" className='aboutme-button'>About me</Link>
        <button className='ddbutton' onClick={() => setDropdownOpen(!dropdownOpen)}>My projects</button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <a href="https://github.com/klsova/civswipe">CivSwipe</a>
            <a href="https://github.com/klsova/plasettaja">Plasettaja</a>
            <a href="https://github.com/klsova/filer">Filer</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;