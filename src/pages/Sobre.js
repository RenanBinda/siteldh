import React from 'react';
import { FaUsers, FaLightbulb, FaAward, FaHandshake, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Sobre.css';

export default function Sobre() {
  // Dados sobre a equipe
  const equipe = [
    {
      id: 1,
      nome: "Renan Binda",
      cargo: "Fundador e Diretor de Design",
      bio: "Especialista em Design para Experiência com mais de 20 anos de experiência. Doutor em Engenharia, Gestão e Mídia do Conhecimento pela Universidade Federal de Santa Catarina.",
      foto: "https://firebasestorage.googleapis.com/v0/b/portifolio-renan.appspot.com/o/imagens%2FRenan_Site.png?alt=media&token=d4201e0f-1112-43c4-bd7d-0a2b85793135",
      especialidades: ["Acessibilidade", "Gestão de Conhecimento", "Design Estratégico"]
    },
    {
      id: 2,
      nome: "Carlos Mendonça",
      cargo: "Diretor de Tecnologia",
      bio: "Engenheiro de Software com foco em soluções acessíveis. Lidera nossa equipe de desenvolvimento garantindo as melhores práticas.",
      foto: "",
      especialidades: ["Front-end", "Arquitetura da Informação", "WCAG"]
    },
    {
      id: 3,
      nome: "Mariana Oliveira",
      cargo: "Gerente de Projetos",
      bio: "Certificada em Gestão Ágil de Projetos. Transforma desafios complexos em jornadas claras e eficientes para nossos clientes.",
      foto: "/imagens/equipe-mariana.jpg",
      especialidades: ["UX Research", "Design Thinking", "Gestão de Conhecimento"]
    }
  ];

  // Dados sobre nossa história
  const historia = [
    {
      ano: "2014",
      evento: "Fundação",
      descricao: "Nascida de um projeto acadêmico sobre design inclusivo, a LeFul começou como uma pequena iniciativa de um designer apaixonado por acessibilidade."
    },
    {
      ano: "2016",
      evento: "Primeiro Grande Projeto",
      descricao: "Desenvolvemos a aplicação de orientação para acessibilidade digita que recebeu financiamento da CAPES e obteve registro junto ao INPI através da Universidade Federal de Santa Catarina."
    },
    {
      ano: "2018",
      evento: "Expansão",
      descricao: "Ampliamos nossa atuação para consultoria em gestão do conhecimento, e chegamos na semifinal do edital Inovação para a Industria."
    },
    {
      ano: "2019",
      evento: "Pré-incubação",
      descricao: "Participamos do programa de pré-incubação no CoCreationLab do Centro Sapiens em Florianópolis. O projeto CoIn - Conhecimento Inclusivo ganhava forma"
    },
    {
      ano: "2021",
      evento: "Foco em P&D",
      descricao: "Implementamos em todas as nossas práticas a cultura da pesquisa e desenvolvimento para a inovação. Surge a LeFul Academy"
    }
  ];

  // Dados sobre valores
  const valores = [
    {
      icone: <FaUsers size={40} className="text-primary" />,
      titulo: "Diversidade",
      descricao: "Acreditamos que designs melhores nascem da compreensão da diversidade humana."
    },
    {
      icone: <FaLightbulb size={40} className="text-primary" />,
      titulo: "Inovação",
      descricao: "Buscamos constantemente novas abordagens para resolver problemas antigos de forma criativa."
    },
    {
      icone: <FaHandshake size={40} className="text-primary" />,
      titulo: "Colaboração",
      descricao: "Trabalhamos em parceria com nossos clientes, entendendo que cada projeto é único."
    },
    {
      icone: <FaChartLine size={40} className="text-primary" />,
      titulo: "Impacto",
      descricao: "Medimos nosso sucesso pelo impacto positivo que causamos na vida das pessoas."
    }
  ];

  // Componente HeroSection
  const HeroSection = () => {
    return (
      <section className="sobre-hero-section" aria-label="Sobre a LeFul">
        <div className="sobre-hero-content">
          <h1>Design com propósito, soluções com impacto</h1>
          <p className="lead">Na LeFul, transformamos desafios complexos em experiências digitais acessíveis e impactantes</p>
          <Link to="/contato" className="btn btn-primary btn-lg">
            Fale com nosso time
          </Link>
        </div>
      </section>
    );
  };

  // Componente NossaHistoria
  const NossaHistoria = () => {
    return (
      <section className="historia-section section bg-light" aria-labelledby="historia-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="historia-heading">Nossa <span className="text-primary">História</span></h2>
            <p>Uma jornada de inovação e compromisso com a acessibilidade digital</p>
          </div>
          
          <div className="historia-timeline">
            {historia.map((item, index) => (
              <div key={index} className="historia-item">
                <div className="historia-ano">{item.ano}</div>
                <div className="historia-content">
                  <h3>{item.evento}</h3>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Componente NossaEquipe
  const NossaEquipe = () => {
    return (
      <section className="equipe-section section" aria-labelledby="equipe-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="equipe-heading">Nossa <span className="text-primary">Equipe</span></h2>
            <p>Especialistas apaixonados por criar soluções que fazem a diferença</p>
          </div>
          
          <div className="equipe-grid">
            {equipe.map((membro) => (
              <div key={membro.id} className="equipe-card">
                <div className="equipe-foto">
                  <img src={membro.foto} alt={membro.nome} loading="lazy" />
                </div>
                <div className="equipe-info">
                  <h3>{membro.nome}</h3>
                  <span className="equipe-cargo">{membro.cargo}</span>
                  <p className="equipe-bio">{membro.bio}</p>
                  <div className="equipe-especialidades">
                    <h4>Especialidades:</h4>
                    <ul>
                      {membro.especialidades.map((especialidade, i) => (
                        <li key={i}>{especialidade}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Componente NossosValores
  const NossosValores = () => {
    return (
      <section className="valores-section section bg-dark text-white" aria-labelledby="valores-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="valores-heading">Nossos <span className="text-primary">Valores</span></h2>
            <p>Princípios que guiam cada decisão e projeto que realizamos</p>
          </div>
          
          <div className="valores-grid">
            {valores.map((valor, index) => (
              <div key={index} className="valor-card">
                <div className="valor-icon">{valor.icone}</div>
                <h3>{valor.titulo}</h3>
                <p>{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Componente Diferenciais
  const Diferenciais = () => {
    return (
      <section className="diferenciais-section section" aria-labelledby="diferenciais-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="diferenciais-heading">O que nos <span className="text-primary">diferencia</span></h2>
            <p>Razões para escolher a LeFul como sua parceira em design estratégico</p>
          </div>
          
          <div className="diferenciais-content">
            <div className="diferenciais-texto">
              <h3>Mais do que designers, somos agentes de transformação</h3>
              <p>Na LeFul, combinamos expertise técnica com compreensão das diversidades humanas para criar soluções que funcionam para todos.</p>
              
              <div className="diferenciais-lista">
                <div className="diferencial-item">
                  <FaAward className="text-primary" />
                  <div>
                    <h4>Expertise comprovada</h4>
                    <p>10+ anos especializados em design inclusivo e acessibilidade</p>
                  </div>
                </div>
                
                <div className="diferencial-item">
                  <FaAward className="text-primary" />
                  <div>
                    <h4>Abordagem holística</h4>
                    <p>Integramos acessibilidade desde a concepção até a implementação</p>
                  </div>
                </div>
                
                <div className="diferencial-item">
                  <FaAward className="text-primary" />
                  <div>
                    <h4>Impacto mensurável</h4>
                    <p>Nossos projetos visam aumentar a satisfação do usuário</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="diferenciais-imagem">
              <img src="/imagens/equipe-reuniao.jpg" alt="Equipe LeFul em reunião de trabalho" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Componente CTASection
  const CTASection = () => {
    return (
      <section className="sobre-cta-section section" aria-labelledby="sobre-cta-heading">
        <div className="container">
          <div className="sobre-cta-content">
            <h2 id="sobre-cta-heading">Pronto para criar experiências inclusivas?</h2>
            <p className="lead">Nossa equipe está pronta para entender seus desafios e propor soluções sob medida</p>
            
            <div className="cta-buttons">
              <Link to="/contato" className="btn btn-primary px-4 py-3">
                Agende uma consultoria
              </Link>
              <Link to="/projetos" className="btn btn-outline-primary px-4 py-3">
                Conheça nosso trabalho
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="sobre-page" aria-label="Página Sobre">
      <HeroSection />
      <NossaHistoria />
      <NossaEquipe />
      <NossosValores />
      <Diferenciais />
      <CTASection />
    </main>
  );
}