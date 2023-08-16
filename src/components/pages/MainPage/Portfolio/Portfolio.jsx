import React from 'react';
import './Portfolio.css';
import linkImage from '../../../../assets/images/link-image.svg';

const Portfolio = () => {
  const projectList = [
    { name: 'Статичный сайт', link: 'https://github.com/X5HR7/how-to-learn' },
    { name: 'Адаптивный сайт', link: 'https://github.com/X5HR7/russian-travel' },
    { name: 'Одностраничное приложение', link: 'https://github.com/X5HR7/react-mesto-auth' }
  ];

  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__project-list'>
        {projectList.map(item => {
          return (
            <li key={item.name} className='portfolio__project-list-item'>
              <a href={item.link} target='_blank' rel='noreferrer' className='link portfolio__project-list-item-link'>{item.name}</a>
              <img src={linkImage} alt='Иконка ссылки' className='portfolio__link-icon' />
            </li>
          )
        })}
      </ul>
    </section>
  );
};

export default Portfolio;
