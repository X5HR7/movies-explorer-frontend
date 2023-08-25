import React, { useContext } from 'react';
import './ProfileInfo.css';
import CurrentUserContext from '../../../../context/CurrentUserContext';
import inputValidators from '../../../../utils/inputValidators';

const ProfileInfo = ({ isEditing, values, handleChange, onSubmit }) => {
  const { user } = useContext(CurrentUserContext);

  return (
    <form className='profile__info' id='profile-form' onSubmit={onSubmit} noValidate={true}>
      <div className='profile__info-item'>
        <label htmlFor='name' className='profile__info-input-title'>Имя</label>
        <input
          className='profile__info-input'
          id='name'
          type='text'
          disabled={!isEditing}
          value={values['name'] !== undefined ? values['name'] : user?.name}
          required={true}
          placeholder='Введите имя'
          minLength={2}
          maxLength={30}
          pattern={inputValidators.name}
          onChange={handleChange}
        />
      </div>
      <div className='profile__info-item'>
        <label htmlFor='email' className='profile__info-input-title'>Почта</label>
        <input
          className='profile__info-input'
          id='email'
          type='email'
          disabled={!isEditing}
          value={values['email'] !== undefined ? values['email'] : user?.email}
          required={true}
          placeholder='Введите почту'
          pattern={inputValidators.email}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default ProfileInfo;
