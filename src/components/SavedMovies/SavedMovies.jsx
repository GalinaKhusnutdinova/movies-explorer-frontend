import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import TextMessage from "../TextMessage/TextMessage";
import "./SavedMovies.css";
import { useEffect } from "react";

export default function SavedMovies(props) {
  const [filmSaveFilter, setFilmSaveFilter] = useState([])
  function handleDelete(film) {
    props.handleMoviesDelete(film);
  }
  useEffect(() => {
    setFilmSaveFilter(props.savedMovies);
  }, []);

  const savedFilterMovies =
    props.filmsSaveFilter.length >= 1
      ? filmSaveFilter
      : props.savedMovies;
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
          return (
            <MoviesCard
              film={film}
              key={film.movieId}
              images={film.image || film.image.url}
            >
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
