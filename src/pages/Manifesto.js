import React from 'react';
function Manifesto() {
  return (
    <>
      {/* Header */}
      <header id="topo" className="text-white mt-5" style={{ background: '#2AA7BB' }}>
        <div className="container px-4 text-center">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2FMarca_LeFul0.png?alt=media&token=2baaca17-03bb-4887-8163-63dae16ebdb8"
            alt="Identidade Visual da LeFul Design House" 
            title="Manifesto LeFul Design House"
          />
          <h1 className="display-5">Manifesto LeFul Design House</h1>
          <p className="lead">Declaração de princípios e interesses orientadores para a prática de design</p>
        </div>
      </header>

      {/* About section */}
      <section style={{ background: 'rgba(40, 167, 239, 0.1)' }}>
        <div className="container py-3">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>Sobre o Manifesto</h2>
              <p className="lead mt-3">Nós, na <strong>LeFul Design House</strong>, acreditamos no poder do design como uma força transformadora capaz de
                moldar o mundo ao nosso redor. Nosso manifesto é uma <strong>declaração de princípios, crenças, valores e objetivos</strong>
                que guiam nossa prática profissional e nos impulsionam a alcançar resultados excepcionais:</p>
            </div>
            <div className="row mt-3" title="Clique sobre o tópico para ir direto ao conteúdo">
              <div className="col-md-4 offset-md-2">
                <ul>
                  <li><a href="#topico1" className="fs-sm text-dark text-decoration-none mb-3">1. Criatividade como a Essência</a></li>
                  <li><a href="#topico2" className="fs-sm text-dark text-decoration-none mb-3">2. Empatia no Centro</a></li>
                  <li><a href="#topico3" className="fs-sm text-dark text-decoration-none mb-3">3. Excelência em Execução</a></li>
                  <li><a href="#topico4" className="fs-sm text-dark text-decoration-none mb-3">4. Inovação como Motor</a></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li><a href="#topico5" className="fs-sm text-dark text-decoration-none mb-3">5. Colaboração para a Criação</a></li>
                  <li><a href="#topico6" className="fs-sm text-dark text-decoration-none mb-3">6. Sustentabilidade como Compromisso</a></li>
                  <li><a href="#topico7" className="fs-sm text-dark text-decoration-none mb-3">7. Impacto Além do Estético</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tópicos */}
      {renderTopico(
        "topico1",
        "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcriatividade.png?alt=media&token=5980bf4d-4e69-4dde-b797-8ce5f65d904b",
        "Criatividade como a Essência",
        "Abraçamos a criatividade como o coração pulsante de tudo o que fazemos. Nossa paixão pelo design nos leva a explorar novas perspectivas, ousar e explorar novas ideias, desafiar os limites do convencional e criar soluções inovadoras e inspiradoras. Acreditamos que a criatividade é a essência de todo grande design e a chave para superar os obstáculos e criar impacto duradouro.",
        "Criatividade como essência"
      )}

      {/* Render outros tópicos da mesma forma... */}

      {/* Final section */}
      <section style={{ background: 'rgba(40, 167, 239, 0.1)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-3">Este é o nosso manifesto de design</h2>
              <p className="lead">Esta é a base sólida que orienta cada projeto e decisão que tomamos na LeFul Design House. Comprometemo-nos a aplicar esses princípios
                com integridade e dedicação, superando limites e elevando o design a um nível superior. Junte-se a nós nessa jornada de criação, onde a paixão,
                a inovação e a excelência se encontram para fazer a diferença no mundo através do poder do design.</p>
            </div>
            <div className="row my-md-5 mt-5">
              <div className="d-grid d-md-flex justify-content-md-center mt-5">
                <a href="#topo">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fbotao-de-seta-para-cima.png?alt=media&token=68f286f7-9b8b-443d-9f4a-bae9a0729db8"
                    alt="Imagem de uma seta apontando para cima" 
                    title="Voltar ao início da página" 
                    width="50"
                  />
                </a>
              </div>
              <div className="d-grid d-md-flex justify-content-md-center">
                <a href="#topo" className="text-dark text-decoration-none mt-2" title="Clique no botão para voltar ao início da página">Voltar ao Topo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Função auxiliar para renderizar tópicos
function renderTopico(id, imgSrc, titulo, conteudo, tooltip) {
  return (
    <div className="mt-5" id={id}>
      <div className="row justify-content-center">
        <div className="col-lg-6 offset-md-3 my-md-4">
          <img 
            src={imgSrc}
            alt={titulo}
            title={tooltip}
            width="150"
          />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h3 className="mb-4">{titulo}</h3>
            <p className="lead offset-md-1">{conteudo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manifesto;