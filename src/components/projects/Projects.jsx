import React from 'react';
import './Projects.css';
import filerImage from '../../assets/filer.png';
import civswipeImage from '../../assets/civswipe.png';
import placeholderImage from '../../assets/placeholder.png';

const projects = [
  {
    id: 1,
    title: 'Filer',
    image: filerImage,
  },
  {
    id: 2,
    title: 'CivSwipe',
    image: civswipeImage,
  },
  {
    id: 3,
    title: 'Plasettaja',
    image: placeholderImage,
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="project-box">
          <div 
            className="project-image" 
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          <h3 className="project-title">{project.title}</h3>
          <div className="learn-more">Learn more</div>
        </div>
      ))}
    </div>
  );
};

export default Projects;