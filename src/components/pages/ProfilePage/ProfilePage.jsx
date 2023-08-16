import React from 'react';
import './ProfilePage.css';
import Header from '../../modules/Header/Header';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Navigation from '../../modules/Navigation/Navigation';
import SubmitButton from '../../ui/form/SubmitButton/SubmitButton';

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
      <h1 className='profile__title'>Привет, {user.name}!</h1>

      <ProfileInfo isEditing={isEditing} user={user} />

      <div className='profile__buttons'>
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
              <button type='button' className='link profile__logout-button'>Выйти из аккаунта</button>
            </>
        }
      </div>
    </div>
  );
};

export default ProfilePage;
