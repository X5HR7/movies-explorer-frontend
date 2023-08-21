import React, { useContext } from 'react';
import './ProfileInfo.css';
import CurrentUserContext from '../../../../context/CurrentUserContext';

const ProfileInfo = ({ isEditing }) => {
  const { user } = useContext(CurrentUserContext);

  return (
    <form className='profile__info' id='profile-form'>
      <div className='profile__info-item'>
        <label htmlFor='name' className='profile__info-input-title'>Имя</label>
        <input
          className='profile__info-input'
          id='name'
          type='text'
          disabled={!isEditing}
          // value={user.name}
          defaultValue={user?.name}
          required={true}
          placeholder='Введите имя'
          minLength={2}
          maxLength={30}
        />
      </div>
      <div className='profile__info-item'>
        <label htmlFor='email' className='profile__info-input-title'>Почта</label>
        <input
          className='profile__info-input'
          id='email'
          type='email'
          disabled={!isEditing}
          // value={user.email}
          defaultValue={user?.email}
          required={true}
          placeholder='Введите почту'
        />
      </div>
    </form>
  );
};

export default ProfileInfo;
