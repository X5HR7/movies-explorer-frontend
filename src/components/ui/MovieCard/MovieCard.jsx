import React, { useEffect, useState } from 'react';
import './MovieCard.css';
import Button from './Button/Button';
import MainApi from '../../../utils/MainApi';
import useErrorPopup from '../../../hooks/useErrorPopup';
import getErrorMessage from '../../../utils/getErrorMessage';
import { getMovieDuration } from '../../../utils/movies';

const MovieCard = ({ movie, isOnSavedPage, savedMovies, setSavedMovies }) => {
  const showError = useErrorPopup();
  const [isLiked, setIsLiked] = useState(savedMovies?.some(m => m.movieId === movie?.movieId));

  useEffect(() => {
    if (isLiked) movie._id = savedMovies?.find(m => m.movieId === movie.movieId)?._id;
    // else movie._id = null;
  }, [isLiked, movie, savedMovies]);

  const likeMovieCard = () => {
    console.log('like', movie);
    delete movie._id;
    MainApi.saveMovie(movie)
      .then(data => {
        if (data) {
          setIsLiked(true);
          setSavedMovies(prev => [...prev, data]);
          console.log(savedMovies);
        }
      })
      .catch(status => {
        showError(getErrorMessage(status));
      });
  };

  const deleteMovieCard = () => {
    console.log('del', movie);
    MainApi.deleteMovie(movie._id)
      .then(data => {
        setSavedMovies(savedMovies.filter(m => m.movieId !== movie.movieId));
        if (!isOnSavedPage && data) {
          setIsLiked(false);
        }
      })
      .catch(status => {
        showError(getErrorMessage(status));
      });
  };

  return (
    <div className='card'>
      <a href={movie?.trailerLink} target='_blank' rel='noreferrer' className='card__link'>
        <div className='card__text-info'>
          <h2 className='card__title'>{movie?.nameRU}</h2>
          <p className='card__duration'>{getMovieDuration(movie)}</p>
        </div>
        <img src={movie?.image} alt={movie?.name} className='card__image' />
      </a>
      <Button
        isLiked={isLiked}
        isOnSavedPage={isOnSavedPage}
        likeMovie={likeMovieCard}
        deleteMovie={deleteMovieCard}
      />
    </div>
  );
};

export default MovieCard;
