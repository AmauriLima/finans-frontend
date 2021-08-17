/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

export default function PrivateRoute({ ...rest }) {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) return <Redirect to="/login" />;

  return <Route {...rest} />;
}
