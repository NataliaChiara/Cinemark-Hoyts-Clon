'use client'

import { useState } from 'react';
import { useAuth } from '@/context/loginContext';
import s from './LoginComponent.module.css';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated, logout } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) {
      setError('Credenciales inválidas');
    } else {
      setError('');
    }
  };

  const handleLogout = () => {
    logout()
  }

  return (
    <div className={s.container}>
      {isAuthenticated ? (
        <button onClick={handleLogout}>salir de la sesion</button>
      ) : (
        <>
          <div className={s.container__login}>
            <h2>INGRESÁ TU CUENTA</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">usuario</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
              <label htmlFor="password">contraseña</label>
              <input type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
              {error && <div style={{ color: 'red' }}>{error}</div>}

              <button type="submit">login</button>
              <a href="#">OLVIDÉ MI CONTRASEÑA</a>
            </form>
          </div>
          <div className={s.container__create}>
            <h2>¿NO TENÉS CUENTA?</h2>
            <button>crear cuenta</button>
          </div>
        </>
      )}
    </div>

  );
};

export default LoginComponent;
