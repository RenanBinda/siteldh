
function Manifesto() {
  return (
    <main>
      {/* Cabeçalho */}
      <header id="topo" className="text-white py-5" style={{ background: 'rgba(51, 51, 51, 1)' }}>
        <div className="container px-4 text-center">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2FMarca_LeFul0.png?alt=media&token=2baaca17-03bb-4887-8163-63dae16ebdb8"
            alt="Identidade Visual da LeFul Design House" 
            className="img-fluid mb-4"
            style={{ maxWidth: '200px' }}
          />
          <h1 className="display-5 mb-3">
            Manifesto <span style={{ color: '#EB5F2C' }}>LeFul Design House</span>
          </h1>
          <p className="lead">
            Declaração de princípios e interesses orientadores para a prática de design
          </p>
        </div>
      </header>

      {/* Seção Sobre */}
      <section className="py-5" style={{ backgroundColor: 'rgba(233, 232, 232, 0.56)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">
                Sobre o <span style={{ color: '#EB5F2C' }}>Manifesto</span>
              </h2>
              
              <div style={{ width: '80px', height: '2px', background: '#EB5F2C', margin: '1.5rem 0' }}></div>
              
              <p className="lead">
                Nós, na <strong>LeFul Design House</strong>, acreditamos no poder do design como uma força transformadora capaz de moldar o mundo ao nosso redor. 
                Nosso manifesto é uma <strong>declaração de princípios, crenças, valores e objetivos</strong> que guiam nossa prática profissional e nos impulsionam 
                a alcançar resultados excepcionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tópico 1 - Criatividade */}
      <div className="bg-white">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcriatividade.png?alt=media&token=5980bf4d-4e69-4dde-b797-8ce5f65d904b"
                      alt="Imagem representando criatividade"
                      className="img-fluid"
                      style={{ maxWidth: '150px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="mb-4">
                      <span style={{ color: '#EB5F2C' }}>1.</span> Criatividade como a Essência
                    </h3>
                    <p className="lead">
                      Abraçamos a criatividade como o coração pulsante de tudo o que fazemos. Nossa paixão pelo design nos leva a explorar novas perspectivas, 
                      ousar e explorar novas ideias, desafiar os limites do convencional e criar soluções inovadoras e inspiradoras. Acreditamos que a criatividade é 
                      a essência de todo grande design e a chave para superar os obstáculos e criar impacto duradouro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tópico 2 - Empatia e Inclusão */}
      <div className="bg-light">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0 order-md-2">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fempatia.png?alt=media&token=5f208b94-8b3e-4481-9fa5-eb6e2dc811d6"
                      alt="Imagem representando empatia"
                      className="img-fluid"
                      style={{ maxWidth: '150px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8 order-md-1">
                    <h3 className="mb-4">
                      <span style={{ color: '#EB5F2C' }}>2.</span> Empatia e Inclusão no Centro
                    </h3>
                    <p className="lead">
                      Colocamos a diversidade humana como fundamento de nosso processo criativo. Além de entender necessidades e desejos, nos comprometemos 
                      a desenvolver pesquisas com grupos diversos e sub-representados, criar personas que representem a variedade de usuários reais e 
                      testar soluções com pessoas de diferentes capacidades e contextos. Nossa meta é criar experiências incluam e celebrem a diversidade humana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tópico 3 - Excelência */}
      <div className="bg-white">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fprocesso-de-design.png?alt=media&token=5dca919f-039e-456e-b65f-834eadea7759"
                      alt="Imagem representando excelência"
                      className="img-fluid"
                      style={{ maxWidth: '150px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="mb-4">
                      <span style={{ color: '#EB5F2C' }}>3.</span> Excelência em Execução
                    </h3>
                    <p className="lead">
                      Acreditamos que a excelência está nos detalhes. Nossa busca incessante pela perfeição e qualidade nos leva a executar cada projeto com 
                      precisão e cuidado. Desde a concepção até a entrega final, nos esforçamos para superar as expectativas dos nossos clientes e alcançar 
                      resultados de alto nível, garantindo que cada elemento atenda aos mais rigorosos padrões de qualidade e acessibilidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tópico 4 - Inovação */}
      <div className="bg-light">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0 order-md-2">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Ffoguete.png?alt=media&token=b9aa5560-e941-445d-be88-a0c72826e3c1"
                      alt="Imagem representando inovação"
                      className="img-fluid"
                      style={{ maxWidth: '150px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8 order-md-1">
                    <h3 className="mb-4">
                      <span style={{ color: '#EB5F2C' }}>4.</span> Inovação como Motor
                    </h3>
                    <p className="lead">
                      Somos impulsionados pela inovação constante. Queremos estar sempre um passo a frente, abraçando tecnologias emergentes, 
                      tendências e abordagens disruptivas para criar soluções de design pioneiras. Acreditamos que a inovação é fundamental para se 
                      destacar em um mundo em constante evolução, e por isso investimos continuamente em pesquisa e desenvolvimento de novas abordagens de design inclusivo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tópico 5 - Colaboração */}
      <div className="bg-white">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcolaboracao.png?alt=media&token=dbb514e5-1ca7-4894-b957-987c7e7ea1ad"
                      alt="Imagem representando colaboração"
                      className="img-fluid"
                      style={{ maxWidth: '150px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="mb-4">
                      <span style={{ color: '#EB5F2C' }}>5.</span> Colaboração para a Criação
                    </h3>
                    <p className="lead">
                      Acreditamos no poder da colaboração. Valorizamos parcerias e trabalhamos em estreita colaboração com nossos clientes para co-criar 
                      soluções de design que excedam suas expectativas. Através do trabalho em equipe e da co-criação, buscamos reunir talentos diversos para 
                      explorar ideias, compartilhar conhecimento e alcançar resultados que beneficiem todos os stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tópico 6 - Sustentabilidade */}
      <div className="bg-light">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0 order-md-2">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Frotulo.png?alt=media&token=ec8b1191-c195-4ee4-bf66-3e4b4945de75"
                      alt="Imagem representando sustentabilidade"
                      className="img-fluid"
                      style={{ maxWidth: '150px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8 order-md-1">
                    <h3 className="mb-4">
                      <span style={{ color: '#EB5F2C' }}>6.</span> Sustentabilidade como Compromisso
                    </h3>
                    <p className="lead">
                      Temos a responsabilidade de preservar o meio ambiente e criar um futuro sustentável. Incorporamos práticas sustentáveis em nosso 
                      processo de design, desde a seleção de materiais até a minimização do desperdício. Nossa responsabilidade é criar soluções de design 
                      que preservem e respeitem o meio ambiente, considerando todo o ciclo de vida dos produtos e serviços que desenvolvemos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tópico 7 - Impacto */}
      <div className="bg-white">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fqualidade-de-vida.png?alt=media&token=c8ce2015-6918-49d2-a4e1-7b373ca3d99b"
                      alt="Imagem representando impacto"
                      className="img-fluid"
                      style={{ maxWidth: '150px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="mb-4">
                      <span style={{ color: '#EB5F2C' }}>7.</span> Impacto Além do Estético
                    </h3>
                    <p className="lead">
                      Projetamos para além da estética dos sentidos. Buscamos criar soluções de design que tenham um impacto significativo na vida das pessoas, 
                      gerando valor, promovendo a inclusão, educação e bem-estar. Nosso objetivo é criar soluções que resolvam problemas reais e inspirem emoções, 
                      acreditando que o design tem o poder de moldar um futuro melhor para todos, sem exceção.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tópico 8 - Acessibilidade (novo) */}
      <div className="bg-light">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0 order-md-2">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Facessibilidade.png?alt=media&token=YOUR_TOKEN_HERE"
                      alt="Imagem representando acessibilidade"
                      className="img-fluid"
                      style={{ maxWidth: '150px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8 order-md-1">
                    <h3 className="mb-4">
                      <span style={{ color: '#EB5F2C' }}>8.</span> Acessibilidade como Direito
                    </h3>
                    <p className="lead">
                      Comprometemo-nos com a criação de designs acessíveis e inclusivos. Acreditamos que a acessibilidade digital é um direito fundamental. 
                      Desenvolvemos todas as soluções seguindo as diretrizes WCAG e a NBR 17225 para garantir que nossos produtos sejam utilizáveis por todas as 
                      pessoas. A excelência em design só existe quando é inclusiva por padrão.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Final */}
      <section className="py-5 text-center" style={{ backgroundColor: 'rgba(233, 232, 232, 0.56)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">
                Este é o nosso <span style={{ color: '#EB5F2C' }}>manifesto de design</span>
              </h2>
              
              <div style={{ width: '80px', height: '2px', background: '#EB5F2C', margin: '1.5rem auto' }}></div>
              
              <p className="lead mb-5">
                Esta é a base que orienta cada projeto e decisão que tomamos na LeFul Design House. Comprometemo-nos a aplicar esses princípios com integridade e 
                dedicação, superando limites e elevando o design a um nível superior. Junte-se a nós nessa jornada de criação, onde a paixão, a inovação e a 
                excelência se encontram para fazer a diferença no mundo através do poder do design.
              </p>
              
              <div className="d-flex flex-column align-items-center">
                <a href="#topo" className="mb-2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fbotao-de-seta-para-cima.png?alt=media&token=68f286f7-9b8b-443d-9f4a-bae9a0729db8"
                    alt="Seta para cima"
                    width="50"
                    loading="lazy"
                  />
                </a>
                <a href="#topo" className="text-dark text-decoration-none">
                  Voltar ao Topo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Manifesto;