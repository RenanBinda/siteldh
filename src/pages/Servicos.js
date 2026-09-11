import React, { useState, useEffect } from 'react';
import { 
  FaUniversalAccess, 
  FaBrain, 
  FaChalkboardTeacher, 
  FaArrowRight, 
  FaChevronLeft, 
  FaChevronRight, 
  FaStar, 
  FaShieldAlt, 
  FaCode, 
  FaFileContract, 
  FaPuzzlePiece, 
  FaLaptopCode, 
  FaCheckCircle 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Servicos.css';

export default function Servicos() {
  // Slides Hero - Foco em Soluções Corporativas de Alto Impacto
  const heroItems = [
    {
      id: 1,
      title: "Auditoria Express NBR 17225 & LBI",
      description: "Diagnóstico técnico pericial e comportamental para blindar produtos digitais contra riscos jurídicos e autuações regulatórias.",
      buttonText: "Conhecer Auditoria Express",
      link: "/contato",
      bgClass: "bg-primary",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fglowing.jpg?alt=media&token=ae80055b-75ed-4344-ad94-4c9d5a246c63"
    },
    {
      id: 2,
      title: "Workshops In-Company CADUX ®",
      description: "Capacitação corporativa prática nas 5 dimensões de UX inclusiva através do framework CADUX e do jogo Jornada da Acessibilidade.",
      buttonText: "Capacitar Equipes",
      link: "/contato",
      bgClass: "bg-secondary",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fcreative.jpg?alt=media&token=cfab8447-dc67-40f5-bcfd-72a89bf2def2"
    },
    {
      id: 3,
      title: "Design Systems Acessíveis & UI/UX",
      description: "Padronização de componentes reutilizáveis em conformidade com WCAG 2.2 e ABNT NBR 17225, eliminando retrabalho na engenharia.",
      buttonText: "Estruturar Design System",
      link: "/contato",
      bgClass: "bg-dark",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fbusinessman.jpg?alt=media&token=f5cea9b4-c157-42ae-b883-8e36cff0f1f3"
    },
    {
      id: 4,
      title: "Consultoria em Web Agêntica e IA",
      description: "Preparação de ecossistemas digitais e recursos de aprendizagem para a mediação por agentes inteligentes de IA.",
      buttonText: "Inovação em Web Agêntica",
      link: "/contato",
      bgClass: "bg-alert",
      image: "https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/03.jpg"
    }
  ];

  // Processo Metodológico da LeFul (Baseado em DSR e Engenharia da Mediação)
  const processos = [
    {
      titulo: "1. Diagnóstico Pericial",
      descricao: "Mapeamento minucioso de vulnerabilidades",
      detalhes: [
        "Varredura Semântica: Inspeção algorítmica e heurística do DOM frente aos 156 critérios da ABNT NBR 17225:2025 e WCAG 2.2.",
        "Testes de Jornada: Avaliação comportamental com leitores de tela (NVDA/TalkBack), navegação estrita por teclado e ampliadores.",
        "Matriz de Severidade: Categorização de barreiras impeditivas de conversão, alertas preventivos e conformidades existentes."
      ]
    },
    {
      titulo: "2. Engenharia Prescritiva",
      descricao: "Prescrição técnica acionável em código",
      detalhes: [
        "Snippets e WAI-ARIA: Entrega direta das linhas de código HTML5 semântico, landmarks e atributos ARIA para a equipe de desenvolvimento.",
        "Alinhamento de Design System: Ajuste de contrastes (mínimo 4.5:1 texto / 3:1 não-textual), estados de foco (2px) e alvos de toque (24x24px).",
        "Backlog Priorizado: Estruturação dos apontamentos em formato de cards prontos para importação no Jira ou GitHub."
      ]
    },
    {
      titulo: "3. Capacitação CADUX ®",
      descricao: "Transferência contínua de conhecimento",
      detalhes: [
        "Workshop Imersivo: Sessão prática de 4h ou 8h para nivelamento dos times de Produto, Design e Engenharia de Software.",
        "Simulação Gamificada: Aplicação da Jornada da Acessibilidade para tomada de decisão ágil frente a 36 cenários-desafio reais.",
        "Autonomia da Equipe: Disseminação da Espiral do Conhecimento para que a acessibilidade passe a integrar a cultura nativa da empresa."
      ]
    },
    {
      titulo: "4. Homologação & Laudo",
      descricao: "Segurança jurídica e transparência pública",
      detalhes: [
        "Laudo Pericial Oficial: Emissão de relatório executivo em PDF com pontuação global (Score 0-100%) assinado por especialista ABNT/CB-040.",
        "Autodeclaração de Acessibilidade: Diretrizes para publicação formal da declaração de conformidade técnica exigida pela legislação.",
        "Monitoramento Contínuo: Estruturação de esteira de testes contínuos para garantir que novos deploys não introduzam regressões."
      ]
    }
  ];

  // Cases de Sucesso Reais
  const cases = [
    {
      id: 1,
      titulo: "Plataforma CoIn & Auditoria",
      categoria: "Auditoria Automatizada & IA",
      descricao: "Varredura algorítmica e heurística nós estruturais com diagnóstico pericial e prescrição de código semântico baseada na ABNT NBR 17225:2025.",
      imagem: "https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/App_CoIn.png",
      metrica: {
        valor: "156 Critérios",
        label: "Norma ABNT NBR 17225:2025"
      },
      link: "/projetos"
    },
    {
      id: 2,
      titulo: "Jornada da Acessibilidade & CADUX ®",
      categoria: "Gamificação & Inovação Social",
      descricao: "Simulador colaborativo em tempo real e framework de cartas com dimensões de UX, contemplado no Edital Fábrica de Jogos da SINOVA/UFSC.",
      imagem: "https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/POST1.jpg",
      metrica: {
        valor: "INPI Concedido",
        label: "Marca e Metodologia Registradas"
      },
      link: "/projetos"
    }
  ];

  // Depoimentos e Avaliações de Especialistas
  const depoimentos = [
    {
      id: 1,
      texto: "Iniciativas como as da LeFul são essenciais para que pessoas com deficiência sejam consideradas como parte do processo desde o início, eliminando a necessidade de adaptações tardias e garantindo o desenho universal na prática.",
      avaliacao: 5,
      autor: {
        nome: "R. F.",
        cargo: "Especialista em Acessibilidade Digital",
        empresa: " / ",
        foto: "https://firebasestorage.googleapis.com/v0/b/portifolio-renan.appspot.com/o/imagens%2FRenan_Site.png?alt=media&token=d4201e0f-1112-43c4-bd7d-0a2b85793135"
      }
    },
    {
      id: 2,
      texto: "A articulação entre a norma ABNT NBR 17225 e o Framework CADUX representa uma virada metodológica: transforma requisitos legais complexos em ferramentas intuitivas de engenharia e experiência de uso.",
      avaliacao: 5,
      autor: {
        nome: "Profa. Dra. Vania Ribas Ulbricht",
        cargo: "Coordenadora do LaMiD",
        empresa: "PPGEGC / UFSC",
        foto: "https://firebasestorage.googleapis.com/v0/b/portifolio-renan.appspot.com/o/imagens%2FRenan_Site.png?alt=media&token=d4201e0f-1112-43c4-bd7d-0a2b85793135"
      }
    }
  ];

  // 4 Áreas de Atuação Centrais da LeFul
  const areasAtuacaoData = [
    {
      id: 1,
      titulo: "Auditoria de Conformidade NBR 17225",
      icone: <FaShieldAlt size={28} />,
      descricao: "Diagnóstico técnico e pericial dos 156 critérios da ABNT NBR 17225 e WCAG 2.2 com entrega de laudo executivo e mitigação de riscos legais sob a LBI.",
      entregaveis: [
        "Laudo Pericial com Score de Conformidade",
        "Matriz de Severidade de barreiras críticas",
        "Prescrição direta em código HTML/ARIA",
        "Parecer de adequação ao Art. 63 da LBI"
      ],
      metricas: [
        "100% Norma ABNT",
        "Zero autuações LBI",
        "Sprint de 10 dias"
      ],
      cta: {
        texto: "Solicitar Diagnóstico",
        link: "/contato"
      }
    },
    {
      id: 2,
      titulo: "Workshops Corporativos CADUX ®",
      icone: <FaChalkboardTeacher size={28} />,
      descricao: "Capacitação in-company dinâmica e aplicada para times de Produto, Design e Engenharia, unindo método de cartas e simulação gamificada.",
      entregaveis: [
        "Workshop prático hands-on de 4h ou 8h",
        "Simulador interativo 'Jornada da Acessibilidade'",
        "Dinâmica centrada nas 5 dimensões de UX",
        "Certificação técnica institucional LeFul"
      ],
      metricas: [
        "+36 Cenários Reais",
        "Método Registrado INPI",
        "Autonomia da Equipe"
      ],
      cta: {
        texto: "Agendar Treinamento",
        link: "/contato"
      }
    },
    {
      id: 3,
      titulo: "Design Systems Inclusivos",
      icone: <FaPuzzlePiece size={28} />,
      descricao: "Estruturação e homologação de componentes de interface escaláveis, garantindo que toda a esteira de software já nasça 100% acessível.",
      entregaveis: [
        "Auditoria de bibliotecas de UI/Figma",
        "Padronização de contrastes e áreas de toque",
        "Implementação de semântica e focus trap",
        "Documentação técnica para front-end"
      ],
      metricas: [
        "Escalabilidade Nativa",
        "Menos 40% de retrabalho",
        "Aderência WCAG AA"
      ],
      cta: {
        texto: "Estruturar UI Inclusiva",
        link: "/contato"
      }
    },
    {
      id: 4,
      titulo: "Recursos Educacionais & Web Agêntica",
      icone: <FaBrain size={28} />,
      descricao: "Modelagem de Ambientes Virtuais de Aprendizagem (AVEAs) inclusivos e interfaces preparadas para a navegação autônoma de agentes de IA.",
      entregaveis: [
        "Adequação de plataformas EAD e players",
        "Estruturação de conteúdos multimodais",
        "Governança algorítmica e machine-actionable",
        "Modelos de Sistemas Inteligentes de Mediação"
      ],
      metricas: [
        "Educação Inclusiva",
        "Suporte a Agentes IA",
        "Padrão Qualis / DSR"
      ],
      cta: {
        texto: "Inovar em Educação e IA",
        link: "/contato"
      }
    }
  ];

  // Soluções Sob Medida Especializadas
  const solucoes = [
    {
      titulo: "Conformidade Legal & LBI",
      icone: <FaFileContract />,
      itens: [
        "Laudos técnicos para Ministério Público",
        "Adequação compulsória ao Art. 63 da LBI",
        "Auditoria técnica em funil de vendas e checkout",
        "Autodeclaração formal de acessibilidade"
      ]
    },
    {
      titulo: "Engenharia Front-End Acessível",
      icone: <FaCode />,
      itens: [
        "Refatoração semântica de código HTML5",
        "Aplicação avançada de atributos WAI-ARIA",
        "Ajuste de ordem de tabulação e foco visível",
        "Suporte completo a leitores de tela"
      ]
    },
    {
      titulo: "UX Research com Pessoas com Deficiência",
      icone: <FaUniversalAccess />,
      itens: [
        "Testes de usabilidade com pessoas cegas e surdas",
        "Mapeamento de jornada de personas inclusivas",
        "Avaliação heurística contextual e sensorial",
        "Pesquisa de redução de carga cognitiva"
      ]
    },
    {
      titulo: "Governança para Web Agêntica",
      icone: <FaLaptopCode />,
      itens: [
        "Arquitetura de dados legível por agentes de IA",
        "Mitigação de alucinações via ontologias técnicas",
        "Auditoria de acessibilidade assistida por IA (CoIn)",
        "Padronização semântica para automação de tarefas"
      ]
    }
  ];

  // Carousel Controller
  const HeroSection = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const nextSlide = () => setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

    useEffect(() => {
      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
    }, [activeIndex]);

    return (
      <section className="hero-section" style={{padding: '0', maxHeight: '600px'}} aria-label="Apresentação dos serviços especializados LeFul">
        <div className="hero-slides" role="group" aria-roledescription="carousel" aria-live="polite">
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
                <span className="badge bg-primary text-white px-3 py-1 mb-3 text-uppercase fw-bold small">
                  Consultoria Especializada
                </span>
                <h1 className="fw-bold">{item.title}</h1>
                <p className="lead">{item.description}</p>
                <Link 
                  to={item.link} 
                  className="btn btn-primary btn-lg fw-bold shadow-sm"
                  aria-label={`${item.buttonText} - ${item.title}`}
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-control prev" onClick={prevSlide} aria-label="Slide anterior" aria-controls="hero-slides">
          <FaChevronLeft aria-hidden="true" />
        </button>
        <button className="carousel-control next" onClick={nextSlide} aria-label="Próximo slide" aria-controls="hero-slides">
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

  // Especialidades / Ofertas Centrais
  const EspecialidadesSection = ({ areas }) => (
    <section className="especialidades-section py-5">
      <div className="container mt-5 mb-5">
        <div className="section-header text-center mb-5">
          <span className="text-uppercase fw-bold text-primary small letter-spacing-1">Nossas Frentes de Atuação</span>
          <h2 className="display-5 fw-bold mb-3 mt-2">Consultoria de <span className="text-primary">Alto Valor e Impacto</span></h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '820px' }}>
            Na LeFul Design House, unimos o rigor normativo da ABNT, a fundamentação científica da UFSC e a engenharia prescritiva para entregar conformidade e usabilidade de alta conversão.
          </p>
        </div>
        
        <div className="row g-4">
          {areas.map((area) => (
            <div key={area.id} className="col-12 col-md-6">
              <div className="especialidade-card h-100 p-4 rounded shadow-sm border bg-white d-flex flex-column">
                <div className="card-icon mb-3 text-primary">{area.icone}</div>
                <h3 className="card-title h4 fw-bold mb-2">{area.titulo}</h3>
                <p className="card-desc text-muted small mb-3">{area.descricao}</p>
                
                <div className="feature-list mb-3">
                  <h4 className="feature-title small text-uppercase text-dark fw-bold mb-2">Entregáveis Estratégicos:</h4>
                  <ul className="list-unstyled ps-0 small text-muted">
                    {area.entregaveis.map((item, i) => (
                      <li key={i} className="mb-1 d-flex align-items-center">
                        <FaCheckCircle className="text-primary me-2 flex-shrink-0" size={12} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="metrics mb-4 d-flex gap-2 flex-wrap">
                  {area.metricas.map((metrica, i) => (
                    <span key={i} className="badge bg-light text-primary border fw-bold">{metrica}</span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Link to={area.cta.link} className="btn btn-primary w-100 fw-bold">
                    {area.cta.texto} <FaArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Soluções Sob Medida
  const SolucoesSection = ({ solucoes }) => (
    <section className="solucoes-section py-5 bg-light">
      <div className="container mt-5 mb-5">
        <div className="section-header text-center mb-5">
          <span className="text-uppercase fw-bold text-primary small letter-spacing-1">Expertise Específica</span>
          <h2 className="display-5 fw-bold mt-2"><span className="text-primary">Soluções</span> para Desafios Complexos</h2>
          <p className="lead text-muted">Pacotes sob medida para engenharia de software, jurídico e times de produto</p>
        </div>
        
        <div className="row g-4">
          {solucoes.map((solucao, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div className="solucao-card h-100 p-4 bg-white rounded shadow-sm border">
                <div className="solucao-icon text-primary mb-3" style={{ fontSize: '2rem' }}>
                  {solucao.icone}
                </div>
                <h4 className="solucao-title h5 fw-bold mb-3">{solucao.titulo}</h4>
                <ul className="solucao-list list-unstyled ps-0 small text-muted">
                  {solucao.itens.map((item, i) => (
                    <li key={i} className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Processo em 4 Etapas
  const ProcessoSection = ({ processos }) => {
    const [activeStep, setActiveStep] = useState(0);
    const icons = [FaShieldAlt, FaCode, FaChalkboardTeacher, FaFileContract];
  
    return (
      <section className="processo-section section py-5 bg-white" aria-labelledby="processo-heading">
        <div className="container mt-5 mb-5">
          <div className="section-header text-center mb-5">
            <span className="text-uppercase fw-bold text-primary small letter-spacing-1">Metodologia Prescritiva</span>
            <h2 id="processo-heading" className="display-5 fw-bold mt-2">Como Conduzimos Nossas <span className="text-primary">Consultorias</span></h2>
            <p className="lead text-muted">Estrutura baseada em Design Science Research e na Engenharia da Mediação</p>
          </div>
          
          <div className="processo-container">
            <div className="row g-3 mb-4">
              {processos.map((passo, index) => {
                const Icon = icons[index];
                return (
                  <div key={index} className="col-12 col-md-3">
                    <div 
                      className={`p-3 rounded border text-center h-100 cursor-pointer transition ${activeStep === index ? 'bg-primary text-white shadow' : 'bg-light text-dark'}`}
                      onClick={() => setActiveStep(index)}
                      style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                      role="button"
                      tabIndex={0}
                      aria-pressed={activeStep === index}
                    >
                      <div className="mb-2">
                        <Icon size={24} className={activeStep === index ? 'text-white' : 'text-primary'} />
                      </div>
                      <h3 className="h6 fw-bold mb-1">{passo.titulo}</h3>
                      <p className={`small mb-0 ${activeStep === index ? 'text-light opacity-90' : 'text-muted'}`} style={{ fontSize: '0.8rem' }}>
                        {passo.descricao}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="step-content p-4 bg-light rounded border shadow-sm" id={`step-content-${activeStep}`}>
              <h4 className="fw-bold h5 mb-4 text-dark">
                Etapas Detalhadas: {processos[activeStep].titulo}
              </h4>
              <ul className="list-unstyled mb-0">
                {processos[activeStep].detalhes.map((detalhe, i) => {
                  const parts = detalhe.split(":");
                  const title = parts[0];
                  const description = parts.slice(1).join(":").trim();
                  
                  return (
                    <li key={i} className="mb-3 d-flex align-items-start">
                      <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" size={14} />
                      <div>
                        <strong className="text-dark">{title}:</strong>{' '}
                        <span className="text-muted">{description}</span>
                      </div>
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

  // Cases Reais
  const CasesSection = ({ cases }) => (
    <section className="cases-section section py-5 bg-light" aria-labelledby="cases-heading">
      <div className="container mt-5 mb-5">
        <div className="section-header text-center mb-5">
          <span className="text-uppercase fw-bold text-primary small letter-spacing-1">Validação Pragmática</span>
          <h2 id="cases-heading" className="display-5 fw-bold mt-2">Artefatos e <span className="text-primary">Projetos de Referência</span></h2>
          <p className="lead text-muted">Soluções desenvolvidas e homologadas pela LeFul Design House</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="col-12 col-md-6">
              <div className="case-card bg-white rounded shadow-sm border overflow-hidden h-100 d-flex flex-column">
                <div className="case-image position-relative" style={{ height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={caseItem.imagem} 
                    alt={caseItem.titulo} 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover' }} 
                    loading="lazy" 
                  />
                  <div className="case-overlay position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.85))' }}>
                    <span className="badge bg-primary text-white mb-1">{caseItem.categoria}</span>
                    <h3 className="text-white h5 fw-bold mb-0">{caseItem.titulo}</h3>
                  </div>
                </div>
                <div className="case-content p-4 d-flex flex-column flex-grow-1">
                  <p className="text-muted small mb-3">{caseItem.descricao}</p>
                  <div className="case-stats p-3 bg-light rounded border mb-4">
                    <div className="stat-item text-center">
                      <span className="stat-value fw-bold text-primary h4 d-block mb-0">{caseItem.metrica.valor}</span>
                      <span className="stat-label small text-muted">{caseItem.metrica.label}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link to={caseItem.link} className="btn btn-outline-primary w-100 fw-bold">
                      Conhecer Projeto <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Depoimentos Qualificados
  const DepoimentosSection = ({ depoimentos }) => (
    <section className="depoimentos-section section py-5 text-white" style={{ backgroundColor: '#2B2E34' }} aria-labelledby="depoimentos-heading">
      <div className="container mt-5 mb-5">
        <div className="section-header text-center mb-5">
          <span className="text-uppercase fw-bold text-info small letter-spacing-1">Reconhecimento Técnico</span>
          <h2 id="depoimentos-heading" className="display-5 fw-bold text-white mt-2">Chancela de <span style={{ color: '#009FE3' }}>Especialistas</span></h2>
          <p className="lead text-light opacity-75">O que dizem as principais referências nacionais em acessibilidade digital</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {depoimentos.map((depoimento) => (
            <div key={depoimento.id} className="col-12 col-md-6">
              <div className="p-4 rounded border h-100 d-flex flex-column" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)' }}>
                <div className="depoimento-rating mb-3 text-warning">
                  {[...Array(depoimento.avaliacao)].map((_, i) => (
                    <FaStar key={i} className="star me-1" />
                  ))}
                </div>
                <blockquote className="mb-4 text-light flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  "{depoimento.texto}"
                </blockquote>
                <div className="depoimento-author d-flex align-items-center mt-auto pt-3 border-top border-secondary border-opacity-25">
                  <div>
                    <strong className="text-white d-block">{depoimento.autor.nome}</strong>
                    <span className="small" style={{ color: '#70D0FB' }}>{depoimento.autor.cargo} • {depoimento.autor.empresa}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // CTA Comercial
  const CTASection = () => (
    <section className="cta-section section py-5 bg-white" aria-labelledby="cta-heading">
      <div className="container text-center mt-5 mb-5" style={{ maxWidth: '820px' }}>
        <h2 id="cta-heading" className="display-6 fw-bold mb-3">
          Pronto para Adequar seu Produto Digital à <span className="text-primary">ABNT NBR 17225</span>?
        </h2>
        <p className="lead text-muted mb-5">
          Converse diretamente com o Dr. Renan de Paula Binda e solicite uma proposta para a Auditoria Express ou Workshop Metodológico CADUX ®.
        </p>
        
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/contato" className="btn btn-primary btn-lg px-4 py-3 fw-bold shadow-sm">
            Solicitar Proposta de Auditoria
          </Link>
          <Link to="/academy" className="btn btn-outline-primary btn-lg px-4 py-3 fw-semibold">
            Conhecer Metodologia CADUX ®
          </Link>
        </div>
      </div>
    </section>
  );

  return (
    <main className="servicos-page" aria-label="Página de Serviços e Consultorias da LeFul">
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