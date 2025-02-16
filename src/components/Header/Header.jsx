import React, { useState } from 'react';
import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.png';
import discordLogo from '../../assets/discord.png';
import telegramLogo from '../../assets/telegram.png';
import themeicon from '../../assets/theme-icon.png';
import './Header.css';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleThemeChange = (event) => {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <header className='header'>
      <div className='theme-switch-wrapper'>
        <label className="theme-switch" htmlFor="theme-switch-checkbox">
          <input type="checkbox" id="theme-switch-checkbox" onChange={handleThemeChange} />
          <div className="slider round">
            <img src={themeicon} alt="Theme" className="theme-icon" />
          </div>
        </label>
      </div>
      <div className='KS'>
        <p>KS.</p>
      </div>
      <div className='button-container'>
        <button className='aboutme-button' onClick={scrollToAbout}>About me</button>
        <button className='ddbutton' onClick={toggleDropdown}>My projects</button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <a href="https://github.com/klsova/civswipe">CivSwipe</a>
            <a href="https://github.com/klsova/plasettaja">Plasettaja</a>
            <a href="https://github.com/klsova/filer">Filer</a>
          </div>
        )}
      </div>
      <div className="logo-container">
        <div className='logos'>
          <a href="https://www.linkedin.com/in/kalle-sova-5b4616292/" target='_blank' rel='noopener noreferrer'>
            <img src={linkedinLogo} alt="LinkedIn" className='logo' />
          </a>
          <a href="https://github.com/klsova" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className='logo' />
          </a>
          <a href="https://discord.com/users/250694116751572992">
            <img src={discordLogo} alt="Discord" className='logo' />
          </a>
          <a href="https://t.me/kalleleonard">
            <img src={telegramLogo} alt="Telegram" className='logo' />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;