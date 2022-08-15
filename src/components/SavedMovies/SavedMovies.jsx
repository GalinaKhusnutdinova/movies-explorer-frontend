import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
// import Header from "../Header/Header";
// import Navigation from "../Navigation/Navigation";
// import Footer from "../Footer/Footer";
import './SavedMovies.css';


export default function SavedMovies() {
  return (
    <section className="movies-saved">
      <SearchForm />
      <MoviesCardList>
        <MoviesCard>
      <button
          type="button"
          aria-label="удалить"
          className='card__button card__button_delete '></button>
        </MoviesCard>
        <MoviesCard>
      <button
          type="button"
          aria-label="удалить"
          className='card__button card__button_delete '></button>
        </MoviesCard>
        <MoviesCard>
      <button
          type="button"
          aria-label="удалить"
          className='card__button card__button_delete '></button>
        </MoviesCard>
        <MoviesCard>
      <button
          type="button"
          aria-label="удалить"
          className='card__button card__button_delete '></button>
        </MoviesCard>
        <MoviesCard>
      <button
          type="button"
          aria-label="удалить"
          className='card__button card__button_delete '></button>
        </MoviesCard>
        <MoviesCard>
      <button
          type="button"
          aria-label="удалить"
          className='card__button card__button_delete '></button>
        </MoviesCard>
        <MoviesCard>
      <button
          type="button"
          aria-label="удалить"
          className='card__button card__button_delete '></button>
        </MoviesCard>
        <MoviesCard>
      <button
          type="button"
          aria-label="удалить"
          className='card__button card__button_delete '></button>
        </MoviesCard>
        
      </MoviesCardList>

    </section>
  )
}
