import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard'; // Agora o componente existe

export default function Projetos() {
  const [projects] = useState([
    { 
      id: 1, 
      title: "Projeto A", 
      category: "web",
      image: "/images/project1.jpg",
      description: "Descrição do projeto A" 
    },
    { 
      id: 2, 
      title: "Projeto B", 
      category: "branding",
      image: "/images/project2.jpg",
      description: "Descrição do projeto B" 
    }
  ]);

  return (
    <main className="projects-page">
      <h1>Projetos Realizados</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}