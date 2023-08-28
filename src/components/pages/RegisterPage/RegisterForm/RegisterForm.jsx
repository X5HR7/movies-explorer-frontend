import React, { useState } from 'react';
import InputGroup from '../../../ui/form/InputGroup/InputGroup';
import SubmitButton from '../../../ui/form/SubmitButton/SubmitButton';
import Form from '../../../modules/Form/Form';
import useFormWithValidation from '../../../../hooks/useFormWithValidation';
import inputValidators from '../../../../utils/inputValidators';
import MainApi from '../../../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import useErrorPopup from '../../../../hooks/useErrorPopup';
import getErrorMessage from '../../../../utils/getErrorMessage';
import { login } from '../../../../services/auth.service';
import useAuth from '../../../../hooks/useAuth';

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { values, isValid, errors, handleChange, resetForm } = useFormWithValidation();
  const showError = useErrorPopup();
  const { setIsAuth } = useAuth();

  const navigate = useNavigate();

  const handleFormSubmit = event => {
    event.preventDefault();

    setIsLoading(true);
    MainApi.register(values['input-email'], values['input-password'], values['input-name'])
      .then(user => {
        if (user) {
          login(values['input-email'], values['input-password'], setIsAuth)
            .then(() => {
              resetForm();
              navigate('/movies', { replace: true });
              console.log('done');
            })
            .catch(status => {
              showError(getErrorMessage(status));
            });
        }
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
        titleText='Имя'
        input={{
          id: 'input-name',
          type: 'text',
          value: values['input-name'],
          onChange: handleChange,
          minLength: 2,
          maxLength: 30,
          pattern: inputValidators.name
        }}
        errorMessage={errors['input-name']}
      />
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
        titleText='Пароль'
        input={{
          id: 'input-password',
          type: 'password',
          value: values['input-password'],
          onChange: handleChange,
          minLength: 4,
          maxLength: 12
        }}
        errorMessage={errors['input-password']}
      />
      <SubmitButton
        classes='register__submit-button'
        text='Зарегистрироваться'
        disabled={!isValid || isLoading}
      />
    </Form>
  );
};

export default RegisterForm;
