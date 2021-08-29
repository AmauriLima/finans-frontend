import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import LoginForm from '../../components/LoginForm';
import { ButtonsArea, Container } from '../styles';

export default function Login() {
  return (
    <>
      <Container>
        <h1 className="gradient titleForm">Login</h1>

        <LoginForm buttonLabel="Login" />
      </Container>

      <ButtonsArea className="formPage">
        <p>Ainda não tem uma conta?</p>
        <Link to="/signup">
          <Button>
            Criar nova conta
          </Button>
        </Link>
      </ButtonsArea>
    </>
  );
}
