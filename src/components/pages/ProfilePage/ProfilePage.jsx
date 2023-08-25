import React, { useState } from 'react';
import './ProfilePage.css';
import Header from '../../modules/Header/Header';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Navigation from '../../modules/Navigation/Navigation';
import SubmitButton from '../../ui/form/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';
import { logout } from '../../../services/auth.service';
import useFormWithValidation from '../../../hooks/useFormWithValidation';
import MainApi from '../../../utils/MainApi';
import useUser from '../../../hooks/useUser';
import useAuth from '../../../hooks/useAuth';
import usePopup from '../../../hooks/usePopup';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, setUser } = useUser();
  const { setIsAuth } = useAuth();
  const Popup = usePopup();

  const { values, isValid, errors, handleChange, resetForm } = useFormWithValidation();

  const handleEditButtonClick = () => {
    setIsEditing(prevState => !prevState);
  };

  const handleLogoutButtonClick = () => {
    logout(Popup);
    setIsAuth(false);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('submitted');

    MainApi.updateUser(values['email'], values['name'])
      .then(user => {
        resetForm();
        setUser({ name: user.name, email: user.email });
        setIsEditing(prevState => !prevState);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='profile'>
      <Header>
        <Navigation isLoggedIn={true} />
      </Header>
      <main className='main'>
        <section className='profile__info-section'>
          <h1 className='profile__title'>Привет, {user?.name}!</h1>
          <ProfileInfo
            isEditing={isEditing}
            values={values}
            handleChange={handleChange}
            onSubmit={handleFormSubmit}
          />
        </section>

        <section className='profile__buttons'>
          {
            isEditing ?
              <>
                <p className='profile__error'>
                  {errors['name'] ? `Имя: ${errors['name']}` : ''}
                  {errors['email'] ? `\nEmail: ${errors['email']}` : ''}
                </p>
                <SubmitButton
                  type='submit'
                  form='profile-form'
                  className='button profile__edit-button'
                  text='Сохранить'
                  disabled={!isValid}
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
                <Link
                  to='/'
                  className='link profile__logout-button'
                  onClick={handleLogoutButtonClick}
                >
                  Выйти из аккаунта
                </Link>
              </>
          }
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
