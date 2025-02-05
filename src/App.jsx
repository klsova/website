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
      <header className='header'>
        <div className="dropdownmenu">
          <button className="ddbutton" onClick={toggleDropdown}>My portfolio</button>
          {dropdownOpen && (
          <div className="dropdown-content">
            <a href="https://github.com/klsova/civswipe">CivSwipe</a>
            <a href="https://github.com/klsova/plasettaja">Plasettaja</a>
            <a href="https://github.com/klsova/website">This site</a>
        </div>
        )}
        </div>
        </header>
        <main className="text-container">
          <p>Hello 👋 I'm</p>
          <section className='animation'>
            <div className='first'><div>Kalle</div></div>
            <div className='second'><div>Student</div></div>
            <div className='third'><div>Techie</div></div>
          </section>
          <div className="logo-container">
            <p>My socials:</p>
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
        </main>
    </>
  )
}

export default App
