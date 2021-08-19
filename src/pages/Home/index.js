import { Link, Redirect } from 'react-router-dom';
import { Button } from '../../components/Button';

import useAuth from '../../hooks/useAuth';
import { ButtonsArea, Container } from '../styles';

export default function Home() {
  const { authenticated } = useAuth();

  if (authenticated) return <Redirect to="/wallet" />;

  return (
    <>
      <Container>
        <h1>
          Seu balanço financeiro
          <br />
          <span className="gradient">Descomplicado</span>
        </h1>

        <p>
          Registre suas despesas e rendas para que nada saia do balanço,
          o Finans é uma ferramenta online que vai facilitar sua vida financeira.
        </p>
      </Container>

      <ButtonsArea>
        <Link to="/login">
          <Button>
            Faça login
          </Button>
        </Link>

        <Link to="/signup">
          <Button>
            Criar nova conta
          </Button>
        </Link>
      </ButtonsArea>
    </>
  );
}
