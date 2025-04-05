// src/routes.js
import { lazy } from 'react';
import PrivateRoute from './auth/PrivateRoute';

const Home = lazy(() => import('./pages/Home'));
const Perfil = lazy(() => import('./pages/Perfil'));
const Login = lazy(() => import('./pages/Login'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { 
    path: '/perfil', 
    element: <PrivateRoute><Perfil /></PrivateRoute> 
  },
  // outras rotas
];