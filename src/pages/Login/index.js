import LoginForm from '../../components/LoginForm';
import { Container } from '../styles';

export default function Login() {
  return (
    <Container>
      <h1 className="gradient titleForm">Login</h1>

      <LoginForm buttonLabel="Login" />
    </Container>
  );
}
