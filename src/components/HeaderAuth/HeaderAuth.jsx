import React from "react";
import "./HeaderAuth.css";
import Header from "../Header/Header";
import { Link, NavLink } from "react-router-dom";
import  Menu from "../../images/icon-main.png"

export default function HeaderAuth() {
  return (
    <Header>
			<Link>
			<img src={Menu} alt="" className="header-auth__menu" />
			</Link>
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
