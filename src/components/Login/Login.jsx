import React from 'react'
import FromBlock from "../FormBlock/FormBlock";

import './Login.css';

export default function Login() {
  return (
      <section className="register">
        <FromBlock
          title="Рады видеть!"
          formName="login"
          buttonText="Войти"
          subtitle="Ещё не зарегистрированы?"
          toLink="/signup"
          namelink="Регистрация"
        >
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
