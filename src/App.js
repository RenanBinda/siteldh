import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import Servicos from './pages/Servicos';
import ExperienciasDigitais from './pages/Servicos/ExperienciasDigitais';
import DesignTransformador from './pages/Servicos/DesignTransformador';
import BrandingPage from './pages/Servicos/BrandingPage';
import TreinamentosPage from './pages/Servicos/TreinamentosPage';
import DesignCentradoHumano from './pages/Servicos/DesignCentradoHumano';
import GestaoConhecimentoPage from './pages/Servicos/GestaoConhecimentoPage';
import EducacaoDesignPage from './pages/Servicos/EducacaoDesignPage';

import Projetos from './pages/Projetos';
import CaseFotografiaEmpodera from './pages/Projetos/CaseFotografiaEmpodera';
import CasePlaceBe from './pages/Projetos/CasePlaceBe';

import Sobre from './pages/Sobre';
import Academy from './pages/Academy';
import Contato from './pages/Contato';
import Agendamento from './pages/Agendamento';
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
            <Route path="/CaseFotografiaEmpodera" element={<CaseFotografiaEmpodera />} />
            <Route path="/CasePlaceBe" element={<CasePlaceBe />} />

            <Route path="/sobre" element={<Sobre />} />
            <Route path="/ExperienciasDigitais" element={<ExperienciasDigitais />} />
            <Route path="/DesignTransformador" element={<DesignTransformador />} />
            <Route path="/BrandingPage" element={<BrandingPage />} />
            <Route path="/TreinamentosPage" element={<TreinamentosPage />} />
            <Route path="/DesignCentradoHumano" element={<DesignCentradoHumano />} />
            <Route path="/GestaoConhecimentoPage" element={<GestaoConhecimentoPage />} />
            <Route path="/EducacaoDesignPage" element={<EducacaoDesignPage />} />
            
            <Route path="/academy" element={<Academy />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/Agendamento" element={<Agendamento />} />
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