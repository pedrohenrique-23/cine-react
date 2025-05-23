// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // User será o estado que armazena a informação de login

  const login = (userData) => {
    setUser(userData);  // Simula o login, salvando os dados do usuário
  };

  const logout = () => {
    setUser(null);  // Limpa o estado do usuário, simulando logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);  // Hook para acessar o estado de autenticação em qualquer página
