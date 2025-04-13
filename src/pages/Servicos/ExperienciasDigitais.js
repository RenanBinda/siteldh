import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCheck, FaLayerGroup, FaChartLine, FaMobileAlt } from 'react-icons/fa';
import '../../Styles/global.css';

const ExperienciasDigitais = () => {
  // Dados dos serviços
  const servicos = [
    {
      icone: <FaUserCheck className="text-primary" size={40} />,
      titulo: "Testes de Usabilidade",
      descricao: "Avaliamos a interação real dos usuários para identificar pontos de atrito e oportunidades de melhoria.",
      metricas: "+90% de satisfação em projetos recentes"
    },
    {
      icone: <FaLayerGroup className="text-primary" size={40} />,
      titulo: "Design Systems",
      descricao: "Criamos bibliotecas de componentes reutilizáveis que garantem consistência e escalabilidade.",
      metricas: "↓40% no tempo de desenvolvimento"
    },
    {
      icone: <FaChartLine className="text-primary" size={40} />,
      titulo: "Análise de Dados",
      descricao: "Mapeamos jornadas e comportamentos para tomar decisões baseadas em evidências.",
      metricas: "↑2x na taxa de conversão"
    },
    {
      icone: <FaMobileAlt className="text-primary" size={40} />,
      titulo: "Prototipagem Avançada",
      descricao: "Transformamos conceitos em experiências interativas antes do desenvolvimento.",
      metricas: "↓30% no retrabalho"
    }
  ];

  // Cases de sucesso
  const cases = [
    {
      titulo: "Sistema de Saúde Digital",
      descricao: "Redesign completo da plataforma de agendamento de consultas para um grande hospital.",
      resultado: "90% de satisfação dos usuários",
      imagem: "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fsaude-digital-case.jpg?alt=media&token=12345"
    },
    {
      titulo: "Plataforma Educacional",
      descricao: "Criação de design system e testes de usabilidade para app de ensino à distância.",
      resultado: "↑80% na retenção de usuários",
      imagem: "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Feducacao-case.jpg?alt=media&token=12345"
    }
  ];

  // Processo de trabalho
  const processo = [
    {
      etapa: "1. Pesquisa",
      descricao: "Entendemos seus usuários através de entrevistas, análise de dados e benchmark."
    },
    {
      etapa: "2. Definição",
      descricao: "Estruturamos personas, jornadas e requisitos técnicos."
    },
    {
      etapa: "3. Prototipagem",
      descricao: "Criamos versões iterativas para validação constante."
    },
    {
      etapa: "4. Implementação",
      descricao: "Desenvolvemos a solução final com documentação completa."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section 
        className="split-section" 
        aria-labelledby="experiencias-heading"
        style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
      >
        <div className="split-container">
          <div className="split-content">
            <h1 id="experiencias-heading" className="split-title">
              Experiências Digitais <span className="split-highlight">Impactantes</span>
            </h1>
            
            <div className="split-divider"></div>
            
            <p className="split-text">
              UX que gera resultados: de testes de usabilidade a design systems escaláveis. Criamos jornadas que encantam 
              usuários e convertem negócios, combinando pesquisa, tecnologia e design estratégico.
            </p>
            
            <ul className="split-list">
              <li>• Testes de usabilidade remotos e presenciais</li>
              <li>• Design systems com governança</li>
              <li>• Arquitetura de informação otimizada</li>
              <li>• Protótipos de alta fidelidade</li>
            </ul>
            
            <Link 
              to="/contato" 
              className="btn btn-primary"
              style={{
                padding: '15px 32px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
              aria-label="Fale conosco sobre UX Design"
            >
              Fale com um especialista
            </Link>
          </div>
          
          <div className="split-image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fux-research.jpg?alt=media&token=12345"
              alt="Equipe realizando teste de usabilidade"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section 
        className="split-section" 
        aria-labelledby="servicos-heading"
        style={{ backgroundColor: '#f8f8f8' }}
      >
        <div className="container">
          <h2 id="servicos-heading" className="text-center mb-5">
            Como <span className="text-primary">criamos experiências</span> que convertem
          </h2>
          
          <div className="row">
            {servicos.map((servico, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div 
                  className="p-4 h-100"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="mb-3">{servico.icone}</div>
                  <h3 style={{ color: 'var(--secondary-color)' }}>{servico.titulo}</h3>
                  <p>{servico.descricao}</p>
                  <p className="small text-muted">{servico.metricas}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section 
        className="py-5" 
        aria-labelledby="processo-heading"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container">
          <h2 id="processo-heading" className="text-center mb-5">
            Nosso <span className="text-primary">processo</span> centrado no usuário
          </h2>
          
          <div className="row">
            {processo.map((passo, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="text-center p-3">
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {index + 1}
                  </div>
                  <h4 style={{ color: 'var(--secondary-color)' }}>{passo.etapa}</h4>
                  <p>{passo.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section 
        className="split-section" 
        aria-labelledby="cases-heading"
        style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
      >
        <div className="container">
          <h2 id="cases-heading" className="text-center mb-5">
            <span className="text-primary">Cases</span> de sucesso
          </h2>
          
          <div className="row">
            {cases.map((caseItem, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div 
                  className="h-100"
                  style={{
                    backgroundColor: '#2c3e50',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  <img 
                    src={caseItem.imagem} 
                    alt={caseItem.titulo}
                    className="img-fluid"
                    style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                  />
                  <div className="p-4">
                    <h3>{caseItem.titulo}</h3>
                    <p>{caseItem.descricao}</p>
                    <p className="text-primary font-weight-bold">{caseItem.resultado}</p>
                    <Link 
                      to={`/projetos/${caseItem.titulo.toLowerCase().replace(/\s+/g, '-')}`}
                      className="btn btn-outline-primary"
                      aria-label={`Ver detalhes do projeto ${caseItem.titulo}`}
                    >
                      Ver estudo de caso
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
            Pronto para transformar sua <span className="text-primary">experiência digital</span>?
          </h2>
          <p className="lead mb-5">
            Nossa equipe está pronta para entender seus desafios e propor soluções sob medida.
          </p>
          <Link 
            to="/contato" 
            className="btn btn-primary btn-lg"
            aria-label="Agendar consultoria em UX Design"
          >
            Agendar consultoria
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ExperienciasDigitais;