import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaBullseye, FaPalette, FaChessQueen } from 'react-icons/fa';
import '../../Styles/global.css';

const BrandingPage = () => {
  // Serviços de branding
  const servicos = [
    {
      icone: <FaBullseye className="text-primary" size={40} />,
      titulo: "Estratégia de Marca",
      descricao: "Definimos posicionamento, voz e personalidade para sua marca se destacar no mercado.",
      processo: [
        "Workshop de descoberta",
        "Análise competitiva",
        "Definição de arquétipo",
        "Plano de comunicação"
      ]
    },
    {
      icone: <FaPalette className="text-primary" size={40} />,
      titulo: "Identidade Visual",
      descricao: "Criamos sistemas visuais memoráveis que refletem a essência da sua marca.",
      processo: [
        "Exploração conceitual",
        "Desenvolvimento de logotipo",
        "Sistema de cores e tipografia",
        "Diretrizes de aplicação"
      ]
    },
    {
      icone: <FaChessQueen className="text-primary" size={40} />,
      titulo: "Gestão de Marca",
      descricao: "Acompanhamos a evolução da sua marca para manter consistência e relevância.",
      processo: [
        "Auditoria de marca",
        "Plano de evolução",
        "Treinamento de equipes",
        "Monitoramento de aplicação"
      ]
    }
  ];

  // Cases de branding
  const cases = [
    {
      titulo: "Reposicionamento de Marca",
      cliente: "Instituto de Educação",
      desafio: "Identidade visual desatualizada e desconexa com valores atuais",
      solucao: "Sistema de marca flexível que reflete inovação e acessibilidade",
      resultado: "↑70% no engajamento institucional",
      imagem: "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcase-educacao.jpg?alt=media&token=12345"
    },
    {
      titulo: "Branding para Startup",
      cliente: "TechFin",
      desafio: "Necessidade de identidade forte para mercado competitivo",
      solucao: "Arquitetura de marca com narrativa visual disruptiva",
      resultado: "Destaque em 3 prêmios de design",
      imagem: "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fcase-startup.jpg?alt=media&token=12345"
    }
  ];

  // Benefícios do branding estratégico
  const beneficios = [
    { 
      titulo: "Conexão Emocional", 
      descricao: "Marcas com propósito geram 3x mais engajamento" 
    },
    { 
      titulo: "Valor Percebido", 
      descricao: "Identidade forte permite precificação 20-30% superior" 
    },
    { 
      titulo: "Consistência", 
      descricao: "Sistemas visuais reduzem custos de comunicação em 40%" 
    },
    { 
      titulo: "Diferenciação", 
      descricao: "73% dos consumidores preferem marcas com identidade única" 
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section 
        className="split-section" 
        aria-labelledby="branding-heading"
        style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
      >
        <div className="split-container">
          <div className="split-content">
            <h1 id="branding-heading" className="split-title">
              Branding com <span className="split-highlight">Propósito</span>
            </h1>
            
            <div className="split-divider"></div>
            
            <p className="split-text">
              Criamos identidades que conectam e comunicam. Mais do que logos, desenvolvemos sistemas de marca 
              completos que contam histórias, expressam valores e criam relacionamentos duradouros.
            </p>
            
            <ul className="split-list">
              <li>• Estratégia de marca fundamentada</li>
              <li>• Identidades visuais impactantes</li>
              <li>• Sistemas de marca escaláveis</li>
              <li>• Gestão de marca contínua</li>
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
                aria-label="Fale com um especialista em branding"
              >
                Falar com especialista
              </Link>
              <Link 
                to="/portfolio/branding" 
                className="btn btn-outline-light"
                style={{
                  padding: '15px 32px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}
                aria-label="Veja nossos cases de branding"
              >
                Ver cases
              </Link>
            </div>
          </div>
          
          <div className="split-image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fbranding-hero.jpg?alt=media&token=12345"
              alt="Processo criativo de desenvolvimento de marca"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section 
        className="py-5" 
        aria-labelledby="beneficios-heading"
        style={{ backgroundColor: '#f8f8f8' }}
      >
        <div className="container">
          <h2 id="beneficios-heading" className="text-center mb-5">
            Por que investir em <span className="text-primary">branding estratégico</span>?
          </h2>
          
          <div className="row">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div 
                  className="p-4 h-100 text-center"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                  }}
                >
                  <FaHeart 
                    className="text-primary mb-3" 
                    size={30} 
                    style={{ opacity: 0.8 }} 
                  />
                  <h3 style={{ color: 'var(--secondary-color)' }}>{beneficio.titulo}</h3>
                  <p>{beneficio.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Abordagem */}
      <section 
        className="py-5" 
        aria-labelledby="abordagem-heading"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container">
          <h2 id="abordagem-heading" className="text-center mb-5">
            Nossa <span className="text-primary">abordagem</span> para criar marcas
          </h2>
          
          <div className="row">
            {servicos.map((servico, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div 
                  className="p-4 h-100"
                  style={{
                    borderTop: '4px solid var(--primary-color)',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '0 0 8px 8px',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="mb-3">{servico.icone}</div>
                  <h3 style={{ color: 'var(--secondary-color)' }}>{servico.titulo}</h3>
                  <p className="mb-3">{servico.descricao}</p>
                  <h4 className="h6 mt-4 mb-3">Nosso processo:</h4>
                  <ul className="pl-3">
                    {servico.processo.map((passo, i) => (
                      <li key={i} className="mb-2">{passo}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases de Branding */}
      <section 
        className="py-5" 
        aria-labelledby="cases-heading"
        style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
      >
        <div className="container">
          <h2 id="cases-heading" className="text-center mb-5">
            Marcas que <span className="text-primary">transformamos</span>
          </h2>
          
          <div className="row">
            {cases.map((caseItem, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card bg-dark border-0 h-100">
                  <img 
                    src={caseItem.imagem} 
                    className="card-img-top"
                    alt={`Case ${caseItem.titulo}`}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h3 className="text-primary">{caseItem.titulo}</h3>
                    <p className="font-weight-bold">{caseItem.cliente}</p>
                    <div className="mb-3">
                      <h4 className="h6">Desafio:</h4>
                      <p>{caseItem.desafio}</p>
                    </div>
                    <div className="mb-3">
                      <h4 className="h6">Solução LeFul:</h4>
                      <p>{caseItem.solucao}</p>
                    </div>
                    <p className="text-primary font-weight-bold">Resultado: {caseItem.resultado}</p>
                  </div>
                  <div className="card-footer bg-transparent border-top-0">
                    <Link 
                      to={`/cases/${caseItem.titulo.toLowerCase().replace(/\s+/g, '-')}`}
                      className="btn btn-outline-primary"
                      aria-label={`Ver detalhes do case ${caseItem.titulo}`}
                    >
                      Ver processo criativo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link 
              to="/portfolio/branding" 
              className="btn btn-outline-light btn-lg"
              aria-label="Ver todos os projetos de branding"
            >
              Ver portfolio completo
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
            Pronto para construir uma <span className="text-primary">marca poderosa</span>?
          </h2>
          <p className="lead mb-5">
            Agende uma consultoria gratuita e descubra como podemos ajudar sua marca a se conectar 
            com seu público de forma autêntica e memorável.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link 
              to="/agendamento" 
              className="btn btn-primary btn-lg"
              aria-label="Agendar consultoria de branding"
            >
              Agendar consultoria
            </Link>
            <Link 
              to="/branding/processo" 
              className="btn btn-outline-primary btn-lg"
              aria-label="Conhecer nosso processo de branding"
            >
              Conhecer o processo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandingPage;