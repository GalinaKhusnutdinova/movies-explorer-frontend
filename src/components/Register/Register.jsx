import React from "react";
import FromBlock from "../FormBlock/FormBlock";
import "./Register.css";

export default function Register(props) {
  return (
      <section className="register">
        <FromBlock
          title="Добро пожаловать!"
          formName="register"
          buttonText="Зарегистрироваться"
          subtitle="Уже зарегистрированы?"
          toLink="/signin"
          namelink="Войти"
        >
          <label className="register__label">
            Имя
            <input
              className="register__item"
              name="name"
              type="text"
              id="name"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="register__message"></span>
          </label>
          <label className="register__label">
            E-mail
            <input
              className="register__item"
              name="E-mail"
              type="text"
              id="email"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="register__message"></span>
          </label>
          <label className="register__label">
            Пароль
            <input
              className="register__item "
              name="password"
              type="password"
              id="password"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="register__message"></span>
          </label>
        </FromBlock>
      </section>
  );
}
