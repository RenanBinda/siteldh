import React from 'react';
import { Link } from 'react-router-dom';
import { FaVideo, FaArrowLeft, FaFileAlt, FaUniversalAccess, FaBook, FaExternalLinkAlt } from 'react-icons/fa';
import '../../Styles/global.css';

export default function ArtigoWebAgentica() {
  return (
    <div className="artigo-page" role="main" aria-labelledby="artigo-heading">
      {/* Hero Header */}
      <header 
        className="text-white py-5"
        style={{
          background: 'linear-gradient(135deg, #1E2229 0%, #2B2E34 60%, #1A2634 100%)',
          borderBottom: '4px solid #009FE3',
          paddingTop: '3.5rem',
          paddingBottom: '3rem'
        }}
      >
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="mb-3">
            <Link to="/academy" className="text-decoration-none text-light opacity-75 small d-inline-flex align-items-center">
              <FaArrowLeft className="me-2" size={12} /> Voltar para Academy
            </Link>
          </div>

          <div 
            className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill border"
            style={{ backgroundColor: 'rgba(0, 159, 227, 0.12)', borderColor: 'rgba(0, 159, 227, 0.35)' }}
          >
            <FaUniversalAccess size={12} color="#009FE3" />
            <span style={{ fontSize: '0.75rem', letterSpacing: '1.1px', fontWeight: '700', color: '#70D0FB', textTransform: 'uppercase' }}>
              Publicação Científica & Pesquisa Aplicada
            </span>
          </div>

          <h1 id="artigo-heading" className="h3 fw-bold mb-3" style={{ lineHeight: '1.4' }}>
            Acessibilidade Digital: a Web Agêntica e os Sistemas Inteligentes de Mediação no Aplicativo CoIn[cite: 5]
          </h1>

          <p className="text-light opacity-90 small mb-2">
            <strong>Autores:</strong> Renan de Paula Binda & Vania Ribas Ulbricht (Universidade Federal de Santa Catarina - UFSC)[cite: 5].
          </p>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          {/* Bloco Superior Horizontal: Vídeo em Libras e Botão do Artigo Completo */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="p-4 p-md-5 bg-white rounded-3 border shadow-sm text-center">
                <div 
                  className="p-3 rounded-circle bg-light text-primary mb-3 d-inline-flex"
                  style={{ border: '1px solid rgba(0, 159, 227, 0.2)' }}
                >
                  <FaVideo size={22} />
                </div>
                
                <h2 className="h5 fw-bold text-dark mb-2">Resumo em Língua de Sinais (Libras)</h2>
                <p className="text-muted small mb-4 mx-auto" style={{ maxWidth: '600px', lineHeight: '1.5' }}>
                  Acompanhe a tradução institucional do resumo da pesquisa em vídeo, garantindo acessibilidade comunicacional plena.
                </p>

                {/* Container Reservado para o Vídeo */}
                <div 
                  className="w-100 rounded-3 bg-dark d-flex flex-column justify-content-center align-items-center position-relative my-3 mx-auto"
                  style={{ maxWidth: '720px', minHeight: '260px', border: '2px dashed #009FE3', overflow: 'hidden' }}
                >
                  <div className="text-light p-4 text-center">
                    <FaVideo size={36} className="mb-2 opacity-50 text-info" />
                    <span className="d-block fw-semibold small text-info">Player de Vídeo em Libras</span>
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>[Espaço reservado para inserção futura do arquivo de vídeo]</span>
                  </div>
                </div>

                {/* Botão para Acessar Artigo Completo */}
                <div className="mt-4">
                  <a 
                    href="#artigo-completo" 
                    className="btn px-4 py-2 fw-bold shadow-sm d-inline-flex align-items-center text-white"
                    style={{ backgroundColor: '#009FE3', borderColor: '#009FE3', borderRadius: '24px', pointerEvents: 'none', opacity: 0.85 }}
                    title="Disponível em breve após a publicação oficial"
                  >
                    <FaExternalLinkAlt className="me-2" size={14} /> Acessar Artigo Completo (Em Breve)
                  </a>
                  <span className="d-block text-muted mt-2" style={{ fontSize: '0.75rem' }}>
                    O link de acesso integral será ativado após o lançamento oficial da publicação.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Blocos Inferiores Horizontais: Resumo e Referências Bibliográficas */}
          <div className="row g-4">
            
            {/* Bloco Esquerdo: Resumo da Pesquisa */}
            <div className="col-12 col-lg-6">
              <div className="p-4 p-md-4 bg-white rounded-3 border shadow-sm h-100 d-flex flex-column">
                <div className="d-flex align-items-center mb-3 text-primary">
                  <FaFileAlt className="me-2" />
                  <h3 className="h6 fw-bold text-dark mb-0">Resumo da Pesquisa</h3>
                </div>
                
                <p className="text-muted small" style={{ lineHeight: '1.7', textAlign: 'justify' }}>
                  A emergência da Web Agêntica (Agentic Web), caracterizada pela transição de sistemas de Inteligência Artificial Generativa (IA Gen) reativos para arquiteturas autônomas e orientadas a objetivos, reconfigura o ecossistema digital ao delegar tarefas complexas a agentes equipados com Grandes Modelos de Linguagem (LLMs)[cite: 5]. Este artigo analisa as implicações técnicas, éticas e educacionais dessa transição e posiciona os Sistemas Inteligentes de Mediação (SIM) como camada de governança para curadoria e acessibilidade[cite: 5].
                </p>

                <p className="text-muted small mb-4" style={{ lineHeight: '1.7', textAlign: 'justify' }}>
                  Para isso, o <strong>CoIn</strong> é apresentado como um SIM voltado à inclusão educacional que utiliza gestão do conhecimento para mitigar alucinações da IA e assegurar conformidade com padrões de acessibilidade[cite: 5]. Os estudos iniciais demonstram que os SIMs constituem infraestruturas emergentes essenciais para a inclusão e autonomia[cite: 5].
                </p>

                <div className="pt-3 border-top mt-auto">
                  <strong className="d-block text-dark small mb-2">Palavras-chave:</strong>
                  <div className="d-flex flex-wrap gap-1">
                    {['Web Agêntica', 'Sistemas Inteligentes de Mediação', 'Acessibilidade Digital', 'Inteligência Artificial', 'Gestão do Conhecimento'].map((tag, i) => (
                      <span key={i} className="badge bg-light text-secondary border fw-normal small px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco Direito: Referências Bibliográficas */}
            <div className="col-12 col-lg-6">
              <div className="p-4 p-md-4 bg-white rounded-3 border shadow-sm h-100 d-flex flex-column">
                <div className="d-flex align-items-center mb-3 text-primary">
                  <FaBook className="me-2" />
                  <h3 className="h6 fw-bold text-dark mb-0">Referências Bibliográficas</h3>
                </div>

                <div className="text-muted small overflow-auto pe-2" style={{ maxHeight: '320px', lineHeight: '1.6' }}>
                  <p className="mb-2" style={{ textAlign: 'justify' }}>
                    ACHARYA, D. B.; KUPPAN, K.; DIVYA, B. Agentic AI: Autonomous intelligence for complex goals—a comprehensive survey. <strong>IEEE Access</strong>, v. 13, p. 18912-18936, 2025[cite: 5].
                  </p>
                  <p className="mb-2" style={{ textAlign: 'justify' }}>
                    ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS [ABNT]. <strong>ABNT NBR 17225: Acessibilidade em conteúdo e aplicações web — Requisitos</strong>. ABNT, 2025[cite: 5].
                  </p>
                  <p className="mb-2" style={{ textAlign: 'justify' }}>
                    BINDA, R. P. <strong>Modelo de inclusão e acessibilidade digital para pessoas com deficiência visual e auditiva em recursos digitais de aprendizagem</strong>. 2023. Tese (Doutorado em Engenharia e Gestão do Conhecimento) – Universidade Federal de Santa Catarina, Florianópolis, 2023[cite: 5].
                  </p>
                  <p className="mb-2" style={{ textAlign: 'justify' }}>
                    BINDA, R. P.; ULBRICHT, V. R. Theoretical Model and Playful Practice: A Pathway to Digital Accessibility. <strong>Infodesign</strong>, v. 22, n. 2, p. 01-16, 2025[cite: 5].
                  </p>
                  <p className="mb-2" style={{ textAlign: 'justify' }}>
                    FLORIDI, L. The fourth revolution: How the infosphere is reshaping human reality. Oxford University Press, 2014[cite: 5].
                  </p>
                  <p className="mb-2" style={{ textAlign: 'justify' }}>
                    PATEL, K. et al. A systematic review of generative AI: Importance of industry and startup-centered perspectives, agentic AI, ethical considerations & challenges, and future directions. <strong>Artificial Intelligence Review</strong>, v. 59, n. 7, p. 1-45, 2026[cite: 5].
                  </p>
                  <p className="mb-0" style={{ textAlign: 'justify' }}>
                    SOUZA, R. P. L. <strong>Mídia do conhecimento: ideias sobre mediação e autonomia</strong>. Florianópolis: SIGMO/UFSC, 2019[cite: 5].
                  </p>
                </div>

                <div className="pt-3 border-top mt-auto text-muted" style={{ fontSize: '0.75rem' }}>
                  Demais referências completas disponíveis no corpo do documento original do artigo.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
