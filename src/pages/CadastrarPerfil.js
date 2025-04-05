import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

function CadastrarPerfil() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    senha: '',
    confirma: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Nome de usuário é obrigatório';
    if (!formData.email) newErrors.email = 'Email é obrigatório';
    if (!formData.senha) newErrors.senha = 'Senha é obrigatória';
    if (formData.senha !== formData.confirma) newErrors.confirma = 'As senhas não coincidem';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.senha);
      await updateProfile(userCredential.user, {
        displayName: formData.username
      });
      setSuccess(true);
      setFormData({ username: '', email: '', senha: '', confirma: '' });
    } catch (error) {
      console.error('Registration error:', error);
      if (error.code === 'auth/email-already-in-use') {
        setErrors({ email: 'Este email já está em uso' });
      } else {
        setErrors({ general: 'Ocorreu um erro ao cadastrar. Tente novamente.' });
      }
    }
  };

  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit} className="border p-4 m-4 mt-4">
            <legend>Cadastrar</legend>
            {success && <div className="alert alert-success">Cadastro realizado com sucesso!</div>}
            {errors.general && <div className="alert alert-danger">{errors.general}</div>}
            <fieldset>
              <div className="form-group">
                <label className="form-control-label mt-2">Nome de usuário</label>
                <input
                  type="text"
                  name="username"
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  placeholder="insira seu nome"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
              </div>
              <div className="form-group">
                <label className="form-control-label mt-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="insira seu email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label className="form-control-label mt-2">Senha</label>
                <input
                  type="password"
                  name="senha"
                  className={`form-control ${errors.senha ? 'is-invalid' : ''}`}
                  placeholder="digite sua senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
                {errors.senha && <div className="invalid-feedback">{errors.senha}</div>}
              </div>
              <div className="form-group">
                <label className="form-control-label mt-2">Confirme a senha</label>
                <input
                  type="password"
                  name="confirma"
                  className={`form-control ${errors.confirma ? 'is-invalid' : ''}`}
                  placeholder="digite novamente sua senha"
                  value={formData.confirma}
                  onChange={handleChange}
                />
                {errors.confirma && <div className="invalid-feedback">{errors.confirma}</div>}
              </div>
            </fieldset>
            <button type="submit" className="btn btn-primary mt-3">Cadastrar</button>
            <div className="mt-3">
              <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastrarPerfil;