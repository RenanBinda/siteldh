import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ProjectCard.css'; // Adicione esta linha

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>Categoria: {project.category}</p>
      <Link to={`/projeto/${project.id}`} className="project-link">
        Ver detalhes
      </Link>
    </div>
  );
};

export default ProjectCard;