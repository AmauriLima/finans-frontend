import { Container } from '../styles';

import RegisterForm from '../../components/RegisterForm';

export default function SignUp() {
  return (
    <Container>
      <h1 className="gradient titleForm">Registre-se</h1>

      <RegisterForm buttonLabel="Cadastre-se" />
    </Container>
  );
}
