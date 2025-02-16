import React from 'react';
import './Main.css';
import KalleSova from '../../assets/KalleSova.png';
import Location from '../../assets/location-icon.png';

function Main() {
  return (
    <div className='main-container'>
      <img src={KalleSova} alt="Kalle Sova" className='kalle' />
      <div id="main" className="main">
        <h1>Kalle Sova</h1>
        <div className='location'>
          <img src={Location} alt="location-icon" className='location-icon'/>
          <p>Turku, Finland</p>
        </div>
      </div>
    </div>
  );
}

export default Main;