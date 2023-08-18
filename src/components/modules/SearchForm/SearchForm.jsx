import React from 'react';
import './SearchForm.css';
import CheckBox from '../../ui/form/CheckBox/CheckBox';

const SearchForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <section className='search'>
      <form className='search-form'>
        <div className='search-form__input-line'>
          <input type='text' placeholder='Фильм' className='search-form__input' required={true} />
          <button type='submit' className='button search-form__submit-button' onClick={handleSubmit}>Поиск</button>
        </div>
        <CheckBox text='Короткометражки' id='1' />
      </form>
    </section>
  );
};

export default SearchForm;
