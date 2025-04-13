import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserGraduate, FaHandsHelping, FaAward, FaLightbulb, FaChartBar } from 'react-icons/fa';
import '../../Styles/global.css';

const EducacaoDesignPage = () => {
  // Programas Educacionais
  const programas = [
    {
      icone: <FaChalkboardTeacher className="text-primary" size={30} />,
      titulo: "Workshops Imersivos",
      duracao: "8-16 horas",
      descricao: "Experiências práticas para resolver desafios reais da sua organização",
      beneficios: [
        "Metodologias aplicáveis imediatamente",
        "Kits de ferramentas físicas e digitais",
        "Facilitação por especialistas LeFul"
      ]
    },
    {
      icone: <FaHandsHelping className="text-primary" size={30} />,
      titulo: "Programas de Mentoria",
      duracao: "3-12 meses",
      descricao: "Acompanhamento personalizado para desenvolvimento contínuo",
      beneficios: [
        "Planos de desenvolvimento individual",
        "Sessões quinzenais ou mensais",
        "Revisão de portfólio e projetos"
      ]
    },
    {
      icone: <FaUserGraduate className="text-primary" size={30} />,
      titulo: "Treinamentos Técnicos",
      duracao: "20-60 horas",
      descricao: "Domínio de ferramentas e métodos de design estratégico",
      beneficios: [
        "Conteúdo modular e progressivo",
        "Exercícios com casos reais",
        "Acesso a comunidade exclusiva"
      ]
    },
    {
      icone: <FaAward className="text-primary" size={30} />,
      titulo: "Certificações",
      duracao: "6-12 meses",
      descricao: "Validação de competências em metodologias LeFul",
      beneficios: [
        "Avaliação por projetos reais",
        "Credencial reconhecida no mercado",
        "Atualizações periódicas"
      ]
    }
  ];

  // Cases de Sucesso
  const cases = [
    {
      titulo: "Transformação Ágil em Fintech",
      cliente: "Startup de Pagamentos",
      desafio: "Equipe multidisciplinar sem linguagem comum de design",
      solucao: "Programa customizado de imersão em design thinking (80 horas)",
      resultado: "↑85% na colaboração entre áreas | ↓60% no retrabalho"
    },
    {
      titulo: "Capacitação em UX Governamental",
      cliente: "Prefeitura Municipal",
      desafio: "Serviços digitais desconectados das necessidades cidadãs",
      solucao: "Workshops mensais + mentoria para 40 servidores",
      resultado: "4 projetos prioritários redesenhados | ↑120% em satisfação do usuário"
    }
  ];

  // Métricas de Impacto
  const metricas = [
    { 
      icone: <FaLightbulb className="text-white" size={24} />,
      valor: "↑80%", 
      descricao: "aplicação prática do conhecimento" 
    },
    { 
      icone: <FaUserGraduate className="text-white" size={24} />,
      valor: "↓50%", 
      descricao: "curva de aprendizado" 
    },
    { 
      icone: <FaChartBar className="text-white" size={24} />,
      valor: "3×", 
      descricao: "retorno sobre investimento" 
    },
    { 
      icone: <FaAward className="text-white" size={24} />,
      valor: "100%", 
      descricao: "participantes recomendam nossos programas" 
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
        aria-labelledby="ed-heading"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 id="ed-heading" className="display-4 mb-4">
                Educação em <span className="text-primary">Design</span>
              </h1>
              <p className="lead">
                Capacitamos times para pensar estrategicamente através do design, transformando 
                mentalidades e equipando profissionais com ferramentas para inovação contínua.
              </p>
              <div className="d-flex gap-3 mt-4">
                <Link 
                  to="/calendario" 
                  className="btn btn-primary btn-lg"
                  aria-label="Ver calendário de programas educacionais"
                >
                  Ver Calendário
                </Link>
                <Link 
                  to="/empresas" 
                  className="btn btn-outline-light btn-lg"
                  aria-label="Soluções corporativas em educação em design"
                >
                  Para Empresas
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fed-hero.jpg?alt=media&token=12345"
                alt="Workshop de educação em design com participantes engajados"
                className="img-fluid rounded shadow"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-5 bg-light" aria-labelledby="metricas-heading">
        <div className="container">
          <h2 id="metricas-heading" className="text-center mb-5">
            Impacto <span className="text-primary">Comprovado</span>
          </h2>
          <div className="row">
            {metricas.map((metrica, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div 
                  className="p-4 h-100 text-center text-white rounded"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  <div className="mb-3">{metrica.icone}</div>
                  <div className="display-4 mb-2">{metrica.valor}</div>
                  <p className="mb-0">{metrica.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas Educacionais */}
      <section className="py-5" aria-labelledby="programas-heading">
        <div className="container">
          <h2 id="programas-heading" className="text-center mb-5">
            Nossos <span className="text-primary">Programas</span>
          </h2>
          
          <div className="row">
            {programas.map((programa, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div 
                  className="p-4 h-100 bg-white rounded shadow-sm"
                  style={{ borderTop: '4px solid var(--primary-color)' }}
                >
                  <div className="mb-3">{programa.icone}</div>
                  <h3>{programa.titulo}</h3>
                  <p className="text-muted small mb-3">{programa.duracao}</p>
                  <p className="mb-4">{programa.descricao}</p>
                  
                  <h4 className="h6 text-primary">Benefícios:</h4>
                  <ul className="mb-4">
                    {programa.beneficios.map((beneficio, i) => (
                      <li key={i} className="mb-2">{beneficio}</li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={`/educacao-design/${programa.titulo.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn btn-outline-primary w-100"
                    aria-label={`Saiba mais sobre ${programa.titulo}`}
                  >
                    Detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais LeFul */}
      <section className="py-5 bg-light" aria-labelledby="diferenciais-heading">
        <div className="container">
          <h2 id="diferenciais-heading" className="text-center mb-5">
            Como <span className="text-primary">ensinamos</span> design
          </h2>
          
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary">Aprendizado Baseado em Desafios Reais</h3>
                <p>
                  Nossos programas são construídos em torno de problemas concretos da sua organização, 
                  garantindo relevância imediata e aplicação prática do conhecimento.
                </p>
                <ul>
                  <li className="mb-2">Casos reais da sua indústria</li>
                  <li className="mb-2">Dados e contextos autênticos</li>
                  <li className="mb-2">Soluções implementáveis</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="p-4 h-100 bg-white rounded shadow-sm">
                <h3 className="text-primary">Ecossistema de Aprendizado Contínuo</h3>
                <p>
                  Vai além dos treinamentos pontuais, oferecendo suporte pós-curso e comunidades de prática 
                  para sustentar o desenvolvimento ao longo do tempo.
                </p>
                <ul>
                  <li className="mb-2">Mentoria pós-treinamento</li>
                  <li className="mb-2">Acesso a plataforma exclusiva</li>
                  <li className="mb-2">Eventos de atualização periódica</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section className="py-5" aria-labelledby="cases-heading">
        <div className="container">
          <h2 id="cases-heading" className="text-center mb-5">
            Transformações <span className="text-primary">Reais</span>
          </h2>
          
          <div className="row">
            {cases.map((caseItem, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="p-4 h-100 bg-dark text-white rounded">
                  <h3 className="text-primary">{caseItem.titulo}</h3>
                  <p className="fw-bold mb-3">{caseItem.cliente}</p>
                  
                  <div className="mb-3">
                    <h4 className="h6">Desafio:</h4>
                    <p>{caseItem.desafio}</p>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="h6">Solução LeFul:</h4>
                    <p>{caseItem.solucao}</p>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="h6">Resultado:</h4>
                    <p className="fw-bold">{caseItem.resultado}</p>
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

      {/* CTA Corporativo */}
      <section className="py-5 bg-light" aria-labelledby="corporativo-heading">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 id="corporativo-heading" className="mb-4">
                <span className="text-primary">Programas Customizados</span> para sua Empresa
              </h2>
              <p>
                Desenvolvemos soluções educacionais sob medida para as necessidades específicas da sua 
                organização, alinhadas aos seus objetivos estratégicos e cultura corporativa.
              </p>
              <ul className="mb-4">
                <li className="mb-2">Diagnóstico de necessidades de aprendizagem</li>
                <li className="mb-2">Conteúdo adaptado ao seu contexto</li>
                <li className="mb-2">Métricas de impacto organizacional</li>
              </ul>
            </div>
            
            <div className="col-lg-6">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="mb-4">Solicite uma Proposta</h3>
                <form>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nome da Empresa"
                      aria-label="Nome da Empresa"
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Quantidade de Participantes"
                      aria-label="Quantidade de Participantes"
                    />
                  </div>
                  <div className="mb-3">
                    <select className="form-select" aria-label="Área de Interesse">
                      <option>Selecione o tema de interesse</option>
                      <option>Design Thinking</option>
                      <option>UX/UI Design</option>
                      <option>Design Estratégico</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    aria-label="Enviar solicitação de proposta corporativa"
                  >
                    Enviar Solicitação
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

export default EducacaoDesignPage;