import React from 'react';
import './SavedMoviesPage.css';
import Header from '../../modules/Header/Header';
import SearchForm from '../../modules/SearchForm/SearchForm';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import Footer from '../../modules/Footer/Footer';
import Navigation from '../../modules/Navigation/Navigation';

const SavedMoviesPage = () => {
  return (
    <div className='saved-movies-page'>
      <Header>
        <Navigation isLoggedIn={true} />
      </Header>
      <main className='main'>
        <SearchForm />
        <MoviesCardList isOnSavedPage={true} />
      </main>
      <Footer />
    </div>
  );
};

export default SavedMoviesPage;
