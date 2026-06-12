import React from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaUsers, FaHandshake, FaChartLine, FaBookOpen } from 'react-icons/fa';
import '../../Styles/global.css';

const CaseFotografiaEmpodera = () => {
  // Dados do projeto
  const projeto = {
    titulo: "Fotografia para Empoderamento Social",
    descricao: "Capacitação em produção de imagens que desenvolveu a essência visual de uma região dos Pampas com selo UNESCO, gerando impacto social e econômico.",
    cliente: "Comunidade do Geoparque Caçapava",
    periodo: "Março a Abril 2025",
    localizacao: "Caçapava do Sul, RS",
    desafio: "Falta de oportunidades econômicas para jovens mães em situação de vulnerabilidade social e necessidade de valorização do patrimônio cultural local.",
    solucao: "Curso de fotografia que evoluiu para um coletivo criativo, com desenvolvimento de produtos fotográficos e campanha de financiamento coletivo.",
    resultados: [
      "↑95% na sensação de pertencimento comunitário",
      "Formação do primeiro coletivo fotográfico da região",
      "Campanha de financiamento coletivo 150% financiada",
      "Exposição itinerante com mais de 1.000 visitantes",
      "Geração de R$15.000 em renda direta para participantes"
    ],
    galeria: [
      "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Ffotografia-1.jpg?alt=media&token=12345",
      "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Ffotografia-2.jpg?alt=media&token=12345",
      "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Ffotografia-3.jpg?alt=media&token=12345"
    ]
  };

  // Componentes do projeto
  const componentes = [
    {
      icone: <FaCamera className="text-primary" size={24} />,
      titulo: "Curso de Fotografia",
      descricao: "52 horas de capacitação técnica e artística com foco em smartphones e câmeras básicas."
    },
    {
      icone: <FaUsers className="text-primary" size={24} />,
      titulo: "Coletivo Criativo",
      descricao: "Formação de grupo autossustentável para produção e comercialização de imagens."
    },
    {
      icone: <FaHandshake className="text-primary" size={24} />,
      titulo: "Financiamento Coletivo",
      descricao: "Campanha que arrecadou 150% da meta, oferecendo contrapartidas criativas."
    },
    {
      icone: <FaBookOpen className="text-primary" size={24} />,
      titulo: "Produtos Derivados",
      descricao: "Criação de livros fotográficos digitais, postais e oficinas pagas."
    }
  ];

  return (
    <main className="case-page">
      {/* Hero Section */}
      <section 
        className="case-hero" 
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Ffotografia-hero.jpg?alt=media&token=12345)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '8rem 0',
          textAlign: 'center'
        }}
        aria-labelledby="case-heading"
      >
        <div className="container">
          <h1 id="case-heading" className="display-3 mb-4">
            {projeto.titulo}
          </h1>
          <p className="lead mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {projeto.descricao}
          </p>
          <Link 
            to="/contato" 
            className="btn btn-primary btn-lg"
            aria-label="Quero um projeto como este"
          >
            Quero um projeto como este
          </Link>
        </div>
      </section>

      {/* Dados do Projeto */}
      <section className="py-5 bg-light" aria-labelledby="dados-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h2 id="dados-heading" className="mb-4">
                  Sobre o <span className="text-primary">Projeto</span>
                </h2>
                <ul className="list-unstyled">
                  <li className="mb-3"><strong>Cliente:</strong> {projeto.cliente}</li>
                  <li className="mb-3"><strong>Período:</strong> {projeto.periodo}</li>
                  <li className="mb-3"><strong>Localização:</strong> {projeto.localizacao}</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="mb-4">
                  <span className="text-primary">Componentes</span> do Projeto
                </h3>
                <div className="row">
                  {componentes.map((componente, index) => (
                    <div key={index} className="col-6 mb-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3">{componente.icone}</div>
                        <div>
                          <h4 className="h6 mb-1">{componente.titulo}</h4>
                          <p className="small text-muted mb-0">{componente.descricao}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desafio & Solução */}
      <section className="py-5" aria-labelledby="desafio-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h2 id="desafio-heading" className="mb-4">
                  O <span className="text-primary">Desafio</span>
                </h2>
                <p>{projeto.desafio}</p>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h2 className="mb-4">
                  Nossa <span className="text-primary">Solução</span>
                </h2>
                <p>{projeto.solucao}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-5 bg-light" aria-labelledby="resultados-heading">
        <div className="container">
          <h2 id="resultados-heading" className="text-center mb-5">
            <span className="text-primary">Resultados</span> Alcançados
          </h2>
          
          <div className="row">
            {projeto.resultados.map((resultado, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="p-4 h-100 bg-white rounded shadow-sm">
                  <FaChartLine className="text-primary mb-3" size={24} />
                  <p className="mb-0">{resultado}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-5" aria-labelledby="galeria-heading">
        <div className="container">
          <h2 id="galeria-heading" className="text-center mb-5">
            <span className="text-primary">Galeria</span> do Projeto
          </h2>
          
          <div className="row">
            {projeto.galeria.map((imagem, index) => (
              <div key={index} className="col-md-4 mb-4">
                <img 
                  src={imagem} 
                  alt={`Fotografia do projeto ${projeto.titulo}`}
                  className="img-fluid rounded shadow-sm"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-5 bg-light" aria-labelledby="depoimentos-heading">
        <div className="container">
          <h2 id="depoimentos-heading" className="text-center mb-5">
            Vozes do <span className="text-primary">Projeto</span>
          </h2>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fparticipante-1.jpg?alt=media&token=12345"
                    alt="Participante do projeto"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h4 className="mb-0">Ana Lúcia</h4>
                    <p className="text-muted mb-0">Participante do Coletivo</p>
                  </div>
                </div>
                <blockquote className="mb-0">
                  "Nunca imaginei que minhas fotos poderiam valer dinheiro. Hoje tenho uma renda extra que ajuda a cuidar dos meus filhos e ainda mostro a beleza do lugar onde vivo."
                </blockquote>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fgestor-1.jpg?alt=media&token=12345"
                    alt="Gestor do projeto"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h4 className="mb-0">Carlos Mendes</h4>
                    <p className="text-muted mb-0">Gestor Cultural Municipal</p>
                  </div>
                </div>
                <blockquote className="mb-0">
                  "O projeto trouxe uma nova perspectiva turística para nossa região. As fotos produzidas estão sendo usadas em materiais promocionais e mudaram a forma como vemos nosso patrimônio."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-5 text-center" 
        style={{ 
          background: 'linear-gradient(135deg, #cde6f098 0%, #e6dcff50 50%)'
        }}
        aria-labelledby="cta-heading"
      >
        <div className="container">
          <h2 id="cta-heading" className="mb-4">
            Quer impactar sua comunidade através do design?
          </h2>
          <p className="lead mb-5">
            Nossa equipe pode ajudar a desenvolver projetos transformadores como este.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link 
              to="/contato" 
              className="btn btn-primary btn-lg px-4"
              aria-label="Fale com nossa equipe sobre projetos sociais"
            >
              Fale com nossa equipe
            </Link>
            <Link 
              to="/cases" 
              className="btn btn-outline-primary btn-lg px-4"
              aria-label="Ver outros cases de sucesso"
            >
              Ver outros cases
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseFotografiaEmpodera;