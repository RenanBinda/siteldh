import { Link } from 'react-router-dom';
import '../Styles/Academy.css';

function Academy() {
  return (
    <main>
      <div role="main">
        {/* Hero Section - Academy */}
        <section 
          id="academy-hero" 
          className="text-white" 
          style={{ background: 'rgba(51, 51, 51, 1)', padding: '5rem 0 7rem' }}
          aria-labelledby="academy-heading"
        >
          <div className="container container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 order-md-2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/portifolio-renan.appspot.com/o/imagens%2Facademy2.png?alt=media&token=c9b16c0d-93b9-4980-9473-0e7c1d5d9f3e"
                  className="img-fluid"
                  alt="Ilustração abstrata representando pesquisa e inovação"
                  loading="lazy"
                />
              </div>
              
              <div className="col-12 col-md-6 order-md-1 mt-5 mt-md-0">
                <h1 id="academy-heading" className="display-4 mb-4">
                  <span style={{ color: '#EB5F2C' }}>LeFul Academy</span><br />
                  Pesquisa & Inovação em Design
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
                  Nosso núcleo de pesquisa desenvolve metodologias e frameworks para criar experiências digitais inclusivas e centradas no usuário.
                </p>
                
                <div className="d-flex gap-3 mt-5">
                  <Link 
                    to="#metodologia" 
                    className="btn btn-primary px-4 py-3"
                    style={{ backgroundColor: '#EB5F2C', border: 'none' }}
                    aria-label="Conheça nossa metodologia"
                  >
                    Nossa Metodologia
                  </Link>
                  <Link 
                    to="#publicacoes" 
                    className="btn btn-outline-light px-4 py-3"
                    aria-label="Veja nossas publicações"
                  >
                    Publicações
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Metodologia */}
        <section 
          id="metodologia"
          className="split-section"
          aria-labelledby="metodologia-heading"
        >
          <div className="split-container">
            <div className="split-image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fmetodologia-academy.png?alt=media&token=87654321-efgh-4236-aed3-7a9ea547d6f0"
                alt="Diagrama da metodologia de pesquisa da LeFul"
                loading="lazy"
                aria-describedby="metodologia-image-desc"
              />
              <span id="metodologia-image-desc" className="sr-only">Diagrama mostrando o ciclo de pesquisa: imersão, prototipação, avaliação e documentação</span>
            </div>

            <div className="split-content">
              <h2 id="metodologia-heading" className="split-title">
                Nossa <span className="split-highlight">Metodologia</span> de Pesquisa
              </h2>
              
              <div className="split-divider" role="separator" aria-hidden="true"></div>
              
              <p className="split-text">
                Desenvolvemos projetos através de um processo cíclico que integra <strong>teoria e prática</strong>, garantindo soluções baseadas em evidências e alinhadas com as necessidades reais dos usuários.
              </p>
              
              <ul className="split-list" aria-label="Etapas da metodologia">
                <li>• <strong>Imersão Contextual</strong> - Pesquisa etnográfica e análise de stakeholders</li>
                <li>• <strong>Prototipação Iterativa</strong> - Desenvolvimento em ciclos rápidos com validação contínua</li>
                <li>• <strong>Avaliação de Acessibilidade</strong> - Testes com usuários diversos e especialistas</li>
                <li>• <strong>Gestão do Conhecimento</strong> - Documentação sistemática e reutilização de insights</li>
              </ul>
              
              <div className="mt-4">
                <Link 
                  to="/metodologia-completa" 
                  className="btn btn-outline-dark btn-lg px-4 py-2"
                  aria-label="Saiba mais sobre nossa metodologia"
                >
                  Veja Nossa Metodologia →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Modelos de Pesquisa */}
        <section 
          id="modelos"
          style={{ 
            padding: '6rem 0',
            backgroundColor: 'rgba(51, 51, 51, 1)',
            color: 'white'
          }}
          aria-labelledby="modelos-heading"
        >
          <div className="container">
            <div className="text-center mb-6">
              <h2 id="modelos-heading" className="display-5 mb-4">
                Nossos <span style={{ color: '#EB5F2C' }}>Modelos</span> de Pesquisa
              </h2>
              <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
                Frameworks desenvolvidos para guiar nossos projetos de inovação em design
              </p>
            </div>
            
            <div className="row g-4">
              {/* Modelo 1 */}
              <div className="col-md-4">
                <div className="card h-100 border-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                  <div className="card-body p-4">
                    <div className="mb-4" style={{ color: '#EB5F2C', fontSize: '2.5rem' }}>01</div>
                    <h3 className="h4 mb-3">Visualização do Conhecimento</h3>
                    <p>
                      Modelo para representação interativa de informações complexas, tornando dados acessíveis e compreensíveis através de interfaces intuitivas.
                    </p>
                    <div className="mt-4 pt-2">
                      <Link 
                        to="/modelo-visualizacao" 
                        className="text-decoration-none"
                        style={{ color: '#EB5F2C' }}
                        aria-label="Saiba mais sobre o modelo de visualização"
                      >
                        Saiba mais →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modelo 2 */}
              <div className="col-md-4">
                <div className="card h-100 border-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                  <div className="card-body p-4">
                    <div className="mb-4" style={{ color: '#EB5F2C', fontSize: '2.5rem' }}>02</div>
                    <h3 className="h4 mb-3">Inclusão Digital</h3>
                    <p>
                      Framework para desenvolvimento de experiências digitais acessíveis, considerando diversidade funcional, cultural e tecnológica dos usuários.
                    </p>
                    <div className="mt-4 pt-2">
                      <Link 
                        to="/modelo-inclusao" 
                        className="text-decoration-none"
                        style={{ color: '#EB5F2C' }}
                        aria-label="Saiba mais sobre o modelo de inclusão"
                      >
                        Saiba mais →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modelo 3 */}
              <div className="col-md-4">
                <div className="card h-100 border-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                  <div className="card-body p-4">
                    <div className="mb-4" style={{ color: '#EB5F2C', fontSize: '2.5rem' }}>03</div>
                    <h3 className="h4 mb-3">Gestão do Conhecimento</h3>
                    <p>
                      Abordagem sistemática para capturar, organizar e reutilizar conhecimentos em projetos de design, criando um ciclo virtuoso de aprendizado.
                    </p>
                    <div className="mt-4 pt-2">
                      <Link 
                        to="/modelo-gestao" 
                        className="text-decoration-none"
                        style={{ color: '#EB5F2C' }}
                        aria-label="Saiba mais sobre o modelo de gestão"
                      >
                        Saiba mais →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Publicações */}
        <section 
          id="publicacoes"
          className="py-8"
          style={{ backgroundColor: '#f8f8f8', padding: '8rem' }}
          aria-labelledby="publicacoes-heading"
        >
          <div className="container">
            <div className="row align-items-end mb-6">
              <div className="col-md-8">
                <h2 id="publicacoes-heading" className="display-5 mb-3">
                  Publicações & <span style={{ color: '#EB5F2C' }}>Conteúdo</span>
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
              <div className="col-md-4 text-md-end mb-3">
                <Link 
                  to="/todas-publicacoes" 
                  className="btn btn-outline-dark px-4"
                  aria-label="Ver todas as publicações"
                >
                  Ver Todos
                </Link>
              </div>
            </div>
            
            <div className="row g-4">
              {/* Artigo 1 */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fartigo1-academy.png?alt=media&token=13579246-ijkl-4236-aed3-7a9ea547d6f0"
                    className="card-img-top"
                    alt="Visualização de dados acessíveis"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <div className="d-flex gap-2 mb-3">
                      <span className="badge bg-primary">Artigo Científico</span>
                      <span className="text-muted">2023</span>
                    </div>
                    <h3 className="h5">Visualização do Conhecimento</h3>
                    <p className="card-text">
                      Métodos para representação interativa de informações complexas para usuários com diferentes habilidades.
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <Link 
                      to="/artigo-visualizacao" 
                      className="text-decoration-none"
                      style={{ color: '#EB5F2C' }}
                      aria-label="Ler artigo sobre visualização de dados"
                    >
                      Ler Artigo →
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Artigo 2 */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fartigo2-academy.png?alt=media&token=24681357-mnop-4236-aed3-7a9ea547d6f0"
                    className="card-img-top"
                    alt="Design inclusivo para plataformas digitais"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <div className="d-flex gap-2 mb-3">
                      <span className="badge bg-primary">Estudo de Caso</span>
                      <span className="text-muted">2022</span>
                    </div>
                    <h3 className="h5">Design Inclusivo na Prática</h3>
                    <p className="card-text">
                      Abordagens práticas para desenvolvimento de plataformas digitais acessíveis desde a concepção.
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <Link 
                      to="/artigo-inclusivo" 
                      className="text-decoration-none"
                      style={{ color: '#EB5F2C' }}
                      aria-label="Ler estudo de caso sobre design inclusivo"
                    >
                      Ler Estudo →
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Artigo 3 */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fartigo3-academy.png?alt=media&token=35792468-qrst-4236-aed3-7a9ea547d6f0"
                    className="card-img-top"
                    alt="Gestão do conhecimento em projetos de UX"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <div className="d-flex gap-2 mb-3">
                      <span className="badge bg-primary">White Paper</span>
                      <span className="text-muted">2023</span>
                    </div>
                    <h3 className="h5">Gestão do Conhecimento em UX</h3>
                    <p className="card-text">
                      Como implementar práticas sistemáticas de documentação e reutilização de conhecimentos em projetos de design.
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <Link 
                      to="/whitepaper-gestao" 
                      className="text-decoration-none"
                      style={{ color: '#EB5F2C' }}
                      aria-label="Baixar white paper sobre gestão do conhecimento"
                    >
                      Baixar PDF →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Eventos */}
        <section 
          id="eventos"
          style={{ padding: '8rem' }}
          aria-labelledby="eventos-heading"
        >
          <div className="container">
            <h2 id="eventos-heading" className="display-5 mb-5 text-center">
              Eventos & <span style={{ color: '#EB5F2C' }}>Workshops</span>
            </h2>
            
            <div className="row g-4">
              {/* Evento 1 */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="row g-0 h-100">
                    <div className="col-md-5" style={{ backgroundColor: '#EB5F2C' }}>
                      <div className="h-100 d-flex flex-column justify-content-center p-4 text-white">
                        <div className="mb-3">
                          <span className="badge bg-white text-dark">Workshop</span>
                        </div>
                        <h3 className="h4 mb-3">Inovação em Acessibilidade Digital</h3>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-calendar-event"></i>
                          <span>15 Nov 2023</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-clock"></i>
                          <span>14:00 - 17:00 (GMT-3)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <p className="card-text">
                          Workshop prático sobre desenvolvimento de interfaces acessíveis, com foco em WCAG 2.2 e Design Universal. Inclui estudos de caso reais e sessão hands-on.
                        </p>
                        <ul className="mb-4">
                          <li>Técnicas avançadas de acessibilidade</li>
                          <li>Ferramentas de avaliação</li>
                          <li>Testes com usuários diversos</li>
                        </ul>
                        <Link 
                          to="/workshop-acessibilidade" 
                          className="btn btn-outline-primary"
                          aria-label="Inscreva-se no workshop de acessibilidade"
                        >
                          Inscreva-se
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Evento 2 */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="row g-0 h-100">
                    <div className="col-md-5" style={{ backgroundColor: '#333333' }}>
                      <div className="h-100 d-flex flex-column justify-content-center p-4 text-white">
                        <div className="mb-3">
                          <span className="badge bg-white text-dark">Palestra</span>
                        </div>
                        <h3 className="h4 mb-3">Design Thinking & Gestão do Conhecimento</h3>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-calendar-event"></i>
                          <span>28 Nov 2023</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-clock"></i>
                          <span>10:00 - 12:00 (GMT-3)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <p className="card-text">
                          Como integrar práticas de gestão do conhecimento em processos criativos de design. Apresentação do modelo LeFul com demonstração de casos reais.
                        </p>
                        <ul className="mb-4">
                          <li>Frameworks de documentação</li>
                          <li>Sistemas de recuperação de conhecimento</li>
                          <li>Métricas de eficácia</li>
                        </ul>
                        <Link 
                          to="/palestra-gestao" 
                          className="btn btn-outline-dark"
                          aria-label="Inscreva-se na palestra sobre gestão do conhecimento"
                        >
                          Inscreva-se
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section 
          id="academy-cta"
          style={{ 
            padding: '6rem 0',
            background: 'linear-gradient(135deg, rgba(51, 51, 51, 0.95) 0%, rgba(30, 30, 30, 0.95) 100%)',
            color: 'white'
          }}
          aria-labelledby="academy-cta-heading"
        >
          <div className="container text-center">
            <h2 id="academy-cta-heading" className="display-5 mb-4">
              Colabore com Nossa <span style={{ color: '#EB5F2C' }}>Pesquisa</span>
            </h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              Se você é pesquisador, designer ou entusiasta de inovação, junte-se a nós para desenvolver soluções que transformam a experiência digital.
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <Link 
                to="/contato" 
                className="btn btn-primary px-5 py-3"
                style={{ backgroundColor: '#EB5F2C', border: 'none' }}
                aria-label="Entre em contato com a equipe da Academy"
              >
                Fale com a Equipe
              </Link>
              <Link 
                to="/trabalhe-conosco" 
                className="btn btn-outline-light px-5 py-3"
                aria-label="Candidate-se para trabalhar na LeFul Academy"
              >
                Candidate-se
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Academy;