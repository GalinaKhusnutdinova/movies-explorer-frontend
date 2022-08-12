import React from "react";
import "./FormBlock.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function FormBlock(props) {
  return (
    <>
      <div className="register__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="логотип сайта" />
        </Link>
        <h3 className="register__title">{props.title}</h3>
        <form
          method="get"
          name={props.formName}
          className={`register__form register__form_${props.formName}`}
        >
          {props.children}
          <button
            type="submit"
            className={`register__save-button register__save-button_${props.formName}`}
          >
            {props.buttonText}
          </button>
        </form>
        <div className="register__links">
          <p className="register__subtitle">{props.subtitle}</p>
          <Link to={props.toLink} className="register__link">
            {props.namelink}
          </Link>
        </div>
      </div>
    </>
  );
}
