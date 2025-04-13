import React, { useState } from 'react';
import { 
  FaUniversalAccess, 
  FaGlobe, 
  FaPalette, 
  FaMobileAlt, 
  FaCalendarAlt, 
  FaClock, 
  FaUser,
  FaSearch,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import '../Styles/Agendamento.css';

export default function Agendamento() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [errors, setErrors] = useState({});
  
  // Estados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    comoConheceu: '',
    tipoConsulta: '',
    outroTipo: '',
    descricaoProjeto: '',
    data: '',
    horario: ''
  });

  // Opções para o dropdown
  const comoConheceuOptions = [
    'Google/Busca Online',
    'Indicação',
    'Redes Sociais',
    'Evento/Workshop',
    'Outro'
  ];

  // Tipos de consultoria
  const tiposConsultoria = [
    {
      id: 'acessibilidade',
      titulo: 'Acessibilidade Digital',
      tempo: '45 min',
      icone: <FaUniversalAccess size={24} />,
      descricao: 'Auditoria e estratégias para tornar seu produto digital acessível a todos'
    },
    {
      id: 'website',
      titulo: 'Website e Plataformas Digitais',
      tempo: '45 min',
      icone: <FaGlobe size={24} />,
      descricao: 'Otimização de UX/UI para sites, apps e plataformas digitais'
    },
    {
      id: 'branding',
      titulo: 'Branding e Identidade Visual',
      tempo: '30 min',
      icone: <FaPalette size={24} />,
      descricao: 'Desenvolvimento ou refinamento da identidade visual da sua marca'
    },
    {
      id: 'produto',
      titulo: 'Design de Produto Digital',
      tempo: '30 min',
      icone: <FaMobileAlt size={24} />,
      descricao: 'Design estratégico para produtos digitais inovadores'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setErrors(prev => ({ ...prev, recaptcha: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido';
    }
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
    if (!formData.tipoConsulta) newErrors.tipoConsulta = 'Selecione um tipo de consultoria';
    if (!formData.descricaoProjeto.trim()) newErrors.descricaoProjeto = 'Descrição do projeto é obrigatória';
    if (!formData.data) newErrors.data = 'Data é obrigatória';
    if (!formData.horario) newErrors.horario = 'Horário é obrigatório';
    if (!recaptchaToken) newErrors.recaptcha = 'Por favor, confirme que você não é um robô';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        'https://us-central1-lefulsite-aaafc.cloudfunctions.net/sendAgendamento',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            recaptchaToken
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar agendamento');
      }

      setSubmitSuccess(true);
      setTimeout(() => {
        navigate('/agendamento-confirmado', { 
          state: { 
            agendamento: formData 
          } 
        });
      }, 2000);
    } catch (error) {
      console.error('Erro:', error);
      setErrors({ 
        submit: error.message || 'Erro ao enviar agendamento. Tente novamente mais tarde.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Componente Seção Hero
  const HeroSection = () => {
    return (
      <section className="agendamento-hero-section">
        <div className="container">
          <div className="agendamento-hero-content">
            <h1 className="display-5">Agende sua consultoria gratuita</h1>
            <p className="lead">Converse com nossos especialistas e descubra como podemos transformar seu projeto</p>
          </div>
        </div>
      </section>
    );
  };

  // Componente Formulário
  const FormularioAgendamento = () => {
    if (submitSuccess) {
      return (
        <section className="agendamento-form-section section">
          <div className="container">
            <div className="form-container text-center py-5">
              <FaCheckCircle size={48} className="text-success mb-3" />
              <h2>Agendamento enviado com sucesso!</h2>
              <p className="lead">Você será redirecionado em instantes...</p>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="agendamento-form-section section">
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              {errors.submit && (
                <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                  <FaExclamationTriangle className="me-2" />
                  <div>{errors.submit}</div>
                </div>
              )}

              {/* Seção 1: Informações Pessoais */}
              <div className="form-section">
                <h2 className="section-title">
                  <FaUser className="icon" /> Suas informações
                </h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="nome">Nome completo*</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className={errors.nome ? 'is-invalid' : ''}
                      aria-invalid={!!errors.nome}
                      aria-describedby="nomeError"
                    />
                    {errors.nome && <div id="nomeError" className="invalid-feedback">{errors.nome}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">E-mail*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'is-invalid' : ''}
                      aria-invalid={!!errors.email}
                      aria-describedby="emailError"
                    />
                    {errors.email && <div id="emailError" className="invalid-feedback">{errors.email}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone*</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className={errors.telefone ? 'is-invalid' : ''}
                      aria-invalid={!!errors.telefone}
                      aria-describedby="telefoneError"
                    />
                    {errors.telefone && <div id="telefoneError" className="invalid-feedback">{errors.telefone}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="comoConheceu">Como nos conheceu?</label>
                    <select
                      id="comoConheceu"
                      name="comoConheceu"
                      value={formData.comoConheceu}
                      onChange={handleChange}
                    >
                      <option value="">Selecione...</option>
                      {comoConheceuOptions.map((opcao, index) => (
                        <option key={index} value={opcao}>{opcao}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Seção 2: Tipo de Consultoria */}
              <div className="form-section">
                <h2 className="section-title">
                  <FaClock className="icon" /> Tipo de consultoria
                </h2>
                <p className="section-description">Selecione o tipo de consultoria que melhor atende sua necessidade</p>
                
                {errors.tipoConsulta && (
                  <div className="alert alert-warning mb-3">{errors.tipoConsulta}</div>
                )}
                
                <div className="consultoria-grid">
                  {tiposConsultoria.map((tipo) => (
                    <div 
                      key={tipo.id}
                      className={`consultoria-card ${formData.tipoConsulta === tipo.id ? 'selected' : ''}`}
                      onClick={() => {
                        setFormData(prev => ({...prev, tipoConsulta: tipo.id}));
                        setErrors(prev => ({ ...prev, tipoConsulta: '' }));
                      }}
                    >
                      <div className="consultoria-icon">{tipo.icone}</div>
                      <h3>{tipo.titulo}</h3>
                      <span className="tempo">{tipo.tempo}</span>
                      <p>{tipo.descricao}</p>
                    </div>
                  ))}
                </div>
                
                {formData.tipoConsulta === 'outro' && (
                  <div className="form-group outro-group">
                    <label htmlFor="outroTipo">Especifique o tipo de consultoria</label>
                    <input
                      type="text"
                      id="outroTipo"
                      name="outroTipo"
                      value={formData.outroTipo}
                      onChange={handleChange}
                    />
                  </div>
                )}
                
                <div className="outro-option">
                  <input
                    type="radio"
                    id="outro"
                    name="tipoConsulta"
                    checked={formData.tipoConsulta === 'outro'}
                    onChange={() => setFormData(prev => ({...prev, tipoConsulta: 'outro'}))}
                  />
                  <label htmlFor="outro">Outro (especifique)</label>
                </div>
              </div>
              
              {/* Seção 3: Descrição do Projeto */}
              <div className="form-section">
                <h2 className="section-title">Sobre seu projeto</h2>
                <p className="section-description">Conte-nos sobre sua demanda para prepararmos a consultoria</p>
                
                <div className="form-group">
                  <label htmlFor="descricaoProjeto">Descreva seu projeto*</label>
                  <textarea
                    id="descricaoProjeto"
                    name="descricaoProjeto"
                    value={formData.descricaoProjeto}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleChange(e);
                    }}
                    className={errors.descricaoProjeto ? 'is-invalid' : ''}
                    aria-invalid={!!errors.descricaoProjeto}
                    aria-describedby="descricaoError"
                    rows="6"
                    placeholder="Ex: Estamos desenvolvendo um novo app para saúde e precisamos de orientação sobre acessibilidade e experiência do usuário..."
                    required
                    style={{ overflow: 'hidden' }}
                  />
                  {errors.descricaoProjeto && (
                    <div id="descricaoError" className="invalid-feedback">{errors.descricaoProjeto}</div>
                  )}
                </div>
                
                <div className="dicas-box">
                  <h4>Dicas para sua descrição:</h4>
                  <ul>
                    <li>Qual é o principal desafio que você enfrenta?</li>
                    <li>Você já tem alguma referência visual?</li>
                    <li>Existe algum prazo importante para este projeto?</li>
                    <li>Público-alvo e objetivos principais</li>
                  </ul>
                </div>
              </div>
              
              {/* Seção 4: Agendamento */}
              <div className="form-section">
                <h2 className="section-title">
                  <FaCalendarAlt className="icon" /> Agendamento
                </h2>
                
                <div className="agendamento-grid">
                  <div className="form-group">
                    <label htmlFor="data">Data*</label>
                    <input
                      type="date"
                      id="data"
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      className={errors.data ? 'is-invalid' : ''}
                      aria-invalid={!!errors.data}
                      aria-describedby="dataError"
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.data && <div id="dataError" className="invalid-feedback">{errors.data}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="horario">Horário*</label>
                    <select
                      id="horario"
                      name="horario"
                      value={formData.horario}
                      onChange={handleChange}
                      className={errors.horario ? 'is-invalid' : ''}
                      aria-invalid={!!errors.horario}
                      aria-describedby="horarioError"
                      required
                    >
                      <option value="">Selecione um horário</option>
                      <option value="09:00">09:00 - 09:30</option>
                      <option value="10:00">10:00 - 10:30</option>
                      <option value="11:00">11:00 - 11:30</option>
                      <option value="14:00">14:00 - 14:30</option>
                      <option value="15:00">15:00 - 15:30</option>
                      <option value="16:00">16:00 - 16:30</option>
                    </select>
                    {errors.horario && <div id="horarioError" className="invalid-feedback">{errors.horario}</div>}
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <ReCAPTCHA
                  sitekey="6LexmBMrAAAAAEHVY99FDI7nfU7b3iMzr3kBZGwz"
                  onChange={handleRecaptchaChange}
                />
                {errors.recaptcha && (
                  <div className="text-danger small mt-2">{errors.recaptcha}</div>
                )}
              </div>
              
              <div className="form-submit">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Confirmar Agendamento'}
                </button>
                <p className="disclaimer">
                  Ao agendar, você receberá um e-mail de confirmação com o link da reunião.
                  <br />
                  Caso precise reagendar, você pode fazer isso diretamente pelo e-mail.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };

  // Componente OQueEsperar
  const OQueEsperar = () => {
    return (
      <section className="expect-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>O que esperar da consultoria</h2>
            <p className="lead">Sessões produtivas para alinhar suas necessidades com nossas soluções</p>
          </div>
          
          <div className="expect-grid">
            <div className="expect-card">
              <div className="expect-icon">
                <FaSearch size={32} />
              </div>
              <h3>Análise inicial</h3>
              <p>Entendemos profundamente suas necessidades e desafios específicos</p>
            </div>
            
            <div className="expect-card">
              <div className="expect-icon">
                <FaLightbulb size={32} />
              </div>
              <h3>Soluções estratégicas</h3>
              <p>Discutimos possíveis abordagens e soluções para seu projeto</p>
            </div>
            
            <div className="expect-card">
              <div className="expect-icon">
                <FaChartLine size={32} />
              </div>
              <h3>Próximos passos</h3>
              <p>Recomendações claras sobre como avançar com seu projeto</p>
            </div>
            
            <div className="expect-card">
              <div className="expect-icon">
                <FaHandshake size={32} />
              </div>
              <h3>Sem compromisso</h3>
              <p>Nossa prioridade é ajudar você a encontrar o melhor caminho</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="agendamento-page">
      <HeroSection />
      <FormularioAgendamento />
      {!submitSuccess && <OQueEsperar />}
    </main>
  );
}