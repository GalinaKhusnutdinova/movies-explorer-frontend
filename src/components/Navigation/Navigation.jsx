import React from "react";
import { NavLink } from "react-router-dom";
import Close from "../../images/close.png";

import "./Navigation.css";

export default function Navigation(props) {
  return (
    <section className={`navigation ${props.isOpen && "navigation_open"}`}>
      <div className="navigation__container">
        <button
          onClick={props.onClose}
          className="navigation__close"
          type="submit"
        >
          <img src={Close} alt="кнопка закрытия" />
        </button>
        <nav className="navigation__info">
          <NavLink to="/" className="navigation__link">
            Главная
          </NavLink>
          <NavLink to="/movies" className="navigation__link">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="navigation__link">
            Сохранённые фильмы
          </NavLink>
          <NavLink
            to="/profile"
            className="navigation__link link-grey link-grey__menu"
          >
            Аккаунт
          </NavLink>
        </nav>
      </div>
    </section>
  );
}
