import React, { useState, useMemo, useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../Styles/Projetos.css';

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState('all');
  const gridRef = useRef(null); 
  
  const projects = useMemo(() => [
    { 
      id: 1,
      title: "CADUX", 
      client: "Renan Binda",
      year: "2023",
      category: "acessibilidade",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FCADUX_Digital_Cartas.jpg?alt=media&token=e72d67fd-5cfd-45bb-94a8-889a6b76a5b0",
      aspectRatio: "square", // Destaque horizontal (2x1)
      description: "Cartas de Acessibilidade Digital para Experiência de Uso"
    },
    { 
      id: 2,
      title: "PlayStory", 
      client: "Coletivo Design",
      year: "2020",
      category: "gamification",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fplaystory.jpg?alt=media&token=858b5660-83c5-409a-b6ee-fe45bb7ab5bb",
      aspectRatio: "tall", // Destaque vertical (1x2)
      description: "PlayStory é uma Plataforma Livro-Jogo Acessível "
    },
    { 
      id: 3,
      title: "UXBR pelo RS", 
      client: "Observe",
      year: "2024",
      category: "audiovisual",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FUXBRRS.jpg?alt=media&token=463dd9c2-b7fe-4f9a-b624-e65615142f48",
      aspectRatio: "square",
      description: "A LeFul apoiou o evento em prol do Rio Grande do Sul."
    },
    { 
      id: 4,
      title: "CoIn", 
      client: "LamiD/UFSC/CAPES",
      year: "2017",
      category: "acessibilidade",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FApp_CoIn.png?alt=media&token=841b4df2-a62d-4841-b8d3-7f5a153aeac1",
      aspectRatio: "tall",
      description: "Orientação de boas práticas em acessibilidade"
    },
    { 
      id: 5,
      title: "PlaceBe", 
      client: "LeFul Academy",
      year: "2021",
      category: "app",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FPlaceBe.jpg?alt=media&token=efa342ba-d4b5-4710-b9c3-da4a2af09e75",
      aspectRatio: "wide",
      description: "Aplicativo para gerenciamento coletivo de espaços públicos"
    },
    { 
      id: 6,
      title: "Jornada da Acessibilidade", 
      client: "LeFul Academy",
      year: "2024",
      category: "gamification",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FJornada_Acessibilidade.jpg?alt=media&token=6309c9a7-4d5c-409a-bca5-20aa6041b066",
      aspectRatio: "wide",
      description: "Joago analógico para práticas em acessibilidade digital"
    },
    { 
      id: 7,
      title: "Rebranding", 
      client: "COSEMS",
      year: "2021",
      category: "branding",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FCOSEMS.png?alt=media&token=827a46d1-f890-4650-9a0d-fb13f4b8a627",
      description: "Criação da nova identidade visual do Cosems/SC"
    },
    
  ], []);

  const categories = useMemo(() => 
    ['all', ...new Set(projects.filter(p => p.image).map(p => p.category))],
    [projects]
  );

  const filteredProjects = useMemo(() => 
    activeFilter === 'all' 
      ? projects.filter(p => p.image)
      : projects.filter(project => project.category === activeFilter && project.image),
    [activeFilter, projects]
  );

  useEffect(() => {
    if (!gridRef.current || CSS.supports('grid-auto-rows', 'masonry')) return;
    
    const resizeObserver = new ResizeObserver(() => {
      const grid = gridRef.current;
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      const items = grid.children;
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowGap + 1));
        item.style.gridRowEnd = `span ${rowSpan}`;
      }
    });

    resizeObserver.observe(gridRef.current);
    return () => resizeObserver.disconnect();
  }, [filteredProjects]);


  return (
    <div className="portfolio-container">
      {/* Header com título e filtros */}
      <header className="portfolio-header">
        <div className="header-content">
          <h1>Portfólio LeFul</h1>
          <p className="subtitle">Soluções criativas orientadas ao conhecimento</p>
        </div>
        
        {/* Filtros como abas */}
        <nav className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category === 'all' ? 'Todos' : category}
              {activeFilter === category && <span className="indicator"></span>}
            </button>
          ))}
        </nav>
      </header>

      {/* Grid de projetos com modal implícito */}
      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id}
            project={project}
            className={project.aspectRatio} 
          />
        ))}
      </div>
    </div>
  );
}

