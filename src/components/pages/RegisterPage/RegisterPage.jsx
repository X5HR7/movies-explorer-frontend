import React from 'react';
import './RegisterPage.css';
import Header from '../../modules/Header/Header';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div className='register'>
      <Header classes='register__header' />
      <main className='main'>
        <section className='register__form-section'>
          <h1 className='register__title'>Добро пожаловать!</h1>
          <RegisterForm />
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
