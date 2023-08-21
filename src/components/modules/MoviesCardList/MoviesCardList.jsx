import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../../ui/MovieCard/MovieCard';
import { getMovieDuration } from '../../../utils/movies';


const MoviesCardList = ({ movies, isOnSavedPage }) => {
  return (
    <section className='cards'>
      <ul className='cards__container'>
        {movies.map((movie, index) => {
          return (
            <li className='cards__container-item' key={index}>
              <MovieCard
                name={movie.nameRU}
                duration={getMovieDuration(movie)}
                image={movie.image}
                // isLiked={movie.isLiked}
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
