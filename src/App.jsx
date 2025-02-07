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

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <header className='header'>
        <div className ='KS'>
          <p>KS.</p>
        </div>
        <div className='button-container'>
          <button className='aboutme-button' onClick={scrollToAbout}>About me</button>
          <button className='ddbutton' onClick={toggleDropdown}>My projects</button>
          {dropdownOpen && (
            <div className="dropdown-content">
            <a href="https://github.com/klsova/civswipe">CivSwipe</a>
            <a href="https://github.com/klsova/plasettaja">Plasettaja</a>
            <a href="https://github.com/klsova/pythonpeli">PythonPeli</a>
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

          <div id='about' className='about'>
            <h1>About me</h1>
            <p>I am a third-year Information Technology student, an active student organization member, and the President of Digit ry. I have experience in such skills as team coordination, event planning, budgetary responsibility and broad communication skills. I have skills in Python, Java, JavaScript with a base knowledge in React and Express based applications. I also have skills in Photoshop and other artistic skills as well basic understanding of economics and business through my minor studies. My guild teammates see me as an happy and active team player who succeeds under guidance, but equally capable of taking the initiative as I become familiar with tasks and responsibilities.</p>
          </div>
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
