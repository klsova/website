import React from 'react';
import './About.css';
import KalleSova from '../../assets/KalleSova.png';
import Location from '../../assets/location-icon.png';

function About() {
  return (
    <div className='about-container'>
      <img src={KalleSova} alt="Kalle Sova" className='kalle' />
      <div id="about" class="about">
        <h1>Kalle Sova</h1>
        <div className='location'>
          <img src={Location} alt="location-icon" className='location-icon'/>
          <p>Turku, Finland</p>
        </div>
        <p>I am a third-year Information Technology student, an active student organization member, and the Chairperson of Digit ry. I have experience in such skills as team coordination, event planning, budgetary responsibility and broad communication skills.</p>
        <p>I have skills in Python, Java, JavaScript with a base knowledge in React and Express based applications. I also have skills in Photoshop and other artistic skills as well basic understanding of economics and business through my minor studies.</p>
        <p>My guildmates see me as an happy and active team player who succeeds under guidance, but equally capable of taking the initiative as I become familiar with tasks and responsibilities.</p>
      </div>
    </div>
  );
}

export default About;