import React from 'react';
import './GoBackLink.css'
import { Link } from 'react-router-dom';

const GoBackLink = () => {
  //useNav

  return (
    <Link to='/' className='link error-page__go-back-link'>Назад</Link>
  );
};

export default GoBackLink;
