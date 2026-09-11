import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUniversalAccess, 
  FaBalanceScale, 
  FaShieldAlt, 
  FaCode, 
  FaCheckCircle, 
  FaKeyboard, 
  FaEye, 
  FaAssistiveListeningSystems, 
  FaEnvelope, 
  FaFilePdf, 
  FaExternalLinkAlt 
} from 'react-icons/fa';
import '../Styles/global.css';

function Politica() {
  return (
    <main>
      <div role="main">
        {/* Cabeçalho Institucional de Alto Impacto */}
        <header 
          id="topo" 
          className="text-white py-5"
          style={{ 
            background: 'linear-gradient(135deg, #1E2229 0%, #2B2E34 60%, #1A2634 100%)',
            borderBottom: '4px solid #009FE3',
            paddingTop: '5rem',
            paddingBottom: '5rem'
          }}
        >
          <div className="container px-4 text-center mt-5">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill border"
                 style={{ backgroundColor: 'rgba(0, 159, 227, 0.12)', borderColor: 'rgba(0, 159, 227, 0.35)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#009FE3' }}></span>
              <span style={{ fontSize: '0.8rem', letterSpacing: '1.2px', fontWeight: '700', color: '#70D0FB', textTransform: 'uppercase' }}>
                Governança & Conformidade Legal
              </span>
            </div>

            <h1 className="display-4 fw-bold mb-3 mt-3">
              Declaração e Política de <span style={{ color: '#009FE3' }}>Acessibilidade Digital</span>
            </h1>
            <p className="lead mx-auto text-light opacity-90" style={{ maxWidth: '820px', fontSize: '1.15rem', lineHeight: '1.6' }}>
              O compromisso público e intransigente da LeFul Design House com o Desenho Universal, a equiparação de oportunidades 
              e o cumprimento integral da <strong>ABNT NBR 17225:2025</strong> e da <strong>Lei Brasileira de Inclusão (LBI)</strong>.
            </p>
          </div>
        </header>

        {/* Seção Sumário e Introdução */}
        <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="container">
            <div className="row justify-content-center mt-4 mb-3">
              <div className="col-lg-9">
                <div className="p-4 bg-white rounded shadow-sm border">
                  <h2 className="h4 fw-bold mb-3 text-dark">
                    Nosso Compromisso com a Inclusão Sem Barreiras
                  </h2>
                  <div style={{ width: '60px', height: '3px', backgroundColor: '#EB5F2C', marginBottom: '1.2rem' }}></div>
                  <p className="text-muted" style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                    A <strong>LeFul Design House</strong> atua sob a premissa epistemológica de que a acessibilidade digital não é um favor ou uma camada decorativa tardia, 
                    mas a própria <strong>medida da inteligência e maturidade de uma interface</strong>. Como consultoria especializada e membro da Comissão de Estudo da ABNT (CB-040), 
                    adotamos em nossos ambientes digitais os mesmos parâmetros técnicos que auditamos e prescrevemos para nossos clientes corporativos e governamentais.
                  </p>
                  <p className="text-muted mb-0" style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                    Esta política formaliza os padrões técnicos implementados no portal <code>leful.com.br</code>, os recursos de tecnologia assistiva suportados, 
                    os canais oficiais para comunicação de barreiras e as salvaguardas de conformidade legal.
                  </p>
                </div>

                {/* Índice Rápido de Navegação */}
                <div className="row mt-4 g-2">
                  <div className="col-md-6">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        <a href="#padroes" className="text-decoration-none fw-semibold text-dark d-flex align-items-center">
                          <FaCheckCircle className="text-primary me-2 flex-shrink-0" /> 1. Padrões Normativos e Legais
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#recursos" className="text-decoration-none fw-semibold text-dark d-flex align-items-center">
                          <FaCheckCircle className="text-primary me-2 flex-shrink-0" /> 2. Recursos Técnicos Implementados
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#assistiva" className="text-decoration-none fw-semibold text-dark d-flex align-items-center">
                          <FaCheckCircle className="text-primary me-2 flex-shrink-0" /> 3. Compatibilidade Tecnológica
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        <a href="#dimensoes" className="text-decoration-none fw-semibold text-dark d-flex align-items-center">
                          <FaCheckCircle className="text-primary me-2 flex-shrink-0" /> 4. Avaliação pelo Método CADUX
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#limitacoes" className="text-decoration-none fw-semibold text-dark d-flex align-items-center">
                          <FaCheckCircle className="text-primary me-2 flex-shrink-0" /> 5. Limitações e Melhoria Contínua
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#contato-acessivel" className="text-decoration-none fw-semibold text-dark d-flex align-items-center">
                          <FaCheckCircle className="text-primary me-2 flex-shrink-0" /> 6. Canal de Atendimento Acessível
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tópico 1 - Padrões Normativos */}
        <section id="padroes" className="py-5 mt-3 bg-white border-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 bg-light rounded text-primary border">
                    <FaBalanceScale size={28} />
                  </div>
                  <div>
                    <h2 className="h4 fw-bold mb-0">1. Padrões Técnicos e Fundamentação Legal</h2>
                    <span className="small text-muted">Amparo jurídico e diretrizes globais</span>
                  </div>
                </div>

                <p className="text-muted" style={{ lineHeight: '1.7' }}>
                  A estrutura deste portal foi projetada e homologada em conformidade estrita com os seguintes marcos regulatórios e técnicos:
                </p>

                <ul className="list-unstyled ps-0 mb-4">
                  <li className="p-3 mb-2 rounded bg-light border-start border-primary border-4">
                    <strong className="text-dark d-block">ABNT NBR 17225:2025 (Comitê CB-040):</strong>
                    <span className="small text-muted">
                      Adoção dos 156 critérios nacionais de acessibilidade em aplicações web, assegurando o alinhamento 
                      entre as diretrizes de conteúdo e a experiência de uso para pessoas com deficiência sensorial, física e neurodivergentes.
                    </span>
                  </li>
                  <li className="p-3 mb-2 rounded bg-light border-start border-primary border-4">
                    <strong className="text-dark d-block">Lei Brasileira de Inclusão (Lei nº 13.146/2015 - Artigo 63):</strong>
                    <span className="small text-muted">
                      Cumprimento da obrigatoriedade legal de acessibilidade em sítios da internet mantidos por empresas com sede comercial no país, 
                      garantindo autonomia plena de navegação e consumo de informações.
                    </span>
                  </li>
                  <li className="p-3 mb-2 rounded bg-light border-start border-primary border-4">
                    <strong className="text-dark d-block">WCAG 2.2 (W3C / WAI - Nível AA):</strong>
                    <span className="small text-muted">
                      Observância rigorosa dos 4 princípios fundamentais: <strong>Perceptível</strong> (informação visível aos sentidos), 
                      <strong>Operável</strong> (navegação por teclado e sem armadilhas), <strong>Compreensível</strong> (clareza de linguagem e fluxos previsíveis) 
                      e <strong>Robusto</strong> (compatível com navegadores modernos e agentes de IA).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tópico 2 - Recursos Técnicos Implementados */}
        <section id="recursos" className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="container mt-3 mb-3">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 bg-light rounded text-primary border">
                    <FaCode size={28} />
                  </div>
                  <div>
                    <h2 className="h4 fw-bold mb-0">2. Recursos Técnicos Implementados na Aplicação</h2>
                    <span className="small text-muted">Medidas de engenharia front-end nativa</span>
                  </div>
                </div>

                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <div className="p-3 bg-white rounded border h-100 shadow-sm">
                      <div className="text-primary mb-2"><FaKeyboard size={22} /></div>
                      <h3 className="h6 fw-bold text-dark">Navegabilidade Estrita por Teclado</h3>
                      <p className="small text-muted mb-0">
                        Todos os elementos interativos (links, menus, botões) são alcançáveis via tecla <code>Tab</code>, 
                        com indicador de foco visual reforçado (mínimo 2px de espessura com contraste 3:1) e sem nenhuma armadilha de teclado (keyboard trap).
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 bg-white rounded border h-100 shadow-sm">
                      <div className="text-primary mb-2"><FaEye size={22} /></div>
                      <h3 className="h6 fw-bold text-dark">Contraste e Tipografia Acessível</h3>
                      <p className="small text-muted mb-0">
                        Relação de contraste de cores superior a 4.5:1 para textos regulares e 3:1 para elementos de interface e gráficos. 
                        A tipografia permite ampliação de até 200% via zoom do navegador sem sobreposição ou quebra de layout.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 bg-white rounded border h-100 shadow-sm">
                      <div className="text-primary mb-2"><FaUniversalAccess size={22} /></div>
                      <h3 className="h6 fw-bold text-dark">Semântica e Suporte WAI-ARIA</h3>
                      <p className="small text-muted mb-0">
                        Marcação estrutural em HTML5 utilizando marcos semânticos (<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;footer&gt;</code>) 
                        e atributos ARIA precisos para leitura ordenada e contextualizada em softwares leitores de tela.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 bg-white rounded border h-100 shadow-sm">
                      <div className="text-primary mb-2"><FaAssistiveListeningSystems size={22} /></div>
                      <h3 className="h6 fw-bold text-dark">Equivalentes Textuais e Multimodalidade</h3>
                      <p className="small text-muted mb-0">
                        Imagens funcionais e informativas contam com texto alternativo (<code>alt</code>) descritivo e objetivo. 
                        Elementos meramente decorativos são marcados com <code>aria-hidden="true"</code> para não sobrecarregar a leitura auditiva.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tópico 3 - Compatibilidade Tecnológica */}
        <section id="assistiva" className="py-5 bg-white border-bottom">
          <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 bg-light rounded text-primary border">
                    <FaShieldAlt size={28} />
                  </div>
                  <div>
                    <h2 className="h4 fw-bold mb-0">3. Compatibilidade com Tecnologias Assistivas</h2>
                    <span className="small text-muted">Ambientes de testes e validação</span>
                  </div>
                </div>

                <p className="text-muted" style={{ lineHeight: '1.7' }}>
                  Este site é submetido a testes regulares com ferramentas de auditoria automatizada (Axe-core, Lighthouse e a plataforma proprietária <strong>CoIn</strong>) 
                  e avaliações manuais de usabilidade realizadas com os seguintes ambientes:
                </p>

                <div className="row g-2 mt-2">
                  <div className="col-12 col-sm-4">
                    <div className="p-3 bg-light rounded border text-center">
                      <strong className="text-dark d-block">Leitores de Tela Desktop</strong>
                      <span className="small text-muted">NVDA e JAWS (Windows), VoiceOver (macOS)</span>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="p-3 bg-light rounded border text-center">
                      <strong className="text-dark d-block">Ambientes Mobile</strong>
                      <span className="small text-muted">TalkBack (Android) e VoiceOver (iOS)</span>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="p-3 bg-light rounded border text-center">
                      <strong className="text-dark d-block">Navegação sem Mouse</strong>
                      <span className="small text-muted">Emuladores de teclado e acionadores</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tópico 4 - Metodologia CADUX */}
        <section id="dimensoes" className="py-5" style={{ backgroundColor: '#2B2E34', color: 'white' }}>
          <div className="container mt-4 mb-4">
            <div className="row justify-content-center">
              <div className="col-lg-9 text-center">
                <span className="text-uppercase fw-bold text-info small letter-spacing-1 mb-2">Modelo Científico Registrado</span>
                <h2 className="display-6 fw-bold mb-3 text-white">4. Avaliação sob a Metodologia CADUX ®</h2>
                <p className="text-light opacity-75 mb-4" style={{ lineHeight: '1.7' }}>
                  Auditamos continuamente este portal através das 5 dimensões proprietárias da metodologia CADUX (Registro INPI nº 934006750):
                </p>

                <div className="row g-3 text-start">
                  <div className="col-md-4">
                    <div className="p-3 rounded bg-white text-dark h-100 border">
                      <strong className="text-primary d-block mb-1">Acessibilidade:</strong>
                      <span className="small text-muted">Percepção e operação semântica dos 156 critérios da NBR 17225.</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 rounded bg-white text-dark h-100 border">
                      <strong className="text-primary d-block mb-1">Usabilidade:</strong>
                      <span className="small text-muted">Clareza de caminhos, hierarquia previsível e eficiência de navegação.</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 rounded bg-white text-dark h-100 border">
                      <strong className="text-primary d-block mb-1">Funcionalidade:</strong>
                      <span className="small text-muted">Componentes responsivos, formulários validados e ausência de bugs.</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 rounded bg-white text-dark h-100 border">
                      <strong className="text-primary d-block mb-1">Emoção:</strong>
                      <span className="small text-muted">Redução de estresse cognitivo, ausência de elementos intermitentes indutores de crises e acolhimento estético.</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 rounded bg-white text-dark h-100 border">
                      <strong className="text-primary d-block mb-1">Valor:</strong>
                      <span className="small text-muted">Transparência pública, cumprimento dos preceitos ESG e promoção real da cidadania digital.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tópico 5 - Limitações e Melhoria Contínua */}
        <section id="limitacoes" className="py-5 bg-white border-bottom">
          <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <h2 className="h4 fw-bold mb-3">5. Limitações Conhecidas e Plano de Aprimoramento</h2>
                <div style={{ width: '60px', height: '3px', backgroundColor: '#EB5F2C', marginBottom: '1.2rem' }}></div>
                
                <p className="text-muted" style={{ lineHeight: '1.7' }}>
                  Apesar de nossos esforços contínuos para manter 100% de conformidade, reconhecemos que a acessibilidade é um processo evolutivo. 
                  Eventuais documentos históricos ou materiais legados em formato PDF podem apresentar restrições na leitura linear em softwares mais antigos. 
                  Estamos em processo permanente de atualização e remediação para assegurar alternativas textuais enriquecidas para todos os conteúdos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tópico 6 - Canal de Atendimento e Feedback Loop */}
        <section id="contato-acessivel" className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="container mt-3">
            <div className="row justify-content-center">
              <div className="col-lg-9 text-center">
                <div className="p-4 p-md-5 bg-white rounded shadow-sm border">
                  <div className="text-primary mb-3"><FaEnvelope size={36} /></div>
                  <h2 className="h3 fw-bold mb-2">6. Canal de Comunicação e Feedback de Acessibilidade</h2>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
                    Encontrou alguma barreira de acesso ou tem alguma sugestão de melhoria técnica neste portal? 
                    Sua contribuição é tratada como prioridade técnica por nossa equipe de engenharia e liderança.
                  </p>

                  <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
                    <a 
                      href="mailto:renanbinda1@gmail.com?subject=Acessibilidade%20Digital%20-%20Feedback%20LeFul" 
                      className="btn btn-primary px-4 py-3 fw-bold shadow-sm"
                    >
                      <FaEnvelope className="me-2" /> Comunicar Barreira por E-mail
                    </a>
                    <Link to="/contato" className="btn btn-outline-primary px-4 py-3 fw-semibold">
                      Formulário de Contato Direto
                    </Link>
                  </div>

                  <p className="small text-muted mb-0">
                    <strong>Responsável Técnico pela Conformidade:</strong> Dr. Renan de Paula Binda (Membro ABNT/CB-040)<br />
                    E-mail institucional: <code>renan.paula.binda@ufsc.br</code> | Telefone / WhatsApp: <code>(11) 91851-2332</code><br />
                    Prazo padrão para retorno e diagnóstico: até 48 horas úteis.
                  </p>
                </div>

                {/* Botão Voltar ao Topo */}
                 <div className="d-flex flex-column align-items-center mt-5">
                <a href="#topo" className="mb-2" aria-label="Voltar ao início do manifesto">
                  <img
                    src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/seta-cima.png'
                    alt="Seta de retorno ao topo"
                    width="44"
                    loading="lazy"
                  />
                </a>
                <a href="#topo" className="text-dark text-decoration-none fw-bold small">
                  Voltar ao Topo
                </a>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Politica;