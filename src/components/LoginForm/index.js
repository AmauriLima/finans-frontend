import PropTypes from 'prop-types';
import { useContext } from 'react';

import useForms from '../../hooks/useForms';

import { AuthContext } from '../../Context/AuthContext';

import FormGroup from '../FormGroup';
import { Button } from '../Button';
import { Input } from '../Input';
import { ButtonContainer } from '../RegisterForm/styles';

import { Form } from './style';

export default function LoginForm({ buttonLabel }) {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    getErrorMessageByFieldName,
    errors,
  } = useForms();

  const isFormValid = (
    email && password
    && errors.length === 0
  );

  const { handleLogin } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();

    handleLogin(email, password);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup
        error={getErrorMessageByFieldName('email')}
      >
        <Input
          error={getErrorMessageByFieldName('email')}
          type="email"
          placeholder="e-mail *"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup
        error={getErrorMessageByFieldName('password')}
      >
        <Input
          error={getErrorMessageByFieldName('password')}
          type="password"
          placeholder="senha *"
          value={password}
          onChange={(event) => handlePasswordChange(event, { confirm: false })}
        />
      </FormGroup>

      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>

  );
}

LoginForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
