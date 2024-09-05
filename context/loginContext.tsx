'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean | undefined;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  userMail: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
  const [userMail, setUserMail] = useState<string>('');

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedMail = localStorage.getItem('userMail');

    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }

    if (storedMail) {
      setUserMail(storedMail);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === 'prueba@prueba.com' && password === '123456#') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      localStorage.setItem('userMail', email);
      setUserMail(email);
      console.log('login', email);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserMail('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userMail');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userMail }}>
      {children}
    </AuthContext.Provider>
  );
};
