import React from 'react';
import { Link } from 'react-router-dom';
import { FaUniversalAccess, FaBookOpen, FaVideo, FaHeadphones, FaChartBar, FaUsers, FaLaptopCode, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import '../../Styles/Academy.css';

const CursoAcessibilidade = () => {
  // Dados das unidades do curso
  const unidades = [
    {
      id: 1,
      titulo: "Fundamentos da Acessibilidade e Inclusão Digital",
      icone: <FaUniversalAccess size={24} />,
      objetivos: [
        "Compreender a evolução histórica da acessibilidade",
        "Conhecer os marcos legais e direitos das pessoas com deficiência",
        "Analisar a perspectiva social da deficiência"
      ],
      recursos: [
        { tipo: "E-book interativo", icone: <FaBookOpen /> },
        { tipo: "Podcast", icone: <FaHeadphones /> },
        { tipo: "Vídeo explicativo", icone: <FaVideo /> }
      ],
      duracao: "8 horas"
    },
    {
      id: 2,
      titulo: "Tipos de Deficiência e Interação com Recursos Digitais",
      icone: <FaUsers size={24} />,
      objetivos: [
        "Identificar as particularidades das diferentes deficiências",
        "Reconhecer barreiras comunicacionais e tecnológicas",
        "Conhecer tecnologias assistivas"
      ],
      recursos: [
        { tipo: "Entrevistas em vídeo", icone: <FaVideo /> },
        { tipo: "Simulações de navegação", icone: <FaLaptopCode /> },
        { tipo: "Infográfico dinâmico", icone: <FaChartBar /> }
      ],
      duracao: "10 horas"
    },
    {
      id: 3,
      titulo: "Recursos Digitais de Aprendizagem e suas Características",
      icone: <FaLaptopCode size={24} />,
      objetivos: [
        "Classificar diferentes tipos de RDA",
        "Avaliar a acessibilidade em diferentes mídias",
        "Aplicar princípios de UX inclusivo"
      ],
      recursos: [
        { tipo: "Galeria interativa", icone: <FaBookOpen /> },
        { tipo: "Vídeo-aula demonstrativa", icone: <FaVideo /> },
        { tipo: "Quiz formativo", icone: <FaChartBar /> }
      ],
      duracao: "12 horas"
    },
    {
      id: 4,
      titulo: "Normas e Diretrizes Técnicas para Acessibilidade Digital",
      icone: <FaBookOpen size={24} />,
      objetivos: [
        "Dominar as WCAG 2.2 e eMAG",
        "Aplicar diretrizes de acessibilidade em HTML/CSS",
        "Implementar estrutura semântica acessível"
      ],
      recursos: [
        { tipo: "Manual prático", icone: <FaBookOpen /> },
        { tipo: "Tutorial técnico", icone: <FaVideo /> },
        { tipo: "Exercícios práticos", icone: <FaLaptopCode /> }
      ],
      duracao: "15 horas"
    },
    {
      id: 5,
      titulo: "Usabilidade e Experiência do Usuário com Foco Inclusivo",
      icone: <FaChartBar size={24} />,
      objetivos: [
        "Analisar dimensões da experiência do usuário",
        "Conduzir avaliações de UX para PcD",
        "Aplicar métodos de teste com usuários reais"
      ],
      recursos: [
        { tipo: "Estudo de caso", icone: <FaBookOpen /> },
        { tipo: "Template de persona", icone: <FaUsers /> },
        { tipo: "Mapas de empatia", icone: <FaChartBar /> }
      ],
      duracao: "14 horas"
    },
    {
      id: 6,
      titulo: "Gestão do Conhecimento para Acessibilidade",
      icone: <FaLightbulb size={24} />,
      objetivos: [
        "Aplicar a espiral do conhecimento em projetos inclusivos",
        "Transformar conhecimento tácito em explícito",
        "Documentar boas práticas como ativos organizacionais"
      ],
      recursos: [
        { tipo: "Podcast com pesquisadores", icone: <FaHeadphones /> },
        { tipo: "Atividade de co-criação", icone: <FaUsers /> },
        { tipo: "Painel colaborativo", icone: <FaChartBar /> }
      ],
      duracao: "10 horas"
    },
    {
      id: 7,
      titulo: "Modelo de Inclusão e Acessibilidade Digital em RDA",
      icone: <FaProjectDiagram size={24} />,
      objetivos: [
        "Compreender o modelo proposto por Renan Binda",
        "Aplicar as dimensões do modelo CADUX",
        "Utilizar as cartas CADUX como ferramenta"
      ],
      recursos: [
        { tipo: "E-book explicativo", icone: <FaBookOpen /> },
        { tipo: "Vídeo-tutorial", icone: <FaVideo /> },
        { tipo: "Simulação prática", icone: <FaLaptopCode /> }
      ],
      duracao: "12 horas"
    },
    {
      id: 8,
      titulo: "Projeto Final – Aplicação Prática",
      icone: <FaUniversalAccess size={24} />,
      objetivos: [
        "Desenvolver ou avaliar um recurso digital acessível",
        "Aplicar o modelo e diretrizes aprendidas",
        "Compartilhar práticas em comunidade"
      ],
      recursos: [
        { tipo: "Template de plano", icone: <FaBookOpen /> },
        { tipo: "Mentoria gravada", icone: <FaVideo /> },
        { tipo: "Fórum interativo", icone: <FaUsers /> }
      ],
      duracao: "20 horas"
    }
  ];

  // Dados sobre o curso
  const sobreCurso = {
    objetivoGeral: "Capacitar profissionais a compreender, aplicar e disseminar diretrizes de acessibilidade digital em recursos digitais com foco na experiência inclusiva de pessoas com deficiência, promovendo equidade, usabilidade e inclusão por meio do design centrado no usuário.",
    publicoAlvo: "Profissionais da educação, desenvolvedores, designers, pesquisadores, gestores e demais interessados em acessibilidade digital, do nível técnico ao superior, iniciantes ou especialistas.",
    cargaHoraria: "101 horas",
    modalidade: "Online com atividades síncronas e assíncronas",
    certificacao: "Certificado reconhecido pelo MEC como curso de extensão"
  };

  // Diferenciais do curso
  const diferenciais = [
    "Trilhas adaptativas para diferentes níveis de conhecimento",
    "Recomendações personalizadas de materiais",
    "Conteúdos em múltiplos formatos (vídeo, áudio, texto, interativos)",
    "Acesso progressivo aos conteúdos",
    "Fóruns temáticos por unidade",
    "Avaliações formativas e feedback contínuo",
    "Materiais totalmente acessíveis"
  ];

  return (
    <main>
      <div role="main">
        {/* Hero Section */}
        <section 
          id="curso-hero" 
          className="text-white" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(51, 51, 51, 0.95) 0%, rgba(30, 30, 30, 0.95) 100%)',
            padding: '5rem 0 7rem' 
          }}
          aria-labelledby="curso-heading"
        >
          <div className="container container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 order-md-2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcurso-acessibilidade.png?alt=media&token=12345"
                  className="img-fluid"
                  alt="Ilustração representando acessibilidade digital"
                  loading="lazy"
                />
              </div>
              
              <div className="col-12 col-md-6 order-md-1 mt-5 mt-md-0">
                <h1 id="curso-heading" className="display-4 mb-4">
                  <span style={{ color: '#EB5F2C' }}>Design Inclusivo</span><br />
                  e Experiência do Usuário
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
                  Curso completo com foco em acessibilidade digital, preparando profissionais para criar experiências inclusivas e acessíveis.
                </p>
                
                <div className="d-flex gap-3 mt-5">
                  <Link 
                    to="#detalhes" 
                    className="btn btn-primary px-4 py-3"
                    style={{ backgroundColor: '#EB5F2C', border: 'none' }}
                    aria-label="Conheça os detalhes do curso"
                  >
                    Detalhes do Curso
                  </Link>
                  <Link 
                    to="#inscricao" 
                    className="btn btn-outline-light px-4 py-3"
                    aria-label="Inscreva-se no curso"
                  >
                    Pré-inscrição
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Detalhes do Curso */}
        <section 
          id="detalhes"
          className="split-section"
          aria-labelledby="detalhes-heading"
        >
          <div className="split-container">
            <div className="split-image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcurso-detalhes.png?alt=media&token=54321"
                alt="Diagrama do curso de acessibilidade digital"
                loading="lazy"
                aria-describedby="curso-image-desc"
              />
              <span id="curso-image-desc" className="sr-only">Diagrama mostrando a estrutura modular do curso com 8 unidades</span>
            </div>

            <div className="split-content">
              <h2 id="detalhes-heading" className="split-title">
                Sobre o <span className="split-highlight">Curso</span>
              </h2>
              
              <div className="split-divider" role="separator" aria-hidden="true"></div>
              
              <p className="split-text">
                <strong>Objetivo Geral:</strong> {sobreCurso.objetivoGeral}
              </p>
              
              <p className="split-text">
                <strong>Público-alvo:</strong> {sobreCurso.publicoAlvo}
              </p>
              
              <p className="split-text">
                <strong>Carga horária:</strong> {sobreCurso.cargaHoraria} | <strong>Modalidade:</strong> {sobreCurso.modalidade}
              </p>
              
              <p className="split-text">
                <strong>Certificação:</strong> {sobreCurso.certificacao}
              </p>
              
              <h3 className="mt-4 mb-3" style={{ fontSize: '1.5rem' }}>Diferenciais:</h3>
              <ul className="split-list" aria-label="Diferenciais do curso">
                {diferenciais.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Seção Estrutura do Curso */}
        <section 
          id="estrutura"
          style={{ 
            padding: '6rem 0',
            backgroundColor: 'rgba(51, 51, 51, 1)',
            color: 'white'
          }}
          aria-labelledby="estrutura-heading"
        >
          <div className="container">
            <div className="text-center mb-6">
              <h2 id="estrutura-heading" className="display-5 mb-4">
                Estrutura do <span style={{ color: '#EB5F2C' }}>Curso</span>
              </h2>
              <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
                Conheça as 8 unidades que compõem o curso completo de Design Inclusivo e Acessibilidade Digital
              </p>
            </div>
            
            <div className="row g-4">
              {unidades.map((unidade) => (
                <div key={unidade.id} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 model-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                    <div className="card-body p-4">
                      <div className="mb-4" style={{ color: '#EB5F2C', fontSize: '2rem' }}>
                        {unidade.icone}
                      </div>
                      <h3 className="h4 mb-3">{unidade.titulo}</h3>
                      
                      <div className="mb-3">
                        <h4 className="h6 text-primary">Objetivos:</h4>
                        <ul>
                          {unidade.objetivos.map((obj, i) => (
                            <li key={i} className="small">{obj}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-3">
                        <h4 className="h6 text-primary">Recursos:</h4>
                        <div className="d-flex flex-wrap gap-2">
                          {unidade.recursos.map((recurso, i) => (
                            <span key={i} className="badge bg-light text-dark">
                              {recurso.icone} {recurso.tipo}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-2">
                        <Link 
                          to={`/unidade1curso`} 
                          className="text-decoration-none"
                          style={{ color: '#EB5F2C' }}
                          aria-label={`Saiba mais sobre ${unidades.titulo}`}
                        >
                          Ver detalhes da unidade →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Metodologia */}
        <section 
          id="metodologia"
          className="py-8"
          style={{ backgroundColor: '#f8f8f8', padding: '8rem' }}
          aria-labelledby="metodologia-heading"
        >
          <div className="container">
            <div className="row align-items-end mb-6">
              <div className="col-md-8">
                <h2 id="metodologia-heading" className="display-5 mb-3">
                  Nossa <span style={{ color: '#EB5F2C' }}>Metodologia</span>
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
              </div>
            </div>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <div className="card-body">
                    <h3 className="h4 mb-4">Abordagem Pedagógica</h3>
                    <p>
                      Utilizamos uma combinação de metodologias ativas, aprendizagem baseada em projetos e 
                      design thinking para garantir uma experiência de aprendizagem significativa e aplicável.
                    </p>
                    <ul className="mt-4">
                      <li className="mb-2">• Aprendizagem baseada em problemas reais</li>
                      <li className="mb-2">• Trilhas adaptativas conforme nível de conhecimento</li>
                      <li className="mb-2">• Feedback contínuo e personalizado</li>
                      <li className="mb-2">• Comunidade de prática para troca de experiências</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <div className="card-body">
                    <h3 className="h4 mb-4">Recursos e Ferramentas</h3>
                    <p>
                      Todos os materiais são desenvolvidos seguindo princípios de acessibilidade e design universal, 
                      garantindo que todos os participantes tenham igual acesso ao conhecimento.
                    </p>
                    <div className="row mt-4">
                      <div className="col-6">
                        <ul>
                          <li className="mb-2">• Vídeos com legendas</li>
                          <li className="mb-2">• Transcrições de áudio</li>
                          <li className="mb-2">• E-books acessíveis</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul>
                          <li className="mb-2">• Ferramentas colaborativas</li>
                          <li className="mb-2">• Simuladores de deficiência</li>
                          <li className="mb-2">• Avaliadores automáticos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Inscrição */}
        <section 
          id="inscricao"
          style={{ 
            padding: '6rem 0',
            background: 'linear-gradient(135deg, rgba(51, 51, 51, 0.95) 0%, rgba(30, 30, 30, 0.95) 100%)',
            color: 'white'
          }}
          aria-labelledby="inscricao-heading"
        >
          <div className="container text-center">
            <h2 id="inscricao-heading" className="display-5 mb-4">
              Inscreva-se no <span style={{ color: '#EB5F2C' }}>Curso</span>
            </h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              Garanta sua vaga no curso completo de Design Inclusivo e Acessibilidade Digital
            </p>
            
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="card text-dark">
                  <div className="card-body p-5">
                    <h3 className="mb-4">Pré-inscrição</h3>
                    <form>
                      <div className="mb-3">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Nome completo"
                          aria-label="Nome completo"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input 
                          type="email" 
                          className="form-control" 
                          placeholder="E-mail"
                          aria-label="E-mail"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input 
                          type="tel" 
                          className="form-control" 
                          placeholder="Telefone"
                          aria-label="Telefone"
                        />
                      </div>
                      <div className="mb-3">
                        <select className="form-select" aria-label="Nível de conhecimento" required>
                          <option value="">Selecione seu nível de conhecimento</option>
                          <option value="iniciante">Iniciante</option>
                          <option value="intermediario">Intermediário</option>
                          <option value="avancado">Avançado</option>
                        </select>
                      </div>
                      <div className="mb-3 form-check">
                        <input 
                          type="checkbox" 
                          className="form-check-input" 
                          id="newsletter"
                          aria-label="Receber newsletter"
                        />
                        <label className="form-check-label" htmlFor="newsletter">
                          Desejo receber informações sobre outros cursos
                        </label>
                      </div>
                      <button 
                        type="submit" 
                        className="btn btn-primary w-100 py-3"
                        style={{ backgroundColor: '#EB5F2C', border: 'none' }}
                        aria-label="Enviar pré-inscrição"
                      >
                        Enviar Pré-inscrição
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-5">
              <p className="small">
                Ou entre em contato diretamente: <br />
                <a href="mailto:cursos@leful.com.br" style={{ color: '#EB5F2C' }}>cursos@leful.com.br</a> | (XX) XXXX-XXXX
              </p>
            </div>
          </div>
        </section>

        {/* Seção FAQ */}
        <section 
          id="faq"
          style={{ padding: '6rem 0' }}
          aria-labelledby="faq-heading"
        >
          <div className="container">
            <h2 id="faq-heading" className="display-5 mb-5 text-center">
              Perguntas <span style={{ color: '#EB5F2C' }}>Frequentes</span>
            </h2>
            
            <div className="accordion" id="accordionFAQ">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button 
                    className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne" 
                    aria-expanded="true" 
                    aria-controls="collapseOne"
                  >
                    Quais são os requisitos para participar do curso?
                  </button>
                </h3>
                <div 
                  id="collapseOne" 
                  className="accordion-collapse collapse show" 
                  aria-labelledby="headingOne" 
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body">
                    O curso é aberto a qualquer pessoa interessada no tema, sem pré-requisitos formais. 
                    No entanto, recomendamos conhecimentos básicos de design ou desenvolvimento para melhor aproveitamento.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingTwo">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseTwo" 
                    aria-expanded="false" 
                    aria-controls="collapseTwo"
                  >
                    O curso tem certificado?
                  </button>
                </h3>
                <div 
                  id="collapseTwo" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingTwo" 
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body">
                    Sim, ao concluir todas as atividades e atingir pelo menos 70% de aproveitamento, 
                    você receberá um certificado de conclusão reconhecido como curso de extensão.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingThree">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseThree" 
                    aria-expanded="false" 
                    aria-controls="collapseThree"
                  >
                    Como funciona o acesso aos materiais?
                  </button>
                </h3>
                <div 
                  id="collapseThree" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingThree" 
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body">
                    Os materiais ficam disponíveis em nossa plataforma de aprendizagem 24 horas por dia. 
                    Cada unidade é liberada progressivamente, conforme você avança no curso.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingFour">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseFour" 
                    aria-expanded="false" 
                    aria-controls="collapseFour"
                  >
                    Há suporte para dúvidas durante o curso?
                  </button>
                </h3>
                <div 
                  id="collapseFour" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingFour" 
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body">
                    Sim, temos tutores disponíveis para responder dúvidas em fóruns dedicados e em horários 
                    de plantão. Além disso, a comunidade de alunos é muito ativa e colaborativa.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingFive">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseFive" 
                    aria-expanded="false" 
                    aria-controls="collapseFive"
                  >
                    O curso é totalmente acessível?
                  </button>
                </h3>
                <div 
                  id="collapseFive" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingFive" 
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body">
                    Sim, todos os materiais são desenvolvidos seguindo as diretrizes de acessibilidade WCAG 2.2 AA. 
                    Se você precisar de algum ajuste adicional, entre em contato conosco que faremos o possível para atender sua necessidade.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CursoAcessibilidade;