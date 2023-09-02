import React, { useContext } from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import accountIcon from '../../../assets/images/account-icon.svg';
import AuthContext from '../../../context/AuthContext';

const Navigation = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <nav className='navigation'>
      {
        isAuth ? (
          <>
            <input type='checkbox' className='navigation__checkbox' />
            <div className='navigation__hamburger'></div>
            <ul className='navigation__item-list'>
              <li className='navigation__item'>
                <NavLink
                  to='/'
                  className={({ isActive }) => `link navigation__link navigation__home-link ${isActive ? 'navigation__link_active' : ''}`}
                >
                  Главная
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  to='/movies'
                  className={({ isActive }) => `link navigation__link ${isActive ? 'navigation__link_active' : ''}`}
                >
                  Фильмы
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  to='/saved-movies'
                  className={({ isActive }) => `link navigation__link ${isActive ? 'navigation__link_active' : ''}`}
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  to='/profile'
                  className={({ isActive }) => `link navigation__link navigation__account-link ${isActive ? 'navigation__link_active' : ''}`}
                >
                  <span>Аккаунт</span><img src={accountIcon} alt='Аккаунт' className='navigation__account-image' />
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <ul className='navigation__item-list-not-auth'>
            <li className='navigation-item'>
              <Link to='/signup' className='link navigation__signup-link'>Регистрация</Link>
            </li>
            <li className='navigation-item'>
              <Link to='/signin' className='button navigation__signin-link'>Войти</Link>
            </li>
          </ul>
        )
      }
    </nav>
  );
};

export default Navigation;
