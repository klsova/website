import React from 'react';
import './TsContainer.css';

function TsContainer() {
  return (
    <div className='ts-container'>
      <div className='ts-text'>
      <p>My</p>
      <p>Tech</p>
      <p>Stack</p>
      </div>
      <div className='ts-grid'>
        <div className='ts-item' data-tech='Python'>
          <i className="devicon-python-plain"></i>
        </div>
        <div className='ts-item' data-tech='Java'>
          <i className="devicon-java-plain"></i>
        </div>
        <div className='ts-item' data-tech='JavaScript'>
          <i className="devicon-javascript-plain"></i>
        </div>
        <div className='ts-item' data-tech='React'>
          <i className="devicon-react-original"></i>
        </div>
        <div className='ts-item' data-tech='Express'>
          <i className="devicon-express-original"></i>
        </div>
        <div className='ts-item' data-tech='HTML'>
          <i className="devicon-html5-plain"></i>
        </div>
        <div className='ts-item' data-tech='CSS'>
          <i className="devicon-css3-plain"></i>
        </div>
        <div className='ts-item' data-tech='Photoshop'>
          <i className="devicon-photoshop-plain"></i>
        </div>
      </div>
    </div>
  );
}

export default TsContainer;