import PropTypes from 'prop-types';
import { createContext } from 'react';

import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const {
    authenticated,
    handleLogin,
    handleSignUp,
    handleLogout,
  } = useAuth();

  return (
    <AuthContext.Provider value={{
      authenticated, handleLogin, handleSignUp, handleLogout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
