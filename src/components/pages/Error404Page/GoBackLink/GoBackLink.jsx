import React from 'react';
import './GoBackLink.css';
import { Link, useNavigate } from 'react-router-dom';

const GoBackLink = () => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(-1, { replace: true });
  };

  return (
    <a onClick={handleLinkClick} className='link error-page__go-back-link'>
      Назад
    </a>
  );
};

export default GoBackLink;
