import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/Home.css';

function Home() {
  const heroRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animação do hero
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out"
    });

    // Animação dos cards
    gsap.from(gridRef.current.children, {
      opacity: 0,
      y: 80,
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%"
      }
    });
  }, []);

  return (
    <main className="home-page" role="main">
      {/* Seção Hero */}
      <section 
        ref={heroRef}
        className="hero-section"
        aria-labelledby="hero-heading"
      >
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-title">
            <span className="highlight">Design</span> que <br />
            <span className="outline">transforma</span> percepções
          </h1>
          <p className="hero-subtitle">
            Criamos experiências digitais e físicas que conectam marcas 
            <br />a pessoas através de narrativas visuais impactantes.
          </p>
          <div className="hero-cta">
            <Link to="/projetos" className="cta-primary">
              Ver Portfólio
            </Link>
            <Link to="/sobre" className="cta-secondary">
              Nosso Processo
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Seção Destaque */}
      <section className="feature-section">
        <div className="feature-video">
          <video autoPlay muted loop playsInline
            aria-label="Demonstração de trabalho de design em andamento"
          >
            <source src="https://youtu.be/yw8s-YQTlhM" 
              type="video/mp4" 
            />
            Seu navegador não suporta o elemento de vídeo.
          </video>

          <div className="feature-overlay">
            <h2>Projeto em Destaque</h2>
            <h3>Nova Identidade Visual</h3>
            <p>Redesenho completo da marca para indústria de tecnologia</p>
            <Link to="/projetos/identidade-visual" className="cta-outline">
              Explorar Projeto
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section className="services-section">
        <h2 className="section-title">Nossas Especialidades</h2>
        <div ref={gridRef} className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
              </svg>
            </div>
            <h3>Brand Strategy</h3>
            <p>Desenvolvimento de identidades visuais com propósito e narrativa clara.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
              </svg>
              <span className="sr-only">Ícone de Brand Strategy</span>
            </div>
            <h3>Digital Products</h3>
            <p>Design de interfaces centrado no usuário e experiências digitais fluidas.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
              </svg>
            </div>
            <h3>Motion Design</h3>
            <p>Narrativas visuais em movimento que engajam e contam histórias.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
              </svg>
            </div>
            <h3>Design Research</h3>
            <p>Insights estratégicos para fundamentar decisões criativas.</p>
          </div>
        </div>
      </section>

      {/* Seção Processo */}
      <section className="process-section">
        <div className="process-container">
          <h2 className="section-title">Nosso Processo</h2>
          <div className="process-steps">
            <div className="process-step">
              <span className="step-number">01</span>
              <h3>Imersão</h3>
              <p>Pesquisa aprofundada no contexto do projeto e público-alvo.</p>
            </div>
            <div className="process-step">
              <span className="step-number">02</span>
              <h3>Concepção</h3>
              <p>Geração de ideias e desenvolvimento de conceitos visuais.</p>
            </div>
            <div className="process-step">
              <span className="step-number">03</span>
              <h3>Prototipagem</h3>
              <p>Validação de soluções através de modelos testáveis.</p>
            </div>
            <div className="process-step">
              <span className="step-number">04</span>
              <h3>Implementação</h3>
              <p>Desenvolvimento final e entrega do projeto completo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Clientes */}
      <section className="clients-section">
        <h2 className="section-title">Alguns Parceiros</h2>
        <div className="clients-grid">
          {['TechCorp', 'UrbanBank', 'GreenLife', 'NovaEdu', 'FutureLabs'].map((client, index) => (
            <div key={index} className="client-logo">
              <span>{client}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Contato */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Pronto para começar seu projeto?</h2>
          <p>Vamos transformar suas ideias em realidade.</p>
          <Link to="/contato" className="cta-primary">
            Fale Conosco
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;