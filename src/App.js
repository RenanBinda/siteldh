import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Pesquisas from './pages/Pesquisas';
import Contato from './pages/Contato';
import Manifesto from './pages/Manifesto';
import Politica from './pages/Politica';
import Login from './pages/Login';
import { AuthProvider } from './auth/AuthProvider';
import PrivateRoute from './auth/PrivateRoute';
import Perfil from './pages/Perfil';
import CadastrarPerfil from './pages/CadastrarPerfil';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ overflowX: 'hidden' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/pesquisas" element={<Pesquisas />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/politica" element={<Politica />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={
              <PrivateRoute>
                <Perfil />
              </PrivateRoute>
            } 
            />
            <Route path="/cadastrar-perfil" element={<CadastrarPerfil />} />
            <Route path="*" element={<Navigate to="/" replace />}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;