import React from "react";
// import ProfileForm from "../ProfileForm/ProfileForm.jsx"

import "./Profile.css";

export default function Profile(props) {
  console.log(props);
  return (
    <main className="profile">
      <div className="profile__conteiner">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form method="get" name="profile" className="prifile__form">
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
            />
          </label>
        </form>
        <div className="profile__conteiner-button">
          <button
            type="submit"
            className={`profile__button ${!props.isOpen && "button-none"}`}
          >
            Редактировать
          </button>
          <button
            type="submit"
            className={`profile__button profile__button_exit ${
              !props.isOpen && "button-none"
            }`}
          >
            Выйти из аккаунта
          </button>
          <p
            className={`profile__message ${props.isOpen && "button-none"}`}
          ></p>
          <button
            type="submit"
            className={`profile_button-save ${props.isOpen && "button-none"}`}
          >
            Сохранить
          </button>
        </div>
      </div>
    </main>
  );
}
