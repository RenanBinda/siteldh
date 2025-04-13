import React, { useState } from 'react';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className={`project-tile ${project.aspectRatio}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="tile-image">
        <img 
          src={project.image} 
          alt={project.title || `Projeto ${project.id}`}
          loading="lazy"
        />
      </div>
      
      <div className={`tile-overlay ${isHovered ? 'visible' : ''}`}>
        <div className="overlay-content">
          <h3>{project.title || `Projeto ${project.year}`}</h3>
          <div className="project-meta">
            {project.client && <span>{project.client}</span>}
            <span>{project.year}</span>
          </div>
          <p className="project-description">{project.description}</p>
          <span className="project-category">{project.category}</span>
        </div>
      </div>
    </article>
  );
}