import React from 'react';
import './ProfilePage.css';
import Header from '../../modules/Header/Header';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Navigation from '../../modules/Navigation/Navigation';
import SubmitButton from '../../ui/form/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';

const ProfilePage = ({ user = { name: 'Виталий', email: 'pochta@yandex.ru' } }) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEditButtonClick = () => {
    setIsEditing(prevState => !prevState);
  };

  return (
    <div className='profile'>
      <Header>
        <Navigation isLoggedIn={true} />
      </Header>
      <main className='main'>
        <section className='profile__info-section'>
          <h1 className='profile__title'>Привет, {user.name}!</h1>
          <ProfileInfo isEditing={isEditing} user={user} />
        </section>

        <section className='profile__buttons'>
          {
            isEditing ?
              <>
                <p className='profile__error'></p>
                <SubmitButton
                  type='submit'
                  form='#profile-form'
                  className='button profile__edit-button'
                  onClick={handleEditButtonClick}
                  text='Сохранить'
                />
              </>
              :
              <>
                <button
                  type='button'
                  className='link profile__edit-button'
                  onClick={handleEditButtonClick}
                >
                  Редактировать
                </button>
                <Link to='/' className='link profile__logout-button'>Выйти из аккаунта</Link>
              </>
          }
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
