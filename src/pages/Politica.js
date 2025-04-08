import { Link } from 'react-router-dom';

function Politica() {
  return (
    <main>
      <div role="main">
        {/* Header */}
        <header 
          id="topo" 
          className="bg-secondary bg-gradient text-white py-5"
          style={{ marginTop: '3rem' }}
        >
          <div className="container px-4">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcadeado-trancado.png?alt=media&token=703057e4-7294-40e1-9b22-90e59c2b944f"
                  alt="Imagem de um cadeado fechado"
                  title="Privacidade e Segurança"
                  className="img-fluid"
                />
                <h1 className="display-5 text-center mt-3">Política de Privacidade</h1>
                <p className="lead text-center">Valorizamos a privacidade e a segurança das suas informações pessoais.</p>
              </div>
            </div>
          </div>
        </header>

        {/* About section */}
        <section id="topo" className="bg-light py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="mb-4">Aos Usuários e Clientes</h2>
                <p className="lead">Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os
                  dados pessoais fornecidos por meio do nosso site, serviços e produtos. Ao utilizar nossos serviços,
                  você concorda com as práticas descritas nesta política.</p>
              </div>
              
              <div className="row mt-4" title="Clique sobre o tópico para ir direto ao conteúdo">
                <div className="col-md-4 offset-md-2">
                  <ul className="list-unstyled">
                    <li className="mb-3"><a href="#topico1" className="text-dark text-decoration-none">1. Informações coletadas</a></li>
                    <li className="mb-3"><a href="#topico2" className="text-dark text-decoration-none">2. Uso das informações</a></li>
                    <li className="mb-3"><a href="#topico3" className="text-dark text-decoration-none">3. Compartilhamento de informações</a></li>
                    <li className="mb-3"><a href="#topico4" className="text-dark text-decoration-none">4. Armazenamento e segurança</a></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-3"><a href="#topico5" className="text-dark text-decoration-none">5. Cookies e tecnologias similares</a></li>
                    <li className="mb-3"><a href="#topico6" className="text-dark text-decoration-none">6. Links para sites de terceiros</a></li>
                    <li className="mb-3"><a href="#topico7" className="text-dark text-decoration-none">7. Consentimento e alterações nesta política</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tópicos */}
        <div className="py-5" id="topico1">
          <div className="row justify-content-center">
            <div className="col-lg-6 offset-md-3 my-4 text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Finformacoes-de-contato%20(1).png?alt=media&token=7cfc47dd-2afe-4739-bc89-3cf8188a6cb1"
                alt="Ícone de informações de contato"
                title="Privacidade e Segurança"
                width="150"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3 className="mb-4">1. Informações coletadas</h3>
                <p className="lead">Podemos coletar informações pessoais, como nome, endereço de e-mail, número de telefone e informações de pagamento, quando
                  você utiliza nossos serviços, se cadastra em nossa plataforma, entra em contato conosco ou fornece informações durante o processo de
                  criação e desenvolvimento dos projetos.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5" id="topico2">
          <div className="row justify-content-center">
            <div className="col-lg-6 offset-md-3 my-4 text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Finformacoes-de-contato.png?alt=media&token=7025cae5-aac0-4ae4-8e17-f98fe1f2b0fd"
                alt="Ícone de informações"
                title="Privacidade e Segurança"
                width="150"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3 className="mb-4">2. Uso das informações</h3>
                <p className="lead">Utilizamos as informações coletadas para fornecer e melhorar nossos serviços, personalizar a experiência do usuário, enviar
                  comunicações relevantes, processar pagamentos, responder a perguntas e fornecer suporte ao cliente. Além disso, podemos utilizar os
                  dados para fins internos, como análises e pesquisas, visando aprimorar nossos produtos e serviços.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5" id="topico3">
          <div className="row justify-content-center">
            <div className="col-lg-6 offset-md-3 my-4 text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Finformacoes.png?alt=media&token=9419ec8a-0d0a-4dc2-a54d-767346c781c7"
                alt="Ícone de compartilhamento de informações"
                title="Privacidade e Segurança"
                width="150"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3 className="mb-4">3. Compartilhamento de informações</h3>
                <p className="lead">Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais, proteger
                  nossos direitos e propriedade, ou quando expressamente autorizado por você. Podemos compartilhar dados de forma agregada e anônima para fins
                  estatísticos e de marketing.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5" id="topico4">
          <div className="row justify-content-center">
            <div className="col-lg-6 offset-md-3 my-4 text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Finformacoes-pessoais.png?alt=media&token=6b032e0d-f56f-40b9-8fff-4f7690de11bb"
                alt="Ícone de armazenamento seguro"
                title="Privacidade e Segurança"
                width="150"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3 className="mb-4">4. Armazenamento e segurança</h3>
                <p className="lead">Adotamos medidas de segurança para proteger suas informações contra acesso não autorizado, uso indevido, divulgação ou alteração. Utilizamos
                  práticas adequadas de proteção de dados, como criptografia e controles de acesso, para garantir a segurança das informações pessoais.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5" id="topico5">
          <div className="row justify-content-center">
            <div className="col-lg-6 offset-md-3 my-4 text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Ftecnologia%20(1).png?alt=media&token=2dd4d3a7-5589-499b-8236-4f212d8c7d6c"
                alt="Ícone de tecnologia e cookies"
                title="Privacidade e Segurança"
                width="150"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3 className="mb-4">5. Cookies e tecnologias similares</h3>
                <p className="lead">Utilizamos cookies e outras tecnologias similares para melhorar a experiência do usuário, personalizar conteúdo, analisar o tráfego do site e
                  realizar campanhas de marketing direcionadas. Você pode optar por desabilitar os cookies em seu navegador, mas isso pode afetar a funcionalidade do site.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5" id="topico6">
          <div className="row justify-content-center">
            <div className="col-lg-6 offset-md-3 my-4 text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Ftecnologia%20(2).png?alt=media&token=f4e77244-3af3-4cf6-b406-211ce5be48ba"
                alt="Ícone de links externos"
                title="Privacidade e Segurança"
                width="150"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3 className="mb-4">6. Links para sites de terceiros</h3>
                <p className="lead">Nosso site pode conter links para sites de terceiros que possuem suas próprias políticas de privacidade. Não nos responsabilizamos pelo
                  conteúdo ou práticas de privacidade desses sites e recomendamos que você revise suas políticas antes de fornecer suas informações pessoais.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5" id="topico7">
          <div className="row justify-content-center">
            <div className="col-lg-6 offset-md-3 my-4 text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fconsentimento.png?alt=media&token=bbeff823-e96d-4695-8525-bb19cba00bc1"
                alt="Ícone de consentimento"
                title="Privacidade e Segurança"
                width="150"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3 className="mb-4">7. Consentimento e alterações nesta política</h3>
                <p className="lead">Ao utilizar nossos serviços, você consente com a coleta e uso de suas informações pessoais de acordo com esta Política de Privacidade.
                  Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas de privacidade. Recomendamos que você revise esta página
                  regularmente para se manter informado sobre as atualizações.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contato Section */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="mb-3">Dúvidas ou Preocupações?</h2>
                <p className="lead">Se tiver dúvidas ou preocupações sobre nossa Política de Privacidade, entre em
                  <Link to="/contato" className="fw-bold text-dark text-decoration-none ms-1 me-1">contato conosco</Link> pelo formulário do site ou nos envie um email
                  para o endereço <strong className="fw-bold">leful.contato@gmail.com</strong>.
                  Estamos comprometidos em proteger sua privacidade e garantir a segurança das suas informações pessoais.</p>
                
                <div className="d-flex flex-column align-items-center mt-5">
                  <a href="#topo" className="mb-2">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fbotao-de-seta-para-cima.png?alt=media&token=68f286f7-9b8b-443d-9f4a-bae9a0729db8"
                      alt="Voltar ao topo da página"
                      title="Clique para voltar ao início da página"
                      width="50"
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
      </div>
    </main>
  );
}

export default Politica;