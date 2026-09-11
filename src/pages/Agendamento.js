import React from 'react';
import { 
  FaCalendarCheck, 
  FaClock, 
  FaVideo, 
  FaShieldAlt, 
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowRight 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/global.css';

export default function Agendamento() {
  return (
    <div className="agendamento-page" role="main" aria-labelledby="agendamento-heading">
      {/* Topo Hero com Fundo Institucional */}
      <header 
        className="text-white text-center py-5"
        style={{
          background: 'linear-gradient(135deg, #1E2229 0%, #2B2E34 60%, #1A2634 100%)',
          borderBottom: '4px solid #009FE3',
          paddingTop: '3.5rem',
          paddingBottom: '3rem'
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <div 
            className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill border"
            style={{ backgroundColor: 'rgba(0, 159, 227, 0.12)', borderColor: 'rgba(0, 159, 227, 0.35)' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#009FE3' }}></span>
            <span style={{ fontSize: '0.75rem', letterSpacing: '1.1px', fontWeight: '700', color: '#70D0FB', textTransform: 'uppercase' }}>
              Sessão Diagnóstica Executiva
            </span>
          </div>

          <h1 id="agendamento-heading" className="display-5 fw-bold mb-2">
            Agende uma Sessão com o <span style={{ color: '#009FE3' }}>Especialista</span>
          </h1>

          <div style={{ width: '60px', height: '3px', backgroundColor: '#EB5F2C', margin: '0.8rem auto 1.2rem auto' }}></div>

          <p className="lead text-light opacity-90 mx-auto" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
            Alinhamento estratégico de 20 minutos com nossa<strong>equipe de especialistas</strong> para definição de escopo de auditoria, conformidade com a NBR 17225 ou capacitações in-company.
          </p>
        </div>
      </header>

      {/* Seção Central de Parâmetros e Embed de Agendamento */}
      <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Box de Critérios de Qualificação Prévia */}
            <div className="col-12 col-lg-4">
              <div className="p-4 bg-white rounded-3 border shadow-sm h-100">
                <span className="badge bg-light text-primary border mb-3 fw-bold small">
                  DIRETRIZES DA REUNIÃO
                </span>
                <h2 className="h5 fw-bold text-dark mb-3">Como Funciona a Sessão</h2>

                <ul className="list-unstyled mb-4 small text-muted" style={{ lineHeight: '1.7' }}>
                  <li className="d-flex align-items-start mb-2">
                    <FaClock className="text-primary me-2 mt-1 flex-shrink-0" size={13} />
                    <span><strong>Duração:</strong> 20 minutos (briefing executivo).</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <FaVideo className="text-primary me-2 mt-1 flex-shrink-0" size={13} />
                    <span><strong>Formato:</strong> Videoconferência (Google Meet).</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <FaCalendarCheck className="text-primary me-2 mt-1 flex-shrink-0" size={13} />
                    <span><strong>Janela Comercial:</strong> Terças a Quintas, das 13h30 às 17h30.</span>
                  </li>
                </ul>

                <h3 className="h6 fw-bold text-dark mb-2">Público-Alvo Prioritário:</h3>
                <div className="mb-4">
                  <div className="p-2 mb-2 bg-light rounded border-start border-primary border-3 small text-dark fw-semibold">
                    • Diretores de Produto & C-Levels
                  </div>
                  <div className="p-2 mb-2 bg-light rounded border-start border-primary border-3 small text-dark fw-semibold">
                    • Heads de Design System & Tech Leads
                  </div>
                  <div className="p-2 mb-2 bg-light rounded border-start border-primary border-3 small text-dark fw-semibold">
                    • Gerentes de Compliance & Jurídico
                  </div>
                  <div className="p-2 bg-light rounded border-start border-primary border-3 small text-dark fw-semibold">
                    • Lideranças de EAD & Universidades
                  </div>
                </div>

                <div className="p-3 bg-light rounded border border-warning">
                  <div className="d-flex align-items-center mb-1 text-warning">
                    <FaExclamationTriangle className="me-2 flex-shrink-0" size={14} />
                    <strong className="small text-dark">Aviso aos Solicitantes:</strong>
                  </div>
                  <p className="small text-muted mb-0" style={{ fontSize: '0.75rem' }}>
                    Demandas acadêmicas, bancas ou dúvidas de pesquisa devem ser canalizadas diretamente pelo e-mail institucional (<code>renan.paula.binda@ufsc.br</code>).
                  </p>
                </div>
              </div>
            </div>

            {/* Painel do Calendário / Seletor de Janelas */}
            <div className="col-12 col-lg-8">
              <div className="p-4 bg-white rounded-3 border shadow-sm text-center h-100 d-flex flex-column justify-content-center">
                {/* Embed do Calendly / Cal.com ou Formulário Direto de Reserva */}
                <div className="py-4">
                  <div className="p-3 mb-4 rounded-circle bg-light d-inline-block text-primary border">
                    <FaCalendarCheck size={42} />
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-2">Selecione seu Horário na Agenda Oficial</h3>
                  <p className="small text-muted mx-auto mb-4" style={{ maxWidth: '540px' }}>
                    Nossos horários de reunião executiva são sincronizados automaticamente com o calendário da nossa equipe para garantir atendimento sem atrasos.
                  </p>

                  {/* Botão de Disparo do Modal de Agendamento ou Link Direto */}
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <a 
                      href="https://calendly.com/leful-contato" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary px-4 py-3 fw-bold shadow-sm"
                      style={{ backgroundColor: '#009FE3', borderColor: '#009FE3' }}
                    >
                      Abrir Calendário Executivo <FaArrowRight className="ms-2" />
                    </a>
                    <Link 
                      to="/contato" 
                      className="btn btn-outline-dark px-4 py-3 fw-semibold"
                    >
                      Prefiro Enviar Mensagem por Escrito
                    </Link>
                  </div>
                </div>

                <div className="mt-auto pt-3 border-top text-muted small" style={{ fontSize: '0.78rem' }}>
                  <FaShieldAlt className="text-primary me-1" /> Seus dados cadastrais são protegidos e tratados exclusivamente para fins de qualificação da sessão diagnóstica.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}