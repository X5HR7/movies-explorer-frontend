import React from 'react';
import './SearchForm.css';
import CheckBox from '../../ui/form/CheckBox/CheckBox';

const SearchForm = ({ input, checkbox, handleSubmit }) => {
  const handleInputChange = event => {
    input.setSearchValue(event.target.value);
  };

  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit} noValidate={true}>
        <div className='search-form__input-line'>
          <input
            type='text'
            placeholder='Фильм'
            className='search-form__input'
            required={true}
            value={input.searchValue}
            onChange={handleInputChange}
          />
          <button type='submit' className='button search-form__submit-button'>
            Поиск
          </button>
        </div>
        <CheckBox
          text='Короткометражки'
          id='checkbox'
          value={checkbox.isCheckBoxChecked}
          setValue={checkbox.setIsCheckBoxChecked}
        />
      </form>
    </section>
  );
};

export default SearchForm;
