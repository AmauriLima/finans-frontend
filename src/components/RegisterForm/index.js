import PropTypes from 'prop-types';
import { useContext } from 'react';

import useForms from '../../hooks/useForms';
import { AuthContext } from '../../Context/AuthContext';

import { Form, ButtonContainer } from './styles';

import { Input } from '../Input';
import { Button } from '../Button';
import FormGroup from '../FormGroup';

export default function RegisterForm({ buttonLabel }) {
  const {
    fields: {
      name, email, password, confirmPassword,
    },
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    getErrorMessageByFieldName,
    errors,
  } = useForms();

  const isFormValid = (
    name && email && password && confirmPassword
    && errors.length === 0
  );

  const { handleSignUp } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();

    handleSignUp(name, email, password);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail *"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup
        id="pass"
        error={getErrorMessageByFieldName('password')}
      >
        <Input
          error={getErrorMessageByFieldName('password')}
          type="password"
          placeholder="senha *"
          value={password}
          onChange={(event) => handlePasswordChange(event, { confirm: true })}
          autoComplete="on"
        />
      </FormGroup>

      <FormGroup
        id="confirm-pass"
        error={getErrorMessageByFieldName('confirmPassword')}
      >
        <Input
          error={getErrorMessageByFieldName('confirmPassword')}
          type="password"
          placeholder="confirm sua senha *"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          autoComplete="on"
        />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

RegisterForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
