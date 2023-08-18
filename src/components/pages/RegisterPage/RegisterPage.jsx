import React from 'react';
import './RegisterPage.css';
import Header from '../../modules/Header/Header';
import Form from '../../modules/Form/Form';
import InputGroup from '../../ui/form/InputGroup/InputGroup';
import SubmitButton from '../../ui/form/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className='register'>
      <Header classes='register__header' />
      <main className='main'>
        <section className='register__form-section'>
          <h1 className='register__title'>Добро пожаловать!</h1>
          <Form>
            <InputGroup
              titleText='Имя'
              inputType='text'
              inputId='input-name'
              validators={{
                minLength: 2,
                maxLength: 30
              }}
            />
            <InputGroup titleText='E-mail' inputType='email' inputId='input-email' />
            <InputGroup
              titleText='Пароль'
              inputType='password'
              inputId='input-password'
              validators={{
                minLength: 6,
                maxLength: 12
              }}
            />
            <SubmitButton classes='register__submit-button' text='Зарегистрироваться' />
          </Form>
        </section>
        <section className='register__navigation'>
          <p className='register__text'>Уже зарегистрированы?</p>
          <Link to='/signin' className='link register__link'>Войти</Link>
        </section>
      </main>
    </div>
  );
};

export default RegisterPage;
