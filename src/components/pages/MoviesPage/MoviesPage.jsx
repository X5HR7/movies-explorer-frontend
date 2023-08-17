import React from 'react';
import './MoviesPage.css';
import Header from '../../modules/Header/Header';
import SearchForm from '../../modules/SearchForm/SearchForm';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import Footer from '../../modules/Footer/Footer';
import Navigation from '../../modules/Navigation/Navigation';

const MoviesPage = () => {
  return (
    <div className='movies-page'>
      <Header>
        <Navigation isLoggedIn={true} />
      </Header>
      <main className='main'>
        <SearchForm />
        <MoviesCardList isOnSavedPage={false} />
      </main>
      <Footer />
    </div>
  );
};

export default MoviesPage;
