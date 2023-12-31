import React, { useEffect, useState } from 'react';
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
import useErrorPopup from '../../../hooks/useErrorPopup';
import useSuccessPopup from '../../../hooks/useSuccessPopup';
import getErrorMessage from '../../../utils/getErrorMessage';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useUser();
  const { setIsAuth } = useAuth();

  const showError = useErrorPopup();
  const showSuccess = useSuccessPopup();

  const { values, isValid, setIsValid, errors, handleChange, resetForm } = useFormWithValidation();

  useEffect(() => {
    const isEmailNew = values['email'] ? !(values['email'] === user?.email) : false;
    const isNameNew = values['name'] ? !(values['name'] === user?.name) : false;
    const isBothFieldsNew = isEmailNew || isNameNew;

    if (!isBothFieldsNew) setIsValid(false);
    else setIsValid(true);
  }, [values, setIsValid, user?.email, user?.name]);

  const handleEditButtonClick = () => {
    setIsEditing(prevState => !prevState);
  };

  const handleLogoutButtonClick = () => {
    logout(setIsAuth)
      .then(() => {
        showSuccess('Выполнен выход из аккаунта!');
      })
      .catch(status => {
        showError(getErrorMessage(status));
      });
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    setIsLoading(true);
    MainApi.updateUser(values['email'], values['name'])
      .then(user => {
        resetForm();
        setUser({ name: user.name, email: user.email });
        setIsEditing(prevState => !prevState);
        showSuccess('Данные успешно обновлены!');
      })
      .catch(status => {
        showError(getErrorMessage(status));
      })
      .finally(() => {
        setIsLoading(false);
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
          {isEditing ? (
            <>
              <p className='profile__error'>
                {errors['name'] ? `Имя: ${errors['name']}` : ''}
                {errors['email'] ? `\nEmail: ${errors['email']}` : ''}
              </p>
              <SubmitButton
                type='submit'
                form='profile-form'
                className='button profile__edit-button'
                text={isLoading ? 'Сохранение...' : 'Сохранить'}
                disabled={!isValid || isLoading}
              />
            </>
          ) : (
            <>
              <button type='button' className='link profile__edit-button' onClick={handleEditButtonClick}>
                Редактировать
              </button>
              <Link to='/' className='link profile__logout-button' onClick={handleLogoutButtonClick}>
                Выйти из аккаунта
              </Link>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
