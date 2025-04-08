import React from 'react';
import { FaUniversalAccess, FaBrain, FaChalkboardTeacher, FaArrowRight, FaChevronLeft, FaChevronRight, FaStar, FaSearch, FaLightbulb, FaPencilRuler, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Servicos.css';

export default function Servicos() {
  // Dados para o carrossel hero
  const heroItems = [
    {
      id: 1,
      title: "Design que Transforma Negócios",
      description: "Soluções criativas e estratégicas para marcas que querem se destacar",
      buttonText: "Fale com nosso time",
      link: "/contato",
      bgClass: "bg-primary",
      image: "/imagens/hero-services-1.jpg"
    },
    {
      id: 2,
      title: "Experiências Digitais Memoráveis",
      description: "Criamos jornadas de usuário que encantam e convertem",
      buttonText: "Ver portfólio",
      link: "/portfolio",
      bgClass: "bg-secondary",
      image: "/imagens/hero-services-2.jpg"
    }
  ];

  // Dados para áreas de atuação
  const areasAtuacao = [
    {
      id: 1,
      titulo: "Design Inclusivo",
      icone: <FaUniversalAccess className="text-primary" size={40} />,
      descricao: "Desenvolvemos projetos centrados na diversidade humana, com foco em acessibilidade e usabilidade.",
      beneficios: [
        "Aumento do público alcançado",
        "Melhoria na experiência de todos os usuários",
        "Conformidade com diretrizes de acessibilidade",
        "Design mais humano e empático"
      ],
      cta: {
        texto: "Solicitar Consultoria",
        link: "/contato?servico=design-inclusivo"
      }
    },
    {
      id: 2,
      titulo: "Gestão do Conhecimento",
      icone: <FaBrain className="text-primary" size={40} />,
      descricao: "Sistematizamos e organizamos o conhecimento para melhorar processos criativos.",
      beneficios: [
        "Eficiência nos processos de design",
        "Preservação e recuperação do conhecimento organizacional",
        "Tomada de decisão baseada em dados e pesquisas",
        "Inovação contínua"
      ],
      cta: {
        texto: "Conhecer Soluções",
        link: "/contato?servico=gestao-conhecimento"
      }
    },
    {
      id: 3,
      titulo: "Educação em Design",
      icone: <FaChalkboardTeacher className="text-primary" size={40} />,
      descricao: "Capacitação em abordagens e práticas de design, acessibilidade e metodologias criativas.",
      beneficios: [
        "Equipe capacitada em novas metodologias",
        "Cultura de design na organização para a inovação",
        "Melhores resultados em projetos orientados ao conhecimento",
        "Atualização constante"
      ],
      cta: {
        texto: "Ver Cursos",
        link: "/cursos"
      }
    }
  ];

  // Dados para o processo criativo
  const processos = [
    {
      titulo: "Descoberta",
      descricao: "Entendemos seu desafio",
      detalhes: [
        "Pesquisa de usuário: Investigação de necessidades, comportamentos e expectativas dos usuários.",
        "Análise de concorrência: Estudo de soluções para identificar oportunidades e diferenciais estratégicos.",
        "Definição de escopo: Delimitação dos objetivos, funcionalidades e restrições do projeto."
      ]
    },
    {
      titulo: "Definição",
      descricao: "Estruturamos a solução ideal",
      detalhes: [
        "Personas e jornadas: Criação de perfis representativos de usuários e mapeamento de suas experiências.",
        "Arquitetura de informação: Organização lógica e hierárquica do conteúdo e funcionalidades.",
        "Estratégia de conteúdo: Planejamento de tom, linguagem e estrutura do conteúdo para comunicação."
      ]
    },
    {
      titulo: "Desenvolvimento",
      descricao: "Prototipamos e testamos",
      detalhes: [
        "Wireframes e fluxos: Esboços estruturais das telas e caminhos de navegação para para testagem.",
        "Testes de usabilidade: Avaliação prática da interface com usuários para identificar pontos de melhoria.",
        "Design system: Padronização de componentes para garantir consistência, escalabilidade e eficiência no design."
      ]
    },
    {
      titulo: "Entrega",
      descricao: "Implementamos a solução",
      detalhes: [
        "Desenvolvimento colaborativo: Integração entre design, desenvolvimento e outras áreas para agilidade na implementação.",
        "Garantia de qualidade: Verificação de que a solução atende aos requisitos técnicos, funcionais e de acessibilidade.",
        "Plano de evolução: Estruturação de ações futuras para aprimoramento contínuo com base em métricas e novas necessidades."
      ]
    }
  ];

  // Dados para cases de sucesso
  const cases = [
    {
      id: 1,
      titulo: "Fotografia para Empoderamento Social",
      categoria: "Design de Fotografia",
      descricao: "Capacitação em produção de imagens a partir da fotografia para desenvolver a essêncial visual em uma região dos Pampas que obteve um selo da UNESCO",
      imagem: "https://firebasestorage.googleapis.com/v0/b/portifolio-renan.appspot.com/o/imagens%2FID_Olhares_GEO_03.jpg?alt=media&token=6a9b9276-cb62-4a93-9693-d2afdb99ac78",
      metrica: {
        valor: "+95%",
        label: "Aumento na sensação de pertencimento"
      }
    },
    {
      id: 2,
      titulo: "Sistema de Saúde Digital",
      categoria: "UX Research",
      descricao: "Pesquisa e redesign de plataforma para agendamento de consultas médicas",
      imagem: "/imagens/case-saude.jpg",
      metrica: {
        valor: "90%",
        label: "Satisfação dos usuários"
      }
    }
  ];

  // Dados para depoimentos
  const depoimentos = [
    {
      id: 1,
      texto: "A LeFul transformou completamente nossa abordagem de design, tornando nossos produtos muito mais acessíveis e fáceis de usar.",
      avaliacao: 5,
      autor: {
        nome: "Joana Silva",
        cargo: "Diretora de Produto",
        empresa: "EducaTech",
        foto: "/imagens/avatar-joana.jpg"
      }
    },
    {
      id: 2,
      texto: "O trabalho em gestão do conhecimento nos ajudou a organizar anos de pesquisa e dados em um sistema coerente e útil.",
      avaliacao: 4,
      autor: {
        nome: "Carlos Mendes",
        cargo: "CTO",
        empresa: "HealthPlus",
        foto: "/imagens/avatar-carlos.jpg"
      }
    }
  ];

  // Componente HeroSection
  const HeroSection = ({ items }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    
    const nextSlide = () => {
      setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
      setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    React.useEffect(() => {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }, [activeIndex]);

    return (
      <section className="hero-section" aria-label="Apresentação dos serviços">
        <div className="hero-slides" role="group" aria-roledescription="carousel" 
          aria-live="polite">
          {items.map((item, index) => (
            <div 
              key={item.id}
              className={`hero-slide ${index === activeIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
              role="group"
              aria-roledescription="slide"
              aria-hidden={index !== activeIndex}
              aria-label={`Slide ${index + 1} de ${items.length}: ${item.title}`}
            >
              <div className="slide-overlay" aria-hidden="true"></div>
              <div className="slide-content">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Link 
                  to={item.link} 
                  className="btn btn-primary btn-lg"
                  aria-label={`${item.buttonText} - ${item.title}`}
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-control prev" onClick={prevSlide} 
          aria-label="Slide anterior" aria-controls="hero-slides">
          <FaChevronLeft aria-hidden="true" />
        </button>
        <button className="carousel-control next" 
          onClick={nextSlide} aria-label="Próximo slide" aria-controls="hero-slides">
          <FaChevronRight aria-hidden="true" />
        </button>
        
        <div className="carousel-indicators" role="tablist">
          {items.map((_, index) => (
            <button
              key={index}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir para slide ${index + 1}`}
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls={`slide-${index}`}
              tabIndex={index === activeIndex ? 0 : -1}
            />
          ))}
        </div>
      </section>
    );
  };

  // Componente EspecialidadesSection
  const EspecialidadesSection = ({ areas }) => {
    return (
      <section className="especialidades-section section"
        aria-labelledby="especialidades-heading">
        <div className="container" >
          <div className="section-header">
            <h2 id="especialidades-heading">Nossas <span className="text-primary">
              Especialidades</span></h2>
            <p>Oferecemos soluções completas em design estratégico, desde a concepção 
              até a implementação</p>
          </div>
          
          <div className="especialidades-grid" aria-describedby="especialidades-desc">
          {areas.map((area) => (
            <article 
              key={area.id} 
              className="especialidade-card" 
              aria-labelledby={`especialidade-${area.id}-title`}
            >
              <div className="card-header mb-3">
                <div className="card-icon" aria-hidden="true">{area.icone}</div>
                <h3 id={`especialidade-${area.id}-title`}>{area.titulo}</h3>
              </div>
              <div className="card-body">
                <p>{area.descricao}</p>
                
                <div className="card-features">
                  <h4>Principais benefícios:</h4>
                  <ul>
                    {area.beneficios.map((beneficio, i) => (
                      <li key={i}>{beneficio}</li>
                    ))}
                  </ul>
                </div>
                  
                <Link 
                  to={area.cta.link} 
                  className="btn btn-outline-primary"
                  aria-label={`${area.cta.texto} - ${area.titulo}`}
                >
                  {area.cta.texto} <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Componente ProcessoSection
  const ProcessoSection = ({ processos }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const icons = [FaSearch, FaLightbulb, FaPencilRuler, FaRocket];
  
    return (
      <section className="processo-section section bg-light" aria-labelledby="processo-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="processo-heading">Nosso <span className="text-primary">Processo</span> Criativo</h2>
            <p>Metodologia ágil centrada no usuário para garantir os melhores resultados</p>
          </div>
          
          <div className="processo-container">
            <div className="processo-steps">
              {processos.map((passo, index) => {
                const Icon = icons[index];
                return (
                  <div 
                    key={index} 
                    className={`processo-step ${activeStep === index ? 'active' : ''}`}
                    onClick={() => setActiveStep(index)}
                    aria-expanded={activeStep === index}
                    aria-controls={`step-content-${index}`}
                  >
                    <div className="step-icon-container">
                      <Icon className="step-icon" />
                    </div>
                    <h3 className="step-title">{passo.titulo}</h3>
                    <p className="step-description">{passo.descricao}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="step-content" id={`step-content-${activeStep}`}>
              <h4>Detalhes da etapa:</h4>
              <ul className="step-details">
                {processos[activeStep].detalhes.map((detalhe, i) => {
                  const parts = detalhe.split(":");
                  const title = parts[0];
                  const description = parts.slice(1).join(":").trim();
                  
                  return (
                    <li key={i}>
                      <strong>{title}:</strong> {description}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Componente CasesSection
  const CasesSection = ({ cases }) => {
    return (
      <section className="cases-section section" aria-labelledby="cases-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="cases-heading">Cases de <span className="text-primary">Sucesso</span></h2>
            <p>Alguns dos projetos onde transformamos desafios em soluções inovadoras</p>
          </div>
          
          <div className="cases-grid">
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="case-card">
                <div className="case-image">
                  <img src={caseItem.imagem} alt={caseItem.titulo} loading="lazy" />
                  <div className="case-overlay">
                    <h3>{caseItem.titulo}</h3>
                    <span className="case-category">{caseItem.categoria}</span>
                  </div>
                </div>
                <div className="case-content">
                  <p>{caseItem.descricao}</p>
                  <div className="case-stats">
                    <div className="stat-item">
                      <span className="stat-value">{caseItem.metrica.valor}</span>
                      <span className="stat-label">{caseItem.metrica.label}</span>
                    </div>
                  </div>
                  <Link to={`/portfolio/${caseItem.id}`} className="btn btn-link">
                    Ver estudo de caso <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/portfolio" className="btn btn-primary btn-lg">
              Ver todos os cases
            </Link>
          </div>
        </div>
      </section>
    );
  };

  // Componente DepoimentosSection
  const DepoimentosSection = ({ depoimentos }) => {
    return (
      <section className="depoimentos-section section bg-dark" aria-labelledby="depoimentos-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="depoimentos-heading">O que nossos <span className="text-primary">clientes</span> dizem</h2>
            <p>Confira a experiência de quem já trabalhou com nossa equipe</p>
          </div>
          
          <div className="depoimentos-slider">
            {depoimentos.map((depoimento) => (
              <div key={depoimento.id} className="depoimento-card">
                <div className="depoimento-rating">
                  {[...Array(depoimento.avaliacao)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <blockquote>
                  <p>"{depoimento.texto}"</p>
                </blockquote>
                <div className="depoimento-author">
                  <img src={depoimento.autor.foto} alt={depoimento.autor.nome} />
                  <div>
                    <strong>{depoimento.autor.nome}</strong>
                    <span>{depoimento.autor.cargo}, {depoimento.autor.empresa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Componente CTASection
  const CTASection = () => {
    return (
      <section className="cta-section section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-content">
            <h2 id="cta-heading">Pronto para transformar sua marca?</h2>
            <p className="lead">Vamos conversar sobre como podemos ajudar seu projeto a alcançar seu potencial máximo</p>
            
            <div className="cta-buttons">
            <Link to="/orcamento" className="btn btn-primary text-light px-4 py-3">
                Solicitar orçamento
              </Link>
              <Link to="/contato" className="btn btn-outline-primary px-4 py-3">
                Agendar consultoria
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="servicos-page" aria-label="Página de Serviços">
      <HeroSection items={heroItems} />
      <EspecialidadesSection areas={areasAtuacao} />
      <ProcessoSection processos={processos} />
      <CasesSection cases={cases} />
      <DepoimentosSection depoimentos={depoimentos} />
      <CTASection />
    </main>
  );
}