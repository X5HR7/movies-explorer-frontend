import React from 'react';
import InputGroup from '../../../ui/form/InputGroup/InputGroup';
import SubmitButton from '../../../ui/form/SubmitButton/SubmitButton';
import Form from '../../../modules/Form/Form';
import { login } from '../../../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import usePopup from '../../../../hooks/usePopup';
import useAuth from '../../../../hooks/useAuth';
import useFormWithValidation from '../../../../hooks/useFormWithValidation';
import inputValidators from '../../../../utils/inputValidators';
import MainApi from '../../../../utils/MainApi';

const LoginForm = () => {
  const popup = usePopup();
  const { setIsAuth } = useAuth();

  const navigate = useNavigate();

  const { values, isValid, errors, handleChange, resetForm } = useFormWithValidation();

  // const handleFormSubmit = event => {
  //   event.preventDefault();
  //   login(values['input-email'], values['input-password'], popup, setIsAuth)
  //     .then(() => {
  //       console.log(1);
  //       resetForm();
  //       navigate('/movies', { replace: true });
  //     })
  //     .catch(err => console.log(err));
  // };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('submited');
    console.log(typeof values['input-email'], typeof values['input-password']);
    MainApi.login(values['input-email'], values['input-password'])
      .then(token => {
        console.log(token);
        if (token) {
          setIsAuth(true);
          resetForm();
          navigate('/movies', { replace: true });
        }
      })
      .catch(err => {
        err.then(error => console.log(error))
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
      <SubmitButton classes='login__submit-button' text='Войти' disabled={!isValid} />
    </Form>
  );
};

export default LoginForm;
