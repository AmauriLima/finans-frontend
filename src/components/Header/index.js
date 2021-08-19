import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </Content>
    </Container>
  );
}
