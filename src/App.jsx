import { useState } from 'react'
import linkedinLogo from './assets/linkedin.png'
import githubLogo from './assets/github.png'
import discordLogo from './assets/discord.png'
import telegramLogo from './assets/telegram.png'
import KalleSova from './assets/KalleSova.png'
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
      <main>
        <div className="text-container">
          <p>Hello 👋 I'm</p>
          <section className='animation'>
            <div className='first'><div>Kalle</div></div>
            <div className='second'><div>Student</div></div>
            <div className='third'><div>Techie</div></div>
          </section>
        </div>

        <div className='about-container'>
          <img src={KalleSova} alt="Kalle Sova" className='kalle' />
          <div id="about" class="about">
          <h1>About me</h1>
          <p>I am a third-year Information Technology student, an active student organization member, and the President of Digit ry. I have experience in such skills as team coordination, event planning, budgetary responsibility and broad communication skills.</p>
          <p>I have skills in Python, Java, JavaScript with a base knowledge in React and Express based applications. I also have skills in Photoshop and other artistic skills as well basic understanding of economics and business through my minor studies.</p>
          <p>My guild teammates see me as an happy and active team player who succeeds under guidance, but equally capable of taking the initiative as I become familiar with tasks and responsibilities.</p>
        </div>
        </div>
        <div className='ts-container'>
          <h1>My tech stack</h1>
          <div className='ts-grid'>
            <div className='ts-item' data-tech='Python'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            </div>
            <div className='ts-item' data-tech='Java'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
            </div>
            <div className='ts-item' data-tech='JavaScript'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </div>
            <div className='ts-item' data-tech='React'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            </div>
            <div className='ts-item' data-tech='Express'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
            </div>
            <div className='ts-item' data-tech='HTML'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            </div>
            <div className='ts-item' data-tech='CSS'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            </div>
            <div className='ts-item' data-tech='Photoshop'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" />
            </div>
          </div>
        </div>
        <div className='projects-container'>
          <h1>My projects</h1>
          <p> Under construction </p>
        </div>
        <div className='footer'>
          <p>© Kalle Sova 2025</p>
        </div>
      </main>
    </>
  )
}

export default App