// src/pages/Servicos.js
import React from 'react';
import { FaUniversalAccess, FaBrain, FaChalkboardTeacher, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Servicos.css';

export default function Servicos() {
  const carouselItems = [
    {
      id: 1,
      title: "Fale com nossos especialistas",
      description: "Converse diretamente com nossa equipe para entender como podemos ajudar seu projeto",
      buttonText: "Agendar Consultoria",
      link: "/contato",
      bgClass: "bg-primary",
      ariaLabel: "Fale com nossos especialistas - Agendar Consultoria"
    },
    {
      id: 2,
      title: "Ver Cursos e Treinamentos",
      description: "Capacite sua equipe com nossos programas de formação em design inclusivo",
      buttonText: "Explorar Cursos",
      link: "/cursos",
      bgClass: "bg-secondary",
      ariaLabel: "Ver Cursos e Treinamentos - Explorar Cursos"
    },
    {
      id: 3,
      title: "Conheça nossos Cases",
      description: "Veja projetos reais onde transformamos desafios em soluções inovadoras",
      buttonText: "Ver Portfólio",
      link: "/portfolio",
      bgClass: "bg-dark",
      ariaLabel: "Conheça nossos Cases - Ver Portfólio"
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const itemsLength = carouselItems.length;
  const carouselRef = React.useRef(null);

  const nextSlide = React.useCallback(() => {
    setActiveIndex(prevIndex => 
      prevIndex === itemsLength - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => {
      const slides = carouselRef.current?.querySelectorAll('.carousel-item');
      if (slides && slides[activeIndex]) {
        slides[activeIndex].setAttribute('aria-hidden', 'true');
        slides[(activeIndex + 1) % itemsLength].setAttribute('aria-hidden', 'false');
        slides[(activeIndex + 1) % itemsLength].focus();
      }
    }, 100);
  }, [itemsLength, activeIndex]);

  const prevSlide = React.useCallback(() => {
    setActiveIndex(prevIndex => 
      prevIndex === 0 ? itemsLength - 1 : prevIndex - 1
    );
    setTimeout(() => {
      const slides = carouselRef.current?.querySelectorAll('.carousel-item');
      if (slides && slides[activeIndex]) {
        slides[activeIndex].setAttribute('aria-hidden', 'true');
        slides[(activeIndex - 1 + itemsLength) % itemsLength].setAttribute('aria-hidden', 'false');
        slides[(activeIndex - 1 + itemsLength) % itemsLength].focus();
      }
    }, 100);
  }, [itemsLength, activeIndex]);

  React.useEffect(() => {
    let interval;
    const carousel = carouselRef.current;
    
    const pauseOnFocus = () => clearInterval(interval);
    const resumeOnBlur = () => {
      interval = setInterval(nextSlide, 5000);
    };
    
    interval = setInterval(nextSlide, 5000);
    
    if (carousel) {
      carousel.addEventListener('focusin', pauseOnFocus);
      carousel.addEventListener('focusout', resumeOnBlur);
    }
    
    return () => {
      clearInterval(interval);
      if (carousel) {
        carousel.removeEventListener('focusin', pauseOnFocus);
        carousel.removeEventListener('focusout', resumeOnBlur);
      }
    };
  }, [nextSlide]);

  const areasAtuacao = [
    {
      id: 1,
      titulo: "Design Inclusivo",
      icone: <FaUniversalAccess className="text-primary" size={40} aria-hidden="true" />,
      descricao: "Desenvolvemos projetos centrados na diversidade humana, com foco em acessibilidade, usabilidade e equidade no uso de tecnologias digitais.",
      objetivo: "Tornar as experiências digitais acessíveis, funcionais e significativas para o maior número possível de pessoas.",
      atividades: [
        "Consultoria em design inclusivo para produtos digitais",
        "Auditoria de acessibilidade e usabilidade",
        "Desenvolvimento de interfaces acessíveis",
        "Acompanhamento de times em processos de design",
        "Adaptação de fluxos e jornadas para UX"
      ],
      cta: {
        texto: "Solicitar Consultoria",
        link: "/contato?servico=design-inclusivo"
      }
    },
    {
      id: 2,
      titulo: "Gestão do Conhecimento",
      icone: <FaBrain className="text-primary" size={40} aria-hidden="true" />,
      descricao: "Nos projetos de design, aplicamos práticas de gestão do conhecimento para registrar, estruturar e otimizar processos criativos e colaborativos.",
      objetivo: "Transformar o conhecimento gerado em cada projeto em valor contínuo, promovendo consistência e eficiência.",
      atividades: [
        "Gestão e documentação de projetos",
        "Modelagem de domínios de conhecimento em design",
        "Organização e sistematização de informações",
        "Construção de repositórios e frameworks",
        "Apoio à inovação com base em dados e feedback"
      ],
      cta: {
        texto: "Conhecer Soluções",
        link: "/contato?servico=gestao-conhecimento"
      }
    },
    {
      id: 3,
      titulo: "Educação e Formação",
      icone: <FaChalkboardTeacher className="text-primary" size={40} aria-hidden="true" />,
      descricao: "Oferecemos experiências formativas voltadas para o desenvolvimento de competências em design acessível e tecnologias inclusivas.",
      objetivo: "Fortalecer capacidades técnicas e humanas em design inclusivo, promovendo a cultura da acessibilidade.",
      atividades: [
        "Treinamentos e workshops sobre acessibilidade ",
        "Programas educacionais personalizados",
        "Mentorias de equipes de design",
        "Criação de materiais didáticos acessíveis",
        "Formação de multiplicadores internos"
      ],
      cta: {
        texto: "Ver Cursos Disponíveis",
        link: "/cursos"
      }
    }
  ];

  return (
    <main className="servicos-page" aria-label="Página de Serviços">
      <section 
        className="carousel-hero position-relative overflow-hidden"
        aria-label="Carrossel de serviços"
        ref={carouselRef}
      >
        <div 
          className="carousel-inner" 
          style={{ 
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
            width: `${carouselItems.length * 100}%`
          }}
          role="group"
          aria-live="polite"
          aria-atomic="false"
        >
          {carouselItems.map((item, index) => (
            <div 
              key={item.id}
              className={`carousel-item ${item.bgClass} text-white py-8 py-lg-10`}
              style={{ width: `${100 / carouselItems.length}%` }} // Largura individual
              aria-label={item.ariaLabel}
              aria-hidden={index !== activeIndex}
              tabIndex={index === activeIndex ? 0 : -1}
              role="group"
              aria-roledescription="slide"
              id={`slide-${item.id}`}
            >
              <div className="container h-100 px-lg-0">
                <div className="row align-items-center h-100 mx-0">
                  <div className="col-lg-6 ps-lg-8">
                    <h1 className="display-4 fw-bold mb-4" id={`slide-${item.id}-title`}>{item.title}</h1>
                    <p className="lead mb-5" id={`slide-${item.id}-desc`}>{item.description}</p>
                    <Link 
                      to={item.link} 
                      className="btn btn-light btn-lg px-5 rounded-pill"
                      aria-labelledby={`slide-${item.id}-title slide-${item.id}-desc`}
                    >
                      {item.buttonText} <FaArrowRight className="ms-2" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="col-lg-6 pe-lg-8 d-none d-lg-block">
                    <div className="position-relative" style={{ height: '300px' }}>
                      <div className="position-absolute top-50 start-50 translate-middle" aria-hidden="true">
                        {index === 0 && <FaChalkboardTeacher size={120} opacity={0.2} />}
                        {index === 1 && <FaBrain size={120} opacity={0.2} />}
                        {index === 2 && <FaUniversalAccess size={120} opacity={0.2} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-control prev" 
          onClick={prevSlide}
          aria-label="Slide anterior"
          aria-controls={carouselItems.map(item => `slide-${item.id}`).join(' ')}
        >
          <FaChevronLeft size={24} aria-hidden="true" />
        </button>
        <button 
          className="carousel-control next" 
          onClick={nextSlide}
          aria-label="Próximo slide"
          aria-controls={carouselItems.map(item => `slide-${item.id}`).join(' ')}
        >
          <FaChevronRight size={24} aria-hidden="true" />
        </button>
        
        <div className="carousel-indicators" role="tablist">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir para slide ${index + 1}`}
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls={`slide-${carouselItems[index].id}`}
              tabIndex={index === activeIndex ? 0 : -1}
            />
          ))}
        </div>
      </section>

      <section className="py-6 py-lg-8" style={{ padding: '5rem 0' }} aria-labelledby="areas-atuacao-heading">
        <div className="container">
          <div className="row justify-content-center mb-6">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4" id="areas-atuacao-heading">Nossas Áreas de Atuação</h2>
              <p className="lead">
                Soluções digitais interativas, acessíveis e orientadas ao conhecimento, 
                capazes de responder aos desafios mais complexos da sua organização.
              </p>
            </div>
          </div>

          <div className="row g-4" style={{ padding: '3rem 0' }} role="list">
            {areasAtuacao.map((area) => (
              <div key={area.id} className="col-md-4" role="listitem">
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="bg-light p-3 rounded-circle me-3" aria-hidden="true">
                        {area.icone}
                      </div>
                      <h3 className="h4 mb-0">{area.titulo}</h3>
                    </div>
                    
                    <p className="mb-4">{area.descricao}</p>
                    
                    <div className="mb-4">
                      <h4 className="h6 text-primary mb-2">Objetivo</h4>
                      <p className="small">{area.objetivo}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="h6 text-primary mb-2">Atividades principais</h4>
                      <ul className="small">
                        {area.atividades.map((atividade, index) => (
                          <li key={index}>{atividade}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      to={area.cta.link} 
                      className="btn btn-outline-primary w-100 mt-auto"
                      aria-label={`${area.cta.texto} - ${area.titulo}`}
                    >
                      {area.cta.texto} <FaArrowRight className="ms-2" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-6 py-lg-8" style={{ padding: '9rem 0' }} aria-labelledby="formacao-heading">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4" id="formacao-heading">Programas de Formação</h2>
              <p className="lead">
                Capacite sua equipe com nossos treinamentos especializados em design inclusivo e acessibilidade digital.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/cursos" className="btn btn-primary px-4" aria-label="Ver todos os cursos">
                  Ver Todos os Cursos
                </Link>
                <Link to="/empresas" className="btn btn-outline-primary px-4" aria-label="Soluções corporativas">
                  Soluções Corporativas
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-3">Próximos Eventos</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3 pb-3 border-bottom">
                      <h4 className="h6 mb-1">Workshop: Fundamentos de Acessibilidade Web</h4>
                      <p className="small text-muted mb-1">15 de Outubro • Online</p>
                      <Link to="/workshop-acessibilidade" className="small" aria-label="Saiba mais sobre o Workshop de Acessibilidade Web">
                        Saiba mais e inscreva-se <FaArrowRight className="ms-1" aria-hidden="true" />
                      </Link>
                    </li>
                    <li className="mb-3 pb-3 border-bottom">
                      <h4 className="h6 mb-1">Curso: Design Inclusivo na Prática</h4>
                      <p className="small text-muted mb-1">5 de Novembro • Online</p>
                      <Link to="/curso-design-inclusivo" className="small" aria-label="Saiba mais sobre o Curso de Design Inclusivo">
                        Saiba mais e inscreva-se <FaArrowRight className="ms-1" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/cursos" className="small text-primary" aria-label="Ver calendário completo de eventos">
                        Ver calendário completo de eventos →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 py-lg-8 bg-dark text-white" style={{ padding: '6rem 0' }} aria-labelledby="cta-heading">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4" id="cta-heading">Pronto para começar seu projeto?</h2>
          <p className="lead mb-5 mx-auto" style={{maxWidth: '700px'}}>
            Entre em contato para uma consultoria gratuita e descubra como podemos ajudar sua organização a criar experiências digitais mais inclusivas e eficientes.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/contato" className="btn btn-light btn-lg px-4" aria-label="Agendar consultoria">
              Agendar Consultoria
            </Link>
            <Link to="/portfolio" className="btn btn-outline-light btn-lg px-4" aria-label="Ver cases de sucesso">
              Ver Cases de Sucesso
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}