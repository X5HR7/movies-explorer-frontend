import React from 'react';
import './MainPage.css';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Navigation from '../../modules/Navigation/Navigation';

const MainPage = () => {
  return (
    <>
      <div className='header-wrapper'>
        <Header>
          <Navigation isLoggedIn={false} />
        </Header>
      </div>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
};

export default MainPage;
