import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/global.css';
import App from './App';
import { AuthProvider } from './auth/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>
);

