import React from "react";
import { useState, useEffect } from "react";
// import ProfileForm from "../ProfileForm/ProfileForm.jsx"
import { CurrentUserContext } from "../../context/CurrentUserContext";

import "./Profile.css";

export default function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setNameUse(currentUser.name);
    console.log(666)
  }, [currentUser]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameUse, setNameUse] = useState("");
  const [disabled, setDisabled] = useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
    setDisabled(true);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
    setDisabled(true);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      email,
    });

    setDisabled(false);
  }

  return (
    <main className="profile">
      <div className="profile__conteiner">
        <h2 className="profile__title">{`Привет, ${nameUse || ""}`}!</h2>
        <form method="get" name="profile" className="prifile__form ">
          <label className="profile__label">
            Имя
            <input
              className="profile__item"
              name="name"
              type="text"
              id="name"
              required
              minLength="2"
              maxLength="40"
              value={name || ""}
              onChange={handleChangeName}
              disabled={props.disabled}
            />
          </label>
          <label className="profile__label">
            E-mail
            <input
              className="profile__item"
              name="E-mail"
              type="text"
              id="email"
              required
              minLength="2"
              maxLength="40"
              value={email || ""}
              onChange={handleChangeEmail}
              disabled={props.disabled}
            />
          </label>
          <button
            type="button"
            className={`profile__button ${props.isOpen && "button-none"}`}
            onClick={props.handleEditPrifile}
          >
            Редактировать
          </button>
        </form>
        <div className="profile__conteiner-button">
          <button
            type="submit"
            className={`profile__button profile__button_exit ${
              props.isOpen && "button-none"
            }`}
            onClick={props.singOut}
          >
            Выйти из аккаунта
          </button>
          <p className={`profile__message ${!props.isOpen && "button-none"}`}>
            {props.profileMessage}
          </p>
          <button
            type="submit"
            className={`profile__button_save ${
              !props.isOpen && "button-none"
            } profile__button_save-${disabled && "active"}`}
            onClick={handleSubmit}
            disabled={disabled ? false : true}
          >
            Сохранить
          </button>
        </div>
      </div>
    </main>
  );
}
