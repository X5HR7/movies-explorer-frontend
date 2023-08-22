import React from 'react';
import './LoginPage.css';
import Header from '../../modules/Header/Header';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className='login'>
      <Header classes='login__header' />
      <main className='main'>
        <section className='login__form-section'>
          <h1 className='login__title'>Рады видеть!</h1>
          <LoginForm />
        </section>
        <section className='login__navigation'>
          <p className='login__text'>Ещё не зарегистрированы?</p>
          <Link to='/signup' className='link login__link'>Регистрация</Link>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
