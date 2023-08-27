import React, { useEffect, useState } from 'react';
import './MoviesPage.css';
import Header from '../../modules/Header/Header';
import SearchForm from '../../modules/SearchForm/SearchForm';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import Footer from '../../modules/Footer/Footer';
import Navigation from '../../modules/Navigation/Navigation';
import MoviesApi from '../../../utils/MoviesApi';
import Preloader from '../../ui/Preloader/Preloader';
import { getMovieData } from '../../../utils/movies';
import useCardCount from '../../../hooks/useCardCount';
import getMoviesByKeyWord from '../../../utils/getMoviesByKeyWord';
import MainApi from '../../../utils/MainApi';
import errorMessages from '../../../utils/moviesErrorMessages';

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(Boolean(localStorage.getItem('checkboxState')));

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [movieList, setMovieList] = useState(null);
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [savedMovies, setSavedMovies] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([MainApi.getMovies(), MoviesApi.getMovies()])
      .then(([savedMovies, movies]) => {
        setSavedMovies(savedMovies);
        setMovieList(movies.map(movie => getMovieData(movie)));
      })
      .catch(() => {
        setMessage(errorMessages.serverError);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const { visibleCardCount, calculateCardCount } = useCardCount();

  useEffect(() => {
    if (movieList) handleFormSubmit();
  }, [isCheckBoxChecked]);

  const handleFormSubmit = event => {
    event?.preventDefault();

    if (!searchValue) {
      setMessage(errorMessages.validationError);
      setIsError(true);
      return;
    }

    localStorage.setItem('searchValue', searchValue);
    localStorage.setItem('checkboxState', isCheckBoxChecked ? 'checked' : '');

    setIsLoading(true);
    try {
      const list = getMoviesByKeyWord(movieList, searchValue, isCheckBoxChecked);
      localStorage.setItem('movies', JSON.stringify(list));
      setMovies(list);
    } catch (err) {
      console.log(err);
      setMessage(errorMessages.serverError);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='movies-page'>
      <Header>
        <Navigation isLoggedIn={true} />
      </Header>
      <main className='main'>
        <SearchForm
          input={{ searchValue, setSearchValue }}
          checkbox={{ isCheckBoxChecked, setIsCheckBoxChecked }}
          handleSubmit={handleFormSubmit}
        />
        {isLoading ? (
          <Preloader />
        ) : movies.length && !isError ? (
          <MoviesCardList
            movies={movies.slice(0, visibleCardCount)}
            savedMovies={savedMovies}
            isOnSavedPage={false}
            handleClick={calculateCardCount}
            isButtonVisible={movies.length > visibleCardCount}
          />
        ) : (
          <h1 className='movies-page__message'>{message}</h1>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MoviesPage;
