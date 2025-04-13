import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserShield, FaChartLine, FaUserCheck, FaRoute, FaPalette } from 'react-icons/fa';
import '../../Styles/global.css';

const DesignCentradoHumano = () => {
  // Metodologia
  const metodologia = [
    {
      etapa: "1. Imersão",
      icone: <FaUserShield className="text-primary" size={24} />,
      descricao: "Entendimento profundo do contexto através de entrevistas e observação dos usuários em seu ambiente natural."
    },
    {
      etapa: "2. Análise",
      icone: <FaChartLine className="text-primary" size={24} />,
      descricao: "Síntese dos dados coletados para identificar padrões, dores e oportunidades de melhoria."
    },
    {
      etapa: "3. Ideação",
      icone: <FaPalette className="text-primary" size={24} />,
      descricao: "Sessões criativas para gerar soluções baseadas nas necessidades reais mapeadas."
    },
    {
      etapa: "4. Validação",
      icone: <FaUserCheck className="text-primary" size={24} />,
      descricao: "Testes iterativos com usuários reais para refinamento contínuo da solução."
    }
  ];

  // Cases
  const cases = [
    {
      titulo: "Redesign de Plataforma de Saúde",
      desafio: "Alta taxa de abandono no agendamento online (68%)",
      solucao: "Redesenho da jornada com base em testes de usabilidade remotos",
      resultado: "↓52% na taxa de abandono | ↑89% satisfação"
    },
    {
      titulo: "Aplicativo Financeiro",
      desafio: "Dificuldade na compreensão de funcionalidades-chave",
      solucao: "Prototipagem em alta fidelidade com validação iterativa",
      resultado: "↑2x no uso de features | ↓40% em chamados ao SAC"
    }
  ];

  return (
    <main className="service-detail-page">
      {/* Hero Section */}
      <section 
        className="service-hero" 
        style={{
          backgroundColor: 'var(--secondary-color)',
          color: 'white',
          padding: '5rem 0'
        }}
        aria-labelledby="dch-heading"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 id="dch-heading" className="display-4 mb-4">
                <span className="text-primary">Design Centrado</span> no Humano
              </h1>
              <p className="lead">
                Criamos experiências que resolvem problemas reais através de pesquisas profundas com usuários, 
                combinando empatia, análise de dados e validação contínua.
              </p>
              <Link 
                to="/contato" 
                className="btn btn-primary btn-lg mt-3"
                aria-label="Solicitar consultoria em Design Centrado no Humano"
              >
                Solicitar Consultoria
              </Link>
            </div>
            <div className="col-lg-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fdch-hero.jpg?alt=media&token=12345"
                alt="Pesquisa com usuários em ambiente controlado"
                className="img-fluid rounded shadow"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-5 bg-light" aria-labelledby="destaques-heading">
        <div className="container">
          <div className="text-center mb-5">
            <h2 id="destaques-heading" className="mb-3">
              Resultados <span className="text-primary">Comprovados</span>
            </h2>
            <div className="row">
              <div className="col-md-4">
                <div className="display-4 text-primary">↑70%</div>
                <p>Satisfação do usuário</p>
              </div>
              <div className="col-md-4">
                <div className="display-4 text-primary">↓40%</div>
                <p>Taxa de erro</p>
              </div>
              <div className="col-md-4">
                <div className="display-4 text-primary">2×</div>
                <p>Engajamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-5" aria-labelledby="metodologia-heading">
        <div className="container">
          <h2 id="metodologia-heading" className="text-center mb-5">
            Nossa <span className="text-primary">Metodologia</span>
          </h2>
          
          <div className="row">
            {metodologia.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div 
                  className="p-4 h-100 border-start border-4 border-primary"
                  style={{ backgroundColor: '#f8f9fa' }}
                >
                  <div className="d-flex align-items-center mb-3">
                    {item.icone}
                    <h3 className="h4 mb-0 ms-3">{item.etapa}</h3>
                  </div>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principais Entregas */}
      <section className="py-5 bg-light" aria-labelledby="entregas-heading">
        <div className="container">
          <h2 id="entregas-heading" className="text-center mb-5">
            Principais <span className="text-primary">Entregas</span>
          </h2>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="h4 text-primary">
                  <FaUserCheck className="me-2" /> Pesquisa de Experiência
                </h3>
                <ul>
                  <li>Entrevistas em profundidade</li>
                  <li>Shadowing (observação contextual)</li>
                  <li>Diários de uso</li>
                  <li>Análise de sentimentos</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="h4 text-primary">
                  <FaUserShield className="me-2" /> Testes de Usabilidade Remotos
                </h3>
                <ul>
                  <li>Protocolos moderados e não moderados</li>
                  <li>Gravação de sessões</li>
                  <li>Mapa de calor de interação</li>
                  <li>Relatório de insights prioritários</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="h4 text-primary">
                  <FaPalette className="me-2" /> Prototipagem em Alta Fidelidade
                </h3>
                <ul>
                  <li>Protótipos interativos</li>
                  <li>Fluxos navegáveis</li>
                  <li>Variações para teste A/B</li>
                  <li>Documentação de padrões</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="h4 text-primary">
                  <FaRoute className="me-2" /> Mapas de Jornada Digital
                </h3>
                <ul>
                  <li>Personas estratégicas</li>
                  <li>Touchpoints críticos</li>
                  <li>Pontos de dor e deleite</li>
                  <li>Oportunidades de melhoria</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-5" aria-labelledby="cases-heading">
        <div className="container">
          <h2 id="cases-heading" className="text-center mb-5">
            Cases de <span className="text-primary">Sucesso</span>
          </h2>
          
          <div className="row">
            {cases.map((caseItem, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="p-4 h-100 bg-dark text-white rounded">
                  <h3>{caseItem.titulo}</h3>
                  <div className="mb-3">
                    <h4 className="h6 text-primary">Desafio:</h4>
                    <p>{caseItem.desafio}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="h6 text-primary">Solução LeFul:</h4>
                    <p>{caseItem.solucao}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="h6 text-primary">Resultado:</h4>
                    <p>{caseItem.resultado}</p>
                  </div>
                  <Link 
                    to={`/cases/${caseItem.titulo.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn btn-outline-primary"
                    aria-label={`Ver detalhes do case ${caseItem.titulo}`}
                  >
                    Ver Estudo Completo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-5" 
        style={{ 
          background: 'linear-gradient(135deg, #cde6f098 0%, #e6dcff50 50%)'
        }}
        aria-labelledby="cta-heading"
      >
        <div className="container text-center">
          <h2 id="cta-heading" className="mb-4">
            Pronto para transformar a experiência dos seus usuários?
          </h2>
          <p className="lead mb-5">
            Nossa equipe de pesquisadores e designers está pronta para ajudar seu negócio a criar soluções 
            verdadeiramente centradas nas necessidades humanas.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link 
              to="/contato" 
              className="btn btn-primary btn-lg px-4"
              aria-label="Agendar consulta sobre Design Centrado no Humano"
            >
              Falar com Especialista
            </Link>
            <Link 
              to="/metodologia/dch" 
              className="btn btn-outline-primary btn-lg px-4"
              aria-label="Conhecer nossa metodologia detalhada"
            >
              Metodologia Completa
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DesignCentradoHumano;