import React from 'react';
import './LoginPage.css';
import Header from '../../modules/Header/Header';
import Form from '../../modules/Form/Form';
import InputGroup from '../../ui/form/InputGroup/InputGroup';
import SubmitButton from '../../ui/form/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='login'>
      <Header classes='login__header'/>
      <h1 className='login__title'>Рады видеть!</h1>
      <Form>
        <InputGroup titleText='E-mail' inputType='email' inputId='input-email'/>
        <InputGroup titleText='Пароль' inputType='password' inputId='input-password' />
        <SubmitButton classes='login__submit-button' text='Войти' />
      </Form>
      <div className='login__navigation'>
        <p className='login__text'>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='link login__link'>Регистрация</Link>
      </div>
    </div>
  );
};

export default LoginPage;
