import { useState } from 'react'; 
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaComment,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaCheckCircle
} from 'react-icons/fa';

function Contato() {
  const [formData, setFormData] = useState({
    contactname: '',
    email: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    const newErrors = {};
    if (!formData.contactname.trim()) newErrors.contactname = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido';
    }
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      // Focus on first error field
      const firstError = Object.keys(newErrors)[0];
      document.querySelector(`[name="${firstError}"]`).focus();
      return;
    }
    
    try {
      const response = await fetch(
        'https://us-central1-SEU-PROJETO-ID.cloudfunctions.net/sendContactEmail',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: formData.contactname,
            email: formData.email,
            mensagem: formData.mensagem
          })
        }
      );
  
      if (!response.ok) {
        throw new Error(await response.text());
      }
  
      setSubmitSuccess(true);
      setFormData({ contactname: '', email: '', mensagem: '' });
    } catch (error) {
      console.error('Erro:', error);
      setErrors({ submit: 'Erro ao enviar mensagem. Tente novamente.' });
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
              <h1 id="contact-heading" className="display-5 fw-bold mb-3">
                Vamos criar algo <span className="text-primary">juntos!</span>
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
                    <div className="mt-4">
                      <h3 className="h5 mb-3">Nos siga nas redes sociais</h3>
                      <div className="d-flex gap-3">
                        <a href="http://linkedin.com/company/leful-designhouse" className="text-white" aria-label="LinkedIn">
                          <FaLinkedin size={20} />
                        </a>
                        <a href="https://www.instagram.com/leful.designhouse/" className="text-white" aria-label="Instagram">
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
                      <div className="mb-4">
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
                        />
                        {errors.contactname && (
                          <div id="nameError" className="invalid-feedback">
                            {errors.contactname}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
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
                        />
                        {errors.email && (
                          <div id="emailError" className="invalid-feedback">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
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
                        ></textarea>
                        {errors.mensagem && (
                          <div id="messageError" className="invalid-feedback">
                            {errors.mensagem}
                          </div>
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