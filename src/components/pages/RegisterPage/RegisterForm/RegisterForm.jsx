import React from 'react';
import InputGroup from '../../../ui/form/InputGroup/InputGroup';
import SubmitButton from '../../../ui/form/SubmitButton/SubmitButton';
import Form from '../../../modules/Form/Form';
import useFormWithValidation from '../../../../hooks/useFormWithValidation';
import inputValidators from '../../../../utils/inputValidators';
import MainApi from '../../../../utils/MainApi';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const { values, isValid, errors, handleChange, resetForm } = useFormWithValidation();

  const navigate = useNavigate();

  const handleFormSubmit = event => {
    event.preventDefault();

    MainApi.register(
      values['input-email'],
      values['input-password'],
      values['input-name']
    )
      .then(user => {
        if (user) {
          resetForm();
          navigate('/signin', { replace: true });
        }
      })
      .catch(err => {
        console.log(err);
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
      <SubmitButton classes='register__submit-button' text='Зарегистрироваться' disabled={!isValid} />
    </Form>
  );
};

export default RegisterForm;
