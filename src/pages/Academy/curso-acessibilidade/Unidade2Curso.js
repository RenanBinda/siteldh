import React from 'react';
import { FaVideo, FaHeadphones, FaLaptopCode, FaBookOpen, FaQuestionCircle, FaComments, FaPencilAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../Styles/Academy.css';

const Unidade2Curso = () => {
  // Dados da unidade
  const unidade = {
    id: 2,
    titulo: "Tipos de Deficiência e Interação com Recursos Digitais",
    objetivos: {
      gerais: "Compreender as particularidades das diferentes deficiências e suas implicações na interação com recursos digitais.",
      especificos: [
        "Identificar as principais barreiras enfrentadas por pessoas com diferentes tipos de deficiência",
        "Conhecer tecnologias assistivas e suas aplicações",
        "Analisar casos reais de interação com recursos digitais"
      ]
    },
    competencias: [
      "Reconhecimento das necessidades específicas de cada tipo de deficiência",
      "Análise crítica de recursos digitais sob a perspectiva da acessibilidade",
      "Proposição de soluções inclusivas para diferentes cenários"
    ],
    conteudo: [
      "Deficiência visual: baixa visão e cegueira",
      "Deficiência auditiva: surdez e perda auditiva",
      "Deficiência física/motora",
      "Deficiência intelectual e cognitiva",
      "Transtornos do espectro autista (TEA)",
      "Tecnologias assistivas: leitores de tela, ampliadores, softwares de reconhecimento de voz etc."
    ],
    estrategias: [
      "Aprendizagem baseada em problemas reais",
      "Estudos de caso com análise de situações reais",
      "Simulações de navegação com diferentes deficiências",
      "Discussões em fórum sobre experiências pessoais"
    ],
    avaliacao: [
      "Quiz formativo sobre conceitos-chave (20%)",
      "Participação em fórum temático (30%)",
      "Análise crítica de um recurso digital (50%)"
    ],
    recursos: [
      {
        tipo: "Vídeo-aula",
        titulo: "Diversidade funcional e tecnologia",
        descricao: "Aula expositiva com especialista em acessibilidade e depoimentos de pessoas com deficiência",
        formato: <FaVideo />,
        duracao: "45 min",
        link: "#video-aula"
      },
      {
        tipo: "Podcast",
        titulo: "Tecnologias assistivas na prática",
        descricao: "Entrevista com desenvolvedor de tecnologias assistivas e usuários",
        formato: <FaHeadphones />,
        duracao: "30 min",
        link: "#podcast"
      },
      {
        tipo: "E-book interativo",
        titulo: "Guia de acessibilidade digital",
        descricao: "Material com infográficos, casos reais e exercícios interativos",
        formato: <FaBookOpen />,
        duracao: "2h",
        link: "#ebook"
      },
      {
        tipo: "Simulador",
        titulo: "Experiência de navegação com diferentes deficiências",
        descricao: "Ferramenta que simula como pessoas com diferentes deficiências interagem com sites",
        formato: <FaLaptopCode />,
        duracao: "1h",
        link: "#simulador"
      }
    ],
    atividades: [
      {
        tipo: "Reflexão",
        titulo: "Diário de aprendizagem",
        descricao: "Registro das percepções e descobertas ao longo da unidade",
        formato: <FaPencilAlt />,
        link: "#diario"
      },
      {
        tipo: "Fórum",
        titulo: "Discussão sobre barreiras digitais",
        descricao: "Compartilhamento de experiências e soluções para barreiras encontradas",
        formato: <FaComments />,
        link: "#forum"
      },
      {
        tipo: "Quiz",
        titulo: "Verificação de aprendizagem",
        descricao: "Questionário sobre os conceitos estudados na unidade",
        formato: <FaQuestionCircle />,
        link: "#quiz"
      }
    ]
  };

  return (
    <main className="unidade-curso">
      {/* Hero Section */}
      <section 
        id="unidade-hero" 
        className="text-white" 
        style={{ 
          background: 'linear-gradient(135deg, rgba(51, 51, 51, 0.95) 0%, rgba(30, 30, 30, 0.95) 100%)',
          padding: '5rem 0 7rem' 
        }}
        aria-labelledby="unidade-heading"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 order-md-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Funidade2-curso.png?alt=media&token=87654321"
                className="img-fluid"
                alt="Ilustração representando diversidade e acessibilidade digital"
                loading="lazy"
              />
            </div>
            
            <div className="col-12 col-md-6 order-md-1 mt-5 mt-md-0">
              <div className="d-flex align-items-center mb-3">
                <span className="badge bg-primary me-3">Unidade 2</span>
                <span className="text-muted">Carga horária: 10 horas</span>
              </div>
              
              <h1 id="unidade-heading" className="display-4 mb-4">
                {unidade.titulo}
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
                Explore as particularidades das diferentes deficiências e como elas impactam a interação com recursos digitais.
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
                  to="#conteudos" 
                  className="btn btn-outline-light px-4 py-3"
                  aria-label="Acessar conteúdos da unidade"
                >
                  Acessar Conteúdos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plano de Ensino */}
      <section 
        id="plano-ensino"
        className="py-6"
        style={{ backgroundColor: '#f8f8f8' }}
        aria-labelledby="plano-heading"
      >
        <div className="container">
          <h2 id="plano-heading" className="display-5 mb-5 text-center">
            Plano de <span style={{ color: '#EB5F2C' }}>Ensino</span>
          </h2>
          
          <div className="row g-4">
            {/* Objetivos */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">Objetivos de Aprendizagem</h3>
                  <p><strong>Objetivo Geral:</strong> {unidade.objetivos.gerais}</p>
                  
                  <h4 className="h5 mt-4">Objetivos Específicos:</h4>
                  <ul>
                    {unidade.objetivos.especificos.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Competências */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">Competências e Habilidades</h3>
                  <ul>
                    {unidade.competencias.map((comp, i) => (
                      <li key={i}>{comp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Conteúdos */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">Conteúdos Programáticos</h3>
                  <ul>
                    {unidade.conteudo.map((cont, i) => (
                      <li key={i}>{cont}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Estratégias */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">Estratégias Pedagógicas</h3>
                  <ul>
                    {unidade.estrategias.map((estr, i) => (
                      <li key={i}>{estr}</li>
                    ))}
                  </ul>
                  
                  <h4 className="h5 mt-4">Critérios de Avaliação</h4>
                  <ul>
                    {unidade.avaliacao.map((av, i) => (
                      <li key={i}>{av}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdos e Recursos */}
      <section 
        id="conteudos"
        className="py-6"
        aria-labelledby="conteudos-heading"
      >
        <div className="container">
          <h2 id="conteudos-heading" className="display-5 mb-5 text-center">
            Conteúdos e <span style={{ color: '#EB5F2C' }}>Recursos</span>
          </h2>
          
          <div className="row g-4">
            {unidade.recursos.map((recurso, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4 text-center">
                    <div className="mb-3" style={{ color: '#EB5F2C', fontSize: '2rem' }}>
                      {recurso.formato}
                    </div>
                    <span className="badge bg-light text-dark mb-2">{recurso.tipo}</span>
                    <h3 className="h5 mb-3">{recurso.titulo}</h3>
                    <p className="small">{recurso.descricao}</p>
                    <p className="text-muted small">Duração: {recurso.duracao}</p>
                    <Link 
                      to={recurso.link} 
                      className="btn btn-sm btn-outline-primary mt-2"
                      aria-label={`Acessar ${recurso.tipo}: ${recurso.titulo}`}
                    >
                      Acessar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atividades */}
      <section 
        id="atividades"
        className="py-6"
        style={{ backgroundColor: '#f8f8f8' }}
        aria-labelledby="atividades-heading"
      >
        <div className="container">
          <h2 id="atividades-heading" className="display-5 mb-5 text-center">
            Atividades de <span style={{ color: '#EB5F2C' }}>Aprendizagem</span>
          </h2>
          
          <div className="row g-4">
            {unidade.atividades.map((atividade, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div style={{ color: '#EB5F2C', fontSize: '1.5rem', marginRight: '1rem' }}>
                        {atividade.formato}
                      </div>
                      <span className="badge bg-light text-dark">{atividade.tipo}</span>
                    </div>
                    <h3 className="h5 mb-3">{atividade.titulo}</h3>
                    <p>{atividade.descricao}</p>
                    <Link 
                      to={atividade.link} 
                      className="btn btn-sm btn-primary mt-3"
                      aria-label={`Acessar atividade ${atividade.tipo}: ${atividade.titulo}`}
                    >
                      Realizar atividade
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navegação entre unidades */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <Link 
              to="/curso-acessibilidade/unidade-1" 
              className="btn btn-outline-primary px-4 py-2"
              aria-label="Voltar para Unidade 1"
            >
              <FaChevronLeft className="me-2" /> Unidade Anterior
            </Link>
            <Link 
              to="/curso-acessibilidade/unidade-3" 
              className="btn btn-primary px-4 py-2"
              style={{ backgroundColor: '#EB5F2C', border: 'none' }}
              aria-label="Avançar para Unidade 3"
            >
              Próxima Unidade <FaChevronRight className="ms-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Unidade2Curso;