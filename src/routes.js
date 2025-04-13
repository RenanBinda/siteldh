// src/routes.js
import { lazy } from 'react';
import PrivateRoute from './auth/PrivateRoute';

const Home = lazy(() => import('./pages/Home'));
const Servicos = lazy(() => import('./pages/Servicos'));
const Projetos = lazy(() => import('./pages/Projetos'));
const CaseFotografiaEmpodera = lazy(() => import('./pages/Projetos/CaseFotografiaEmpodera'));
const CasePlaceBe = lazy(() => import('./pages/Projetos/CasePlaceBe'));

const Sobre = lazy(() => import('./pages/Sobre'));
const ExperienciasDigitais = lazy(() => import('./pages/Sobre/ExperienciasDigitais'));
const DesignTransformador = lazy(() => import('./pages/Sobre/DesignTransformador'));
const BrandingPage = lazy(() => import('./pages/Sobre/BrandingPage'));
const TreinamentosPage = lazy(() => import('./pages/Sobre/TreinamentosPage'));
const DesignCentradoHumano = lazy(() => import('./pages/Sobre/DesignCentradoHumano'));
const GestaoConhecimentoPage = lazy(() => import('./pages/Sobre/GestaoConhecimentoPage'));
const EducacaoDesignPage = lazy(() => import('./pages/Sobre/EducacaoDesignPage'));

const Academy = lazy(() => import('./pages/Academy'));
const Login = lazy(() => import('./pages/Login'));
const Perfil = lazy(() => import('./pages/Perfil'));
const Manifesto = lazy(() => import('./pages/Manifesto'));
const Politica = lazy(() => import('./pages/Politica'));
const CadastrarPerfil = lazy(() => import('./pages/CadastrarPerfil'));
const Contato = lazy(() => import('./pages/Contato'));
const Agendamento = lazy(() => import('./pages/Agendamento'));





export const routes = [
  { path: '/', element: <Home /> },
  { path: '/servicos', element: <Servicos /> },
  { path: '/projetos', element: <Projetos /> },
  { path: '/CaseFotografiaEmpodera', element: <CaseFotografiaEmpodera /> },
  { path: '/CasePlaceBe', element: <CasePlaceBe /> },

  { path: '/sobre', element: <Sobre /> },
  { path: '/ExperienciasDigitais', element: <ExperienciasDigitais /> },
  { path: '/DesignTransformador', element: <DesignTransformador /> },
  { path: '/BrandingPage', element: <BrandingPage /> },
  { path: '/TreinamentosPage', element: <TreinamentosPage /> },
  { path: '/DesignCentradoHumano', element: <DesignCentradoHumano /> },
  { path: '/GestaoConhecimentoPage', element: <GestaoConhecimentoPage /> },
  { path: '/EducacaoDesignPage', element: <EducacaoDesignPage /> },

  { path: '/academy', element: <Academy /> },
  { path: '/login', element: <Login /> },
  { path: '/Manifesto', element: <Manifesto /> },
  { path: '/Politica', element: <Politica /> },
  { path: '/cadastrarperfil', element: <CadastrarPerfil /> },
  { 
    path: '/perfil', 
    element: <PrivateRoute><Perfil /></PrivateRoute> 
  },
  // outras rotas
  { path: '/contato', element: <Contato /> },
  { path: '/agendamento', element: <Agendamento /> },
];