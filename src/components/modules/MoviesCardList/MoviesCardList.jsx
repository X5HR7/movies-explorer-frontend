import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../../ui/MovieCard/MovieCard';

const MoviesCardList = ({
  movies,
  savedMovies,
  isOnSavedPage,
  handleClick,
  isButtonVisible,
  setSavedMovies
}) => {
  return (
    <section className='cards'>
      <ul className='cards__container'>
        {movies.map((movie) => {
          return (
            <li className='cards__container-item' key={movie.movieId}>
              <MovieCard
                movie={movie}
                isOnSavedPage={isOnSavedPage}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
              />
            </li>
          );
        })}
      </ul>
      {isButtonVisible ? (
        <button type='button' className='button cards__show-more-btn' onClick={handleClick}>
          Ещё
        </button>
      ) : null}
    </section>
  );
};

export default MoviesCardList;
