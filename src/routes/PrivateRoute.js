/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ ...rest }) {
  const { authenticated } = useContext(AuthContext);
  const { loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!authenticated) return <Redirect to="/login" />;

  return <Route {...rest} />;
}
