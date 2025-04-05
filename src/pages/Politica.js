import React from 'react';
import { Link } from 'react-router-dom';

function Politica() {
  return (
    <>
      {/* Header */}
      <header id="topo" className="bg-secondary bg-gradient text-white mt-5">
        <div className="container px-4">
          <div className="row justify-content-center">
            <div className="col-lg-6" style={{ textAlign: 'center' }}>
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcadeado-trancado.png?alt=media&token=703057e4-7294-40e1-9b22-90e59c2b944f"
                alt="Imagem de um cadeado fechado" 
                title="Privacidade e Segurança"
              />
              <h1 className="display-5 text-center mt-3">Política de Privacidade</h1>
              <p className="lead text-center">Valorizamos a privacidade e a segurança das suas informações pessoais.</p>
            </div>
          </div>
        </div>
      </header>

      {/* About section */}
      <section className="bg-light">
        <div className="container">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Aos Usuários e Clientes</h2>
              <p className="lead">Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os dados pessoais fornecidos por meio do nosso site, serviços e produtos. Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política.</p>
            </div>
            <div className="row mt-3" title="Clique sobre o tópico para ir direto ao conteúdo">
              <div className="col-md-4 offset-md-2">
                <ul>
                  <li><a href="#topico1" className="fs-sm text-dark text-decoration-none mb-3">1. Informações coletadas</a></li>
                  <li><a href="#topico2" className="fs-sm text-dark text-decoration-none mb-3">2. Uso das informações</a></li>
                  <li><a href="#topico3" className="fs-sm text-dark text-decoration-none mb-3">3. Compartilhamento de informações</a></li>
                  <li><a href="#topico4" className="fs-sm text-dark text-decoration-none mb-3">4. Armazenamento e segurança</a></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li><a href="#topico5" className="fs-sm text-dark text-decoration-none mb-3">5. Cookies e tecnologias similares</a></li>
                  <li><a href="#topico6" className="fs-sm text-dark text-decoration-none mb-3">6. Links para sites de terceiros</a></li>
                  <li><a href="#topico7" className="fs-sm text-dark text-decoration-none mb-3">7. Consentimento e alterações nesta política</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Render tópicos da política */}
      {renderTopicoPolitica(
        "topico1",
        "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Finformacoes-de-contato%20(1).png?alt=media&token=7cfc47dd-2afe-4739-bc89-3cf8188a6cb1",
        "1. Informações coletadas",
        "Podemos coletar informações pessoais, como nome, endereço de e-mail, número de telefone e informações de pagamento, quando você utiliza nossos serviços, se cadastra em nossa plataforma, entra em contato conosco ou fornece informações durante o processo de criação e desenvolvimento dos projetos.",
        "Privacidade e Segurança"
      )}

      {/* Render outros tópicos da mesma forma... */}

      {/* Final section */}
      <section className="bg-light">
        <div className="container py-3">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-3">Dúvidas ou Preocupações?</h2>
              <p className="lead">Se tiver dúvidas ou preocupações sobre nossa Política de Privacidade, entre em <Link to="/contato" className="fw-bold fs-sm text-dark text-decoration-none mb-3">contato conosco</Link> pelo formulário do site ou nos envie um email para o endereço <strong className="fw-bold">leful.contato@gmail.com</strong>. Estamos comprometidos em proteger sua privacidade e garantir a segurança das suas informações pessoais.</p>
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

function renderTopicoPolitica(id, imgSrc, titulo, conteudo, tooltip) {
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

export default Politica;