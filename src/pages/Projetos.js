import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../Styles/Projetos.css';

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = useMemo(() => [
    { 
      id: 1,
      title: "CADUX", 
      client: "LeFul Academy",
      year: "2023",
      category: "acessibilidade",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FCADUX_Digital_Cartas.jpg?alt=media&token=e72d67fd-5cfd-45bb-94a8-889a6b76a5b0",
      aspectRatio: "wide", // Destaque horizontal (2x1)
      description: "Cartas de Acessibilidade Digital para Experiência de Uso"
    },
    { 
      id: 2,
      title: "Rebranding", 
      client: "Partner C&A",
      year: "2020",
      category: "branding",
      image: "https://images.pexels.com/photos/5904932/pexels-photo-5904932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      aspectRatio: "square", // Quadrado (1x1)
      description: "Nova identidade visual para marca de consultoria e treinamento."
    },
    { 
      id: 3,
      title: "UX Research com Sotaque Brasileiro", 
      client: "Autoras do Livro",
      year: "2023",
      category: "graphic",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fcapa_livro_uxbr.png?alt=media&token=ccc456e6-87bb-4b98-bbe2-ab947f928369",
      aspectRatio: "tall", // Destaque vertical (1x2)
      description: "Identidade visual, capa de livro e papelaria"
    },
    { 
      id: 4,
      title: "UXBR pelo RS", 
      client: "Observe",
      year: "2024",
      category: "audiovisual",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FUXBRRS.jpg?alt=media&token=463dd9c2-b7fe-4f9a-b624-e65615142f48",
      aspectRatio: "square",
      description: "Edição dos vídeos apresentados no evento em prol do Rio Grande do Sul."
    },
    { 
      id: 5,
      title: "Rebranding", 
      client: "Cosems",
      year: "2020",
      category: "branding",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FCOSEMS.png?alt=media&token=827a46d1-f890-4650-9a0d-fb13f4b8a627",
      aspectRatio: "square",
      description: "Redesign focado em usuários idosos."
    },
    { 
      id: 6,
      title: "CoIn", 
      client: "LamiD/UFSC/CAPES",
      year: "2017",
      category: "acessibilidade",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FApp_CoIn.png?alt=media&token=841b4df2-a62d-4841-b8d3-7f5a153aeac1",
      aspectRatio: "wide",
      description: "Orientação de boas práticas em acessibilidade"
    },
    { 
      id: 7,
      title: "Jornada da Acessibilidade", 
      client: "LeFul Academy",
      year: "2024",
      category: "gamification",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FJornada_Acessibilidade.jpg?alt=media&token=6309c9a7-4d5c-409a-bca5-20aa6041b066",
      aspectRatio: "square",
      description: "Joago analógico para práticas em acessibilidade digital"
    },
    { 
      id: 8,
      title: "PlaceBe", 
      client: "LeFul Academy",
      year: "2021",
      category: "app",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FPlaceBe.jpg?alt=media&token=efa342ba-d4b5-4710-b9c3-da4a2af09e75",
      aspectRatio: "wide",
      description: "Aplicativo para gerenciamento coletivo de espaços públicos"
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
            key={`${project.id}-${activeFilter}`}
            project={project}
            className={`pentagram-card ${project.aspectRatio}`}
          />
        ))}
      </div>
    </section>
  );
}