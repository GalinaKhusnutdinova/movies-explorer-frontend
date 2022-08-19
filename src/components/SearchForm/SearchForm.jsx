import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

import "./SearchForm.css";

export default function SearchForm() {
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
          ></input>
        </label>
				<button type="submit" className="search-form__button">Поиск</button>
      </form>
			<div className="search-form__filter">
				<FilterCheckbox />
			</div>
    </div>
  );
}
