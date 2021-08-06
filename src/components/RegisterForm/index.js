import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';

import { Input } from '../Input';
import { Button } from '../Button';
import FormGroup from '../FormGroup';

export default function RegisterForm({ buttonLabel }) {
  return (
    <>
      <h1 className="gradient titleForm">Registre-se</h1>

      <Form>
        <FormGroup>
          <Input
            placeholder="Nome *"
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="email"
            placeholder="E-mail *"
          />
        </FormGroup>

        <FormGroup id="pass">
          <Input
            type="password"
            placeholder="senha *"
          />
        </FormGroup>

        <FormGroup id="confirm-pass">
          <Input
            type="password"
            placeholder="confirm sua senha *"
          />
        </FormGroup>

        <ButtonContainer>
          <Button type="submit">
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
}

RegisterForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
