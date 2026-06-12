// src/routes.js
import { lazy } from 'react';
import PrivateRoute from './auth/PrivateRoute';
import Unidade1Curso from './pages/Academy/curso-acessibilidade/Unidade1Curso';
import CursoGC from './pages/Academy/curso-gc';

const Home = lazy(() => import('./pages/Home'));
const Servicos = lazy(() => import('./pages/Servicos'));
const Projetos = lazy(() => import('./pages/Projetos'));
const CaseFotografiaEmpodera = lazy(() => import('./pages/Projetos/CaseFotografiaEmpodera'));
const CasePlaceBe = lazy(() => import('./pages/Projetos/CasePlaceBe'));
const CaseLivro = lazy(() => import('./pages/Projetos/CaseLivro'));

const Sobre = lazy(() => import('./pages/Sobre'));
const ExperienciasDigitais = lazy(() => import('./pages/Sobre/ExperienciasDigitais'));
const DesignTransformador = lazy(() => import('./pages/Sobre/DesignTransformador'));
const BrandingPage = lazy(() => import('./pages/Sobre/BrandingPage'));
const TreinamentosPage = lazy(() => import('./pages/Sobre/TreinamentosPage'));
const DesignCentradoHumano = lazy(() => import('./pages/Sobre/DesignCentradoHumano'));
const GestaoConhecimentoPage = lazy(() => import('./pages/Sobre/GestaoConhecimentoPage'));
const EducacaoDesignPage = lazy(() => import('./pages/Sobre/EducacaoDesignPage'));

const Academy = lazy(() => import('./pages/Academy'));
const CursoGC = lazy(() => import('./pages/Academy/CursoGC'));
const Modulo1GC = lazy(() => import('./pages/Academy/curso-gc/Modulo1GC'));
const Modulo2GC = lazy(() => import('./pages/Academy/curso-gc/Modulo2GC'));
const Modulo3GC = lazy(() => import('./pages/Academy/curso-gc/Modulo3GC'));
const Modulo4GC = lazy(() => import('./pages/Academy/curso-gc/Modulo4GC'));
const Modulo5GC = lazy(() => import('./pages/Academy/curso-gc/Modulo5GC'));
const InscricaoGC = lazy(() => import('./pages/Academy/curso-gc/InscricaoGC'));

const CursoAcessibilidade = lazy(() => import('./pages/Academy/CursoAcessibilidade'));
const Unidade1Curso = lazy(() => import('./pages/Academy/curso-acessibilidade/Unidade1Curso'));
const Unidade2Curso = lazy(() => import('./pages/Academy/curso-acessibilidade/Unidade2Curso'));

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
  { path: '/CaseLivro', element: <CaseLivro /> },

  { path: '/sobre', element: <Sobre /> },
  { path: '/ExperienciasDigitais', element: <ExperienciasDigitais /> },
  { path: '/DesignTransformador', element: <DesignTransformador /> },
  { path: '/BrandingPage', element: <BrandingPage /> },
  { path: '/TreinamentosPage', element: <TreinamentosPage /> },
  { path: '/DesignCentradoHumano', element: <DesignCentradoHumano /> },
  { path: '/GestaoConhecimentoPage', element: <GestaoConhecimentoPage /> },
  { path: '/EducacaoDesignPage', element: <EducacaoDesignPage /> },

  { path: '/academy', element: <Academy /> },
  { path: '/cursogc', element: <CursoGC /> },
  { path: '/modulo1gc', element: <Modulo1GC /> },
  { path: '/modulo2gc', element: <Modulo2GC /> },
  { path: '/modulo3gc', element: <Modulo3GC /> },
  { path: '/modulo4gc', element: <Modulo4GC /> },
  { path: '/modulo5gc', element: <Modulo5GC /> },
  { path: '/InscricaoGC', element: <InscricaoGC /> },

  { path: '/cursoacessibilidade', element: <CursoAcessibilidade />},
  { path: '/unidade1curso', element: <Unidade1Curso />},
  { path: '/unidade2curso', element: <Unidade2Curso />},

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