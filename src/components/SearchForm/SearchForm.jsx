import React from "react";
import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

export default function SearchForm(props) {
  const [keyValue, setKeyValue] = useState(localStorage.getItem("keyValueSaveMovies")
    ? localStorage.getItem("keyValueSaveMovies")
    : '');

  function handleChangeName(e) {
    setKeyValue(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    if (props.filtetrue === "true") {
      props.filterSavedMoviesClick(keyValue);
    } else {
      // Передаём значения управляемых компонентов во внешний обработчик
      props.onGetMovies(keyValue);
    }
  }
  return (
    <div className="search-form">
      <form method="get" name="search" className="search-form__form">
        <label className="search-form__label">
          <input
            name="movies"
            type="text"
            id="movies"
            placeholder="Фильм"
            required
            minLength="2"
            maxLength="200"
            className="search-form__input"
            value={keyValue}
            onChange={handleChangeName}
          ></input>
        </label>
        <button
          onClick={handleSubmit}
          type="submit"
          className="search-form__button"
        >
          Поиск
        </button>
      </form>
      <div className="search-form__filter">
        <FilterCheckbox checked={props.checked} changeCheckbox={props.changeCheckbox} />
      </div>
    </div>
  );
}
