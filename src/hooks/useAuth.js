import { useState, useEffect } from 'react';

import api from '../utils/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      await api.get('/auth/verifytoken').then(({ status }) => {
        setAuthenticated(status === 200);
      });
    }

    setLoading(false);
  }, []);

  async function handleSignUp(name, email, password) {
    const { data: { token } } = await api.post('/auth/signup', {
      name,
      email,
      password,
    });

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  }

  async function handleLogin(email, password) {
    const { data: { token } } = await api.post('/auth/login', {
      email,
      password,
    });

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  }

  function handleLogout() {
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    setAuthenticated(false);
  }

  return {
    authenticated,
    handleLogin,
    handleSignUp,
    handleLogout,
    loading,
  };
}
