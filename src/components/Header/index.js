import { Container, Content, Navbar } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" />

        <Navbar>
          <ul>
            <li><a href="/">Sign up</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </Navbar>
      </Content>
    </Container>
  );
}
