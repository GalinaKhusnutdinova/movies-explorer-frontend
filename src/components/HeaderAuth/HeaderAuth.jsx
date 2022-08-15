import React from "react";
import "./HeaderAuth.css";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import  Menu from "../../images/menu.svg"

export default function HeaderAuth() {
  return (
    <Header>
			<button type="submit" className="header__buttonAuth">
			<img src={Menu} alt="меню" className="header-auth__menu" />
			</button>
      <nav className="header__info header__info_menu-auth">
        <NavLink to="/movies" className="header__link header__link_auth">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="header__link header__link_auth">
          Сохранённые фильмы
        </NavLink>
        <NavLink to="/profile" className="header__link link-grey">
          Аккаунт
        </NavLink>
      </nav>
    </Header>
  );
}
