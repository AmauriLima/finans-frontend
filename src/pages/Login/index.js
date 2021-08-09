import LoginForm from '../../components/LoginForm';
import { Container } from '../styles';

export default function Login() {
  return (
    <Container>
      <LoginForm buttonLabel="Login" />
    </Container>
  );
}
