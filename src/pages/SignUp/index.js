import { Link } from 'react-router-dom';
import { ButtonsArea, Container } from '../styles';

import RegisterForm from '../../components/RegisterForm';
import { Button } from '../../components/Button';

export default function SignUp() {
  return (
    <>
      <Container>
        <h1 className="gradient titleForm">Registre-se</h1>

        <RegisterForm buttonLabel="Cadastre-se" />
      </Container>

      <ButtonsArea className="formPage">
        <p>Já tem uma conta?</p>
        <Link to="/login">
          <Button>
            Faça login
          </Button>
        </Link>
      </ButtonsArea>
    </>
  );
}
