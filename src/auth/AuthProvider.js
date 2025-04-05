// src/auth/AuthProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

// Cria o contexto de autenticação
const AuthContext = createContext({
  currentUser: null,
  loading: true,
  setCurrentUser: () => {}
});

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("[AuthProvider] Iniciando observador de autenticação...");
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("[AuthProvider] Estado de autenticação alterado:", user);
      
      // Atualiza o usuário atual e finaliza o loading
      setCurrentUser(user);
      setLoading(false);
      
      if (user) {
        console.log(`[AuthProvider] Usuário autenticado: ${user.email} (UID: ${user.uid})`);
      } else {
        console.log("[AuthProvider] Nenhum usuário autenticado");
      }
    });

    // Função de limpeza para desinscrever o observador
    return () => {
      console.log("[AuthProvider] Removendo observador de autenticação");
      unsubscribe();
    };
  }, []);

  // Valor do contexto que será fornecido aos componentes
  const value = {
    currentUser,
    loading,
    setCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
}

// Hook personalizado para acesso ao contexto de autenticação
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  
  return context;
}