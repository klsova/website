import { useState } from 'react'
import linkedinLogo from './assets/linkedin.png'
import githubLogo from './assets/github.png'
import discordLogo from './assets/discord.png'
import telegramLogo from './assets/telegram.png'
import './App.css'

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <>
      <h1>Kalle Sova</h1>
        <p>
          3. vuoden tietotekniikan opiskelija sekä järjestöaktiivi
        </p>
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
        <div className="dropdownmenu">
          <button className="ddbutton" onClick={toggleDropdown}>My porftolio</button>
          {dropdownOpen && (
          <div className="dropdown-content">
            <a href="https://junction2024-zeta.vercel.app/">CivSwipe</a>
            <a href="https://github.com/klsova/plasettaja">Plasettaja</a>
            <a href="#project3">Project 3</a>
        </div>
        )}
      </div>
    </>
  )
}

export default App
