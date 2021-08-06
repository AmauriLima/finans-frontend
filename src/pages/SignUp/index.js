import { Container } from '../styles';

import RegisterForm from '../../components/RegisterForm';

export default function SignUp() {
  return (
    <Container>
      <RegisterForm buttonLabel="Cadastre-se" />
    </Container>
  );
}
