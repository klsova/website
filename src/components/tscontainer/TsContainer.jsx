import React from 'react';
import './TsContainer.css';

function TsContainer() {
  return (
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
  );
}

export default TsContainer;