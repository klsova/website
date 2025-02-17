import React from 'react';
import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.png';
import discordLogo from '../../assets/discord.png';
import telegramLogo from '../../assets/telegram.png';
import KalleSova from '../../assets/KalleSova.png';
import Location from '../../assets/location-icon.png';
import './Main.css';

function Main() {
  return (
    <div className='main-container'>
      <div className='main'>
        <div className='main-text'>
          <h1>Kalle Sova</h1>
          <p className='subtitle'>3rd Year IT Student | Full Stack Enthusiast</p>
          <div className='location'>
            <img src={Location} alt='Location icon' className='location-icon' />
            <p>Turku, Finland</p>
          </div>
          <div className='logos'>
            <a href='https://www.linkedin.com/in/kalle-sova-5b4616292/' target='_blank' rel='noopener noreferrer'>
              <img src={linkedinLogo} alt='LinkedIn' className='logo' />
            </a>
            <a href='https://github.com/klsova' target='_blank' rel='noopener noreferrer'>
              <img src={githubLogo} alt='GitHub' className='logo' />
            </a>
            <a href='https://discord.com/users/250694116751572992'>
              <img src={discordLogo} alt='Discord' className='logo' />
            </a>
            <a href='https://t.me/kalleleonard'>
              <img src={telegramLogo} alt='Telegram' className='logo' />
            </a>
          </div>
        </div>
        <div className='profile-pic-container'>
        <img src={KalleSova} alt='Kalle Sova' className='profile-pic' />
        </div>
      </div>
    </div>
  );
}

export default Main;
