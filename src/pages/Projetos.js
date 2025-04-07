import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../Styles/Projetos.css';

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = useMemo(() => [
    { 
      id: 1,
      title: "Bloom Cosmetics", 
      client: "Rebranding Global",
      year: "2023",
      category: "branding",
      image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "wide", // Destaque horizontal (2x1)
      description: "Nova identidade visual para marca de beleza sustentável."
    },
    { 
      id: 2,
      title: "EduNext Platform", 
      client: "EdTech Startup",
      year: "2024",
      category: "digital",
      image: "https://images.pexels.com/photos/5904932/pexels-photo-5904932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      aspectRatio: "square", // Quadrado (1x1)
      description: "Plataforma de educação com IA personalizada."
    },
    { 
      id: 3,
      title: "Urban Brew Coffee", 
      client: "Campanha Limitada",
      year: "2023",
      category: "motion",
      image: "https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "tall", // Destaque vertical (1x2)
      description: "Série de filmes curtos sobre artesãos do café."
    },
    { 
      id: 4,
      title: "FinTrack App", 
      client: "Fintech",
      year: "2024",
      category: "product",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      aspectRatio: "square",
      description: "Redesign focado em usuários idosos."
    },
    { 
      id: 5,
      title: "MAC Exhibition", 
      client: "Museu de Arte",
      year: "2022",
      category: "environmental",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "wide",
      description: "Instalação interativa com projeção mapeada."
    }
  ], []);

  const categories = useMemo(() => 
    ['all', ...new Set(projects.map(p => p.category))],
    [projects]
  );

  const filteredProjects = useMemo(() => 
    activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter),
    [activeFilter, projects]
  );

  return (
    <section className="pentagram-portfolio">
      {/* Filtros minimalistas (no canto superior direito) */}
      <div className="pentagram-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`pentagram-filter ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid com tamanhos variados */}
      <div className="pentagram-grid">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            className={`pentagram-card ${project.aspectRatio}`}
          />
        ))}
      </div>
    </section>
  );
}