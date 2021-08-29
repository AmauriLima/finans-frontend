import { useState } from 'react';
import isEmailValid from '../utils/isEmailValid';
import useErrors from './useErrors';

export default function useForms() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setFields((prevState) => ({ ...prevState, name: event.target.value }));

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setFields((prevState) => ({ ...prevState, email: event.target.value }));

    if (!event.target.value || !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(event, { confirm }) {
    setFields((prevState) => ({ ...prevState, password: event.target.value }));

    if (!event.target.value) {
      setError({ field: 'password', message: 'Senha obrigatória' });
    } else {
      removeError('password');
    }

    if (confirm) {
      if (event.target.value && fields.confirmPassword !== event.target.value) {
        setError({ field: 'confirmPassword', message: 'Senhas não conferem' });
      } else {
        removeError('confirmPassword');
      }
    }
  }

  function handleConfirmPasswordChange(event) {
    setFields((prevState) => ({ ...prevState, confirmPassword: event.target.value }));

    if (event.target.value !== fields.password) {
      setError({ field: 'confirmPassword', message: 'Senhas não conferem' });
    } else {
      removeError('confirmPassword');
    }
  }

  return {
    fields,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    getErrorMessageByFieldName,
    errors,
  };
}
