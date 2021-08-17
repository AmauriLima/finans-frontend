import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Wallet from './pages/Wallet';

import PrivateRoute from './routes/PrivateRoute';

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
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/wallet" component={Wallet} />
      </Switch>
    </animated.div>
  ));
}
