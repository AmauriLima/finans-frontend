import { Link } from 'react-router-dom';

import { Container, Content, Navbar } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <Navbar>
          <ul>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </Navbar>
      </Content>
    </Container>
  );
}
