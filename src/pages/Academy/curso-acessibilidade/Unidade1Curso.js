import React from 'react';
import { Link } from 'react-router-dom';
import { FaUniversalAccess, FaBookOpen, FaVideo, FaHeadphones, FaChartBar, FaUsers, FaLaptopCode, FaLightbulb, FaProjectDiagram, FaFileAlt, FaQuestionCircle, FaComments } from 'react-icons/fa';
import '../../../Styles/Academy.css';

const Unidade1Curso = () => {
  // Plano de ensino da unidade
  const planoEnsino = {
    titulo: "Fundamentos da Acessibilidade e Inclusão Digital",
    objetivos: {
      geral: "Compreender os conceitos fundamentais de acessibilidade e inclusão digital, seus marcos históricos e a importância na sociedade contemporânea.",
      especificos: [
        "Analisar a evolução histórica da acessibilidade digital",
        "Identificar os principais marcos legais nacionais e internacionais",
        "Reconhecer os princípios do design inclusivo",
        "Compreender a perspectiva social da deficiência"
      ]
    },
    competencias: [
      "Capacidade de análise crítica sobre acessibilidade digital",
      "Compreensão dos direitos das pessoas com deficiência",
      "Identificação de barreiras digitais",
      "Aplicação dos princípios de design universal"
    ],
    conteudos: [
      "História da acessibilidade digital",
      "Convenção sobre os Direitos das Pessoas com Deficiência (ONU)",
      "Lei Brasileira de Inclusão (LBI)",
      "WCAG e eMAG",
      "Modelo social vs. modelo médico da deficiência",
      "Princípios do Design Universal"
    ],
    estrategias: [
      "Aprendizagem baseada em problemas",
      "Estudos de caso reais",
      "Discussões em fórum",
      "Atividades reflexivas",
      "Simulações de navegação"
    ],
    avaliacao: [
      "Participação nos fóruns (20%)",
      "Atividades reflexivas (30%)",
      "Quiz formativo (20%)",
      "Estudo de caso aplicado (30%)"
    ],
    interacoes: [
      "Debates no fórum com colegas e tutor",
      "Feedback personalizado nas atividades",
      "Discussões síncronas opcionais",
      "Tutoria coletiva semanal"
    ],
    acessibilidade: [
      "Vídeos com legendas, audiodescrição e LIBRAS",
      "Textos em formato acessível (PDF, EPUB, HTML)",
      "Alternativas textuais para recursos visuais",
      "Navegação por teclado garantida",
      "Contraste adequado em todos os materiais"
    ]
  };

  // Recursos da unidade
  const recursos = [
    {
      tipo: "Vídeo-aula",
      titulo: "História da Acessibilidade Digital",
      descricao: "Aula expositiva com linha do tempo interativa sobre os marcos da acessibilidade digital",
      formato: <FaVideo size={20} />,
      duracao: "45 min",
      link: "#video-aula"
    },
    {
      tipo: "Podcast",
      titulo: "Direitos e Legislação",
      descricao: "Entrevista com especialista em direitos das pessoas com deficiência",
      formato: <FaHeadphones size={20} />,
      duracao: "32 min",
      link: "#podcast"
    },
    {
      tipo: "E-book",
      titulo: "Fundamentos do Design Inclusivo",
      descricao: "Capítulo interativo com estudos de caso e exercícios",
      formato: <FaBookOpen size={20} />,
      duracao: "60 min",
      link: "#ebook"
    },
    {
      tipo: "Infográfico",
      titulo: "Linha do Tempo da Acessibilidade",
      descricao: "Recurso visual interativo com os principais marcos históricos",
      formato: <FaChartBar size={20} />,
      duracao: "20 min",
      link: "#infografico"
    },
    {
      tipo: "Quiz",
      titulo: "Teste Seus Conhecimentos",
      descricao: "Questionário formativo com feedback imediato",
      formato: <FaQuestionCircle size={20} />,
      duracao: "15 min",
      link: "#quiz"
    },
    {
      tipo: "Fórum",
      titulo: "Discussão: Experiências Pessoais",
      descricao: "Espaço para compartilhar vivências relacionadas à acessibilidade",
      formato: <FaComments size={20} />,
      duracao: "Variável",
      link: "#forum"
    }
  ];

  // Atividades da unidade
  const atividades = [
    {
      id: 1,
      titulo: "Reflexão: Barreiras Encontradas",
      descricao: "Relato pessoal sobre experiências com barreiras de acessibilidade",
      tipo: "Escrita reflexiva",
      prazo: "7 dias",
      pontos: 20,
      link: "#atividade1"
    },
    {
      id: 2,
      titulo: "Análise de Caso: Site Governamental",
      descricao: "Avaliação de acessibilidade conforme diretrizes WCAG",
      tipo: "Estudo de caso",
      prazo: "10 dias",
      pontos: 30,
      link: "#atividade2"
    },
    {
      id: 3,
      titulo: "Quiz Formativo",
      descricao: "Questionário sobre conceitos fundamentais",
      tipo: "Avaliação",
      prazo: "5 dias",
      pontos: 20,
      link: "#quiz"
    },
    {
      id: 4,
      titulo: "Participação no Fórum",
      descricao: "Contribuições qualificadas nas discussões propostas",
      tipo: "Discussão",
      prazo: "Contínuo",
      pontos: 30,
      link: "#forum"
    }
  ];

  return (
    <main>
      <div role="main">
        {/* Hero Section da Unidade */}
        <section 
          id="unidade-hero" 
          className="text-white" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(51, 51, 51, 0.95) 0%, rgba(30, 30, 30, 0.95) 100%)',
            padding: '5rem 0 7rem' 
          }}
          aria-labelledby="unidade-heading"
        >
          <div className="container container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 order-md-2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Funidade1-hero.png?alt=media&token=12345"
                  className="img-fluid"
                  alt="Ilustração representando acessibilidade digital"
                  loading="lazy"
                />
              </div>
              
              <div className="col-12 col-md-6 order-md-1 mt-5 mt-md-0">
                <div className="d-flex align-items-center mb-3">
                  <span className="badge bg-primary me-3">Unidade 1</span>
                  <span className="text-muted">8 horas de conteúdo</span>
                </div>
                
                <h1 id="unidade-heading" className="display-4 mb-4">
                  <span style={{ color: '#EB5F2C' }}>Fundamentos da</span><br />
                  Acessibilidade Digital
                </h1>
                
                <div 
                  role="separator" 
                  aria-hidden="true"
                  style={{ 
                    margin: '1.5rem 0', 
                    color: 'rgba(235, 95, 44, 1)', 
                    width: '150px', 
                    border: '0', 
                    borderTop: '3px solid' 
                  }}
                ></div>
                
                <p className="lead" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                  Explore os conceitos fundamentais, marcos históricos e legislação que formam a base da acessibilidade digital e do design inclusivo.
                </p>
                
                <div className="d-flex gap-3 mt-5">
                  <Link 
                    to="#plano-ensino" 
                    className="btn btn-primary px-4 py-3"
                    style={{ backgroundColor: '#EB5F2C', border: 'none' }}
                    aria-label="Ver plano de ensino da unidade"
                  >
                    Plano de Ensino
                  </Link>
                  <Link 
                    to="#recursos" 
                    className="btn btn-outline-light px-4 py-3"
                    aria-label="Explorar recursos da unidade"
                  >
                    Conteúdos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Plano de Ensino */}
        <section 
          id="plano-ensino"
          className="split-section"
          aria-labelledby="plano-heading"
        >
          <div className="split-container">
            <div className="split-image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Funidade1-plano.png?alt=media&token=54321"
                alt="Diagrama do plano de ensino da unidade"
                loading="lazy"
                aria-describedby="plano-image-desc"
              />
              <span id="plano-image-desc" className="sr-only">Diagrama mostrando a estrutura do plano de ensino com objetivos, conteúdos e atividades</span>
            </div>

            <div className="split-content">
              <h2 id="plano-heading" className="split-title">
                Plano de <span className="split-highlight">Ensino</span>
              </h2>
              
              <div className="split-divider" role="separator" aria-hidden="true"></div>
              
              <h3 className="h4 mt-4 mb-3">Objetivos da Unidade</h3>
              <p className="split-text"><strong>Geral:</strong> {planoEnsino.objetivos.geral}</p>
              <p className="split-text"><strong>Específicos:</strong></p>
              <ul className="split-list" aria-label="Objetivos específicos">
                {planoEnsino.objetivos.especificos.map((obj, index) => (
                  <li key={index}>• {obj}</li>
                ))}
              </ul>
              
              <h3 className="h4 mt-4 mb-3">Competências Desenvolvidas</h3>
              <ul className="split-list" aria-label="Competências desenvolvidas">
                {planoEnsino.competencias.map((comp, index) => (
                  <li key={index}>• {comp}</li>
                ))}
              </ul>
              
              <h3 className="h4 mt-4 mb-3">Conteúdos Programáticos</h3>
              <ul className="split-list" aria-label="Conteúdos programáticos">
                {planoEnsino.conteudos.map((cont, index) => (
                  <li key={index}>• {cont}</li>
                ))}
              </ul>
              
              <div className="mt-4">
                <Link 
                  to="#recursos" 
                  className="btn btn-outline-dark btn-lg px-4 py-2"
                  aria-label="Explorar recursos da unidade"
                >
                  Ver Recursos da Unidade →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Recursos da Unidade */}
        <section 
          id="recursos"
          style={{ 
            padding: '6rem 0',
            backgroundColor: 'rgba(51, 51, 51, 1)',
            color: 'white'
          }}
          aria-labelledby="recursos-heading"
        >
          <div className="container">
            <div className="text-center mb-6">
              <h2 id="recursos-heading" className="display-5 mb-4">
                Recursos de <span style={{ color: '#EB5F2C' }}>Aprendizagem</span>
              </h2>
              <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
                Conteúdos em múltiplos formatos para diferentes estilos de aprendizagem
              </p>
            </div>
            
            <div className="row g-4">
              {recursos.map((recurso, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 model-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <span style={{ color: '#EB5F2C', marginRight: '10px' }}>{recurso.formato}</span>
                        <span className="text-muted small">{recurso.tipo}</span>
                      </div>
                      <h3 className="h4 mb-3">{recurso.titulo}</h3>
                      <p className="card-text">{recurso.descricao}</p>
                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <span className="badge bg-light text-dark">{recurso.duracao}</span>
                        <Link 
                          to={recurso.link} 
                          className="text-decoration-none"
                          style={{ color: '#EB5F2C' }}
                          aria-label={`Acessar ${recurso.tipo}: ${recurso.titulo}`}
                        >
                          Acessar →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Vídeo-aula */}
        <section 
          id="video-aula"
          className="py-8"
          style={{ backgroundColor: '#f8f8f8', padding: '8rem' }}
          aria-labelledby="video-heading"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://www.youtube.com/embed/VIDEO_ID" 
                    title="Vídeo-aula: História da Acessibilidade Digital"
                    allowFullScreen
                    aria-label="Vídeo-aula sobre história da acessibilidade digital"
                  ></iframe>
                </div>
              </div>
              <div className="col-md-6">
                <h2 id="video-heading" className="display-5 mb-4">
                  Vídeo-aula: <span style={{ color: '#EB5F2C' }}>História da Acessibilidade</span>
                </h2>
                <div 
                  role="separator" 
                  aria-hidden="true"
                  style={{ 
                    width: '100px', 
                    height: '3px', 
                    backgroundColor: '#EB5F2C',
                    margin: '1.5rem 0'
                  }}
                ></div>
                <p>
                  Nesta vídeo-aula, a professora Dra. Ana Silva traça a evolução da acessibilidade digital desde seus primórdios até os dias atuais, destacando os principais marcos legais e tecnológicos.
                </p>
                <ul className="mt-4">
                  <li className="mb-2">• Legendas em português, inglês e espanhol</li>
                  <li className="mb-2">• Audiodescrição disponível</li>
                  <li className="mb-2">• Janela de LIBRAS opcional</li>
                  <li className="mb-2">• Transcrição interativa</li>
                </ul>
                <div className="mt-4">
                  <Link 
                    to="#transcricao" 
                    className="btn btn-outline-dark"
                    aria-label="Acessar transcrição da vídeo-aula"
                  >
                    <FaFileAlt className="me-2" /> Transcrição Completa
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Atividades */}
        <section 
          id="atividades"
          style={{ padding: '6rem 0' }}
          aria-labelledby="atividades-heading"
        >
          <div className="container">
            <h2 id="atividades-heading" className="display-5 mb-5 text-center">
              Atividades de <span style={{ color: '#EB5F2C' }}>Aprendizagem</span>
            </h2>
            
            <div className="row g-4">
              {atividades.map((atividade) => (
                <div key={atividade.id} className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h3 className="h4 mb-0">{atividade.titulo}</h3>
                        <span className="badge bg-primary">{atividade.pontos} pontos</span>
                      </div>
                      <p className="card-text">{atividade.descricao}</p>
                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <span className="text-muted small">Prazo: {atividade.prazo}</span>
                        <Link 
                          to={atividade.link} 
                          className="btn btn-sm btn-outline-primary"
                          aria-label={`Acessar atividade: ${atividade.titulo}`}
                        >
                          Detalhes
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Fórum */}
        <section 
          id="forum"
          style={{ 
            padding: '6rem 0',
            background: 'linear-gradient(135deg, rgba(51, 51, 51, 0.95) 0%, rgba(30, 30, 30, 0.95) 100%)',
            color: 'white'
          }}
          aria-labelledby="forum-heading"
        >
          <div className="container text-center">
            <h2 id="forum-heading" className="display-5 mb-4">
              Espaço de <span style={{ color: '#EB5F2C' }}>Discussão</span>
            </h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              Participe do fórum temático desta unidade e compartilhe suas reflexões com colegas e tutores
            </p>
            
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card text-dark mb-4">
                  <div className="card-body p-4 text-start">
                    <h3 className="h5 mb-3">Tema: Experiências Pessoais com Acessibilidade</h3>
                    <p>
                      Compartilhe uma experiência pessoal onde você encontrou ou superou barreiras de acessibilidade. 
                      Pode ser tanto como usuário quanto como profissional. Como essa experiência influenciou sua 
                      percepção sobre design inclusivo?
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <span className="badge bg-light text-dark">30 pontos</span>
                      <span className="text-muted small">Participações até: 15/11/2023</span>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
                  <Link 
                    to="#forum-detalhes" 
                    className="btn btn-primary px-5 py-3"
                    style={{ backgroundColor: '#EB5F2C', border: 'none' }}
                    aria-label="Acessar fórum de discussão"
                  >
                    Acessar Fórum
                  </Link>
                  <Link 
                    to="#diretrizes-forum" 
                    className="btn btn-outline-light px-5 py-3"
                    aria-label="Ver diretrizes de participação"
                  >
                    Diretrizes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Próximos Passos */}
        <section 
          id="proximos-passos"
          style={{ padding: '6rem 0' }}
          aria-labelledby="proximos-heading"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <h2 id="proximos-heading" className="display-5 mb-4">
                  Próximos <span style={{ color: '#EB5F2C' }}>Passos</span>
                </h2>
                <div 
                  role="separator" 
                  aria-hidden="true"
                  style={{ 
                    width: '100px', 
                    height: '3px', 
                    backgroundColor: '#EB5F2C',
                    margin: '1.5rem auto'
                  }}
                ></div>
                <p className="lead mb-5">
                  Você completou a introdução à Unidade 1. Recomendamos seguir esta sequência:
                </p>
                
                <div className="d-flex flex-column gap-4 mb-5">
                  <div className="d-flex align-items-start">
                    <span className="badge bg-primary me-3" style={{ fontSize: '1.25rem' }}>1</span>
                    <div className="text-start">
                      <h3 className="h5">Assistir à Vídeo-aula</h3>
                      <p className="mb-0">Comece pela vídeo-aula principal para ter uma visão geral do tema</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <span className="badge bg-primary me-3" style={{ fontSize: '1.25rem' }}>2</span>
                    <div className="text-start">
                      <h3 className="h5">Explorar Materiais Complementares</h3>
                      <p className="mb-0">Leia o e-book e explore os infográficos para aprofundar seu conhecimento</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <span className="badge bg-primary me-3" style={{ fontSize: '1.25rem' }}>3</span>
                    <div className="text-start">
                      <h3 className="h5">Participar do Fórum</h3>
                      <p className="mb-0">Compartilhe suas reflexões e interaja com colegas</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <span className="badge bg-primary me-3" style={{ fontSize: '1.25rem' }}>4</span>
                    <div className="text-start">
                      <h3 className="h5">Realizar Atividades</h3>
                      <p className="mb-0">Complete as tarefas propostas para consolidar seu aprendizado</p>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                  <Link 
                    to="/cursoacessibilidade" 
                    className="btn btn-outline-dark px-5 py-3"
                    aria-label="Voltar para a página do curso"
                  >
                    ← Voltar ao Curso
                  </Link>
                  <Link 
                    to="/unidade2curso" 
                    className="btn btn-primary px-5 py-3"
                    style={{ backgroundColor: '#EB5F2C', border: 'none' }}
                    aria-label="Ir para a próxima unidade"
                  >
                    Próxima Unidade →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Unidade1Curso;