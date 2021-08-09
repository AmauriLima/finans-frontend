import { useState } from 'react';
import isEmailValid from '../utils/isEmailValid';
import useErrors from './useErrors';

export default function useForms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (!event.target.value || !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(event, { confirm }) {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({ field: 'password', message: 'Senha obrigatória' });
    } else {
      removeError('password');
    }

    if (confirm) {
      if (event.target.value && confirmPassword !== event.target.value) {
        setError({ field: 'confirmPassword', message: 'Senhas não conferem' });
      } else {
        removeError('confirmPassword');
      }
    }
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);

    if (event.target.value !== password) {
      setError({ field: 'confirmPassword', message: 'Senhas não conferem' });
    } else {
      removeError('confirmPassword');
    }
  }

  return {
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
  };
}
