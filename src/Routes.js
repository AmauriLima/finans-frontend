import { Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Wallet from './pages/Wallet';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
    enter: { opacity: 1, transform: 'translateY(0)', position: 'absolute' },
    leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/signup" component={SignUp} />
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute path="/wallet" exact component={Wallet} />
      </Switch>
    </animated.div>
  ));
}
