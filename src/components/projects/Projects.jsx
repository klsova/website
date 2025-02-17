import React from 'react';
import './Projects.css';
import filerImage from '../../assets/filer.png'
import civswipeImage from '../../assets/civswipe.png'
import placeholderImage from '../../assets/placeholder.png'

const projects = [
  {
    id: 1,
    title: 'Filer',
    image: filerImage,
    url: 'https://github.com/klsova/filer',
  },
  {
    id: 2,
    title: 'CivSwipe',
    image: civswipeImage,
    url: 'https://github.com/klsova/civswipe',
  },
  {
    id: 3,
    title: 'Plasettaja',
    image: placeholderImage,
    url: 'https://github.com/klsova/plasettaja',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      {projects.map((project) => (
        <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="project-box">
            <div 
              className="project-image" 
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <h3 className="project-title">{project.title}</h3>
            <div className="learn-more">Learn more &gt;</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;