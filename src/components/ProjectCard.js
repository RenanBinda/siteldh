import React from 'react';

export default function ProjectCard({ project, className }) {
  return (
    <div className={`pentagram-card ${project.aspectRatio}`}>
      <img src={project.image} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.client} · {project.year}</p>
        <p className="pentagram-description">{project.description}</p>
      </div>
    </div>
  );
}