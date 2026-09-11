import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCalendarCheck,
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaExclamationCircle,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';
import { supabase } from '../integrations/supabase/client';
import '../Styles/global.css';

// 👇 Nome REAL da Edge Function publicada no Supabase.
//    Substitua pelo slug que você criou (ex.: 'send-contact-email').
const EDGE_FUNCTION_NAME = 'resend-email';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    tipoDemanda: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const errorSummaryRef = useRef(null);

  const validate = () => {
    const errs = {};

    // 1. Nome obrigatório (mín. 3 caracteres)
    if (!formData.nome.trim()) {
      errs.nome = 'O nome completo é obrigatório.';
    } else if (formData.nome.trim().length < 3) {
      errs.nome = 'O nome deve conter pelo menos 3 caracteres.';
    }

    // 2. E-mail obrigatório e válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'O e-mail institucional ou comercial é obrigatório.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Insira um formato de e-mail válido (ex: nome@empresa.com.br).';
    }

    // 3. Tipo de demanda obrigatório
    if (!formData.tipoDemanda) {
      errs.tipoDemanda = 'Selecione o escopo do projeto ou demanda técnica.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      setTimeout(() => {
        if (errorSummaryRef.current) {
          errorSummaryRef.current.focus();
        }
      }, 50);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const { data, error } = await supabase.functions.invoke(EDGE_FUNCTION_NAME, {
        body: {
          nome: formData.nome,
          email: formData.email,
          empresa: formData.empresa,
          telefone: formData.telefone,
          tipoDemanda: formData.tipoDemanda,
          mensagem: formData.mensagem,
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
          apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
        },
      });

      if (error) {
        throw error;
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      setErrors({
        geral:
          'Não foi possível enviar sua mensagem agora. Tente novamente em instantes ou escreva direto para atendimento@leful.com.br',
      });
      setSubmitted(false);
      setTimeout(() => {
        if (errorSummaryRef.current) {
          errorSummaryRef.current.focus();
        }
      }, 50);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contato-page" role="main" aria-labelledby="contato-heading">
      {/* Topo Hero */}
      <header
        className="text-white text-center py-5"
        style={{
          background:
            'linear-gradient(135deg, #1E2229 0%, #2B2E34 60%, #1A2634 100%)',
          borderBottom: '4px solid #009FE3',
          paddingTop: '3.5rem',
          paddingBottom: '3rem',
        }}
      >
        <div className="container" style={{ maxWidth: '840px' }}>
          <div
            className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill border"
            style={{
              backgroundColor: 'rgba(0, 159, 227, 0.12)',
              borderColor: 'rgba(0, 159, 227, 0.35)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#009FE3',
              }}
            ></span>
            <span
              style={{
                fontSize: '0.75rem',
                letterSpacing: '1.1px',
                fontWeight: '700',
                color: '#70D0FB',
                textTransform: 'uppercase',
              }}
            >
              Canal Oficial de Atendimento Técnico
            </span>
          </div>

          <h1 id="contato-heading" className="display-5 fw-bold mb-2">
            Fale com Nossa{' '}
            <span style={{ color: '#009FE3' }}>Liderança Especializada</span>
          </h1>

          <div
            style={{
              width: '60px',
              height: '3px',
              backgroundColor: '#EB5F2C',
              margin: '0.8rem auto 1.2rem auto',
            }}
          ></div>

          <p
            className="lead text-light opacity-90 mx-auto"
            style={{ fontSize: '1.05rem', lineHeight: '1.6' }}
          >
            Consulte a nossa equipe de <strong>especialistas</strong> para
            auditorias periciais (ABNT NBR 17225:2025), treinamentos in-company
            (CADUX ®) e parcerias em Web Agêntica.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <Link
              to="/agendamento"
              className="btn px-4 py-2 fw-bold shadow-sm d-inline-flex align-items-center"
              style={{
                backgroundColor: '#009FE3',
                borderColor: '#009FE3',
                color: '#FFF',
                borderRadius: '24px',
              }}
            >
              <FaCalendarCheck className="me-2" /> Agendar Reunião de 20 Minutos{' '}
              <FaArrowRight className="ms-2" size={12} />
            </Link>
            <a
              href="#formulario"
              className="btn btn-outline-light px-4 py-2 fw-semibold rounded-pill"
            >
              Enviar Mensagem por Escrito
            </a>
          </div>
        </div>
      </header>

      {/* Seção Principal */}
      <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container" id="formulario">
          <div className="row g-4 justify-content-center">
            {/* Box Lateral */}
            <div className="col-12 col-lg-4">
              <div className="p-4 bg-white rounded-3 border shadow-sm h-100 d-flex flex-column">
                <span className="badge bg-light text-primary border mb-3 fw-bold small">
                  CONSULTORIA B2B &amp; P&amp;D
                </span>
                <h2 className="h5 fw-bold text-dark mb-2">
                  LeFul Design House ®
                </h2>
                <p
                  className="small text-muted mb-4"
                  style={{ lineHeight: '1.6' }}
                >
                  Atendimento especializado para empresas de software,
                  departamentos jurídicos, EdTechs e polos de inovação.
                </p>

                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="p-2 rounded bg-light text-primary border me-3 flex-shrink-0">
                      <FaEnvelope size={16} />
                    </div>
                    <div>
                      <strong className="d-block text-dark small">
                        E-mail:
                      </strong>
                      <a
                        href="mailto:leful.contato@gmail.com"
                        className="text-decoration-none small text-primary fw-semibold"
                      >
                        leful.contato@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="p-2 rounded bg-light text-primary border me-3 flex-shrink-0">
                      <FaPhoneAlt size={16} />
                    </div>
                    <div>
                      <strong className="d-block text-dark small">
                        Telefone / WhatsApp:
                      </strong>
                      <a
                        href="https://wa.me/5548999415975"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none small text-primary fw-semibold"
                      >
                        (48) 99941-5975
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="p-2 rounded bg-light text-primary border me-3 flex-shrink-0">
                      <FaLinkedin size={16} />
                    </div>
                    <div>
                      <strong className="d-block text-dark small">
                        LinkedIn:
                      </strong>
                      <a
                        href="https://www.linkedin.com/in/renan-p-binda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none small text-primary fw-semibold"
                      >
                        linkedin.com/in/renan-p-binda
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-light rounded border-start border-primary border-3 mt-auto">
                  <strong className="small text-dark d-block mb-1">
                    Demandas Acadêmicas &amp; Bancas:
                  </strong>
                  <p
                    className="small text-muted mb-0"
                    style={{ fontSize: '0.78rem', lineHeight: '1.5' }}
                  >
                    Alunos e pesquisadores devem utilizar exclusivamente o canal
                    institucional:{' '}
                    <code>renan.paula.binda@ufsc.br</code>.
                  </p>
                </div>
              </div>
            </div>

            {/* Box do Formulário */}
            <div className="col-12 col-lg-8">
              <div className="p-4 p-md-5 bg-white rounded-3 border shadow-sm">
                <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                  <div>
                    <h2 className="h4 fw-bold text-dark mb-1">
                      Formulário de Triagem Técnica
                    </h2>
                    <p className="small text-muted mb-0">
                      Campos com asterisco (*) são de preenchimento compulsório.
                    </p>
                  </div>
                  <Link
                    to="/agendamento"
                    className="btn btn-sm btn-outline-primary fw-bold"
                  >
                    <FaCalendarCheck className="me-1" /> Reunião em Vídeo
                  </Link>
                </div>

                {/* Resumo de Erros Acessível */}
                {Object.keys(errors).length > 0 && (
                  <div
                    ref={errorSummaryRef}
                    tabIndex={-1}
                    className="alert alert-danger p-3 mb-4 rounded border-danger"
                    role="alert"
                    aria-live="assertive"
                  >
                    <div className="d-flex align-items-center mb-1">
                      <FaExclamationCircle
                        className="me-2 flex-shrink-0"
                        size={16}
                      />
                      <strong className="small">
                        Corrija os seguintes campos para prosseguir:
                      </strong>
                    </div>
                    <ul className="small mb-0 ps-3">
                      {Object.values(errors).map((err, i) => (
                        <li key={i}>{err}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Feedback de Sucesso */}
                {submitted ? (
                  <div
                    className="p-4 text-center bg-light rounded border border-success my-3"
                    role="status"
                  >
                    <FaCheckCircle className="text-success mb-2" size={40} />
                    <h3 className="h5 fw-bold text-dark mb-1">
                      Mensagem Encaminhada com Sucesso
                    </h3>
                    <p className="small text-muted mb-3">
                      Seus dados foram validados e inseridos na esteira de
                      atendimento técnico. O retorno será emitido em até 24 horas
                      úteis.
                    </p>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          nome: '',
                          email: '',
                          empresa: '',
                          telefone: '',
                          tipoDemanda: '',
                          mensagem: '',
                        });
                      }}
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      {/* Nome */}
                      <div className="col-12 col-sm-6">
                        <label
                          htmlFor="campo-nome"
                          className="form-label small fw-bold text-dark mb-1"
                        >
                          Nome Completo{' '}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="campo-nome"
                          name="nome"
                          className={`form-control form-control-sm ${
                            errors.nome ? 'is-invalid' : ''
                          }`}
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Ex: Carlos Albuquerque"
                          aria-required="true"
                          aria-invalid={!!errors.nome}
                          aria-describedby={
                            errors.nome ? 'erro-nome' : undefined
                          }
                        />
                        {errors.nome && (
                          <div id="erro-nome" className="invalid-feedback small">
                            {errors.nome}
                          </div>
                        )}
                      </div>

                      {/* E-mail */}
                      <div className="col-12 col-sm-6">
                        <label
                          htmlFor="campo-email"
                          className="form-label small fw-bold text-dark mb-1"
                        >
                          E-mail Corporativo{' '}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          id="campo-email"
                          name="email"
                          className={`form-control form-control-sm ${
                            errors.email ? 'is-invalid' : ''
                          }`}
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="nome@suaempresa.com.br"
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? 'erro-email' : undefined
                          }
                        />
                        {errors.email && (
                          <div
                            id="erro-email"
                            className="invalid-feedback small"
                          >
                            {errors.email}
                          </div>
                        )}
                      </div>

                      {/* Escopo */}
                      <div className="col-12 col-sm-6">
                        <label
                          htmlFor="campo-escopo"
                          className="form-label small fw-bold text-dark mb-1"
                        >
                          Escopo do Projeto{' '}
                          <span className="text-danger">*</span>
                        </label>
                        <select
                          id="campo-escopo"
                          name="tipoDemanda"
                          className={`form-select form-select-sm ${
                            errors.tipoDemanda ? 'is-invalid' : ''
                          }`}
                          value={formData.tipoDemanda}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!errors.tipoDemanda}
                          aria-describedby={
                            errors.tipoDemanda ? 'erro-escopo' : undefined
                          }
                        >
                          <option value="">-- Selecione o serviço --</option>
                          <option value="auditoria-nbr">
                            Auditoria Express NBR 17225:2025 &amp; Laudo
                            Pericial
                          </option>
                          <option value="workshop-cadux">
                            Workshop In-Company CADUX ® (Treinamento)
                          </option>
                          <option value="design-system">
                            Consultoria para Design System Inclusivo
                          </option>
                          <option value="web-agentica">
                            Projetos de P&amp;D em Web Agêntica e IA
                          </option>
                          <option value="conformidade-lbi">
                            Adequação Regulatória (Art. 63 LBI / TAC)
                          </option>
                        </select>
                        {errors.tipoDemanda && (
                          <div
                            id="erro-escopo"
                            className="invalid-feedback small"
                          >
                            {errors.tipoDemanda}
                          </div>
                        )}
                      </div>

                      {/* Empresa */}
                      <div className="col-12 col-sm-6">
                        <label
                          htmlFor="campo-empresa"
                          className="form-label small fw-bold text-dark mb-1"
                        >
                          Empresa / Instituição
                        </label>
                        <input
                          type="text"
                          id="campo-empresa"
                          name="empresa"
                          className="form-control form-control-sm"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Nome da organização"
                        />
                      </div>

                      {/* Telefone */}
                      <div className="col-12 col-sm-6">
                        <label
                          htmlFor="campo-telefone"
                          className="form-label small fw-bold text-dark mb-1"
                        >
                          Telefone com DDD
                        </label>
                        <input
                          type="tel"
                          id="campo-telefone"
                          name="telefone"
                          className="form-control form-control-sm"
                          value={formData.telefone}
                          onChange={handleChange}
                          placeholder="(48) 99941-5975"
                        />
                      </div>

                      {/* Mensagem */}
                      <div className="col-12">
                        <label
                          htmlFor="campo-mensagem"
                          className="form-label small fw-bold text-dark mb-1"
                        >
                          Contexto da Demanda ou URL do Projeto
                        </label>
                        <textarea
                          id="campo-mensagem"
                          name="mensagem"
                          rows="3"
                          className="form-control form-control-sm"
                          value={formData.mensagem}
                          onChange={handleChange}
                          placeholder="Informe se possui prazo regulatório, quantidade estimada de telas ou escopo desejado..."
                        ></textarea>
                      </div>

                      {/* Botão Enviar */}
                      <div className="col-12 mt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary w-100 fw-bold py-2 shadow-sm d-flex justify-content-center align-items-center"
                          style={{
                            backgroundColor: '#009FE3',
                            borderColor: '#009FE3',
                          }}
                        >
                          <FaPaperPlane className="me-2" />{' '}
                          {isSubmitting
                            ? 'Enviando...'
                            : 'Enviar Solicitação para Análise'}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}