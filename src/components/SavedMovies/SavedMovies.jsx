import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import TextMessage from "../TextMessage/TextMessage";
import "./SavedMovies.css";

export default function SavedMovies(props) {
  
  // const savedMovies = JSON.parse(localStorage.getItem("savedFilm"));
console.log(props.filmsSaveFilter)
console.log(props.savedMovies)
  function handleDelete(film) {
    props.handleMoviesDelete(film);
  }

  const savedFilterMovies =
  props.filmsSaveFilter.length >= 1 ? props.filmsSaveFilter : props.savedMovies;
  return (
    <main className="movies-saved">
      <SearchForm
        filtetrue="true"
        filterSavedMoviesClick={props.filterSavedMoviesClick}
      />
      <TextMessage isOpen={props.textOpen} message={props.message} />
      <Preloader isOpen={props.isOpen} />
      <MoviesCardList name="saved">
        {savedFilterMovies.map((film) => {
          // console.log(savedMovies);
          return (
            <MoviesCard film={film} key={film.id} images={film.image || film.image.url}>
              <button
                onClick={() => handleDelete(film)}
                type="button"
                aria-label="удалить"
                className="card__button card__button_delete "
              ></button>
            </MoviesCard>
          );
        })}
      </MoviesCardList>
    </main>
  );
}
