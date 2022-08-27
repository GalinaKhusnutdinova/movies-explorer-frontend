import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
// import Header from "../Header/Header";
// import Navigation from "../Navigation/Navigation";
// import Footer from "../Footer/Footer";
import "./SavedMovies.css";

export default function SavedMovies(props) {
  return (
    // <main>
      <main className="movies-saved">
        <SearchForm />
        <MoviesCardList name='saved'>
        {props.filterMovies.map((film) => (
      <MoviesCard film={film} key={film.id}>
            <button
              type="button"
              aria-label="удалить"
              className="card__button card__button_delete "
            ></button>
          </MoviesCard>
      ))}
          
          
        </MoviesCardList>
      </main>
    // </main>
  );
}
