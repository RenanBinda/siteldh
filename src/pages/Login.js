import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redireciona para a página inicial após login
    } catch (err) {
      setError('Email ou senha incorretos');
      console.error('Erro no login:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="body mb-5">
      <div className="container pt-5">
        <div className="row justify-content-md-center">
          <div className="col col-md-6">
            <h1 className="display-6 text-center text-md-start pb-3">
              Faça <span className="text-primary">login</span> para acessar
            </h1>
            <form onSubmit={handleSubmit} className="border p-5 shadow-sm">
              <legend className="lead text-muted">
                Área restrita, para acessar insira seus dados de login e senha ou faça uma requisição.
              </legend>
              
              {error && <div className="alert alert-danger">{error}</div>}

              <fieldset>
                {/* Email */}
                <div className="form-group">
                  <label className="form-control-label mt-2">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="digite o email cadastrado"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Senha */}
                <div className="form-group">
                  <label className="form-control-label mt-2">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Lembrar dados */}
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    id="rememberMe"
                  />
                  <label className="form-check-label mt-2" htmlFor="rememberMe">
                    Lembrar dados de acesso
                  </label>
                </div>
              </fieldset>

              <div className="d-grid gap-3 d-md-flex justify-content-md-start">
                <button 
                  type="submit" 
                  className="btn btn-primary mt-4"
                  disabled={loading}
                >
                  {loading ? 'Carregando...' : 'Entrar'}
                </button>
              </div>

              <div className="mt-3 text-center">
                <p>Não tem uma conta? <Link to="/cadastrar-perfil">Cadastre-se</Link></p>
                <p><Link to="/recuperar-senha">Esqueci minha senha</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;