import React from "react";
import "./HeaderAuth.css";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import Menu from "../../images/menu.svg";

export default function HeaderAuth(props) {
  return (
    <Header name={props.name}>
      <button
        onClick={props.onHeaderAuth}
        type="submit"
        className="header__buttonAuth"
      >
        <img src={Menu} alt="меню" className="header-auth__menu" />
      </button>
      <nav className="header__info header__info_menu-auth">
        <NavLink to="/movies" className={`header__link header__link_${props.name} header__link_auth`}>
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className={`header__link header__link_${props.name} header__link_auth`}>
          Сохранённые фильмы
        </NavLink>
        <NavLink to="/profile" className={`header__link link-grey link-grey_${props.name}`}>
          Аккаунт
        </NavLink>
      </nav>
    </Header>
  );
}
