// src/routes.js
import { lazy } from 'react';
import PrivateRoute from './auth/PrivateRoute';

const Home = lazy(() => import('./pages/Home'));
const Servicos = lazy(() => import('./pages/Servicos'));
const Projetos = lazy(() => import('./pages/Projetos'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Pesquisas = lazy(() => import('./pages/Pesquisas'));
const Login = lazy(() => import('./pages/Login'));
const Perfil = lazy(() => import('./pages/Perfil'));
const Manifesto = lazy(() => import('./pages/Manifesto'));
const Politica = lazy(() => import('./pages/Politica'));
const CadastrarPerfil = lazy(() => import('./pages/CadastrarPerfil'));





export const routes = [
  { path: '/', element: <Home /> },
  { path: '/servicos', element: <Servicos /> },
  { path: '/projetos', element: <Projetos /> },
  { path: '/sobre', element: <Sobre /> },
  { path: '/pesquisas', element: <Pesquisas /> },
  { path: '/login', element: <Login /> },
  { path: '/Manifesto', element: <Manifesto /> },
  { path: '/Politica', element: <Politica /> },
  { path: '/cadastrarperfil', element: <CadastrarPerfil /> },
  { 
    path: '/perfil', 
    element: <PrivateRoute><Perfil /></PrivateRoute> 
  },
  // outras rotas
];