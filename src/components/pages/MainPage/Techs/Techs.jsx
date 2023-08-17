import React from 'react';
import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const Techs = () => {
  const techList = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

  return (
    <section className='techs'>
      <div className='techs__content'>
        <SectionTitle title='Технологии' sectionName='techs' />
        <h3 className='techs__amount'>7 технологий</h3>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className='techs__list'>
          {techList.map(item => {
            return (<li key={item} className='techs__list-item'>{item}</li>);
          })}
        </ul>
      </div>
    </section>
  );
};

export default Techs;
