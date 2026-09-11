import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBook, 
  FaUniversity, 
  FaChalkboardTeacher, 
  FaAward, 
  FaExternalLinkAlt, 
  FaFileAlt, 
  FaDiceD6, 
  FaBrain 
} from 'react-icons/fa';
import '../Styles/Academy.css';

function Academy() {
  // Publicações Reais extraídas do Currículo Lattes e Periódicos Qualis A
  const publicacoes = [
    {
      tipo: "Artigo em Periódico (Qualis A)",
      ano: "2025",
      titulo: "Theoretical Model and Playful Practice: A Pathway to Digital Accessibility",
      veiculo: "Infodesign - Revista Brasileira de Design da Informação (SBDI)",
      descricao: "Articulação entre Design Science Research, o modelo multidimensional de 5 dimensões e a gamificação aplicada no jogo analógico e digital Jornada da Acessibilidade.",
      link: "https://doi.org/10.51358/id.v22i2.1124",
      destaque: "Qualis A1"
    },
    {
      tipo: "Livro Publicado",
      ano: "2026",
      titulo: "Janelas para o Futuro: Acessibilidade Digital e Tecnologias para a Inclusão",
      veiculo: "UFSC (170 p. il., gráfis)",
      descricao: "Obra de referência com prefácio de Reinaldo Ferraz (NIC.br/W3C). Sistematiza a Mídia do Conhecimento e a Engenharia da Mediação desenvolvidas no LaMiD/PPGEGC/UFSC.",
      link: "https://lamid.paginas.ufsc.br/janelas-para-o-futuro/",
      destaque: "Prefácio NIC.br"
    },
    {
      tipo: "Capítulo de Livro",
      ano: "2025",
      titulo: "Integração da Norma ABNT NBR 17225:2025 e o CADUX: Caminhos para a Inclusão e Experiência de Uso",
      veiculo: "Perspectivas da Inclusão (Editora Pimenta Cultural)",
      descricao: "Mapeamento prescritivo que traduz os 156 critérios da norma técnica nacional em requisitos de experiência do usuário (UX) nas cartas metodológicas.",
      link: "https://www.pimentacultural.com/livro/perspectivas-inclusao/",
      destaque: "Norma ABNT"
    },
    {
      tipo: "Artigo em Periódico",
      ano: "2024",
      titulo: "CADUX - Cartas de Acessibilidade Digital para Experiência de Uso",
      veiculo: "Revista Brasileira de Expressão Gráfica (RBEG)",
      descricao: "Validação do framework conceitual registrado junto ao INPI (Reg. 934006750), detalhando as heurísticas de aplicação para criadores de recursos digitais.",
      link: "https://rbeg.net/index.php/rbeg/article/view/193/314",
      destaque: "INPI 934006750"
    }
  ];

  // Eixos Metodológicos e Pesquisa Aplicada
  const modelos = [
    {
      numero: "01",
      titulo: "Framework CADUX (5 Dimensões de UX)",
      descricao: "Experiência inclusiva além da conformidade técnica através de 5 dimensões integradas: Acessibilidade, Usabilidade, Funcionalidade, Emoção e Valor. Registro concedido no INPI.",
      aplicacao: "Auditorias de experiência, discovery de produto e esteira de UI/UX corporativa."
    },
    {
      numero: "02",
      titulo: "Sistemas Inteligentes de Mediação (SIM)",
      descricao: "Modelagem da Mídia do Conhecimento dotada de autonomia processual (tríade Sensação, Associação e Síntese), em que a acessibilidade é a medida de inteligência do sistema.",
      aplicacao: "Ambientes virtuais de aprendizagem acessíveis, governança para Web Agêntica e agentes de IA."
    },
    {
      numero: "03",
      titulo: "Design Science Research (DSR)",
      descricao: "Abordagem metodológica orientada à criação e avaliação de artefatos prescritivos e tecnológicos que resolvem problemas reais de exclusão digital na sociedade.",
      aplicacao: "Validação empírica de protótipos, teses aplicadas e transferência de tecnologia UFSC."
    }
  ];

  return (
    <main>
      <div role="main">
        {/* Hero Section - LeFul Academy */}
        <section 
          id="academy-hero" 
          className="text-white" 
          style={{ 
            background: 'linear-gradient(135deg, #1E2229 0%, #2B2E34 60%, #1A2634 100%)', 
            padding: '5rem 0 6rem',
            borderBottom: '4px solid #009FE3'
          }}
          aria-labelledby="academy-heading"
        >
          <div className="container container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 order-md-2 text-center">
                <img
                  src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/QR_code.png'
                  className="img-fluid"
                  alt="LeFul Academy - Núcleo de Pesquisa, Desenvolvimento e Extensão Científica"
                  style={{ maxHeight: '620px' }}
                  loading="lazy"
                />
              </div>
              
              <div className="col-12 col-md-6 order-md-1 mt-5 mt-md-0">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill border"
                     style={{ backgroundColor: 'rgba(0, 159, 227, 0.12)', borderColor: 'rgba(0, 159, 227, 0.35)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#009FE3' }}></span>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '1.2px', fontWeight: '700', color: '#70D0FB', textTransform: 'uppercase' }}>
                    Pesquisa Aplicada & P&D em Acessibilidade
                  </span>
                </div>

                <h1 id="academy-heading" className="display-4 fw-bold mb-3">
                  <span style={{ color: '#009FE3' }}>LeFul</span> Academy<br />
                  <span style={{ fontSize: '2.2rem', color: '#FFF' }}>Ciência Aberta e Inteligência Inclusiva</span>
                </h1>
                
                <div 
                  role="separator" 
                  aria-hidden="true"
                  style={{ margin: '1.2rem 0', width: '90px', borderTop: '3px solid #EB5F2C' }}
                ></div>
                
                <p className="lead text-light" style={{ fontSize: '1.15rem', lineHeight: '1.7', color: '#CBD5E1' }}>
                  O braço de pesquisa e transferência de conhecimento da LeFul Design House. Conectamos investigações 
                  de ponta do <strong>LaMiD / PPGEGC / UFSC</strong> à esteira do mercado corporativo, transformando 
                  métodos científicos e normas técnicas em ferramentas práticas de capacitação e inovação.
                </p>
                
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a 
                    href="#publicacoes" 
                    className="btn px-4 py-3 fw-bold shadow-sm"
                    style={{ backgroundColor: '#009FE3', borderColor: '#009FE3', color: '#FFF', borderRadius: '4px' }}
                  >
                    <FaBook className="me-2" /> Publicações & Livros
                  </a>
                  <a 
                    href="#workshops" 
                    className="btn px-4 py-3 fw-semibold"
                    style={{ backgroundColor: 'transparent', borderColor: '#64748B', color: '#F8FAFC', borderRadius: '4px' }}
                  >
                    <FaChalkboardTeacher className="me-2" /> Workshops CADUX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Metodologia Científica (DSR & Engenharia da Mediação) */}
        <section 
          id="metodologia"
          className="py-5"
          style={{ backgroundColor: '#F8FAFC' }}
          aria-labelledby="metodologia-heading"
        >
          <div className="container py-4">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <h2 id="metodologia-heading" className="fw-bold mb-3" style={{ color: '#1E293B' }}>
                  A Metodologia <span style={{ color: '#009FE3' }}>Design Science Research</span>
                </h2>
                
                <div style={{ width: '70px', height: '3px', backgroundColor: '#EB5F2C', marginBottom: '1.5rem' }}></div>
                
                <p className="lead text-dark fs-6" style={{ lineHeight: '1.7' }}>
                  Diferente de abordagens opinativas de agências, a LeFul Academy opera sob os três ciclos da 
                  <strong> Design Science Research (Dresch et al., 2015)</strong>: Relevância, Rigor e Design. Projetamos e 
                  avaliamos artefatos prescritivos que solucionam desafios complexos de exclusão e navegabilidade.
                </p>

                <div className="mt-4">
                  <div className="p-3 mb-3 bg-white rounded shadow-sm border-start border-primary border-4">
                    <h3 className="h6 fw-bold mb-1 text-dark">1. Ciclo de Relevância (Contexto & Problema Real)</h3>
                    <p className="small text-muted mb-0">
                      Mapeamento de barreiras atitudinais, sensoriais e comunicacionais vivenciadas por pessoas com deficiência e identificação de riscos do Art. 63 da LBI.
                    </p>
                  </div>

                  <div className="p-3 mb-3 bg-white rounded shadow-sm border-start border-info border-4">
                    <h3 className="h6 fw-bold mb-1 text-dark">2. Ciclo de Rigor (Bases Teóricas & Normas ABNT)</h3>
                    <p className="small text-muted mb-0">
                      Fundamentação nos 156 critérios da ABNT NBR 17225:2025, padrões WCAG 2.2 e na epistemologia da Mídia do Conhecimento.
                    </p>
                  </div>

                  <div className="p-3 mb-3 bg-white rounded shadow-sm border-start border-warning border-4">
                    <h3 className="h6 fw-bold mb-1 text-dark">3. Ciclo de Design (Construção & Validação Pragmática)</h3>
                    <p className="small text-muted mb-0">
                      Projetação de artefatos funcionais (CADUX, CoIn e Jornada da Acessibilidade) validados empiricamente com personas e especialistas em testes simulados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 text-center">
                <div className="p-4 bg-white rounded shadow-sm border">
                  <h3 className="h5 fw-bold text-dark mb-3">Ciclo da Espiral do Conhecimento Inclusivo</h3>
                  <p className="small text-muted mb-4">
                    Aplicação da matriz SECI (Nonaka & Takeuchi, 1995) para transformar o saber tácito da exclusão em competência explícita de engenharia de software:
                  </p>
                  <div className="row g-2 text-start">
                    <div className="col-6 p-2 bg-light rounded border">
                      <strong className="text-primary small d-block">Socialização:</strong>
                      <span className="small text-muted" style={{ fontSize: '0.78rem' }}>Co-design e vivência direta com pessoas usuárias com deficiência.</span>
                    </div>
                    <div className="col-6 p-2 bg-light rounded border">
                      <strong className="text-primary small d-block">Externalização:</strong>
                      <span className="small text-muted" style={{ fontSize: '0.78rem' }}>Sistematização de heurísticas em modelos visuais e cartas conceituais.</span>
                    </div>
                    <div className="col-6 p-2 bg-light rounded border">
                      <strong className="text-primary small d-block">Combinação:</strong>
                      <span className="small text-muted" style={{ fontSize: '0.78rem' }}>Cruzamento das dimensões de UX com os requisitos da NBR 17225.</span>
                    </div>
                    <div className="col-6 p-2 bg-light rounded border">
                      <strong className="text-primary small d-block">Internalização:</strong>
                      <span className="small text-muted" style={{ fontSize: '0.78rem' }}>Adoção natural da acessibilidade nos Design Systems pelas equipes.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Modelos e Frameworks Proprietários */}
        <section 
          id="modelos"
          style={{ padding: '5rem 0', backgroundColor: '#2B2E34', color: 'white' }}
          aria-labelledby="modelos-heading"
        >
          <div className="container">
            <div className="text-center mb-5">
              <span className="text-uppercase fw-bold text-info small letter-spacing-1">Propriedade Intelectual & Ciência</span>
              <h2 id="modelos-heading" className="display-5 fw-bold text-white mb-2">
                Frameworks e <span style={{ color: '#009FE3' }}>Modelos Conceituais</span>
              </h2>
              <p className="lead mx-auto text-light opacity-75" style={{ maxWidth: '750px', fontSize: '1.05rem' }}>
                Artefatos metodológicos desenvolvidos em programas de doutorado e pós-doutorado, registrados no INPI e aplicados em consultorias de alta complexidade.
              </p>
            </div>
            
            <div className="row g-4">
              {modelos.map((item, idx) => (
                <div key={idx} className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm p-4 text-dark" style={{ backgroundColor: '#FFFFFF', borderRadius: '6px' }}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className="display-6 fw-bold" style={{ color: '#009FE3' }}>{item.numero}</span>
                      <span className="badge bg-light text-muted border">Metodologia Validada</span>
                    </div>
                    <h3 className="h5 fw-bold mb-3">{item.titulo}</h3>
                    <p className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
                      {item.descricao}
                    </p>
                    <div className="mt-auto pt-3 border-top">
                      <strong className="small text-uppercase text-dark d-block mb-1" style={{ fontSize: '0.75rem' }}>Aplicação Direta:</strong>
                      <span className="small text-secondary" style={{ fontSize: '0.8rem' }}>{item.aplicacao}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Publicações de Alto Impacto (Lattes Validado) */}
        <section 
          id="publicacoes"
          className="py-5"
          style={{ backgroundColor: '#FFFFFF' }}
          aria-labelledby="publicacoes-heading"
        >
          <div className="container py-4">
            <div className="row align-items-end mb-4">
              <div className="col-md-8">
                <span className="text-uppercase fw-bold text-primary small letter-spacing-1">Produção Intelectual Qualificada</span>
                <h2 id="publicacoes-heading" className="display-5 fw-bold mb-2">
                  Publicações Científicas & <span style={{ color: '#009FE3' }}>Livros</span>
                </h2>
                <div style={{ width: '80px', height: '3px', backgroundColor: '#EB5F2C', margin: '0.8rem 0' }}></div>
              </div>
              <div className="col-md-4 text-md-end mb-3">
                <a 
                  href="https://orcid.org/0000-0003-3432-2668" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark px-3 py-2 fw-semibold small"
                >
                  <FaExternalLinkAlt className="me-2" /> Currículo Lattes / ORCID
                </a>
              </div>
            </div>
            
            <div className="row g-4">
              {publicacoes.map((pub, idx) => (
                <div key={idx} className="col-md-6">
                  <div className="card h-100 border rounded shadow-sm p-4 bg-light">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-primary text-white">{pub.tipo}</span>
                      <span className="badge bg-white text-dark border fw-bold">{pub.destaque}</span>
                      <span className="text-muted small fw-bold">{pub.ano}</span>
                    </div>
                    <h3 className="h6 fw-bold mb-2 text-dark" style={{ minHeight: '44px' }}>{pub.titulo}</h3>
                    <p className="small text-primary fw-semibold mb-2">{pub.veiculo}</p>
                    <p className="small text-muted mb-3" style={{ lineHeight: '1.5' }}>
                      {pub.descricao}
                    </p>
                    <div className="mt-auto">
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none fw-bold small"
                        style={{ color: '#009FE3' }}
                      >
                        Acessar Documento Oficial <FaExternalLinkAlt className="ms-1" size={11} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Workshops e Capacitações In-Company */}
        <section 
          id="workshops"
          className="py-5"
          style={{ backgroundColor: '#F4F8FA' }}
          aria-labelledby="workshops-heading"
        >
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="text-uppercase fw-bold text-primary small letter-spacing-1">Transferência Tecnológica</span>
              <h2 id="workshops-heading" className="display-5 fw-bold mb-2">
                Capacitação Corporativa & <span style={{ color: '#009FE3' }}>Workshops CADUX</span>
              </h2>
              <p className="lead mx-auto text-muted" style={{ maxWidth: '780px', fontSize: '1.05rem' }}>
                Formações práticas desenhadas para nivelar times de Produto, UX e Engenharia de Software frente aos requisitos da ABNT NBR 17225:2025.
              </p>
            </div>
            
            <div className="row g-4 justify-content-center">
              {/* Workshop 1 */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100 rounded overflow-hidden">
                  <div className="p-4" style={{ backgroundColor: '#2B2E34', color: 'white' }}>
                    <span className="badge bg-primary mb-2">Formação In-Company (4h ou 8h)</span>
                    <h3 className="h4 fw-bold text-white mb-2">Implementando a ABNT NBR 17225 com o Framework CADUX</h3>
                    <p className="small text-light opacity-75 mb-0">
                      Capacitação prática para times de Produto, Design System e Engenharia de Software.
                    </p>
                  </div>
                  <div className="card-body p-4 bg-white">
                    <ul className="small text-muted mb-4 ps-3" style={{ lineHeight: '1.7' }}>
                      <li>Desdobramento dos 156 critérios da norma nacional em requisitos de backlog (Jira/GitHub).</li>
                      <li>Simulação de barreiras com personas cegas, surdas, neurodivergentes e idosas.</li>
                      <li>Aplicação do baralho físico ou digital CADUX nas 5 dimensões de experiência inclusiva.</li>
                      <li>Análise e refatoração de código ao vivo (HTML5 semântico e atributos WAI-ARIA).</li>
                    </ul>
                    <Link 
                      to="/contato" 
                      className="btn btn-outline-primary btn-sm px-4 py-2 fw-bold"
                    >
                      Solicitar Proposta de Treinamento
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Workshop 2 */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100 rounded overflow-hidden">
                  <div className="p-4" style={{ backgroundColor: '#009FE3', color: 'white' }}>
                    <span className="badge bg-dark mb-2">Simulação Interativa (Serious Game)</span>
                    <h3 className="h4 fw-bold text-white mb-2">Simulador Gamificado 'Jornada da Acessibilidade'</h3>
                    <p className="small text-white opacity-90 mb-0">
                      Dinâmica contemplada no Edital Fábrica de Jogos da SINOVA/UFSC para sensibilização e tomada de decisão ágil.
                    </p>
                  </div>
                  <div className="card-body p-4 bg-white">
                    <ul className="small text-muted mb-4 ps-3" style={{ lineHeight: '1.7' }}>
                      <li>Modo multiplayer em tempo real com facilitação técnica e agentes autônomos.</li>
                      <li>Resolução colaborativa de 36 cenários-desafio reais de interfaces digitais.</li>
                      <li>Cálculo dinâmico do Índice de Inclusão da equipe e emissão de laudo de sessão.</li>
                      <li>Vivência empática e eliminação do capacitismo estrutural em processos de ideação.</li>
                    </ul>
                    <Link 
                      to="/contato" 
                      className="btn btn-outline-primary btn-sm px-4 py-2 fw-bold"
                    >
                      Agendar Dinâmica para Equipe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Institucional / Cooperação Científica */}
        <section 
          id="academy-cta"
          style={{ 
            padding: '5rem 0',
            background: 'linear-gradient(135deg, #1E2229 0%, #2B2E34 100%)',
            color: 'white'
          }}
          aria-labelledby="academy-cta-heading"
        >
          <div className="container text-center" style={{ maxWidth: '800px' }}>
            <span className="badge bg-primary text-white px-3 py-1 mb-3 text-uppercase fw-bold small">
              Parcerias de P&D & Extensão
            </span>
            <h2 id="academy-cta-heading" className="display-5 fw-bold mb-3 text-white">
              Conecte sua Instituição ao Estado da Arte da Pesquisa
            </h2>
            <p className="lead mb-4 text-light opacity-75" style={{ fontSize: '1.1rem' }}>
              Colaboramos com universidades corporativas, centros de P&D, polos tecnológicos e agências públicas 
              na formulação de políticas de acessibilidade digital e desenvolvimento de projetos subsidiados.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link 
                to="/contato" 
                className="btn px-4 py-3 fw-bold"
                style={{ backgroundColor: '#009FE3', borderColor: '#009FE3', color: '#FFF', borderRadius: '4px' }}
              >
                Propor Projeto Conjunto de P&D
              </Link>
              <Link 
                to="/sobre" 
                className="btn px-4 py-3 fw-semibold"
                style={{ backgroundColor: 'transparent', borderColor: '#64748B', color: '#F8FAFC', borderRadius: '4px' }}
              >
                Conhecer Liderança Técnica
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Academy;