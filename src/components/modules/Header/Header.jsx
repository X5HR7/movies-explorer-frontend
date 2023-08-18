import React from 'react';
import './Header.css';
import logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header = ({ classes, children }) => {
  return (
    <header className={`header ${classes}`}>
      <Link to='/' className='link'>
        <img src={logo} alt='Логотип' className='header__logo' />
      </Link>
      <div className='header__content'>
        {children}
      </div>
    </header>
  );
};

export default Header;
