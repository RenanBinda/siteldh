import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaChartBar, FaUsersCog, FaObjectGroup } from 'react-icons/fa';
import '../../Styles/global.css';

const DesignTransformador = () => {
  // Serviços estratégicos
  const servicos = [
    {
      icone: <FaLightbulb className="text-primary" size={40} />,
      titulo: "Estratégia de Marca",
      descricao: "Desenvolvemos identidades visuais que comunicam valores e se conectam com o público-alvo.",
      beneficios: [
        "Posicionamento de mercado claro",
        "Conexão emocional com clientes",
        "Diferenciação competitiva"
      ]
    },
    {
      icone: <FaChartBar className="text-primary" size={40} />,
      titulo: "Design de Serviços",
      descricao: "Mapeamos e otimizamos jornadas do cliente para criar experiências memoráveis.",
      beneficios: [
        "Processos mais eficientes",
        "Maior satisfação do cliente",
        "Redução de custos operacionais"
      ]
    },
    {
      icone: <FaUsersCog className="text-primary" size={40} />,
      titulo: "Transformação Digital",
      descricao: "Acompanhamos sua empresa na transição para modelos digitais centrados no usuário.",
      beneficios: [
        "Adoção tecnológica gradual",
        "Capacitação de equipes",
        "Soluções escaláveis"
      ]
    },
    {
      icone: <FaObjectGroup className="text-primary" size={40} />,
      titulo: "Inovação Corporativa",
      descricao: "Facilitamos processos criativos para gerar soluções disruptivas para seu negócio.",
      beneficios: [
        "Cultura de inovação",
        "Novos modelos de receita",
        "Adaptação a mudanças"
      ]
    }
  ];

  // Cases de transformação
  const cases = [
    {
      titulo: "Redesign de Plataforma B2B",
      cliente: "Indústria de Componentes",
      desafio: "Interface obsoleta dificultando vendas online",
      solucao: "Redesign completo focado em usabilidade e fluxo de compra",
      resultado: "↑150% em conversões em 6 meses",
      imagem: "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcase-b2b.jpg?alt=media&token=12345"
    },
    {
      titulo: "Reposicionamento de Marca",
      cliente: "Startup de Educação",
      desafio: "Identidade visual não refletia inovação",
      solucao: "Sistema de marca com diretrizes claras para todos os touchpoints",
      resultado: "↑80% no reconhecimento de marca",
      imagem: "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcase-branding.jpg?alt=media&token=12345"
    }
  ];

  // Métricas de impacto
  const metricas = [
    { valor: "+90%", descricao: "aumento médio na percepção de valor" },
    { valor: "2.5x", descricao: "retorno sobre investimento em design" },
    { valor: "12", descricao: "setores diferentes atendidos" },
    { valor: "100%", descricao: "clientes que recomendam nossos serviços" }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section 
        className="split-section" 
        aria-labelledby="transformacao-heading"
        style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
      >
        <div className="split-container">
          <div className="split-content">
            <h1 id="transformacao-heading" className="split-title">
              Design que <span className="split-highlight">Transforma Negócios</span>
            </h1>
            
            <div className="split-divider"></div>
            
            <p className="split-text">
              Soluções criativas e estratégicas para empresas que querem se destacar. Combinamos pensamento 
              estratégico com execução impecável para criar vantagens competitivas sustentáveis.
            </p>
            
            <ul className="split-list">
              <li>• Estratégia de marca e posicionamento</li>
              <li>• Design de serviços e produtos</li>
              <li>• Transformação digital orientada por design</li>
              <li>• Inovação corporativa e capacitação</li>
            </ul>
            
            <div className="d-flex gap-3">
              <Link 
                to="/contato" 
                className="btn btn-primary"
                style={{
                  padding: '15px 32px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}
                aria-label="Fale com um consultor estratégico"
              >
                Falar com consultor
              </Link>
              <Link 
                to="/metodologia" 
                className="btn btn-outline-light"
                style={{
                  padding: '15px 32px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}
                aria-label="Conheça nossa metodologia"
              >
                Nossa abordagem
              </Link>
            </div>
          </div>
          
          <div className="split-image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Festrategia-negocios.jpg?alt=media&token=12345"
              alt="Equipe analisando estratégia de negócios"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Impacto Mensurável */}
      <section 
        className="py-5" 
        aria-labelledby="impacto-heading"
        style={{ backgroundColor: '#f8f8f8' }}
      >
        <div className="container text-center">
          <h2 id="impacto-heading" className="mb-5">
            Design estratégico <span className="text-primary">gera resultados</span>
          </h2>
          
          <div className="row">
            {metricas.map((metrica, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="p-4">
                  <h3 className="text-primary" style={{ fontSize: '2.5rem' }}>{metrica.valor}</h3>
                  <p>{metrica.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Estratégicos */}
      <section 
        className="py-5" 
        aria-labelledby="servicos-heading"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container">
          <h2 id="servicos-heading" className="text-center mb-5">
            Como o design <span className="text-primary">impulsiona seu negócio</span>
          </h2>
          
          <div className="row">
            {servicos.map((servico, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div 
                  className="p-4 h-100"
                  style={{
                    backgroundColor: '#f8f8f8',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="mb-3">{servico.icone}</div>
                  <h3 style={{ color: 'var(--secondary-color)' }}>{servico.titulo}</h3>
                  <p className="mb-3">{servico.descricao}</p>
                  <ul className="pl-3">
                    {servico.beneficios.map((beneficio, i) => (
                      <li key={i} className="mb-2">{beneficio}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases de Transformação */}
      <section 
        className="py-5" 
        aria-labelledby="cases-heading"
        style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
      >
        <div className="container">
          <h2 id="cases-heading" className="text-center mb-5">
            Negócios que <span className="text-primary">transformamos</span>
          </h2>
          
          <div className="row">
            {cases.map((caseItem, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card bg-dark border-0 h-100">
                  <img 
                    src={caseItem.imagem} 
                    className="card-img-top"
                    alt={`Case ${caseItem.titulo}`}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h3 className="text-primary">{caseItem.titulo}</h3>
                    <p className="font-weight-bold">{caseItem.cliente}</p>
                    <div className="mb-3">
                      <h4 className="h6">Desafio:</h4>
                      <p>{caseItem.desafio}</p>
                    </div>
                    <div className="mb-3">
                      <h4 className="h6">Solução:</h4>
                      <p>{caseItem.solucao}</p>
                    </div>
                    <p className="text-primary font-weight-bold">Resultado: {caseItem.resultado}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link 
              to="/projetos" 
              className="btn btn-outline-light btn-lg"
              aria-label="Ver todos os cases de transformação"
            >
              Ver todos os cases
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section 
        className="py-5" 
        aria-labelledby="cta-heading"
        style={{ 
          background: 'linear-gradient(135deg, #cde6f098 0%, #e6dcff50 50%)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h2 id="cta-heading" className="mb-4">
            Seu negócio pronto para o <span className="text-primary">próximo nível</span>?
          </h2>
          <p className="lead mb-5">
            Agende uma consultoria estratégica gratuita e descubra como o design pode transformar seus resultados.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link 
              to="/agendamento" 
              className="btn btn-primary btn-lg"
              aria-label="Agendar consultoria estratégica"
            >
              Agendar consultoria
            </Link>
            <Link 
              to="/portfolio" 
              className="btn btn-outline-primary btn-lg"
              aria-label="Ver portfolio completo"
            >
              Ver portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DesignTransformador;