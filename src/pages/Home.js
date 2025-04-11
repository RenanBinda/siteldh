import { Link } from 'react-router-dom';
import '../Styles/global.css';

function Home() {
  return (
    <main>
      <div role="main">
        {/* Seção Início - EXATAMENTE IGUAL AO ORIGINAL */}
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
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fbanner_home.png?alt=media&token=35542088-ab45-4236-aed3-7a9ea547d6f0"
                  className="img-fluid"
                  alt="Nós Criamos Soluções em Design"
                  loading="lazy"
                />
              </div>
              
              {/* Imagem Mobile (full width) */}
              <div className="col-12 col-md-9 mt-md-5 d-md-none">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fbanner_home_mob.png?alt=media&token=e7d84249-bc08-4552-a87b-2b3de1651802"
                  className="img-fluid"
                  alt="Nós Criamos Soluções em Design"
                  loading="lazy"
                />
              </div>
              
              {/* Texto (direita) */}
              <div className="col col-11 col-md-3 mt-md-5">
                <br /><br />
                <h1 id="inicio-heading" className="text-start mt-4" style={{ fontSize: '1.75rem' }}>
                  A <span style={{ color: '#EB5F2C' }}>LeFul Design House</span>
                  <br />
                  têm um foco claro na <span style={{ color: '#EB5F2C' }}>criatividade e inovação.</span>
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
                
                <p className="text-start text-grey mt-3" style={{ fontSize: '1.1rem' }}>
                  Desenvolvemos projetos <strong className="fw-bold">orientados ao conhecimento </strong>
                  e <strong className="fw-bold">transformamos</strong> a maneira como as pessoas 
                  <strong className="fw-bold">interagem </strong>com o <strong className="fw-bold">mundo digital</strong>.
                </p>
                
                <br />
                
                <div className="row">
                  <div className="col mt-5 text-md-start text-center">
                    <Link 
                      to="/manifesto" 
                      className="shadow" 
                      style={{ 
                        backgroundColor: '#DD5321', 
                        padding: '15px 32px', 
                        border: 'none', 
                        borderRadius: '4px', 
                        textDecoration: 'none', 
                        color: 'white',
                        display: 'inline-block'
                      }}
                      aria-label="Leia nosso manifesto de design"
                    >
                      Manifesto de Design
                    </Link>
                  </div>
                  
                  <div className="row">
                    <div className="col pe-md-5 pt-4 text-center">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fvector_home.png?alt=media&token=542d526b-7666-4e22-8377-447f3d530b3f"
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

        {/* Seção Fundamental */}
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
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fsecao2.png?alt=media&token=5180ab66-1e9b-41c2-b818-deb1f527af94"
                    className="img-fluid"
                    alt="Dois triângulos em direções opostas simbolizando exploração"
                    loading="lazy"
                  />
                </div>
                
                <div className="col-12 col-md-4">
                  <h2 id="fundamental-heading" className="text-start" style={{ fontSize: '1.75rem' }}>EXPLORE POSSIBILIDADES</h2>
                  
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
                  
                  <p className="text-start text-grey mt-3" style={{ fontSize: '1.1rem' }}>
                    Incentivamos a <strong className="fw-bold">criatividade</strong> e a <strong className="fw-bold">inovação</strong> para transformar suas ideias em <strong className="fw-bold">experiências impactantes. </strong>
                    Acreditamos que isso é <strong className="fw-bold">fundamental </strong> para o sucesso dos <strong className="fw-bold">projetos orientados ao conhecimento</strong>.
                  </p>
                  
                  <div className="col mt-5 text-center text-md-start">
                    <Link 
                      to="/projetos" 
                      className="shadow" 
                      style={{ 
                        backgroundColor: '#28A7EF', 
                        padding: '15px 32px', 
                        border: 'none', 
                        borderRadius: '4px', 
                        textDecoration: 'none', 
                        color: 'white',
                        display: 'inline-block'
                      }}
                      aria-label="Veja nossos projetos realizados"
                    >
                      Conheça Projetos Realizados
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Clareza */}
        <section 
          id="secao3" 
          style={{ padding: '8rem 0' }}
          aria-labelledby="clareza-heading"
        >
          <div className="offset-md-5 container container-fluid">
            <div className="row align-items-end">
              <div className="col-12 col-md-4 mx-md-5 d-md-none">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fsecao3.png?alt=media&token=9ec221c5-6b17-4a20-b537-2cb2969aecc3"
                  className="img-fluid"
                  alt="Alvo simbolizando foco e precisão"
                  loading="lazy"
                />
              </div>
              
              <div className="col-12 col-md-4">
                <h2 id="clareza-heading" className="text-start text-md-start" style={{ fontSize: '1.75rem' }}>CLAREZA NO FOCO</h2>
                
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
                
                <p className="text-start text-md-start text-grey mt-3" style={{ fontSize: '1.1rem' }}>
                  Temos um foco claro em <strong className="fw-bold">pesquisa, desenvolvimento e inovação</strong>
                  . Nosso objetivo é ajuda-lo a se destacar, <strong className="fw-bold">criando soluções de design</strong> com qualidade de interação. Trabalhamos para <strong className="fw-bold">criar </strong>produtos e serviços <strong className="fw-bold">focados na experiência de uso</strong>.
                </p>
                
                <div className="col mt-5 text-center text-md-start">
                  <Link 
                    to="/academy" 
                    className="shadow" 
                    style={{ 
                      backgroundColor: '#333333', 
                      padding: '16px 32px', 
                      border: 'none', 
                      borderRadius: '4px', 
                      textDecoration: 'none', 
                      color: 'white',
                      display: 'inline-block'
                    }}
                    aria-label="Conheça nossas pesquisas em design"
                  >
                    Conheça Nossas Pesquisas
                  </Link>
                </div>
              </div>
              
              <div className="col-12 col-md-4 mx-md-5 d-none d-md-block">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fsecao3.png?alt=media&token=9ec221c5-6b17-4a20-b537-2cb2969aecc3"
                  className="img-fluid"
                  alt="Alvo simbolizando foco e precisão"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: Inclusão */}
        <section 
          id="inclusao"
          className="text-center text-white" 
          style={{ padding: '7rem 0', background: 'rgba(51, 51, 51, 1)' }}
          aria-labelledby="inclusao-heading"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-9 col-lg-8">
                <div 
                  role="separator" 
                  aria-hidden="true"
                  style={{ 
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#fff',
                    margin: '0 auto 3rem'
                  }}
                ></div>
                
                <h3 id="inclusao-heading" className="display-6 mb-4">
                  <strong>Somos inclusivos</strong>. Nosso compromisso com a <strong>inclusão digital</strong> é refletido em cada projeto.
                </h3>
                
                <p className="display-6">
                  Oferecemos consultoria em <strong>Design Inclusivo</strong> e <strong>Acessibilidade Digital</strong>.
                </p>
                <div 
                  role="separator" 
                  aria-hidden="true"
                  style={{ 
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#fff',
                    margin: '3rem auto 1rem'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: Sobre */}
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
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2FMarca_LeFul0.png?alt=media&token=2baaca17-03bb-4887-8163-63dae16ebdb8"
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
              <span id="image-description" className="sr-only">Logotipo abstrato da LeFul Design House com formas geométricas modernas</span>
            </div>

            {/* Parte direita - Conteúdo */}
            <div style={{
              flex: '1 1 500px'
            }}>
              <h2 id="sobre-heading" style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)', /* 50% menor */
                fontWeight: '700',
                lineHeight: '1.3',
                marginBottom: '1.5rem',
                color: '#1a1a1a'
              }}>
                Da ideia à experiência: <span style={{ color: '#D84315' }}>juntos nessa jornada</span>.
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
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                color: '#333'
              }}>
                Somos uma <strong style={{ fontWeight: 'bold' }}>casa de design orientada ao conhecimento</strong>
                . Oferecemos serviços que vão desde criação de sistemas de identidade visual até projetos completos de:
              </p>
              
              <ul style={{
                margin: '1.5rem 0',
                paddingLeft: '1.5rem',
                listStyleType: 'none'
              }} aria-label="Nossos serviços">
                <li style={{ marginBottom: '0.8rem', fontSize: '1.1rem' }}>• Treinamentos e Consultoria</li>
                <li style={{ marginBottom: '0.8rem', fontSize: '1.1rem' }}>• Produtos digitais e aplicativos</li>
                <li style={{ marginBottom: '0.8rem', fontSize: '1.1rem' }}>• Modelagem de serviços</li>
                <li style={{ marginBottom: '0.8rem', fontSize: '1.1rem' }}>• Recursos educacionais digitais</li>
              </ul>
              
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '2rem'
              }}>
                <Link 
                  to="/politica" 
                  style={{
                    background: '#D84315',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label="Leia nossa política de design"
                >
                  Nossa Política →
                </Link>
                <Link 
                  to="/servicos"
                  style={{
                    border: '1px solid #1a1a1a',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    color: '#1a1a1a'
                  }}
                  aria-label="Conheça nossos serviços"
                >
                  Conheça Nossos Serviços
                </Link>
              </div>
            </div>
          </div>
        </section>

       {/* Seção 6: CTA - Versão Otimizada */}
        <section 
          id="cta"
          style={{ padding: '7rem 0' }}
          className="py-10 py-lg-12"
          aria-labelledby="cta-heading"
        >
          <div className="container px-4">
            <div className="mx-auto" style={{ maxWidth: '800px' }}>
              {/* Cabeçalho com animação sutil */}
              <div className="mb-8" data-aos="fade-up">
                <h3 id="cta-heading" className="fs-1 fw-normal mb-5 text-center">
                  Pronto para transformar ideias em <span className="text-primary fw-bold">experiências impactantes</span>?
                </h3>
                
                <p className="fs-5 text-muted mb-6">
                  Design estratégico começa com diálogo. Vamos conversar sobre como podemos criar <strong>soluções inteligentes</strong> para o seu negócio.
                </p>
              </div>

              {/* Grupo de botões com hover effects */}
              <div 
                className="d-flex flex-column flex-md-row justify-content-center gap-4"
                data-aos="fade-up" 
                data-aos-delay="100"
                style={{ padding: '3rem 0' }}
              >
                <Link 
                  to="/contato" 
                  className="btn btn-primary fs-6 px-4 py-3 shadow-lg-hover fw-semibold"
                  aria-label="Fale conosco sobre seu projeto"
                  style={{
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <i className="bi bi-chat-left-text me-2"></i> Fale com nosso time
                </Link>
                
                <a 
                  href="#inicio" 
                  className="btn btn-outline-primary fs-6 px-4 py-3 fw-semibold"
                  aria-label="Voltar ao topo da página"
                >
                  <i className="bi bi-arrow-up-circle me-2"></i> Voltar ao topo
                </a>
              </div>

              {/* Elemento decorativo opcional */}
              <div className="mt-10 text-center" style={{ padding: '2rem 0' }}>
                <p className="small text-muted mb-2">NOSSOS PARCEIROS</p>
                <div className="d-flex justify-content-center gap-4 opacity-75">
                  {/* Logos de parceiros ou selos de qualidade */}
                  <span className="text-muted">Reference Minds</span>
                  <span className="text-muted">LaMiD</span>
                  <span className="text-muted">Santa i/o</span>
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