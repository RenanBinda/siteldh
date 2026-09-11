import { Link } from 'react-router-dom';
import '../Styles/global.css';

function Home() {
  return (
    <main>
      <div role="main">
        {/* Seção Início: Hero Section de Alta Autoridade */}
        <section 
          id="inicio" 
          className="text-white" 
          style={{ background: 'rgba(51, 51, 51, 1)', padding: '3rem 0' }}
          aria-labelledby="inicio-heading"
        >
          <div className="container container-fluid">
            <div className="row">
              {/* Imagem Desktop (esquerda) */}
              <div className="col-12 col-md-9 mt-md-5 d-none d-md-block">
                <img
                  src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/banner_home.png'
                  className="img-fluid"
                  alt="LeFul Design House - Consultoria Especializada em Acessibilidade Digital e UX"
                  loading="lazy"
                />
              </div>
              
              {/* Imagem Mobile (full width) */}
              <div className="col-12 col-md-9 mt-md-5 d-md-none">
                <img
                  src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/banner_home_mob.png'
                  className="img-fluid"
                  alt="LeFul Design House - Consultoria Especializada em Acessibilidade Digital e UX"
                  loading="lazy"
                />
              </div>
              
              {/* Texto (direita) */}
              <div className="col col-11 col-md-3 mt-md-5">
                <br /><br />
                <h1 id="inicio-heading" className="text-start mt-4" style={{ fontSize: '1.75rem' }}>
                  A <span style={{ color: '#EB5F2C' }}>LeFul Design House</span>
                  <br />
                  projeta <span style={{ color: '#EB5F2C' }}>acessibilidade digital para experiência inclusiva.</span>
                </h1>
                
                <div 
                  role="separator" 
                  aria-hidden="true"
                  style={{ 
                    margin: '1rem 0', 
                    color: 'rgba(235, 95, 44, 1)', 
                    width: '150px', 
                    border: '0', 
                    borderTop: '2px solid' 
                  }}
                ></div>
                
                <p className="text-start text-grey mt-3" style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>
                  Unimos <strong className="fw-bold">pesquisa aplicada (UFSC)</strong>, 
                  autoridade técnica na elaboração da <strong className="fw-bold">ABNT NBR 17225</strong> e 
                  <strong className="fw-bold"> engenharia prescritiva</strong> para blindar produtos digitais 
                  contra riscos legais e transformá-los em experiências inclusivas.
                </p>
                
                <br />
                
                <div className="row">
                  <div className="col mt-3 text-md-start text-center">
                    <Link 
                      to="/manifesto" 
                      className="shadow" 
                      style={{ 
                        backgroundColor: '#DD5321', 
                        padding: '14px 28px', 
                        border: 'none', 
                        borderRadius: '4px', 
                        textDecoration: 'none', 
                        color: 'white',
                        display: 'inline-block',
                        fontWeight: '600'
                      }}
                      aria-label="Leia nosso manifesto de design e engenharia da mediação"
                    >
                      Manifesto Metodológico
                    </Link>
                  </div>
                  
                  <div className="row">
                    <div className="col pe-md-5 pt-4 text-center">
                      <img
                        src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/vector_home.png'
                        alt="Seta indicativa para scroll"
                        width="34"
                        height="49"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Fundamental: Mitigação de Riscos e Auditoria */}
        <section 
          id="fundamental" 
          className="fundamental fundamental-md pb-md-5" 
          style={{ background: 'rgba(51, 51, 51, 1)', padding: '5rem 0' }}
          aria-labelledby="fundamental-heading"
        >
          <div className="container container-fluid">
            <div className="text-white">
              <div className="row">
                <div className="col-12 col-md-4 mb-5 me-md-4">
                  <img
                    src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/secao2.png'
                    className="img-fluid"
                    alt="Estrutura e foco em conformidade e validação"
                    loading="lazy"
                  />
                </div>
                
                <div className="col-12 col-md-7 col-lg-6">
                  <h2 id="fundamental-heading" className="text-start" style={{ fontSize: '1.75rem' }}>
                    CONFORMIDADE LEGAL & EXPERIÊNCIA DE USO
                  </h2>
                  
                  <div 
                    role="separator" 
                    aria-hidden="true"
                    style={{ 
                      margin: '1rem 0', 
                      color: 'rgba(235, 95, 44, 1)', 
                      width: '120px', 
                      border: '0', 
                      borderTop: '2px solid' 
                    }}
                  ></div>
                  
                  <p className="text-start text-grey mt-3" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                    Com a vigência obrigatória da <strong className="fw-bold">ABNT NBR 17225:2025</strong> e a aplicação 
                    do <strong className="fw-bold">Artigo 63 da Lei Brasileira de Inclusão (LBI)</strong>, interfaces inacessíveis 
                    representam passivos jurídicos e perdas imediatas no funil de conversão.
                  </p>
                  <p className="text-start text-grey" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                    Nossa atuação substitui checklists automatizados por <strong className="fw-bold">auditorias periciais</strong>, 
                    laudos com fundamentação técnica e entrega de correções em código HTML5 e WAI-ARIA para times de engenharia.
                  </p>
                  
                  <div className="col mt-4 text-center text-md-start">
                    <Link 
                      to="/projetos" 
                      className="shadow" 
                      style={{ 
                        backgroundColor: '#28A7EF', 
                        padding: '14px 28px', 
                        border: 'none', 
                        borderRadius: '4px', 
                        textDecoration: 'none', 
                        color: 'white',
                        display: 'inline-block',
                        fontWeight: '600'
                      }}
                      aria-label="Conheça nossas soluções em auditoria e produtos proprietários"
                    >
                      Auditoria NBR 17225 & Soluções
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Clareza: Rigor Científico e Ferramentas Próprias */}
        <section 
          id="secao3" 
          style={{ padding: '8rem 0' }}
          aria-labelledby="clareza-heading"
        >
          <div className="offset-md-1 container container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 mx-md-4 d-md-none">
                <img
                  src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/secao2.png'
                  className="img-fluid"
                  alt="Alvo simbolizando foco e precisão"
                  loading="lazy"
                />
              </div>
              
              <div className="col-12 col-md-6 col-lg-5">
                <h2 id="clareza-heading" className="text-start text-md-start" style={{ fontSize: '1.75rem' }}>
                  RIGOR METODOLÓGICO & INOVAÇÃO
                </h2>
                
                <div 
                  role="separator" 
                  aria-hidden="true"
                  style={{ 
                    margin: '1rem 0', 
                    color: 'rgba(235, 95, 44, 1)', 
                    width: '120px', 
                    border: '0', 
                    borderTop: '2px solid' 
                  }}
                ></div>
                
                <p className="text-start text-md-start text-grey mt-3" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                  Desenvolvemos e aplicamos frameworks próprios validados por <strong className="fw-bold">Design Science Research (PPGEGC/UFSC)</strong> e 
                  registrados no INPI, como o método <strong className="fw-bold">CADUX</strong> e o simulador interativo <strong className="fw-bold">Jornada da Acessibilidade</strong>.
                </p>
                <p className="text-start text-md-start text-grey" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                  Atuamos na vanguarda da <strong className="fw-bold">Web Agêntica e Inteligência Artificial</strong>, integrando a acessibilidade 
                  como critério de inteligência e usabilidade em sistemas complexos, AVEAs e plataformas B2B.
                </p>
                
                <div className="col mt-4 text-center text-md-start">
                  <Link 
                    to="/academy" 
                    className="shadow" 
                    style={{ 
                      backgroundColor: '#333333', 
                      padding: '14px 28px', 
                      border: 'none', 
                      borderRadius: '4px', 
                      textDecoration: 'none', 
                      color: 'white',
                      display: 'inline-block',
                      fontWeight: '600'
                    }}
                    aria-label="Conheça nossas metodologias e pesquisa aplicada"
                  >
                    Metodologia CADUX & Pesquisas
                  </Link>
                </div>
              </div>
              
              <div className="col-12 col-md-5 col-lg-5 mx-md-4 d-none d-md-block">
                <img
                  src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/secao3.png'
                  className="img-fluid"
                  alt="Precisão metodológica e design centrado no usuário"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: Posicionamento Normativo */}
        <section 
          id="inclusao"
          className="text-center text-white" 
          style={{ padding: '6rem 0', background: 'rgba(51, 51, 51, 1)' }}
          aria-labelledby="inclusao-heading"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-9">
                <div 
                  role="separator" 
                  aria-hidden="true"
                  style={{ 
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    margin: '0 auto 2.5rem'
                  }}
                ></div>
                
                <h3 id="inclusao-heading" className="fs-2 mb-3 fw-bold">
                  Acessibilidade é mais que conformidade técnica: é a medida de inteligência da sua interface.
                </h3>
                
                <p className="fs-5 text-grey">
                  Consultoria técnica liderada por membro do <strong>Comitê ABNT/CB-040</strong>, 
                  estruturando produtos em conformidade com as <strong>WCAG 2.2</strong> e a <strong>ABNT NBR 17225:2025</strong>.
                </p>
                <div 
                  role="separator" 
                  aria-hidden="true"
                  style={{ 
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    margin: '2.5rem auto 1rem'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: Sobre e Eixos de Serviço */}
        <section 
          id="sobre"
          style={{ 
            padding: '5rem 0',
            backgroundColor: 'rgba(233, 232, 232, 0.56)'
          }}
          aria-labelledby="sobre-heading"
        >
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 5%',
            gap: '3rem'
          }}>
            {/* Parte esquerda - Imagem */}
            <div style={{
              flex: '1 1 300px',
              minWidth: '250px'
            }}>
              <img
                src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/android-chrome-512x512.png'
                alt="Identidade Visual da LeFul Design House"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
                loading="lazy"
                aria-describedby="image-description"
              />
              <span id="image-description" className="sr-only">Logotipo oficial da LeFul Design House</span>
            </div>

            {/* Parte direita - Conteúdo */}
            <div style={{
              flex: '1 1 500px'
            }}>
              <h2 id="sobre-heading" style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: '700',
                lineHeight: '1.3',
                marginBottom: '1.5rem',
                color: '#1a1a1a'
              }}>
                Engenharia da Mediação: <span style={{ color: '#D84315' }}>da conformidade à experiência</span>.
              </h2>
              
              <div 
                role="separator" 
                aria-hidden="true"
                style={{
                  width: '80px',
                  height: '2px',
                  background: '#D84315',
                  margin: '1.5rem 0'
                }}
              ></div>
              
              <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                color: '#333'
              }}>
                Somos uma <strong style={{ fontWeight: 'bold' }}>consultoria especializada em Design Inclusivo, Acessibilidade Digital e UX</strong>. 
                Atuamos estrategicamente na capacitação de equipes e adequação técnica de produtos em quatro frentes principais:
              </p>
              
              <ul style={{
                margin: '1.5rem 0',
                paddingLeft: '0.5rem',
                listStyleType: 'none'
              }} aria-label="Nossos serviços especializados">
                <li style={{ marginBottom: '0.8rem', fontSize: '1.05rem', color: '#1a1a1a' }}>
                  • <strong>Auditoria Express & Laudos Técnicos:</strong> Varredura pericial de conformidade ABNT NBR 17225 e Art. 63 LBI com matriz de severidade em código.
                </li>
                <li style={{ marginBottom: '0.8rem', fontSize: '1.05rem', color: '#1a1a1a' }}>
                  • <strong>Workshops Corporativos CADUX:</strong> Capacitação prática in-company para times de Produto, Design e Engenharia.
                </li>
                <li style={{ marginBottom: '0.8rem', fontSize: '1.05rem', color: '#1a1a1a' }}>
                  • <strong>Design Systems Inclusivos:</strong> Arquitetura e padronização de bibliotecas de componentes semânticos, acessíveis e escaláveis.
                </li>
                <li style={{ marginBottom: '0.8rem', fontSize: '1.05rem', color: '#1a1a1a' }}>
                  • <strong>Recursos Educacionais Digitais (RDA):</strong> Modelagem e validação de ambientes virtuais e plataformas de ensino acessíveis.
                </li>
              </ul>
              
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '2rem'
              }}>
                <Link 
                  to="/servicos"
                  style={{
                    background: '#D84315',
                    color: 'white',
                    padding: '0.9rem 1.8rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label="Conheça nossas consultorias e serviços"
                >
                  Conheça Nossos Serviços
                </Link>
                <Link 
                  to="/politica" 
                  style={{
                    border: '1px solid #1a1a1a',
                    padding: '0.9rem 1.8rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    color: '#1a1a1a'
                  }}
                  aria-label="Leia nossa política e compromisso com a acessibilidade"
                >
                  Nossa Política de Acessibilidade
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 6: CTA Executivo */}
        <section 
          id="cta"
          style={{ padding: '6rem 0' }}
          className="py-10 py-lg-12"
          aria-labelledby="cta-heading"
        >
          <div className="container px-4">
            <div className="mx-auto text-center" style={{ maxWidth: '850px' }}>
              <div className="mb-6" data-aos="fade-up">
                <h3 id="cta-heading" className="fs-1 fw-bold mb-4">
                  Elimine riscos legais e impulsione a <span className="text-primary">experiência do seu produto</span>.
                </h3>
                
                <p className="fs-5 text-muted mb-5">
                  Agende uma conversa técnica com nossos especialistas e descubra como adequar suas interfaces 
                  às normas vigentes com agilidade e alto impacto de negócio.
                </p>
              </div>

              {/* Grupo de botões */}
              <div 
                className="d-flex flex-column flex-md-row justify-content-center gap-3"
                data-aos="fade-up" 
                data-aos-delay="100"
                style={{ padding: '1.5rem 0' }}
              >
                <Link 
                  to="/contato" 
                  className="btn btn-primary fs-6 px-4 py-3 shadow-lg-hover fw-bold"
                  aria-label="Fale conosco sobre auditoria ou consultoria técnica"
                  style={{
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <i className="bi bi-chat-left-text me-2"></i> Solicitar Diagnóstico de Conformidade
                </Link>
                
                <a 
                  href="#inicio" 
                  className="btn btn-outline-primary fs-6 px-4 py-3 fw-semibold"
                  aria-label="Voltar ao topo da página"
                >
                  <i className="bi bi-arrow-up-circle me-2"></i> Voltar ao topo
                </a>
              </div>

              {/* Selos / Ecossistema Institucional */}
              <div className="mt-8 text-center" style={{ padding: '2rem 0' }}>
                <p className="small text-muted mb-3 letter-spacing-1">ECOSSISTEMA DE PESQUISA, DESENVOLVIMENTO E PARCERIAS</p>
                <div className="d-flex justify-content-center align-items-center gap-4 opacity-75 flex-wrap">
                  <span className="badge bg-light text-dark px-3 py-2 border">PPGEGC / UFSC</span>
                  <span className="badge bg-light text-dark px-3 py-2 border">LaMiD</span>
                  <span className="badge bg-light text-dark px-3 py-2 border">ABNT CB-040</span>
                  <span className="badge bg-light text-dark px-3 py-2 border">SINOVA</span>
                  <span className="badge bg-light text-dark px-3 py-2 border">Projeto CADUX</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;