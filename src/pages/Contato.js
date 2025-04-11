import { useState, useEffect } from 'react'; 
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaComment,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

function Contato() {
  const [formData, setFormData] = useState({
    contactname: '',
    email: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState('');

  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };
  
    loadRecaptcha();
  
    return () => {
      const script = document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpa erro quando o usuário digita
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setRecaptchaError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setRecaptchaError('');
    
    // Validação do formulário
    const newErrors = {};
    if (!formData.contactname.trim()) newErrors.contactname = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido';
    }
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória';
    if (!recaptchaToken) {
      setRecaptchaError('Por favor, confirme que você não é um robô');
    }
    
    if (Object.keys(newErrors).length > 0 || !recaptchaToken) {
      setErrors(newErrors);
      setIsSubmitting(false);
      // Foca no primeiro campo com erro
      const firstError = Object.keys(newErrors)[0];
      if (firstError) {
        document.querySelector(`[name="${firstError}"]`).focus();
      }
      return;
    }
    
    try {
      const response = await fetch(
        'https://us-central1-lefulsite-aaafc.cloudfunctions.net/sendContactEmail',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: formData.contactname,
            email: formData.email,
            mensagem: formData.mensagem,
            recaptchaToken
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem');
      }

      setSubmitSuccess(true);
      setFormData({ contactname: '', email: '', mensagem: '' });
      setRecaptchaToken(null);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error('Erro:', error);
      setErrors({ 
        submit: error.message || 'Erro ao enviar mensagem. Tente novamente mais tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section py-5 bg-light" aria-labelledby="contact-heading">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h1 id="contact-heading" className="display-5 fw-bold mb-3 text-dark">
                Vamos construir algo <span className="text-primary">incrível juntos!</span>
              </h1>
              <p className="lead text-muted">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível
              </p>
            </div>

            <div className="card border-0 shadow-lg rounded-3 overflow-hidden">
              <div className="row g-0">
                <div className="col-md-5 bg-primary text-white p-5 d-flex align-items-center">
                  <div>
                    <h2 className="h4 mb-4">Informações de Contato</h2>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <FaEnvelope className="me-2" />
                        leful.contato@gmail.com
                      </li>
                      <li className="mb-3">
                        <FaPhone className="me-2" />
                        (11) 91851-2332
                      </li>
                      <li className="mb-3">
                        <FaMapMarkerAlt className="me-2" />
                        São Paulo, SP
                      </li>
                    </ul>
                    <div className="mt-4 text-start">
                      <h3 className="h5 mb-3">Nos siga nas redes sociais</h3>
                      <div className="d-flex gap-3">
                        <a href="http://linkedin.com/company/leful-designhouse" className="text-white" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin size={20} />
                        </a>
                        <a href="https://www.instagram.com/leful.designhouse/" className="text-white" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                          <FaInstagram size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-7 bg-white p-5">
                  {submitSuccess ? (
                    <div className="text-center py-4">
                      <FaCheckCircle size={48} className="text-success mb-3" />
                      <h2 className="h4 mb-3">Mensagem enviada com sucesso!</h2>
                      <p className="text-muted">
                        Obrigado pelo seu contato. Retornaremos em breve.
                      </p>
                      <button 
                        className="btn btn-outline-primary mt-3"
                        onClick={() => setSubmitSuccess(false)}
                      >
                        Enviar nova mensagem
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      {errors.submit && (
                        <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                          <FaExclamationTriangle className="me-2" />
                          <div>{errors.submit}</div>
                        </div>
                      )}

                      <div className="mb-4 text-start">
                        <label htmlFor="contactname" className="form-label fw-semibold">
                          <FaUser className="me-2 text-primary" />
                          Nome completo
                        </label>
                        <input
                          type="text"
                          id="contactname"
                          name="contactname"
                          className={`form-control form-control-lg ${errors.contactname ? 'is-invalid' : ''}`}
                          placeholder="Seu nome"
                          value={formData.contactname}
                          onChange={handleChange}
                          aria-describedby="nameError"
                          aria-invalid={!!errors.contactname}
                          maxLength="100"
                        />
                        {errors.contactname && (
                          <div id="nameError" className="invalid-feedback">
                            {errors.contactname}
                          </div>
                        )}
                      </div>

                      <div className="mb-4 text-start">
                        <label htmlFor="email" className="form-label fw-semibold">
                          <FaEnvelope className="me-2 text-primary" />
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          aria-describedby="emailError"
                          aria-invalid={!!errors.email}
                          maxLength="100"
                        />
                        {errors.email && (
                          <div id="emailError" className="invalid-feedback">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      <div className="mb-4 text-start">
                        <label htmlFor="mensagem" className="form-label fw-semibold">
                          <FaComment className="me-2 text-primary" />
                          Sua mensagem
                        </label>
                        <textarea
                          id="mensagem"
                          name="mensagem"
                          rows="5"
                          className={`form-control form-control-lg ${errors.mensagem ? 'is-invalid' : ''}`}
                          placeholder="Como podemos ajudar?"
                          value={formData.mensagem}
                          onChange={handleChange}
                          aria-describedby="messageError"
                          aria-invalid={!!errors.mensagem}
                          maxLength="1000"
                        ></textarea>
                        {errors.mensagem && (
                          <div id="messageError" className="invalid-feedback">
                            {errors.mensagem}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <ReCAPTCHA
                          sitekey="6LexmBMrAAAAAEHVY99FDI7nfU7b3iMzr3kBZGwz"
                          onChange={handleRecaptchaChange}
                        />
                        {recaptchaError && (
                          <div className="text-danger small mt-2">{recaptchaError}</div>
                        )}
                      </div>

                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <FaPaperPlane className="me-2" />
                              Enviar mensagem
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;