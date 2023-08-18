import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const AboutProject = () => {
  return (
    <section className='about-project' id='about-project'>
      <SectionTitle title='О проекте' sectionName='about-project' />
      <div className='about-project__details'>
        <div className='about-project__detail'>
          <h3 className='about-project__detail-name'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__detail-description'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__detail'>
          <h3 className='about-project__detail-name'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__detail-description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__steps'>
        <div className='about-project__step'>
          <p className='about-project__step-time about-project__step-time_color_green'>1 неделя</p>
          <p className='about-project__step-name'>Back-end</p>
        </div>
        <div className='about-project__step'>
          <p className='about-project__step-time about-project__step-time_color_dark'>4 недели</p>
          <p className='about-project__step-name'>Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
