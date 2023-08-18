import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__project-authors'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info'>
        <p className='footer__copyright'>
          &copy; {new Date().getFullYear()}
        </p>
        <ul className='footer__links'>
          <li className='footer__link-item'>
            <a href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer' className='link footer__link'>
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link-item'>
            <a href='https://github.com/X5HR7' target='_blank' rel='noreferrer' className='link footer__link'>
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
