import React, { useState } from 'react';
import InputGroup from '../../../ui/form/InputGroup/InputGroup';
import SubmitButton from '../../../ui/form/SubmitButton/SubmitButton';
import Form from '../../../modules/Form/Form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import useFormWithValidation from '../../../../hooks/useFormWithValidation';
import inputValidators from '../../../../utils/inputValidators';
import useErrorPopup from '../../../../hooks/useErrorPopup';
import getErrorMessage from '../../../../utils/getErrorMessage';
import { login } from '../../../../services/auth.service';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setIsAuth } = useAuth();
  const showError = useErrorPopup();

  const navigate = useNavigate();

  const { values, isValid, errors, handleChange, resetForm } = useFormWithValidation();

  const handleFormSubmit = event => {
    event.preventDefault();

    setIsLoading(true)
    login(values['input-email'], values['input-password'], setIsAuth)
      .then(() => {
        resetForm();
        navigate('/movies', { replace: true });
      })
      .catch(status => {
        showError(getErrorMessage(status));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Form handleSubmit={handleFormSubmit}>
      <InputGroup
        input={{
          id: 'input-email',
          type: 'email',
          value: values['input-email'],
          onChange: handleChange,
          pattern: inputValidators.email
        }}
        titleText='E-mail'
        errorMessage={errors['input-email']}
      />
      <InputGroup
        input={{
          id: 'input-password',
          type: 'password',
          value: values['input-password'],
          onChange: handleChange,
          minLength: 4,
          maxLength: 12
        }}
        titleText='Пароль'
        errorMessage={errors['input-password']}
      />
      <SubmitButton classes='login__submit-button' text='Войти' disabled={!isValid || isLoading} />
    </Form>
  );
};

export default LoginForm;
