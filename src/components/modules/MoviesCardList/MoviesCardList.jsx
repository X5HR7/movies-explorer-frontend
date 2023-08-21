import React from 'react';
import './MoviesCardList.css';
import initialCards from '../../../utils/initialCards';
import MovieCard from '../../ui/MovieCard/MovieCard';

const MoviesCardList = ({ isOnSavedPage }) => {
  return (
    <section className='cards'>
      <ul className='cards__container'>
        {initialCards.map((card, index) => {
          return (
            <li className='cards__container-item' key={index}>
              <MovieCard
                name={card.name}
                duration={card.duration}
                image={card.image}
                isLiked={card.isLiked}
                isOnSavedPage={isOnSavedPage}
              />
            </li>
          );
        })}
      </ul>
      <button type='button' className='button cards__show-more-btn'>Ещё</button>
    </section>
  );
};

export default MoviesCardList;
