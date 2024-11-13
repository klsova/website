import { useState } from 'react'
import linkedinLogo from './assets/linkedin.png'
import githubLogo from './assets/github.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
          </div>
        </div>
    </>
  )
}

export default App
