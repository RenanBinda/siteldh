import React from 'react';

function Manifesto() {
  return (
    <main>
      {/* Cabeçalho Institucional */}
      <header id="topo" className="text-white py-5" style={{ background: 'rgba(51, 51, 51, 1)' }}>
        <div className="container px-4 text-center">
          <img 
            src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/Marca_LeFul0.png'
            alt="Identidade Visual Oficial da LeFul Design House" 
            className="img-fluid mb-4"
            style={{ maxWidth: '180px' }}
          />
          <h1 className="display-5 mb-3 fw-bold">
            Manifesto <span style={{ color: '#EB5F2C' }}>LeFul Design House</span>
          </h1>
          <p className="lead fs-5 text-light" style={{ maxWidth: '820px', margin: '0 auto' }}>
            Princípios orientadores para a Engenharia da Mediação, Design Inclusivo de Alto Impacto e Conformidade Normativa na Era Digital.
          </p>
        </div>
      </header>

      {/* Seção Sobre o Manifesto */}
      <section className="py-5" style={{ backgroundColor: 'rgba(233, 232, 232, 0.56)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="mb-3 fw-bold">
                Sobre o <span style={{ color: '#EB5F2C' }}>Nosso Manifesto</span>
              </h2>
              
              <div style={{ width: '80px', height: '3px', background: '#EB5F2C', margin: '1.5rem 0' }}></div>
              
              <p className="lead text-dark" style={{ fontSize: '1.15rem', lineHeight: '1.7' }}>
                Na <strong>LeFul Design House</strong>, rejeitamos o design como mero artifício estético ou verniz de superfície. Compreendemos o design e a tecnologia como <strong>sistemas mediadores de conhecimento</strong> fundamentais para a garantia de direitos, equidade e autonomia humana. 
              </p>
              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                Este manifesto consolida nossa visão epistemológica, ética e técnica, integrando a pesquisa acadêmica desenvolvida no <strong>PPGEGC/UFSC</strong>, a autoridade normativa da <strong>ABNT NBR 17225:2025</strong> e a prática pragmática da engenharia de software para construir ecossistemas digitais onde ninguém seja deixado para trás.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Princípio 1 - Acessibilidade como Medida de Inteligência */}
      <div className="bg-white border-bottom">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                      src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/Mani01.png'
                      alt="Acessibilidade como inteligência intrínseca"
                      className="img-fluid"
                      style={{ maxWidth: '140px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="mb-3 fw-bold">
                      <span style={{ color: '#EB5F2C' }}>1.</span> Acessibilidade como Medida de Inteligência
                    </h3>
                    <p className="lead text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                      Acessibilidade não é somente conformidade técnica ou camada decorativa adicionada ao final do projeto. Em consonância com a teoria da <strong>Mídia do Conhecimento</strong>, defendemos que a acessibilidade é a própria medida de inteligência e maturidade de uma interface. Se um sistema digital carece de competência processual para transpor barreiras sensoriais, cognitivas ou motoras, ele falha em sua função mediadora e regride ao estágio de veículo estático e excludente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Princípio 2 - Engenharia da Mediação */}
      <div className="bg-light border-bottom">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0 order-md-2">
                    <img
                      src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/Mani02.png'
                      alt="Engenharia da Mediação: Sensação, Associação e Síntese"
                      className="img-fluid"
                      style={{ maxWidth: '140px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8 order-md-1">
                    <h3 className="mb-3 fw-bold">
                      <span style={{ color: '#EB5F2C' }}>2.</span> Engenharia da Mediação: Da Sensação à Síntese
                    </h3>
                    <p className="lead text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                      Projetamos sistemas inteligentes fundamentados na tríade processual da mediação: <strong>Sensação</strong> (a percepção ativa da barreira informacional ou restrição do usuário), <strong>Associação</strong> (o processamento semântico que correlaciona requisitos normativos a regras computáveis) e <strong>Síntese</strong> (a entrega de interfaces multimodais fluidas, equivalentes textuais e navegação por teclado). A mediação tecnológica deve ser contínua, invisível e libertadora.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Princípio 3 - Superação do Capacitismo Digital */}
      <div className="bg-white border-bottom">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                      src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/Main03.png'
                      alt="Superação do capacitismo e centralidade na diversidade humana"
                      className="img-fluid"
                      style={{ maxWidth: '140px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="mb-3 fw-bold">
                      <span style={{ color: '#EB5F2C' }}>3.</span> Superação Radical do Capacitismo Digital
                    </h3>
                    <p className="lead text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                      Rejeitamos a tirania estatística do "usuário médio", que projeta artefatos para corpos e mentes padronizados e rotula a deficiência como patologia individual. Adotamos o modelo social da deficiência (CIF/OMS e LBI): a incapacidade reside na inadequação do ambiente e na presença de barreiras criadas pelo próprio design. Nosso compromisso é com o co-design e a escuta ativa das pessoas usuárias, garantindo o princípio fundamental: <em>nada sobre nós, sem nós</em>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Princípio 4 - Rigor Normativo e Legal */}
      <div className="bg-light border-bottom">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0 order-md-2">
                    <img
                      src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/Mani04.png'
                      alt="Conformidade técnica, ABNT NBR 17225 e Artigo 63 LBI"
                      className="img-fluid"
                      style={{ maxWidth: '140px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8 order-md-1">
                    <h3 className="mb-3 fw-bold">
                      <span style={{ color: '#EB5F2C' }}>4.</span> Rigor Técnico e Conformidade Normativa (NBR 17225)
                    </h3>
                    <p className="lead text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                      A conformidade com a <strong>ABNT NBR 17225:2025</strong> e o <strong>Artigo 63 da Lei Brasileira de Inclusão (Lei nº 13.146/2015)</strong> é o piso ético inegociável da engenharia de software. Operamos com o domínio direto da comissão que elaborou a norma brasileira (ABNT/CB-040), traduzindo seus 156 critérios técnicos e os princípios internacionais das WCAG 2.2 em código semântico executável e auditável.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Princípio 5 - Metodologia Multidimensional CADUX */}
      <div className="bg-white border-bottom">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                      src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/Mani05.png'
                      alt="Metodologia proprietária CADUX e Jornada da Acessibilidade"
                      className="img-fluid"
                      style={{ maxWidth: '140px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="mb-3 fw-bold">
                      <span style={{ color: '#EB5F2C' }}>5.</span> Abordagem Multidimensional: Método CADUX
                    </h3>
                    <p className="lead text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                      Fundamentados em <strong>Design Science Research (DSR/UFSC)</strong>, criamos o framework autoral <strong>CADUX</strong> e o simulador gamificado <strong>Jornada da Acessibilidade</strong> para superar as avaliações lineares. Avaliamos a experiência digital em cinco dimensões indissociáveis: <em>Acessibilidade</em> (percepção e operação), <em>Usabilidade</em> (clareza e eficiência), <em>Funcionalidade</em> (robustez e resposta), <em>Emoção</em> (redução de estresse e acolhimento) e <em>Valor</em> (impacto social e retorno sustentável).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Princípio 6 - Acessibilidade na Web Agêntica e IA */}
      <div className="bg-light border-bottom">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0 order-md-2">
                    <img
                      src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/Mani06.png'
                      alt="Web Agêntica, Sistemas Inteligentes de Mediação e IA Ética"
                      className="img-fluid"
                      style={{ maxWidth: '140px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8 order-md-1">
                    <h3 className="mb-3 fw-bold">
                      <span style={{ color: '#EB5F2C' }}>6.</span> Governança para a Web Agêntica e IA Inclusiva
                    </h3>
                    <p className="lead text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                      Com a emergência da Web 4.0 e dos agentes autônomos orientados a objetivos (Actionism), interfaces inacessíveis rompem a cadeia cognitiva dos próprios agentes de inteligência artificial. Desenvolvemos o projeto <strong>CoIn</strong> e frameworks de <strong>Sistemas Inteligentes de Mediação (SIM)</strong> para garantir que a arquitetura da web futura seja legível por máquinas (<em>machine-actionable</em>), confiável, livre de alucinações técnicas e eticamente ancorada na diversidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Princípio 7 - Espiral do Conhecimento e Capacitação */}
      <div className="bg-white border-bottom">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                      src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/Mani07.png'
                      alt="Gestão do conhecimento e transferência contínua de competências"
                      className="img-fluid"
                      style={{ maxWidth: '140px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="mb-3 fw-bold">
                      <span style={{ color: '#EB5F2C' }}>7.</span> Gestão do Conhecimento e Autonomia das Equipes
                    </h3>
                    <p className="lead text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                      Aplicamos a <strong>Espiral de Criação do Conhecimento (Nonaka & Takeuchi)</strong> para converter o saber tácito das vivências de exclusão em diretrizes explícitas de engenharia. Nossos workshops corporativos transferem competências para os times de Produto, Design e Desenvolvimento, consolidando a acessibilidade como ativo cultural perene e vantagem competitiva da organização.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Princípio 8 - Engenharia Prescritiva e Entrega em Código */}
      <div className="bg-light border-bottom">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0 order-md-2">
                    <img
                      src='https://uycxgjzhawzvblaqlpdc.supabase.co/storage/v1/object/public/img/Mani08.png'
                      alt="Engenharia prescritiva com foco em entrega acionável de código"
                      className="img-fluid"
                      style={{ maxWidth: '140px' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8 order-md-1">
                    <h3 className="mb-3 fw-bold">
                      <span style={{ color: '#EB5F2C' }}>8.</span> Engenharia Prescritiva: Solução Real em Código
                    </h3>
                    <p className="lead text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                      Busque laudos técnicos de conformidade que oferecem caminhos de remediação. A entrega da LeFul é prescritiva: auditamos o funil crítico, elaboramos matrizes de severidade e fornecemos o código em HTML5 semântico, atributos WAI-ARIA, hierarquia de foco e estilos CSS acessíveis. Transformamos conformidade técnica em performance, usabilidade aprimorada (Efeito Curb-Cut) e maximização da taxa de conversão.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Final - Compromisso e Assinatura */}
      <section className="py-5 text-center" style={{ backgroundColor: 'rgba(233, 232, 232, 0.56)' }}>
        <div className="container mt-4 mb-2">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-3 fw-bold">
                O Nosso Compromisso com o <span style={{ color: '#EB5F2C' }}>Conhecimento Acessível</span>
              </h2>
              
              <div style={{ width: '80px', height: '3px', background: '#EB5F2C', margin: '1.5rem auto' }}></div>
              
              <p className="lead mb-4 text-dark" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                Este manifesto rege cada auditoria técnica, cada linha de código prescrita e cada treinamento conduzido pela LeFul Design House. Unimos o rigor epistemológico da universidade à agilidade pragmática do mercado corporativo para garantir que o conhecimento e as tecnologias digitais sejam portas abertas para todas as pessoas.
              </p>
              
              <p className="fw-bold text-muted mb-5" style={{ fontSize: '0.95rem' }}>
                Dr. Renan de Paula Binda<br />
                <span className="fw-normal">Fundador e Consultor Especialista em Acessibilidade Digital e UX | Membro ABNT/CB-040</span>
              </p>

              <div className="d-flex flex-column align-items-center">
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
    </main>
  );
}

export default Manifesto;