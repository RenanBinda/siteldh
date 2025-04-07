import React from 'react';
import '../Styles/Projetos.css'; // Remova o import do ProjectCard.css

export default function ProjectCard({ project, className }) {
  return (
    <div className={`pentagram-card ${className}`}>
      <img 
        src={project.image} 
        alt={project.title} 
        loading="lazy"
      />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.client}, {project.year}</p>
        <p className="pentagram-description">{project.description}</p> {/* Classe atualizada */}
      </div>
    </div>
  );
}