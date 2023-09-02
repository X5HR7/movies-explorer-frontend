import React, { useEffect, useState } from 'react';
import './SavedMoviesPage.css';
import Header from '../../modules/Header/Header';
import SearchForm from '../../modules/SearchForm/SearchForm';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import Footer from '../../modules/Footer/Footer';
import Navigation from '../../modules/Navigation/Navigation';
import MainApi from '../../../utils/MainApi';
import Preloader from '../../ui/Preloader/Preloader';
import getMoviesByKeyWord from '../../../utils/getMoviesByKeyWord';
import errorMessages from '../../../utils/moviesErrorMessages';
import useCardCount from '../../../hooks/useCardCount';

const SavedMoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

  const [movieList, setMovieList] = useState(null);
  const [movies, setMovies] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const { visibleCardCount, calculateCardCount } = useCardCount();

  useEffect(() => {
    setIsLoading(true);
    MainApi.getMovies()
      .then(data => {
        setMovieList(data);
        setMovies(data);
      })
      .catch(() => {
        setMessage(errorMessages.serverError);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isError) {
      setIsError(false);
    } else if (!movies?.length) setMessage(errorMessages.notFoundError);
  }, [movies]);

  useEffect(() => {
    if (movieList)
      handleFormSubmit()
  }, [isCheckBoxChecked]);

  const handleFormSubmit = event => {
    event?.preventDefault();

    setIsLoading(true);
    try {
      const filteredMovies = getMoviesByKeyWord(movieList, searchValue, isCheckBoxChecked);
      setMovies(filteredMovies);
    } catch (err) {
      setMessage(errorMessages.serverError);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='saved-movies-page'>
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
        ) : movies?.length && !isError ? (
          <MoviesCardList
            movies={movies.slice(0, visibleCardCount)}
            savedMovies={movies}
            isOnSavedPage={true}
            isButtonVisible={movies.length > visibleCardCount}
            setSavedMovies={setMovies}
            handleClick={calculateCardCount}
          />
        ) : (
          <h1 className='movies-page__message'>{message}</h1>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SavedMoviesPage;
