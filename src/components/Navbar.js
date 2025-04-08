import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function Navbar() {
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgba(51, 51, 51, 1)' }}>
      <div className="container-fluid container">
        <Link className="navbar-brand" style={{ color: '#FFFFFF' }} to="/">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Fandroid-chrome-512x512.png?alt=media&token=e685157b-f9af-48f3-b516-23f0ce239d2f"
            alt="Identidade visual da LeFul Design House" 
            width="50" 
            height="50" 
            className="d-inline-block align-text-center me-3" 
            title="Identidade Visual da LeFul Design House"
          />
          <strong className="me-md-3 text-center" title="Bem Vindo! Somos a LeFul Design House">LeFul Design House</strong>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mt-3 mb-2 mb-lg-3">
            <li className="nav-item">
              <Link className="nav-link active me-2" style={{ color: '#FFFFFF' }} to="/servicos" title="Acesse para conhecer nossos Serviços">Serviços</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active me-2" style={{ color: '#FFFFFF' }} to="/projetos" title="Confira os principais projetos desenvolvidos">Projetos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active me-2" style={{ color: '#FFFFFF' }} to="/sobre" title="Conheça mais sobre nossa história e equipe">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active me-2" style={{ color: '#FFFFFF' }} to="/academy" title="Saiba quais pesquisas estamos desenvolvendo">Academy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" style={{ color: '#FFFFFF' }} to="/contato" title="Entre em contato para criarmos algo juntos!">Contato</Link>
            </li>
          </ul>

          <ul className="d-flex navbar-nav">
            {user ? (
              <>
                <li className="nav-item">
                  <Link 
                    className="nav-link active me-2" 
                    style={{ color: '#FFFFFF' }} 
                    to="/perfil"
                    title="Acesse seu perfil"
                  >
                    Meu Perfil
                  </Link>
                </li>
                {user.email === 'superadmin@example.com' && (
                  <li className="nav-item">
                    <Link 
                      className="nav-link active me-2" 
                      style={{ color: '#FFFFFF' }} 
                      to="/admin"
                      title="Área administrativa"
                    >
                      Admin
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <button 
                    className="nav-link active" 
                    style={{ color: '#FFFFFF', background: 'none', border: 'none' }} 
                    onClick={handleLogout}
                    title="Sair da conta"
                  >
                    Sair
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link 
                  className="nav-link active" 
                  style={{ color: '#FFFFFF' }} 
                  to="/login" 
                  title="Acessar minha conta"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;