import React from 'react';
import { 
  FaAward, 
  FaBalanceScale, 
  FaFlask, 
  FaCode, 
  FaBook, 
  FaCheckCircle, 
  FaUniversity, 
  FaLinkedin, 
  FaExternalLinkAlt 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Sobre.css';

export default function Sobre() {
  // Tríade Estratégica do Fundador e Liderança Técnica
  const lideranca = {
    nome: "Dr. Renan de Paula Binda",
    cargo: "Fundador & Consultor Especialista em Acessibilidade Digital e UX",
    titulacao: "Doutor e Pós-Doutor em Engenharia e Gestão do Conhecimento (PPGEGC / UFSC)",
    bio: "Pesquisador do Laboratório de Mídia e Inclusão Digital (LaMiD/UFSC) e membro da Comissão de Estudo Especial de Acessibilidade da ABNT (CB-040), onde colaborou na elaboração da norma ABNT NBR 17225:2025. Com mais de 20 anos de experiência em projetos de tecnologia, lidera a LeFul unindo rigor científico, conformidade técnica e engenharia prescritiva em código para transformar a acessibilidade digital em vantagem competitiva.",
    foto: "https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/Perfil_Foto2.png",
    chaves: [
      "Comissão ABNT NBR 17225 (CB-040)",
      "Pesquisador LaMiD / PPGEGC / UFSC",
      "Criador do Framework CADUX (INPI)",
      "Autor do livro 'Janelas para o Futuro'",
      "Web Agêntica e Sistemas Inteligentes de Mediação"
    ],
    linkedin: "https://www.linkedin.com/in/renan-p-binda"
  };

  // Trajetória Histórica baseada em P&D e Propriedade Intelectual
  const historia = [
    {
      ano: "2018",
      evento: "Origem Científica e Registro do Software CoIn",
      descricao: "Desenvolvimento do primeiro artefato interativo para diretrizes de acessibilidade na educação, financiado pela CAPES e registrado no INPI sob n° BR512018051857-5 em parceria com a UFSC."
    },
    {
      ano: "2019",
      evento: "Incubação e Conexão com o Ecossistema de SC",
      descricao: "Ingresso no Cocreation Lab (Centro Sapiens) em Florianópolis, refinando os primeiros modelos de negócios orientados à economia criativa e mediação do conhecimento."
    },
    {
      ano: "2023",
      evento: "Tese de Doutorado e Criação do Método CADUX",
      descricao: "Defesa da tese de doutorado no PPGEGC/UFSC estabelecendo o modelo multidimensional de inclusão (5 dimensões) e registro da marca e do método CADUX no INPI (Reg. 934006750)."
    },
    {
      ano: "2024",
      evento: "Atuação na ABNT e Simulador 'Jornada da Acessibilidade'",
      descricao: "Participação na comissão CB-040 da ABNT para elaboração da NBR 17225:2025 e contemplado no Edital Fábrica de Jogos da SINOVA/UFSC com o jogo analógico 'Jornada da Acessibilidade'."
    },
    {
      ano: "2025 - 2026",
      evento: "Publicações e Web Agêntica",
      descricao: "Publicação do livro 'Janelas para o Futuro' com prefácio de Reinaldo Ferraz (NIC.br), artigos em revista Qualis A e consolidação da plataforma CADUX para auditoria de acessibilidade voltada a agentes de IA."
    }
  ];

  // Pilares Metodológicos e de Governança
  const pilares = [
    {
      icone: <FaBalanceScale size={36} className="text-primary" />,
      titulo: "Conformidade Normativa Compulsória",
      descricao: "Domínio direto da ABNT NBR 17225:2025 e do Art. 63 da Lei Brasileira de Inclusão, mitigando passivos jurídicos e autuações do Ministério Público."
    },
    {
      icone: <FaFlask size={36} className="text-primary" />,
      titulo: "Rigor em Design Science (DSR)",
      descricao: "Metodologias desenvolvidas e validadas por pesquisa aplicada em nível de pós-doutorado, substituindo achismos por validação empírica com usuários."
    },
    {
      icone: <FaCode size={36} className="text-primary" />,
      titulo: "Engenharia Prescritiva em Código",
      descricao: "Não entregamos apenas relatórios técnicos. Prescrevemos a correção em HTML5 semântico, atributos WAI-ARIA e hierarquia de foco para os desenvolvedores."
    },
    {
      icone: <FaBook size={36} className="text-primary" />,
      titulo: "Gestão do Conhecimento Inclusivo",
      descricao: "Capacitação corporativa contínua inspirada na Espiral SECI, tornando os times de produto autônomos na prevenção de novas barreiras digitais."
    }
  ];

  // Componente HeroSection
  const HeroSection = () => {
  return (
    <section 
      className="sobre-hero-section position-relative text-white" 
      style={{ 
        background: 'linear-gradient(135deg, #1E2229 0%, #2B2E34 60%, #1A2634 100%)',
        padding: '5rem 0 4.5rem 0',
        borderBottom: '4px solid #009FE3'
      }}
      aria-label="Sobre a LeFul Design House"
    >
      <div className="container px-4 text-center">
        {/* Tag de Posicionamento Estratégico */}
        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mt-2 mb-4 rounded-pill border"
             style={{ 
               backgroundColor: 'rgba(0, 159, 227, 0.12)', 
               borderColor: 'rgba(0, 159, 227, 0.35)' 
             }}>
          <span style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            backgroundColor: '#009FE3',
            display: 'inline-block' 
          }}></span>
          <span style={{ 
            fontSize: '0.8rem', 
            letterSpacing: '1.5px', 
            fontWeight: '700', 
            color: '#70D0FB', 
            textTransform: 'uppercase' 
          }}>
            Consultoria e Auditoria Especializada B2B
          </span>
        </div>

        {/* Título Principal de Alto Impacto */}
        <h1 className="fw-bold tracking-tight mb-3 mx-auto" 
            style={{ 
              fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', 
              maxWidth: '920px', 
              lineHeight: '1.2' 
            }}>
          Onde o <span style={{ color: '#009FE3' }}>Rigor Normativo</span> Encontra a{' '}
          <span style={{ color: '#EB5F2C' }}>Experiência Inclusiva</span>
        </h1>

        {/* Linha Fina Separadora */}
        <div 
          role="separator" 
          aria-hidden="true" 
          style={{ 
            width: '72px', 
            height: '3px', 
            backgroundColor: '#009FE3', 
            margin: '1.2rem auto' 
          }}
        ></div>

        {/* Proposta de Valor e Diferencial */}
        <p className="lead mx-auto mb-4 text-light" 
           style={{ 
             maxWidth: '820px', 
             fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)', 
             fontWeight: '300', 
             lineHeight: '1.65',
             color: '#E2E8F0'
           }}>
          A <strong style={{ color: '#FFF', fontWeight: '600' }}>LeFul Design House</strong> une pesquisa aplicada (PPGEGC/UFSC), 
          expertise na elaboração da <strong style={{ color: '#70D0FB', fontWeight: '600' }}>ABNT NBR 17225:2025</strong> e 
          engenharia de software para a <strong style={{ color: '#FFF', fontWeight: '600' }}>Web Agêntica</strong>, entregando 
          soluções prescritivas de código, laudos técnicos e mitigação de passivos regulatórios.
        </p>

        {/* Botões de Ação */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4 mt-5">
          <Link 
            to="/contato" 
            className="btn shadow-sm px-4 py-3 fw-bold"
            style={{ 
              backgroundColor: '#009FE3', 
              borderColor: '#009FE3', 
              color: '#FFF',
              borderRadius: '4px',
              fontSize: '0.95rem'
            }}
          >
            Solicitar Auditoria de Conformidade
          </Link>
          
          <a 
            href="#lideranca" 
            className="btn px-4 py-3 fw-semibold"
            style={{ 
              backgroundColor: 'transparent', 
              borderColor: '#64748B', 
              color: '#F8FAFC',
              borderRadius: '4px',
              fontSize: '0.95rem'
            }}
          >
            Conhecer Liderança Técnica
          </a>
        </div>
      </div>
    </section>
  );
};

  // Componente Liderança Técnica
  const LiderancaTecnica = () => (
    <section id="lideranca" className="lideranca-section section bg-white py-5" aria-labelledby="lideranca-heading">
      <div className="container mt-5 mb-5">
        <div className="section-header text-center mb-5">
          <h2 id="lideranca-heading" className="fw-bold">
            Autoridade Técnica e <span className="text-primary">Liderança Científica</span>
          </h2>
          <p className="text-muted fs-5">A vantagem competitiva da tríade: acadêmico, especialista e empreendedor</p>
        </div>

        <div className="row align-items-center justify-content-center g-5">
          <div className="col-12 col-md-5 col-lg-4 text-center">
            <div className="lideranca-foto-wrapper shadow-lg rounded p-3 bg-light border">
              <img 
                src={lideranca.foto} 
                alt={lideranca.nome} 
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '360px', objectFit: 'cover' }}
                loading="lazy" 
              />
              <h3 className="h4 fw-bold mb-1">{lideranca.nome}</h3>
              <p className="text-primary fw-semibold small mb-2">{lideranca.cargo}</p>
              <p className="text-muted small mb-3">{lideranca.titulacao}</p>
              <a 
                href={lideranca.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-primary btn-sm px-3 fw-semibold"
              >
                <FaLinkedin className="me-2" /> Perfil no LinkedIn
              </a>
            </div>
          </div>

          <div className="col-12 col-md-7 col-lg-7">
            <h4 className="fw-bold mb-3">Compromisso com a Excelência e a Inclusão Real</h4>
            <p className="lead text-dark fs-6" style={{ lineHeight: '1.7' }}>
              {lideranca.bio}
            </p>
            <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
              Com histórico de docência no ensino superior e coorientações no programa de pós-graduação da UFSC, 
              o Dr. Renan estrutura a atuação da LeFul sob o preceito de que <em>a acessibilidade não é um favor, 
              mas a própria medida de inteligência e usabilidade de uma interface digital</em>.
            </p>

            <div className="credenciais-lista">
              <h5 className="fw-bold small text-uppercase text-primary mb-3">Chancelas e Ativos Estratégicos:</h5>
              <div className="row g-2">
                {lideranca.chaves.map((item, idx) => (
                  <div key={idx} className="col-12 col-sm-6">
                    <div className="d-flex align-items-center p-2 bg-light rounded border-start border-primary border-3">
                      <FaCheckCircle className="text-primary me-2 flex-shrink-0" />
                      <span className="small fw-semibold text-dark">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Componente NossaHistória (Timeline de P&D)
  const NossaHistoria = () => (
    <section className="historia-section section bg-light py-5" aria-labelledby="historia-heading">
      <div className="container mt-5 mb-5">
        <div className="section-header text-center mb-5">
          <h2 id="historia-heading" className="fw-bold">
            Trajetória Pautada em <span className="text-primary">Ciência e Propriedade Intelectual</span>
          </h2>
          <p className="text-muted fs-5">A consolidação de um ecossistema metodológico registrado e validado</p>
        </div>
        
        <div className="historia-timeline" style={{ maxWidth: '850px', margin: '0 auto' }}>
          {historia.map((item, index) => (
            <div key={index} className="historia-item mb-4 p-4 bg-white rounded shadow-sm border-start border-primary border-4">
              <div className="d-flex align-items-center mb-2">
                <span className="badge bg-primary text-white fs-6 px-3 py-1 me-3 fw-bold">{item.ano}</span>
                <h3 className="h5 fw-bold mb-0 text-dark">{item.evento}</h3>
              </div>
              <p className="text-muted mb-0 ps-md-4">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Componente Pilares e Valores
  const NossosValores = () => (
    <section className="valores-section section bg-dark text-white py-5" aria-labelledby="valores-heading">
      <div className="container mt-5 mb-5">
        <div className="section-header text-center mb-5">
          <h2 id="valores-heading" className="fw-bold text-white">
            Pilares de <span className="text-primary">Atuação Corporativa</span>
          </h2>
          <p className="text-light opacity-75 fs-5">Diretrizes que norteiam nossas auditorias, consultorias e workshops</p>
        </div>
        
        <div className="row g-4">
          {pilares.map((pilar, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="pilar-card p-4 rounded h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
                <div className="mb-3">{pilar.icone}</div>
                <h3 className="h5 fw-bold text-white mb-2">{pilar.titulo}</h3>
                <p className="text-light opacity-75 mb-0 small" style={{ lineHeight: '1.6' }}>{pilar.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Componente Diferenciais (A Tríade Competitiva)
  const Diferenciais = () => (
    <section className="diferenciais-section section py-5 bg-white" aria-labelledby="diferenciais-heading">
      <div className="container mt-5 mb-5">
        <div className="section-header text-center mb-5">
          <h2 id="diferenciais-heading" className="fw-bold">
            Por que Escolher a <span className="text-primary">LeFul Design House</span>?
          </h2>
          <p className="text-muted fs-5">A única consultoria com lastro simultâneo em pesquisa Qualis A, regulação ABNT e esteira de software</p>
        </div>
        
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="p-4 border rounded shadow-sm text-center h-100">
              <FaAward size={40} className="text-primary mb-3" />
              <h3 className="h5 fw-bold">Dentro da Comissão ABNT</h3>
              <p className="text-muted small">
                Você é orientado por quem participou da redação técnica da <strong>NBR 17225:2025</strong>, garantindo interpretação autêntica dos 156 critérios e segurança contra autuações.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-4 border rounded shadow-sm text-center h-100">
              <FaUniversity size={40} className="text-primary mb-3" />
              <h3 className="h5 fw-bold">Metodologias Registradas</h3>
              <p className="text-muted small">
                Ferramentas proprietárias como o <strong>CADUX</strong> e o jogo <strong>Jornada da Acessibilidade</strong>, validadas cientificamente e registradas junto ao INPI.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-4 border rounded shadow-sm text-center h-100">
              <FaCode size={40} className="text-primary mb-3" />
              <h3 className="h5 fw-bold">Entrega em Código Real</h3>
              <p className="text-muted small">
                Nossos laudos técnicos incluem trechos de código semântico e WAI-ARIA prontos para os desenvolvedores aplicarem no Jira ou GitHub sem ambiguidades.
              </p>
            </div>
          </div>
        </div>

        {/* Parcerias e Ecossistema */}
        <div className="mt-5 text-center p-4 bg-light rounded border">
          <h4 className="small text-uppercase text-muted fw-bold mb-3 letter-spacing-1">Ecossistema de Inovação e Articulação Institucional</h4>
          <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
            <span className="badge bg-white text-dark p-2 border shadow-sm">PPGEGC / UFSC</span>
            <span className="badge bg-white text-dark p-2 border shadow-sm">LaMiD</span>
            <span className="badge bg-white text-dark p-2 border shadow-sm">ABNT Comitê CB-040</span>
            <span className="badge bg-white text-dark p-2 border shadow-sm">SINOVA Inovação UFSC</span>
            <span className="badge bg-white text-dark p-2 border shadow-sm">Framework CADUX</span>
          </div>
        </div>
      </div>
    </section>
  );

  // Componente CTASection
  const CTASection = () => (
    <section className="sobre-cta-section section bg-light py-5" aria-labelledby="sobre-cta-heading">
      <div className="container text-center mt-5 mb-5" style={{ maxWidth: '800px' }}>
        <h2 id="sobre-cta-heading" className="fw-bold mb-4">
          Pronto para Transformar seu Produto Digital e Garantir Acessibilidade Real?
        </h2>
        <p className="lead text-muted mb-5 mt-3">
          Converse diretamente com o Dr. Renan de Paula Binda e descubra como formatar uma auditoria de conformidade ou treinamento in-company para sua equipe.
        </p>
        
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/contato" className="btn btn-primary btn-lg px-4 py-3 fw-bold">
            Fale com o Especialista
          </Link>
          <Link to="/projetos" className="btn btn-outline-primary btn-lg px-4 py-3 fw-semibold">
            Conheça Nossos Serviços
          </Link>
        </div>
      </div>
    </section>
  );

  return (
    <main className="sobre-page" aria-label="Página Sobre">
      <HeroSection />
      <LiderancaTecnica />
      <NossaHistoria />
      <NossosValores />
      <Diferenciais />
      <CTASection />
    </main>
  );
}