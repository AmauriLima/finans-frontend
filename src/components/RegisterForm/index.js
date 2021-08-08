import PropTypes from 'prop-types';

import useForms from '../../hooks/useForms';

import { Form, ButtonContainer } from './styles';

import { Input } from '../Input';
import { Button } from '../Button';
import FormGroup from '../FormGroup';

export default function RegisterForm({ buttonLabel }) {
  const {
    name,
    email,
    password,
    confirmPassword,
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

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <h1 className="gradient titleForm">Registre-se</h1>

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
            onChange={handlePasswordChange}
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
          />
        </FormGroup>

        <ButtonContainer>
          <Button type="submit" disabled={!isFormValid}>
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
