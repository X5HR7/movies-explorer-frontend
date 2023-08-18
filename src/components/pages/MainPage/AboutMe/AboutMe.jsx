import React from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../../../assets/images/student-photo.png';

const AboutMe = () => {
  //TODO: Change photo and info

  return (
    <section className='about-me'>
      <SectionTitle title='Студент' sectionName='about-me' />
      <div className='about-me__info'>
        <div className='about-me__text-info'>
          <h3 className='about-me__name'>Виталий</h3>
          <p className='about-me__profession'>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className='about-me__description'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href='https://github.com/X5HR7' target='_blank' rel='noreferrer' className='link about-me__github-link'>Github</a>
        </div>
        <img src={photo} alt='Фото студента' className='about-me__photo' />
      </div>
    </section>
  );
};

export default AboutMe;
