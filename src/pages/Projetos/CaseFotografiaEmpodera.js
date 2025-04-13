import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaLightbulb, FaUserTie, FaMapMarkedAlt } from 'react-icons/fa';
import '../../Styles/global.css';

const CaseFotografiaEmpoderamento = () => {
  // Dados do projeto
  const projeto = {
    titulo: "Fotografia para Empoderamento Social",
    descricao: "Como a metodologia LeFul transformou capacitação fotográfica em desenvolvimento comunitário sustentável no Geoparque Caçapava.",
    cliente: "Comunidade do Geoparque Caçapava (RS)",
    periodo: "Março a Abril 2025",
    desafio: "Falta de oportunidades econômicas para jovens mães em situação de vulnerabilidade social e subutilização do potencial visual do patrimônio cultural local.",
    resultados: [
      "↑95% na sensação de pertencimento comunitário",
      "Primeiro coletivo fotográfico autossustentável da região",
      "Campanha de financiamento coletivo 150% financiada",
      "Exposição itinerante com 1.000+ visitantes",
      "Geração de R$15.000 em renda direta"
    ]
  };

  // Metodologia LeFul aplicada
  const metodologia = [
    {
      etapa: "1. Diagnóstico Participativo",
      icone: <FaUserTie className="text-primary" size={24} />,
      descricao: "Realizamos entrevistas e workshops com a comunidade para entender necessidades reais e oportunidades do território.",
      ferramentas: ["Design Thinking", "Pesquisa Etnográfica", "Mapas de Stakeholders"]
    },
    {
      etapa: "2. Capacitação Multidimensional",
      icone: <FaLightbulb className="text-primary" size={24} />,
      descricao: "Curso estruturado em 3 pilares: técnica fotográfica, desenvolvimento de produtos e empreendedorismo criativo.",
      ferramentas: ["Learning by Doing", "Peer Education", "Projetos Reais"]
    },
    {
      etapa: "3. Prototipagem Comunitária",
      icone: <FaMapMarkedAlt className="text-primary" size={24} />,
      descricao: "Criação colaborativa do coletivo fotográfico com modelo de negócios validado em campo.",
      ferramentas: ["Business Model Canvas", "Testes de Conceito", "MVP Cultural"]
    },
    {
      etapa: "4. Ativação do Ecossistema",
      icone: <FaHandshake className="text-primary" size={24} />,
      descricao: "Conexão estratégica com atores locais (turismo, cultura, empreendedorismo) para sustentabilidade do projeto.",
      ferramentas: ["Matchmaking Criativo", "Plataforma de Comercialização", "Rede de Parceiros"]
    }
  ];

  // Serviços LeFul aplicados
  const servicos = [
    {
      nome: "Design de Experiência Educacional",
      descricao: "Estruturação do curso com metodologia learning-by-doing integrando:",
      itens: [
        "Módulos técnicos (composição, edição)",
        "Módulos criativos (narrativa visual)",
        "Módulos comerciais (precificação, portfólio)"
      ]
    },
    {
      nome: "Design de Serviço Comunitário",
      descricao: "Criação do modelo operacional do coletivo fotográfico:",
      itens: [
        "Fluxos de produção colaborativa",
        "Sistema de governança",
        "Canais de comercialização"
      ]
    },
    {
      nome: "Design Estratégico Territorial",
      descricao: "Articulação do potencial fotográfico com desenvolvimento local:",
      itens: [
        "Roteiros fotográficos temáticos",
        "Identidade visual do coletivo",
        "Plano de comunicação integrado"
      ]
    }
  ];

  return (
    <main className="case-page">
      {/* Hero Section */}
      <section className="case-hero" 
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
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 id="case-heading" className="display-4 mb-4">
                {projeto.titulo}
              </h1>
              <p className="lead mb-5">
                {projeto.descricao}
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Ffotografia-processo.jpg?alt=media&token=12345"
                alt="Metodologia LeFul aplicada ao projeto de fotografia"
                className="img-fluid rounded shadow"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia LeFul */}
      <section className="py-5 bg-light" aria-labelledby="metodologia-heading">
        <div className="container">
          <h2 id="metodologia-heading" className="text-center mb-5">
            Como <span className="text-primary">conseguimos</span> esses resultados
          </h2>
          
          <div className="row">
            {metodologia.map((passo, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
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

      {/* Serviços Aplicados */}
      <section className="py-5" aria-labelledby="servicos-heading">
        <div className="container">
          <h2 id="servicos-heading" className="text-center mb-5">
            Serviços <span className="text-primary">LeFul</span> utilizados
          </h2>
          
          <div className="row">
            {servicos.map((servico, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="p-4 h-100 bg-white rounded shadow-sm">
                  <h3 className="text-primary">{servico.nome}</h3>
                  <p className="mb-3">{servico.descricao}</p>
                  <ul>
                    {servico.itens.map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados com Explicação */}
      <section className="py-5 bg-light" aria-labelledby="resultados-heading">
        <div className="container">
          <h2 id="resultados-heading" className="text-center mb-5">
            Resultados <span className="text-primary">e Processo</span>
          </h2>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary mb-4">↑95% pertencimento comunitário</h3>
                <p>
                  <strong>Como alcançamos:</strong> Através de oficinas de mapeamento afetivo onde os participantes fotografaram e discutiram elementos identitários da região, criando uma narrativa visual coletiva.
                </p>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fpertencimento.jpg?alt=media&token=12345"
                  alt="Oficina de mapeamento afetivo"
                  className="img-fluid rounded mt-3"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary mb-4">Coletivo autossustentável</h3>
                <p>
                  <strong>Como construímos:</strong> Aplicamos nosso framework de "Design de Organizações Criativas" com: modelo de governança participativa, plano de negócios gradual e sistema de mentoria entre pares.
                </p>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Fcoletivo.jpg?alt=media&token=12345"
                  alt="Reunião do coletivo fotográfico"
                  className="img-fluid rounded mt-3"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary mb-4">Financiamento 150% alcançado</h3>
                <p>
                  <strong>Como desenvolvemos:</strong> Criamos uma estratégia de contrapartidas criativas usando nossa metodologia "Value Design", transformando produtos fotográficos em experiências para apoiadores.
                </p>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Ffinanciamento.jpg?alt=media&token=12345"
                  alt="Campanha de financiamento coletivo"
                  className="img-fluid rounded mt-3"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary mb-4">R$15k em renda gerada</h3>
                <p>
                  <strong>Como implementamos:</strong> Através do "Design de Fluxos de Valor" criamos múltiplas fontes: venda de imagens, oficinas pagas, produtos derivados e parcerias com o trade turístico local.
                </p>
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/cases%2Frenda.jpg?alt=media&token=12345"
                  alt="Participantes vendendo produtos fotográficos"
                  className="img-fluid rounded mt-3"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Especializado */}
      <section className="py-5" aria-labelledby="cta-heading">
        <div className="container text-center">
          <div className="bg-primary text-white p-5 rounded">
            <h2 id="cta-heading" className="mb-4">Quer entender como aplicar essa metodologia no seu projeto?</h2>
            <p className="lead mb-4">Nossa equipe pode desenvolver uma solução customizada para seu contexto.</p>
            <Link 
              to="/contato" 
              className="btn btn-light btn-lg px-4"
              aria-label="Agende uma consultoria sobre projetos sociais"
            >
              Agendar Consultoria
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseFotografiaEmpoderamento;