import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaProjectDiagram, FaChartBar, FaSearch, FaLightbulb } from 'react-icons/fa';
import '../../Styles/global.css';

const GestaoConhecimentoPage = () => {
  // Metodologia
  const metodologia = [
    {
      etapa: "1. Diagnóstico",
      icone: <FaSearch className="text-primary" size={24} />,
      descricao: "Avaliação do ecossistema de conhecimento atual e identificação de gaps críticos."
    },
    {
      etapa: "2. Estruturação",
      icone: <FaProjectDiagram className="text-primary" size={24} />,
      descricao: "Desenho de sistemas personalizados para captura, organização e disseminação do conhecimento."
    },
    {
      etapa: "3. Implementação",
      icone: <FaLightbulb className="text-primary" size={24} />,
      descricao: "Desenvolvimento de frameworks e ferramentas com acompanhamento da adoção."
    },
    {
      etapa: "4. Otimização",
      icone: <FaChartBar className="text-primary" size={24} />,
      descricao: "Monitoramento contínuo e ajustes baseados em métricas de performance."
    }
  ];

  // Cases
  const cases = [
    {
      titulo: "Sistema de Gestão do Conhecimento para Hospital",
      desafio: "Perda crítica de know-how com rotatividade de 40% dos especialistas",
      solucao: "Mapeamento de processos críticos e criação de repositório inteligente",
      resultado: "↑90% na recuperação de informações | ↓35% no tempo de onboarding"
    },
    {
      titulo: "Framework de Inovação para Indústria",
      desafio: "Ideias valiosas se perdiam entre departamentos desconectados",
      solucao: "Sistema integrado de captura e desenvolvimento de ideias com métricas claras",
      resultado: "12 projetos inovadores implementados em 1 ano | ROI 3:1"
    }
  ];

  // Ferramentas
  const ferramentas = [
    {
      nome: "Knowledge Mapping",
      descricao: "Visualização das redes de conhecimento e fluxos informacionais",
      beneficios: ["Identifica especialistas ocultos", "Mapeia dependências críticas", "Revela gaps de conhecimento"]
    },
    {
      nome: "Sistemas de Taxonomia",
      descricao: "Estruturação inteligente para classificação e recuperação de informações",
      beneficios: ["Redução de redundâncias", "Busca semântica", "Atualização automatizada"]
    },
    {
      nome: "Painéis de Performance",
      descricao: "Monitoramento em tempo real da saúde do capital intelectual",
      beneficios: ["Indicadores de maturidade", "Alertas proativos", "Benchmarking setorial"]
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
        aria-labelledby="gc-heading"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 id="gc-heading" className="display-4 mb-4">
                Gestão do <span className="text-primary">Conhecimento</span>
              </h1>
              <p className="lead">
                Sistematizamos informações para transformar dados em insights acionáveis, criando vantagem 
                competitiva sustentável através do capital intelectual organizacional.
              </p>
              <Link 
                to="/contato" 
                className="btn btn-primary btn-lg mt-3"
                aria-label="Solicitar consultoria em Gestão do Conhecimento"
              >
                Solicitar Diagnóstico
              </Link>
            </div>
            <div className="col-lg-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fgc-hero.jpg?alt=media&token=12345"
                alt="Equipe analisando fluxos de conhecimento em painel interativo"
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
              Impacto <span className="text-primary">Mensurável</span>
            </h2>
            <div className="row">
              <div className="col-md-4">
                <div className="display-4 text-primary">↑60%</div>
                <p>Eficiência operacional</p>
              </div>
              <div className="col-md-4">
                <div className="display-4 text-primary">↓30%</div>
                <p>Retrabalho</p>
              </div>
              <div className="col-md-4">
                <div className="display-4 text-primary">90%</div>
                <p>Recuperação de informação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Entregas */}
      <section className="py-5" aria-labelledby="entregas-heading">
        <div className="container">
          <h2 id="entregas-heading" className="text-center mb-5">
            Nossas <span className="text-primary">Entregas</span>
          </h2>
          
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm border-top border-primary border-4">
                <h3 className="h4">
                  <FaProjectDiagram className="text-primary me-2" /> Mapeamento de Processos
                </h3>
                <ul>
                  <li>Identificação de fluxos críticos</li>
                  <li>Documentação de know-how tácito</li>
                  <li>Mapas de dependência</li>
                  <li>Análise de gargalos</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm border-top border-primary border-4">
                <h3 className="h4">
                  <FaBrain className="text-primary me-2" /> Sistemas de Organização
                </h3>
                <ul>
                  <li>Taxonomias corporativas</li>
                  <li>Ontologias de domínio</li>
                  <li>Repositórios inteligentes</li>
                  <li>Sistemas de classificação</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm border-top border-primary border-4">
                <h3 className="h4">
                  <FaLightbulb className="text-primary me-2" /> Frameworks de Inovação
                </h3>
                <ul>
                  <li>Processos estruturados de ideação</li>
                  <li>Sistemas de captura de insights</li>
                  <li>Métricas de maturidade inovativa</li>
                  <li>Roadmaps de implementação</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm border-top border-primary border-4">
                <h3 className="h4">
                  <FaChartBar className="text-primary me-2" /> Indicadores de Performance
                </h3>
                <ul>
                  <li>KPIs de gestão do conhecimento</li>
                  <li>Painéis de acompanhamento</li>
                  <li>Benchmarking setorial</li>
                  <li>Alertas proativos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Abordagem */}
      <section className="py-5 bg-light" aria-labelledby="abordagem-heading">
        <div className="container">
          <h2 id="abordagem-heading" className="text-center mb-5">
            Metodologia <span className="text-primary">LeFul</span>
          </h2>
          
          <div className="row">
            {metodologia.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="p-4 h-100 bg-white rounded shadow-sm">
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

      {/* Ferramentas Exclusivas */}
      <section className="py-5" aria-labelledby="ferramentas-heading">
        <div className="container">
          <h2 id="ferramentas-heading" className="text-center mb-5">
            Nossas <span className="text-primary">Ferramentas</span>
          </h2>
          
          <div className="row">
            {ferramentas.map((ferramenta, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="p-4 h-100 bg-dark text-white rounded">
                  <h3 className="text-primary">{ferramenta.nome}</h3>
                  <p className="mb-4">{ferramenta.descricao}</p>
                  <h4 className="h6">Benefícios:</h4>
                  <ul>
                    {ferramenta.beneficios.map((beneficio, i) => (
                      <li key={i}>{beneficio}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-5 bg-light" aria-labelledby="cases-heading">
        <div className="container">
          <h2 id="cases-heading" className="text-center mb-5">
            Transformações <span className="text-primary">Reais</span>
          </h2>
          
          <div className="row">
            {cases.map((caseItem, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="p-4 h-100 bg-white rounded shadow-sm">
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
                    <p className="fw-bold">{caseItem.resultado}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link 
              to="/cases/gestao-conhecimento" 
              className="btn btn-outline-primary"
              aria-label="Ver todos os cases de Gestão do Conhecimento"
            >
              Ver Todos os Cases
            </Link>
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
            Transforme conhecimento em vantagem competitiva
          </h2>
          <p className="lead mb-5">
            Nossos especialistas estão prontos para ajudar sua organização a sistematizar, 
            organizar e capitalizar seu ativo mais valioso: o conhecimento coletivo.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link 
              to="/contato" 
              className="btn btn-primary btn-lg px-4"
              aria-label="Agendar consulta sobre Gestão do Conhecimento"
            >
              Falar com Especialista
            </Link>
            <Link 
              to="/gestao-conhecimento/whitepaper" 
              className="btn btn-outline-primary btn-lg px-4"
              aria-label="Baixar whitepaper sobre Gestão do Conhecimento"
            >
              Baixar Whitepaper
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GestaoConhecimentoPage;