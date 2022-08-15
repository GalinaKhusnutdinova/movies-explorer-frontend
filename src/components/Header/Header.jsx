import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
// import img from "../../images/IMG.svg";

export default function Header(props) {
  return (
    <>
      <header className="header">
        <section className={`header__conteiner header__conteiner_${props.name}`}>
          <Link className="header__link-logo" to="/">
            <img className="header__logo" src={logo} alt="логотип сайта" />
          </Link>
          {props.children}
        </section>
      </header>
    </>
  );
}
