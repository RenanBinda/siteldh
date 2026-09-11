import React, { useState, useMemo } from 'react';
import { 
  FaShieldAlt, 
  FaExternalLinkAlt, 
  FaCheckCircle 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Projetos.css';

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Metadados com foco em autoridade normativa, rigor científico (DSR/UFSC) e propriedade intelectual (INPI)
  const projects = useMemo(() => [
    { 
      id: 1,
      title: "Framework CADUX ®", 
      badge: "Metodologia & Marca Registrada",
      tagColor: "#009FE3",
      client: "Propriedade Intelectual (INPI / UFSC)",
      year: "2023 - 2026",
      category: "metodologias",
      registroINPI: "Reg. Marca Mista INPI nº 934006750",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FCADUX_Digital_Cartas.jpg?alt=media&token=e72d67fd-5cfd-45bb-94a8-889a6b76a5b0",
      headline: "Cartas de Acessibilidade Digital para Experiência de Uso",
      description: "Framework metodológico e instrucional desenvolvido via Design Science Research (DSR/PPGEGC/UFSC). Estrutura os 156 requisitos da ABNT NBR 17225:2025 e WCAG 2.2 em 5 dimensões integradas de UX: Acessibilidade, Usabilidade, Funcionalidade, Emoção e Valor.",
      deliverables: [
        "Baralho de heurísticas práticas e prescritivas",
        "Mapeamento das 5 dimensões integradas de UX",
        "Conformidade com ABNT NBR 17225 e Art. 63 da LBI",
        "Validação empírica publicada na Infodesign (Qualis A1)"
      ],
      linkInterno: "/academy"
    },
    { 
      id: 2,
      title: "Plataforma CoIn", 
      badge: "Software Registrado no INPI",
      tagColor: "#EB5F2C",
      client: "LaMiD / PPGEGC / CAPES",
      year: "2018 - 2026",
      category: "plataformas",
      registroINPI: "Reg. Software INPI nº BR512018051857-5",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FApp_CoIn.png?alt=media&token=841b4df2-a62d-4841-b8d3-7f5a153aeac1",
      headline: "Auditoria Automatizada e Mediação para a Web Agêntica",
      description: "Aplicação SPA em nuvem que executa captura do DOM real de páginas web via Firecrawl API, aplica varredura algorítmica pelos 156 critérios da ABNT NBR 17225 e emite laudos periciais formais em PDF com assistência de IA para remediação semântica.",
      deliverables: [
        "Varredura algorítmica e cálculo de escore (0 a 100%)",
        "Emissão de laudo pericial formal em PDF (LAD)",
        "Remediação assistida por IA com ontologia técnica",
        "Emissão pública de Autodeclaração de Conformidade"
      ],
      externalUrl: "https://coin.leful.com.br"
    },
    { 
      id: 3,
      title: "Jornada da Acessibilidade", 
      badge: "Serious Game & Simulador Digital",
      tagColor: "#10B981",
      client: "SINOVA UFSC (Fábrica de Jogos)",
      year: "2024 - 2026",
      category: "metodologias",
      registroINPI: "Edital SINOVA nº 13/2024 | Tese PPGEGC",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FJornada_Acessibilidade.jpg?alt=media&token=6309c9a7-4d5c-409a-bca5-20aa6041b066",
      headline: "Simulador Colaborativo de Design Inclusivo em Tempo Real",
      description: "Jogo sério em formato analógico e web multiplayer em tempo real (Supabase Realtime). Equipes percorrem etapas de interação enfrentando 36 cenários-desafio reais ancorados em personas com deficiência para superação do capacitismo estrutural.",
      deliverables: [
        "Modo solo com agentes de IA e facilitação CADUX",
        "Modo multiplayer com sincronização em tempo real",
        "Apuração dinâmica do Índice de Inclusão da equipe",
        "Relatório de sessão para capacitação corporativa"
      ],
      linkInterno: "/academy"
    },
    { 
      id: 4,
      title: "Comissão ABNT NBR 17225:2025", 
      badge: "Comissão Técnica Nacional",
      tagColor: "#6366F1",
      client: "ABNT / Comitê Especial CB-040",
      year: "2023 - 2025",
      category: "pesquisa",
      registroINPI: "Norma Técnica Brasileira Compulsória",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fglowing.jpg?alt=media&token=ae80055b-75ed-4344-ad94-4c9d5a246c63",
      headline: "Padronização Oficial da Acessibilidade Web no Brasil",
      description: "Atuação técnica direta na comissão da ABNT responsável pela redação e consolidação dos requisitos técnicos nacionais, harmonizando o Artigo 63 da LBI às diretrizes internacionais WCAG 2.2 do W3C.",
      deliverables: [
        "Definição técnica dos 156 critérios nacionais",
        "Parâmetros auditáveis para avaliação de conformidade",
        "Diretrizes periciais para portais públicos e privados",
        "Harmonização terminológica com a norma NBR 17060"
      ],
      linkInterno: "/servicos"
    },
    { 
      id: 5,
      title: "Livro: Janelas para o Futuro", 
      badge: "Publicação Científica de Referência",
      tagColor: "#8B5CF6",
      client: "Editora UFSC / Ars et Scientia",
      year: "2026",
      category: "pesquisa",
      registroINPI: "Prefácio: Reinaldo Ferraz (NIC.br/W3C)",
      image: "https://firebasestorage.googleapis.com/v0/b/portifolio-renan.appspot.com/o/imagens%2Facademy2.png?alt=media&token=c9b16c0d-93b9-4980-9473-0e7c1d5d9f3e",
      headline: "Mídia do Conhecimento e Engenharia da Mediação",
      description: "Obra de 170 páginas que sistematiza a produção científica do LaMiD/UFSC, tratando a acessibilidade como a medida de inteligência de sistemas computacionais, desde ambientes educacionais até a governança de agentes de IA.",
      deliverables: [
        "Formalização da tríade Sensação, Associação e Síntese",
        "Classificação das classes de problemas de acessibilidade",
        "Prefácio assinado por especialista do NIC.br / W3C",
        "Guia para engenharia de mediação em sistemas digitais"
      ],
      linkInterno: "/academy"
    },
    { 
      id: 6,
      title: "PlayStory: Livro-Jogo", 
      badge: "Inovação Social Incubada",
      tagColor: "#EC4899",
      client: "Centro Sapiens / Cocreation Lab",
      year: "2018 - 2021",
      category: "plataformas",
      registroINPI: "Projeto Pré-Incubado Florianópolis",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2Fplaystory.jpg?alt=media&token=858b5660-83c5-409a-b6ee-fe45bb7ab5bb",
      headline: "Ambiente Transmídia e Leitura Imersiva Acessível",
      description: "Plataforma interativa voltada à literatura infanto-juvenil acessível, explorando narrativas ramificadas e desenho universal para apoiar o desenvolvimento da leitura e alfabetização de crianças com e sem deficiência.",
      deliverables: [
        "Arquitetura transmídia de leitura gamificada",
        "Validação no ecossistema do Cocreation Lab",
        "Adaptação semântica com áudio sincronizado",
        "Prototipagem rápida focada na redução de barreiras"
      ],
      linkInterno: "/sobre"
    },
    { 
      id: 7,
      title: "PlaceBe: Placemaking & GC", 
      badge: "Inovação Urbana & CIKI",
      tagColor: "#F59E0B",
      client: "LeFul Academy / CIKI",
      year: "2019 - 2021",
      category: "sistemas",
      registroINPI: "Apresentado no Congresso CIKI",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FPlaceBe.jpg?alt=media&token=efa342ba-d4b5-4710-b9c3-da4a2af09e75",
      headline: "Gestão do Conhecimento e Ativação de Espaços Públicos",
      description: "Metodologia e sistema digital para governança comunitária de espaços urbanos, articulando Design Thinking, desenvolvimento urbano baseado em conhecimento (KBUD) e engajamento cívico colaborativo.",
      deliverables: [
        "Artigo publicado em congresso internacional (CIKI)",
        "Metodologia de escuta comunitária e cocriação",
        "Indicadores de pertencimento e sustentabilidade",
        "Painel de apoio à decisão para gestores públicos"
      ],
      linkInterno: "/academy"
    },
    { 
      id: 8,
      title: "Identidade Sistêmica COSEMS/SC", 
      badge: "Design de Sistemas & Saúde Pública",
      tagColor: "#3B82F6",
      client: "Conselho de Secretarias Municipais de Saúde de SC",
      year: "2021",
      category: "sistemas",
      registroINPI: "Projeto Institucional Público",
      image: "https://firebasestorage.googleapis.com/v0/b/lefulsite-aaafc.firebasestorage.app/o/Images_Site%2FCOSEMS.png?alt=media&token=827a46d1-f890-4650-9a0d-fb13f4b8a627",
      headline: "Arquitetura Visual, Hierarquia Semântica e Marca Pública",
      description: "Reestruturação completa da identidade visual e dos manuais de aplicação para as secretarias municipais de saúde de Santa Catarina, com ênfase em contraste, clareza informativa e consistência de comunicação pública.",
      deliverables: [
        "Manual de identidade visual e arquitetura de marca",
        "Padronização de contrastes para comunicados técnicos",
        "Templates modulares para relatórios de gestão",
        "Sistema de ícones informativos acessíveis"
      ],
      linkInterno: "/servicos"
    }
  ], []);

  const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'metodologias', label: 'Metodologias' },
    { key: 'plataformas', label: 'Plataformas & Software' },
    { key: 'pesquisa', label: 'P&D e Normas' },
    { key: 'sistemas', label: 'Design de Sistemas' }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div className="projetos-page" role="main" aria-labelledby="projetos-heading">
      {/* Topo Hero com fundo em gradiente institucional */}
      <header className="projetos-hero position-relative text-white text-center">
        <div className="container py-4" style={{ maxWidth: '860px' }}>
          <div className="hero-badge-pill">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">
              Ativos Tecnológicos & Inovação Científica
            </span>
          </div>

          <h1 id="projetos-heading" className="display-5 fw-bold mb-2">
            Projetos, Metodologias & <span style={{ color: '#009FE3' }}>Propriedade Intelectual</span>
          </h1>

          <div className="hero-divider-bar"></div>

          <p className="lead text-light opacity-90 mx-auto mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
            Frameworks registrados no INPI, plataformas de auditoria inteligente, normas técnicas oficiais 
            e soluções de experiência inclusiva desenvolvidas pelo <strong>Dr. Renan de Paula Binda</strong> e pela <strong>LeFul Design House</strong>.
          </p>

          {/* Botões de Filtro Reduzidos e Padronizados */}
          <nav className="d-flex justify-content-center flex-wrap gap-2 mt-3" aria-label="Filtro de categorias de projetos">
            {categories.map(cat => (
              <button
                key={cat.key}
                type="button"
                className={`filter-btn-compact ${activeFilter === cat.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.key)}
                aria-pressed={activeFilter === cat.key}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Grid Padronizado de Projetos (Cards com mesma proporção e altura) */}
      <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="row g-4">
            {filteredProjects.map((p) => (
              <div key={p.id} className="col-12 col-md-6 col-lg-4 d-flex">
                <article className="project-card-box w-100">
                  {/* Topo do Card com Altura de Imagem Fixa e Padronizada */}
                  <div className="project-img-wrapper">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="project-img-fixed"
                      loading="lazy"
                    />
                    <div 
                      className="project-tag-floating"
                      style={{ backgroundColor: p.tagColor }}
                    >
                      {p.badge}
                    </div>
                  </div>

                  {/* Corpo do Card com Estrutura e Flexbox Idênticos */}
                  <div className="project-body-content">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-muted small fw-semibold text-truncate me-2" style={{ maxWidth: '70%' }}>
                        {p.client}
                      </span>
                      <span className="badge bg-light text-dark border small">{p.year}</span>
                    </div>

                    <h2 className="project-title-text">{p.title}</h2>
                    <h3 className="project-headline-text">{p.headline}</h3>

                    <p className="project-description-text">
                      {p.description}
                    </p>

                    {/* Destaque de Propriedade Intelectual / Entregáveis */}
                    <div className="project-meta-box" style={{ borderLeftColor: p.tagColor }}>
                      <strong className="project-inpi-label">
                        {p.registroINPI}
                      </strong>
                      <ul className="list-unstyled mb-0 ps-0">
                        {p.deliverables.slice(0, 3).map((del, idx) => (
                          <li key={idx} className="project-deliverable-item">
                            <FaCheckCircle className="text-primary me-2 flex-shrink-0" size={10} />
                            <span className="text-truncate">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botão de Ação Alinhado na Base */}
                    <div className="project-footer-action">
                      {p.externalUrl ? (
                        <a 
                          href={p.externalUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary fw-bold w-100"
                        >
                          Acessar Aplicação <FaExternalLinkAlt className="ms-1" size={10} />
                        </a>
                      ) : (
                        <Link 
                          to={p.linkInterno}
                          className="btn btn-sm btn-outline-dark fw-bold w-100"
                        >
                          Ver Detalhes do Projeto
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Box de Chancelas Formais na Base */}
          <div className="mt-5 p-4 rounded-3 text-center border shadow-sm bg-white">
            <div className="d-flex justify-content-center align-items-center gap-2 mt-3 mb-3">
              <FaShieldAlt className="text-primary" size={22} />
              <h3 className="h6 fw-bold mb-0 text-dark">Garantia de Autenticidade e Rigor Metodológico</h3>
            </div>
            <p className="text-muted small mx-auto mb-3" style={{ maxWidth: '720px' }}>
              Metodologias e sistemas proprietários com registros concedidos junto ao 
              Instituto Nacional da Propriedade Industrial (INPI) e validação em periódicos Qualis A1 e bancas do PPGEGC/UFSC[cite: 20, 21].
            </p>
            <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap mb-2">
              <span className="badge bg-light text-dark p-2 border">CADUX ® (Reg. 934006750)</span>
              <span className="badge bg-light text-dark p-2 border">CoIn ® (Reg. BR512018051857-5)</span>
              <span className="badge bg-light text-dark p-2 border">Jornada da Acessibilidade (SINOVA)</span>
              <span className="badge bg-light text-dark p-2 border">Comissão ABNT/CB-040</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: '#2B2E34' }}>
        <div className="container mt-5 mb-5" style={{ maxWidth: '780px' }}>
          <h2 className="display-6 fw-bold mb-2">
            Precisa Aplicar Nossos <span style={{ color: '#009FE3' }}>Frameworks</span> na sua Organização?
          </h2>
          <p className="lead text-light opacity-75 mb-4" style={{ fontSize: '1.05rem' }}>
            Formatamos auditorias periciais, consultorias para bibliotecas de UI e workshops corporativos in-company sob medida para sua equipe.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contato" className="btn btn-primary px-4 py-2 fw-bold" style={{ backgroundColor: '#009FE3', borderColor: '#009FE3' }}>
              Solicitar Diagnóstico
            </Link>
            <Link to="/servicos" className="btn btn-outline-light px-4 py-2 fw-semibold">
              Conhecer Serviços
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}