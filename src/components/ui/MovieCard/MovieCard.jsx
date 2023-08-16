import React from 'react';
import './MovieCard.css';
import Button from './Button/Button';

const MovieCard = ({ name, duration, image, isLiked, isOnSavedPage }) => {
  return (
    <div className='card'>
      <div className='card__text-info'>
        <h3 className='card__title'>{name}</h3>
        <p className='card__duration'>{duration}</p>
      </div>
      <img src={image} alt={name} className='card__image' />
      <Button isLiked={isLiked} isOnSavedPage={isOnSavedPage} />
    </div>
  );
};

export default MovieCard;
