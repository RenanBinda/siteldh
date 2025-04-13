import React from 'react';
import { FaUniversalAccess, FaBrain, FaChalkboardTeacher, 
  FaArrowRight, FaChevronLeft, FaChevronRight, FaStar, FaSearch, 
  FaLightbulb, FaPencilRuler, FaRocket, FaPuzzlePiece, FaPalette } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Servicos.css';

export default function Servicos() {
  // Dados para o carrossel hero
  const heroItems = [
    {
      id: 1,
      title: "Design que Transforma Negócios",
      description: "Soluções criativas e estratégicas para negócios que querem se destacar",
      buttonText: "Como fazemos",
      link: "/DesignTransformador",
      bgClass: "bg-primary",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fsolution2.jpg?alt=media&token=bb48cd48-68f6-4305-a86d-873386e05e5b"
    },
    {
      id: 2,
      title: "Experiências Digitais Impactantes",
      description: "UX que gera resultados: de testes de usabilidade a design system escalável",
      buttonText: "Veja essa experiência",
      link: "/ExperienciasDigitais",
      bgClass: "bg-secondary",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fsolution.jpg?alt=media&token=492a0763-e0b0-41e4-8e00-960402aa4c7c"
    },
    {
      id: 3,
      title: "Desenvolvimento de Marca",
      description: "Branding com propósito: identidades que conectam e comunicam",
      buttonText: "Explore soluções",
      link: "/BrandingPage",
      bgClass: "bg-alert",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fpartner.jpg?alt=media&token=a4c93359-5582-4107-8cb4-ca498777dbd2"
    },
    {
      id: 4,
      title: "Programa de Cursos",
      description: "Workshops e Treinamentos: Conhecimento Estratégico",
      buttonText: "Veja os Programas",
      link: "/TreinamentosPage",
      bgClass: "bg-alert",
      image: "https://firebasestorage.googleapis.com/v0/b/portifolio-renan.appspot.com/o/imagens%2FID_Olhares_GEO_03.jpg?alt=media&token=6a9b9276-cb62-4a93-9693-d2afdb99ac78"
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
      },
      link: "/CaseFotografiaEmpodera"
    },
    {
      id: 2,
      titulo: "Sistema de Gerenciamento",
      categoria: "Design Solution",
      descricao: "PlaceBe: Empoderamento Comunitário e Transformação Sustentável de Espaços Públicos Através da Gestão do Conhecimento e Placemaking",
      imagem: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FPlaceBe.jpg?alt=media&token=efa342ba-d4b5-4710-b9c3-da4a2af09e75",
      metrica: {
        valor: "90%",
        label: "Engajamento Comunitário e Paraticipação Colaborativa"
      },
      link: "/CasePlaceBe"
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
        foto: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fpersona1.jpg?alt=media&token=bfea7706-1c0a-42e3-9539-13c6882c57be"
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
        foto: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fpersona2.jpg?alt=media&token=a8acd92f-3a8a-4f5e-a419-43c578a511fe"
      }
    }
  ];

  // Dados para áreas de atuação
  const areasAtuacaoData = [
    {
      id: 1,
      titulo: "Design Centrado no Humano",
      icone: <FaUniversalAccess size={28} />,
      descricao: "Criamos experiências que resolvem problemas reais através de pesquisas com usuários.",
      entregaveis: [
        "Pesquisa de experiência",
        "Testes de usabilidade remotos",
        "Prototipagem em alta fidelidade",
        "Mapas de jornada digital"
      ],
      metricas: [
        "↑ 70% satisfação do usuário",
        "↓ 40% taxa de erro",
        "↑ 2x engajamento"
      ],
      cta: {
        texto: "Explorar cases",
        link: "/DesignCentradoHumano"
      }
    },
    {
      id: 2,
      titulo: "Gestão do Conhecimento",
      icone: <FaBrain size={28} />,
      descricao: "Sistematizamos informações para transformar dados em insights acionáveis.",
      entregaveis: [
        "Mapeamento de processos",
        "Sistemas de organização",
        "Frameworks de inovação",
        "Indicadores de performance"
      ],
      metricas: [
        "↑ 60% eficiência",
        "↓ 30% retrabalho",
        "↑ 90% recuperação de informação"
      ],
      cta: {
        texto: "Ver metodologia",
        link: "/GestaoConhecimentoPage"
      }
    },
    {
      id: 3,
      titulo: "Educação em Design",
      icone: <FaChalkboardTeacher size={28} />,
      descricao: "Capacitamos times para pensar estrategicamente através do design.",
      entregaveis: [
        "Workshops imersivos",
        "Programas de mentoria",
        "Treinamentos técnicos",
        "Certificações"
      ],
      metricas: [
        "↑ 80% prática",
        "↓ 50% curva de aprendizado",
        "↑ 3x ROI em projetos"
      ],
      cta: {
        texto: "Conhecer programas",
        link: "/EducacaoDesignPage"
      }
    }
  ];

  // Dados para soluções personalizadas
  const solucoes = [
    {
      titulo: "Design Systems",
      icone: <FaPuzzlePiece />,
      itens: [
        "Bibliotecas de componentes",
        "Documentação interativa",
        "Governança de design",
        "Integração com dev"
      ]
    },
    {
      titulo: "UX Research",
      icone: <FaSearch />,
      itens: [
        "Testes de usabilidade",
        "Análise heurística",
        "Mapas de calor",
        "Personas estratégicas"
      ]
    },
    {
      titulo: "Branding",
      icone: <FaPalette />,
      itens: [
        "Identidade visual",
        "Sistemas de marca",
        "Diretrizes de aplicação",
        "Arquitetura de marca"
      ]
    },
    {
      titulo: "Acessibilidade",
      icone: <FaUniversalAccess />,
      itens: [
        "Auditoria WCAG e NBR",
        "Design inclusivo",
        "Treinamentos",
        "Implementação"
      ]
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
      <section className="especialidades-section">
        <div className="decorative-circle circle-1"></div>
        <div className="container">
          <div className="section-header">
            <h2>Nossas Expertises</h2>
            <p className="lead">Na LeFul Design House, unimos estratégia, criatividade e
               inclusão para transformar ideias em experiências impactantes.</p>
          </div>
          
          <div className="especialidades-grid">
            {areas.map((area) => (
              <div key={area.id} className="especialidade-card">
                <div className="card-icon">{area.icone}</div>
                <h3 className="card-title">{area.titulo}</h3>
                <p className="card-desc">{area.descricao}</p>
                
                <div className="feature-list">
                  <h4 className="feature-title">Principais entregas:</h4>
                  <ul>
                    {area.entregaveis.map((item, i) => (
                      <li key={i} className="feature-item">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="metrics">
                  {area.metricas.map((metrica, i) => (
                    <span key={i} className="metric-badge">{metrica}</span>
                  ))}
                </div>
                
                <Link to={area.cta.link} className="btn btn-primary">
                  {area.cta.texto} <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Componente SolucoesSection
  const SolucoesSection = ({ solucoes }) => {
    return (
      <section className="solucoes-section">
        <div className="container">
          <div className="section-header">
            <h2>Soluções Sob Medida</h2>
            <p className="lead">Projetos personalizados para desafios específicos</p>
          </div>
          
          <div className="solucoes-grid">
            {solucoes.map((solucao, index) => (
              <div key={index} className="solucao-card">
                <div className="solucao-icon">
                  {solucao.icone}
                </div>
                <h4 className="solucao-title">{solucao.titulo}</h4>
                <ul className="solucao-list">
                  {solucao.itens.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
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
                  <Link to={caseItem.link} className="btn btn-link">
                    Ver estudo de caso <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/projetos" className="btn btn-primary btn-lg">
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
              <Link to="/agendamento" className="btn btn-outline-primary px-4 py-3">
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
      <EspecialidadesSection areas={areasAtuacaoData} />
      <SolucoesSection solucoes={solucoes} />
      <ProcessoSection processos={processos} />
      <CasesSection cases={cases} />
      <DepoimentosSection depoimentos={depoimentos} />
      <CTASection />
    </main>
  );
}