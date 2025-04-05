import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section style={{ padding: '3rem 0', background: 'rgba(63, 163, 220, 1)' }}>
      <div className="container">
        <footer>
          <ul className="nav justify-content-center border-bottom">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li className="nav-item"><Link to="/servicos" className="nav-link px-2 text-white">Serviços</Link></li>
            <li className="nav-item"><Link to="/projetos" className="nav-link px-2 text-white">Projetos</Link></li>
            <li className="nav-item"><Link to="/pesquisas" className="nav-link px-2 text-white">Pesquisas</Link></li>
            <li className="nav-item"><Link to="/contato" className="nav-link px-2 text-white">Contato</Link></li>
          </ul>
          <p className="text-center text-white">© 2019
            <a href="https://www.leful.com.br" className="text-center text-white" style={{ textDecoration: 'none' }}>
              LeFul Design House</a>
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Footer;