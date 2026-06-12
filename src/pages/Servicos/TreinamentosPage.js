import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUsers, FaLightbulb, FaCertificate, FaRegCalendarAlt } from 'react-icons/fa';
import '../../Styles/global.css';

const TreinamentosPage = () => {
  // Programas de treinamento
  const programas = [
    {
      icone: <FaChalkboardTeacher className="text-primary" size={40} />,
      titulo: "Design Thinking na Prática",
      duracao: "16 horas",
      formato: "Presencial ou Remoto",
      descricao: "Metodologia completa para solução criativa de problemas",
      beneficios: [
        "Kit de ferramentas físico e digital",
        "Certificação LeFul",
        "1 sessão de mentoria pós-curso"
      ]
    },
    {
      icone: <FaUsers className="text-primary" size={40} />,
      titulo: "UX Research Avançado",
      duracao: "24 horas",
      formato: "Presencial",
      descricao: "Técnicas profissionais de pesquisa com usuários",
      beneficios: [
        "Acesso a plataforma exclusiva",
        "Kit de templates editáveis",
        "2 sessões de mentoria"
      ]
    },
    {
      icone: <FaLightbulb className="text-primary" size={40} />,
      titulo: "Inovação Corporativa",
      duracao: "8 horas",
      formato: "Workshop Intensivo",
      descricao: "Como implementar cultura de inovação em equipes",
      beneficios: [
        "Diagnóstico organizacional",
        "Plano de ação personalizado",
        "Relatório executivo"
      ]
    }
  ];

  // Depoimentos
  const depoimentos = [
    {
      nome: "Ana Lúcia Mendes",
      cargo: "Gerente de Inovação, Banco Topázio",
      texto: "O workshop de Design Thinking mudou nossa forma de abordar problemas. Em 3 meses, implementamos 5 melhorias significativas nos nossos processos internos.",
      avatar: "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fdepoimento1.jpg?alt=media&token=12345"
    },
    {
      nome: "Carlos Eduardo Soares",
      cargo: "Head de Produto, HealthTech",
      texto: "O treinamento em UX Research nos deu as ferramentas para validar nosso novo produto antes do desenvolvimento, economizando 6 meses de trabalho desnecessário.",
      avatar: "https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fdepoimento2.jpg?alt=media&token=12345"
    }
  ];

  // Próximos eventos
  const eventos = [
    {
      data: "15/10/2023",
      titulo: "Workshop: Design Inclusivo na Prática",
      local: "São Paulo | Remoto",
      vagas: "Últimas 5 vagas"
    },
    {
      data: "22/10/2023",
      titulo: "Treinamento: Gestão de Design Systems",
      local: "Florianópolis",
      vagas: "Vagas abertas"
    },
    {
      data: "05/11/2023",
      titulo: "Masterclass: Branding Estratégico",
      local: "Remoto",
      vagas: "Inscrições abertas"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section 
        className="split-section" 
        aria-labelledby="treinamentos-heading"
        style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
      >
        <div className="split-container">
          <div className="split-content">
            <h1 id="treinamentos-heading" className="split-title">
              Conhecimento <span className="split-highlight">Estratégico</span>
            </h1>
            
            <div className="split-divider"></div>
            
            <p className="split-text">
              Desenvolvendo habilidades e competências para transformar ideias em resultados. Nossos workshops e 
              treinamentos combinam teoria e prática com o DNA inovador da LeFul.
            </p>
            
            <ul className="split-list">
              <li>• Metodologias aplicáveis imediatamente</li>
              <li>• Conteúdo atualizado com as últimas tendências</li>
              <li>• Facilitadores com experiência de mercado</li>
              <li>• Networking com profissionais referência</li>
            </ul>
            
            <div className="d-flex gap-3">
              <Link 
                to="/calendario" 
                className="btn btn-primary"
                style={{
                  padding: '15px 32px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}
                aria-label="Ver calendário de treinamentos"
              >
                Ver calendário
              </Link>
              <Link 
                to="/empresas" 
                className="btn btn-outline-light"
                style={{
                  padding: '15px 32px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}
                aria-label="Soluções para empresas"
              >
                Para empresas
              </Link>
            </div>
          </div>
          
          <div className="split-image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fworkshop-hero.jpg?alt=media&token=12345"
              alt="Workshop LeFul em andamento com participantes engajados"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Nossos Programas */}
      <section 
        className="py-5" 
        aria-labelledby="programas-heading"
        style={{ backgroundColor: '#f8f8f8' }}
      >
        <div className="container">
          <h2 id="programas-heading" className="text-center mb-5">
            Nossos <span className="text-primary">Programas</span>
          </h2>
          
          <div className="row">
            {programas.map((programa, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div 
                  className="p-4 h-100"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s ease',
                    borderTop: '4px solid var(--primary-color)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="mb-3">{programa.icone}</div>
                  <h3 style={{ color: 'var(--secondary-color)' }}>{programa.titulo}</h3>
                  <div className="d-flex gap-3 mb-3">
                    <span className="badge bg-light text-dark">{programa.duracao}</span>
                    <span className="badge bg-light text-dark">{programa.formato}</span>
                  </div>
                  <p className="mb-4">{programa.descricao}</p>
                  
                  <h4 className="h6">Benefícios inclusos:</h4>
                  <ul className="pl-3">
                    {programa.beneficios.map((beneficio, i) => (
                      <li key={i} className="mb-2">
                        <FaCertificate className="text-primary me-2" size={14} />
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={`/treinamentos/${programa.titulo.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn btn-outline-primary mt-4 w-100"
                    aria-label={`Saiba mais sobre ${programa.titulo}`}
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section 
        className="py-5" 
        aria-labelledby="eventos-heading"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container">
          <h2 id="eventos-heading" className="text-center mb-5">
            Próximos <span className="text-primary">Eventos</span>
          </h2>
          
          <div className="row">
            {eventos.map((evento, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div 
                  className="p-4 h-100"
                  style={{
                    borderLeft: '4px solid var(--primary-color)',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '0 8px 8px 0'
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <FaRegCalendarAlt className="text-primary me-3" size={20} />
                    <h4 className="mb-0" style={{ color: 'var(--secondary-color)' }}>{evento.data}</h4>
                  </div>
                  <h3>{evento.titulo}</h3>
                  <p className="mb-2">
                    <strong>Local:</strong> {evento.local}
                  </p>
                  <p className={evento.vagas.includes('Últimas') ? "text-danger" : "text-success"}>
                    <strong>Vagas:</strong> {evento.vagas}
                  </p>
                  <Link 
                    to="/inscricao" 
                    className="btn btn-primary mt-3"
                    aria-label={`Inscreva-se no evento ${evento.titulo}`}
                  >
                    Inscreva-se
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link 
              to="/calendario" 
              className="btn btn-outline-primary btn-lg"
              aria-label="Ver todos os eventos e treinamentos"
            >
              Ver calendário completo
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section 
        className="py-5" 
        aria-labelledby="depoimentos-heading"
        style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
      >
        <div className="container">
          <h2 id="depoimentos-heading" className="text-center mb-5">
            O que dizem <span className="text-primary">nossos alunos</span>
          </h2>
          
          <div className="row">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="p-4 h-100" style={{ backgroundColor: '#2c3e50', borderRadius: '8px' }}>
                  <div className="d-flex align-items-center mb-4">
                    <img 
                      src={depoimento.avatar} 
                      alt={depoimento.nome}
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: '20px'
                      }}
                    />
                    <div>
                      <h4 className="mb-0">{depoimento.nome}</h4>
                      <p className="text-muted mb-0">{depoimento.cargo}</p>
                    </div>
                  </div>
                  <p className="mb-0">"{depoimento.texto}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Corporativo */}
      <section 
        className="py-5" 
        aria-labelledby="corporativo-heading"
        style={{ backgroundColor: '#f8f8f8' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 id="corporativo-heading" className="mb-4">
                <span className="text-primary">Soluções personalizadas</span> para sua empresa
              </h2>
              <p>
                Desenvolvemos programas in-company sob medida para as necessidades do seu time, 
                com cases reais do seu setor e linguagem adaptada à sua cultura organizacional.
              </p>
              <ul className="mb-4">
                <li className="mb-2">Diagnóstico de necessidades</li>
                <li className="mb-2">Conteúdo customizado</li>
                <li className="mb-2">Métricas de impacto</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="p-4" style={{ backgroundColor: 'white', borderRadius: '8px' }}>
                <h3 className="mb-4">Solicite uma proposta</h3>
                <form>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nome da empresa"
                      aria-label="Nome da empresa"
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="E-mail corporativo"
                      aria-label="E-mail corporativo"
                    />
                  </div>
                  <div className="mb-3">
                    <select className="form-select" aria-label="Interesse principal">
                      <option>Selecione o tema de interesse</option>
                      <option>Design Thinking</option>
                      <option>UX Research</option>
                      <option>Inovação Corporativa</option>
                      <option>Outro (especificar)</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    aria-label="Enviar solicitação de proposta corporativa"
                  >
                    Enviar solicitação
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TreinamentosPage;