import { Link } from 'react-router-dom';
function Home() {
    return (
      <main>
        {/* Seção Hero */}
        <section 
          id="inicio" 
          className="text-white" 
          style={{ background: 'rgba(51, 51, 51, 1)' }}
          aria-labelledby="hero-heading"
        >
        
            <div className="container container-fluid py-5">
              <div className="row">
                <div className="col-12 col-md-9 mt-md-5 d-none d-md-block">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fbanner_home.png?alt=media&token=35542088-ab45-4236-aed3-7a9ea547d6f0"
                    className="img-fluid" 
                    alt="Nós Criamos Soluções em Design" 
                    title="Nós Criamos Soluções em Design"
                  />
                </div>
                <div className="col-12 col-md-9 mt-md-5 d-md-none">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fbanner_home_mob.png?alt=media&token=e7d84249-bc08-4552-a87b-2b3de1651802"
                    className="img-fluid" 
                    alt="Nós Criamos Soluções em Design" 
                    title="Nós Criamos Soluções em Design"
                  />
                </div>
                <div className="col col-11 col-md-3 mt-md-5"><br /><br />
                  <h3 className="text-start mt-4">
                    A <span style={{ color: '#EB5F2C' }}>LeFul Design House</span>
                    têm um foco claro na <span style={{ color: '#EB5F2C' }}>criatividade e inovação.</span>
                  </h3>
                  <p style={{ margin: '1rem 0', color: 'rgba(235, 95, 44, 1)', width: '150px', border: '0', borderTop: '2px solid' }}></p>
                  <p className="lead text-start text-grey mt-3">
                    Desenvolvemos projetos <strong className="fw-bold">orientados ao conhecimento </strong>e <strong className="fw-bold">transformamos</strong> a maneira como as pessoas <strong className="fw-bold">interagem </strong>com o <strong className="fw-bold">mundo digital</strong>.</p><br />
                  <div className="row">
                    <div className="col mt-4 text-md-start text-center" title="Clique no botão para acessar a página de Serviços">
                      <Link to="/servicos" className="shadow" style={{ backgroundColor: '#DD5321', padding: '15px 32px', border: 'none', borderRadius: '4px', textAlign: 'center', textDecoration: 'none', color: 'white' }} title="Acesse para conhecer nossos serviços">
                        Conheça Nossos Serviços
                      </Link>
                    </div>
                    <div className="row">
                      <div className="col pe-md-5 pt-4 text-center">
                        <img 
                          src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fvector_home.png?alt=media&token=542d526b-7666-4e22-8377-447f3d530b3f"
                          alt="Imagem ícone, uma seta apontando para baixo" 
                          width="34" 
                          height="49" 
                          title="Comece a explorar nosso site!"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div id="fundamental" className="fundamental fundamental-md offset-md-3 pt-md-5 container container-fluid" style={{ background: 'rgba(51, 51, 51, 1)' }}>
              <div className="text-white">
                <div className="row">
                  <div className="col-12 col-md-4 mb-5 me-md-4">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fsecao2.png?alt=media&token=5180ab66-1e9b-41c2-b818-deb1f527af94"
                      className="img-fluid" 
                      alt="Imagem mostra dois triângulos em direções opostas" 
                      title="O que achamos fundamental para o sucesso?"
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <h3 className="text-start">EXPLORE POSSIBILIDADES</h3>
                    <p className="fundamental-linha"></p>
                    <p className="lead text-start text-grey mt-3">
                      Incentivamos a <strong className="fw-bold">criatividade</strong> e a <strong className="fw-bold">inovação</strong> para transformar suas ideias em <strong className="fw-bold">experiências impactantes. </strong>
                      Acreditamos que isso é <strong className="fw-bold">fundamental </strong> para o sucesso dos <strong className="fw-bold">projetos orientados ao conhecimento</strong>.</p>
                    <div className="col mt-5 text-center text-md-start">
                      <Link to="/projetos" className="shadow" style={{ backgroundColor: '#28A7EF', padding: '15px 32px', border: 'none', borderRadius: '4px', textAlign: 'center', textDecoration: 'none', color: 'white' }} title="Acesse a página Projetos para ver o que já realizamos">
                        Conheça Projetos Realizados
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <section id="secao3">
            <div className="offset-md-3 container container-fluid">
              <div className="row">
                <div className="col col-12 col-md-4 mb-5 mx-md-5 d-md-none">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fsecao3.png?alt=media&token=9ec221c5-6b17-4a20-b537-2cb2969aecc3"
                    className="img-fluid" 
                    alt="Imagem representando um alvo" 
                    title="Foco, acurácia e precisão"
                  />
                </div>
                <div className="col col-12 col-md-4">
                  <h3 className="text-start text-md-start">CLAREZA NO FOCO</h3>
                  <p className="clareza-linha"></p>
                  <p className="lead text-start text-md-start text-grey mt-3">Temos um foco claro em <strong className="fw-bold">pesquisa, desenvolvimento e inovação.</strong>
                    Nosso objetivo é ajuda-lo a se destacar, <strong className="fw-bold">criando soluções de design</strong> com qualidade de interação. Trabalhamos para <strong className="fw-bold">criar </strong>produtos e serviços <strong className="fw-bold">focados na experiência de uso</strong>.</p>
                  <div className="col mt-5 text-center text-md-start">
                    <Link to="/pesquisas" className="shadow" style={{ backgroundColor: '#333333', padding: '10px 32px', border: 'none', borderRadius: '4px', textAlign: 'center', textDecoration: 'none', color: 'white' }} title="Acesse para saber os últimos resultados de nossas pesquisas">
                      Conheça Nossas Pesquisas
                    </Link>
                  </div>
                </div>
                <div className="col col-12 col-md-4 mt-5 mx-md-5 d-none d-md-block">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fsecao3.png?alt=media&token=9ec221c5-6b17-4a20-b537-2cb2969aecc3"
                    className="img-fluid" 
                    alt="Imagem representando um alvo" 
                    title="Foco, acurácia e precisão"
                  />
                </div>
              </div>
            </div>
          </section>
    
          <section id="secao4" style={{ background: 'rgba(51, 51, 51, 1)' }}>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col col-md-9 px-md-5 pt-md-1 pb-md-4 text-white text-center text-md-start" style={{ border: 'dotted' }} title="Acessilidade e Inclusão">
                  <p style={{ margin: '1rem 0', color: 'rgba(51, 51, 51, 1)', width: '350px', border: '0', borderTop: '2px solid' }}></p>
                  <p className="display-6"><strong className="fw-bold">Somos inclusivos</strong>. Nosso compromisso com a <strong className="fw-bold">inclusão digital </strong>é refletido em cada projeto.
                    Oferecemos consultoria em <strong className="fw-bold">Design Inclusivo </strong>e<strong className="fw-bold"> Acessibilidade Digital</strong>.</p>
                </div>
              </div>
            </div>
          </section>
    
          <section id="secao5" className="bg-light">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 col-md-6">
                  <h3 className="ms-md-5 me-md-2 mb-3" title="Design - Tecnologia - Inovação">LeFul Design House</h3>
                  <Link className="badge btn bg-secondary ms-md-5 text-decoration-none" title="Leia nosso Manifesto" to="/manifesto">Manifesto</Link>
                  <Link className="badge btn bg-secondary mb-4 text-decoration-none" title="Conheça nossa Política de Privacidade" to="/politica">Política de Privacidade</Link>
                </div>
                <div className="row">
                  <div className="col-sm-5 col-md-6">
                    <p className="lead ms-md-5 me-md-2">Somos uma casa de <strong className="fw-bold">design orientada ao conhecimento</strong>. Oferecemos<strong className="fw-bold"> serviços de design </strong>que vão desde
                      criação de sistemas de identidade visual, projetos de sinalização, produtos digitais, modelagem de serviços, websites, aplicativos móveis, recursos educacionais
                      digitais e muito mais.
                    </p>
                  </div>
                  <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                    <p className="lead ms-md-2 me-md-5">Na <strong className="fw-bold">LeFul DH,</strong> a <strong className="fw-bold">paixão pela educação </strong>se traduz em treinamento e suporte para educadores e profissionais de tecnologia.
                      Nossas ações são capazes de <strong className="fw-bold">promover experiências digitais </strong>para pessoas com diferentes habilidades, atendendo suas necessidades <strong className="fw-bold">de forma personalzada</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <section>
            <div className="container">
              <div className="row">
                <h1 className="display-6 text-center">VAMOS CRIAR <span className="text-primary">SOLUÇÕES EM DESIGN?</span></h1>
                <p className="lead text-center text-grey mt-3">Se você também acredita que o Design orientado ao conhecimento faz a diferença, vamos conversar!</p>
                <div className="row my-md-5 mt-5">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <Link to="/contato" className="btn btn-primary shadow w-md-25" title="Acesse e nos diga o que está pensando em criar">Envie-nos uma mensagem</Link>
                    <a href="#inicio" className="btn btn-light ms-md-3 w-md-25" title="Clique no botão para voltar ao início da página">Voltar ao Topo</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </main>
    );
  }
  
  export default Home;