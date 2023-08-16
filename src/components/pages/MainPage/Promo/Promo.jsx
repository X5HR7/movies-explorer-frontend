import React from 'react';
import './Promo.css';
import landingImage from '../../../../assets/images/landing-logo.svg';

const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__content'>
        <div className='promo__text-content'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href='#about-project' className='link promo__link'>Узнать больше</a>
        </div>
        <img src={landingImage} alt='Логотип' className='promo__image' />
      </div>
    </section>
  );
};

export default Promo;
