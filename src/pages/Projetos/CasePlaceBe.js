import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaLightbulb, FaDatabase, FaShareAlt, FaCheckCircle } from 'react-icons/fa';
import '../../Styles/global.css';

const CasePlaceBe = () => {
  // Dados do projeto
  const projeto = {
    titulo: "PlaceBe: Empoderamento Comunitário e Transformação Sustentável",
    subtitulo: "Como a gestão do conhecimento e placemaking criaram espaços públicos colaborativos",
    descricao: "Solução inovadora que integra tecnologia mobile e engajamento comunitário para transformação sustentável de espaços urbanos, alinhada aos princípios ESG.",
    desafio: "Como capacitar comunidades para transformar espaços públicos em ambientes inspiradores que fortaleçam o senso de propriedade coletiva?",
    impacto: [
      "↑78% no engajamento comunitário em espaços públicos",
      "↓40% nos custos de manutenção urbana",
      "32 espaços públicos revitalizados",
      "15 comunidades empoderadas",
      "Prêmio Inovação Social 2020"
    ]
  };

  // Metodologia APO aplicada
  const metodologiaAPO = [
    {
      etapa: "1. Identificar",
      icone: <FaMapMarkedAlt className="text-primary" size={24} />,
      descricao: "Mapeamento colaborativo de conhecimentos locais sobre espaços públicos através de crowdsourcing georreferenciado.",
      ferramentas: ["Mapas afetivos", "Etnotecnologias", "Storytelling digital"]
    },
    {
      etapa: "2. Criar",
      icone: <FaLightbulb className="text-primary" size={24} />,
      descricao: "Geração contínua de novos conhecimentos através de desafios criativos e hackathons comunitários.",
      ferramentas: ["Design Thinking", "Laboratórios vivos", "Prototipagem rápida"]
    },
    {
      etapa: "3. Armazenar",
      icone: <FaDatabase className="text-primary" size={24} />,
      descricao: "Sistema de catalogação multidimensional (social, ambiental, econômico, institucional) com inteligência geográfica.",
      ferramentas: ["Taxonomia comunitária", "Blockchain cívico", "Visualização de dados"]
    },
    {
      etapa: "4. Compartilhar",
      icone: <FaShareAlt className="text-primary" size={24} />,
      descricao: "Plataforma de interação social com gamificação e fóruns temáticos para troca de experiências.",
      ferramentas: ["Social learning", "Sistema de reputação", "Matchmaking de interesses"]
    },
    {
      etapa: "5. Aplicar",
      icone: <FaCheckCircle className="text-primary" size={24} />,
      descricao: "Ferramentas de apoio à decisão para implementação colaborativa de melhorias nos espaços mapeados.",
      ferramentas: ["Orçamento participativo digital", "Planejamento cênico", "Monitoramento cidadão"]
    }
  ];

  // Componentes PlaceBe
  const componentes = [
    {
      nome: "Tecnologia Cívica",
      descricao: "Aplicativo mobile com:",
      itens: [
        "Georreferenciamento de espaços",
        "Ferramentas de colaboração",
        "Visualização de dados comunitários"
      ]
    },
    {
      nome: "Framework de Placemaking",
      descricao: "Metodologia LeFul para:",
      itens: [
        "Ativação de espaços subutilizados",
        "Design de experiências urbanas",
        "Gestão comunitária contínua"
      ]
    },
    {
      nome: "Modelo de Governança",
      descricao: "Sistema que integra:",
      itens: [
        "Comunidades locais",
        "Gestão pública",
        "Setor privado"
      ]
    }
  ];

  return (
    <main className="case-page">
      {/* Hero Section */}
      <section 
        className="case-hero" 
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fplacebe-hero.jpg?alt=media&token=12345)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '8rem 0',
          textAlign: 'center'
        }}
        aria-labelledby="case-heading"
      >
        <div className="container">
          <h1 id="case-heading" className="display-4 mb-3">
            {projeto.titulo}
          </h1>
          <h2 className="h3 mb-5">{projeto.subtitulo}</h2>
          <p className="lead mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {projeto.descricao}
          </p>
        </div>
      </section>

      {/* Desafio */}
      <section className="py-5 bg-light" aria-labelledby="desafio-heading">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 id="desafio-heading" className="mb-4">
                O <span className="text-primary">Desafio</span> Original
              </h2>
              <p className="lead">{projeto.desafio}</p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fplacebe-desafio.jpg?alt=media&token=12345"
                alt="Espaço público subutilizado antes da intervenção"
                className="img-fluid rounded shadow"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-5" aria-labelledby="metodologia-heading">
        <div className="container">
          <h2 id="metodologia-heading" className="text-center mb-5">
            Metodologia <span className="text-primary">APO + Placemaking</span>
          </h2>
          
          <div className="row">
            {metodologiaAPO.map((passo, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="p-4 h-100 bg-white rounded shadow-sm border-start border-4 border-primary">
                  <div className="d-flex align-items-center mb-3">
                    {passo.icone}
                    <h3 className="h4 mb-0 ms-3">{passo.etapa}</h3>
                  </div>
                  <p className="mb-3">{passo.descricao}</p>
                  <h4 className="h6 text-primary">Ferramentas LeFul:</h4>
                  <ul className="small">
                    {passo.ferramentas.map((ferramenta, i) => (
                      <li key={i}>{ferramenta}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Componentes */}
      <section className="py-5 bg-light" aria-labelledby="componentes-heading">
        <div className="container">
          <h2 id="componentes-heading" className="text-center mb-5">
            Arquitetura da <span className="text-primary">Solução</span>
          </h2>
          
          <div className="row">
            {componentes.map((componente, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="p-4 h-100 bg-white rounded shadow-sm">
                  <h3 className="text-primary">{componente.nome}</h3>
                  <p className="mb-3">{componente.descricao}</p>
                  <ul>
                    {componente.itens.map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Implementação */}
      <section className="py-5" aria-labelledby="processo-heading">
        <div className="container">
          <h2 id="processo-heading" className="text-center mb-5">
            <span className="text-primary">Como</span> Implementamos
          </h2>
          
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary mb-4">Fase 1: Imersão Comunitária</h3>
                <p>
                  <strong>Técnicas aplicadas:</strong> Realizamos 12 sessões de design participativo com moradores, comerciantes e gestores públicos para co-criar a estrutura do PlaceBe.
                </p>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fplacebe-imersao.jpg?alt=media&token=12345"
                  alt="Oficina de design participativo"
                  className="img-fluid rounded mt-3"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="col-lg-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary mb-4">Fase 2: Prototipagem Ágil</h3>
                <p>
                  <strong>Abordagem:</strong> Desenvolvemos 3 versões iterativas do aplicativo, testando com grupos focais e incorporando feedbacks em ciclos quinzenais.
                </p>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fplacebe-prototipo.jpg?alt=media&token=12345"
                  alt="Testes de usabilidade com protótipos"
                  className="img-fluid rounded mt-3"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="col-lg-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary mb-4">Fase 3: Ativação de Espaços</h3>
                <p>
                  <strong>Metodologia:</strong> Implementamos nosso framework de "Placemaking em 5 Atos" com intervenções temporárias que evoluíram para mudanças permanentes.
                </p>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fplacebe-ativacao.jpg?alt=media&token=12345"
                  alt="Intervenção em espaço público"
                  className="img-fluid rounded mt-3"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="col-lg-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary mb-4">Fase 4: Governança Compartilhada</h3>
                <p>
                  <strong>Inovação:</strong> Criamos um modelo híbrido de gestão que combina plataforma digital com conselhos locais para tomada de decisão contínua.
                </p>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fplacebe-governanca.jpg?alt=media&token=12345"
                  alt="Reunião de governança comunitária"
                  className="img-fluid rounded mt-3"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section className="py-5 bg-light" aria-labelledby="impacto-heading">
        <div className="container">
          <h2 id="impacto-heading" className="text-center mb-5">
            Impacto <span className="text-primary">Mensurável</span>
          </h2>
          
          <div className="row">
            {projeto.impacto.map((item, index) => (
              <div key={index} className="col-md-4 col-lg-2 mb-4">
                <div className="p-3 h-100 bg-primary text-white rounded text-center">
                  <p className="mb-0">{item}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary mb-4">Antes</h3>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fplacebe-antes.jpg?alt=media&token=12345"
                  alt="Espaço público antes da intervenção"
                  className="img-fluid rounded"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="col-lg-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary mb-4">Depois</h3>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fplacebe-depois.jpg?alt=media&token=12345"
                  alt="Espaço público após a intervenção"
                  className="img-fluid rounded"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5" aria-labelledby="cta-heading">
        <div className="container text-center">
          <h2 id="cta-heading" className="mb-4">
            Quer transformar espaços públicos na sua comunidade?
          </h2>
          <p className="lead mb-5">
            A metodologia PlaceBe pode ser adaptada para diferentes contextos urbanos.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link 
              to="/contato" 
              className="btn btn-primary btn-lg px-4"
              aria-label="Fale com nossa equipe sobre o PlaceBe"
            >
              Fale com nossos especialistas
            </Link>
            <Link 
              to="/metodologia/placemaking" 
              className="btn btn-outline-primary btn-lg px-4"
              aria-label="Conheça nossa metodologia de placemaking"
            >
              Conheça a Metodologia
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CasePlaceBe;