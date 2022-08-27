import React, { useState } from 'react'
import FromBlock from "../FormBlock/FormBlock";
import './Login.css';

export default function Login(props) {
  const [formParams, setFormParams] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleLogin({
      email: formParams.email,
      password: formParams.password,
    });
  };
  return (
      <section className="register">
        <FromBlock
          title="Рады видеть!"
          formName="login"
          buttonText="Войти"
          subtitle="Ещё не зарегистрированы?"
          toLink="/signup"
          namelink="Регистрация"
          handleSubmit={handleSubmit}
          isOpen={props.isOpen}
          message={props.message}

        >
          <label className="register__label">
            E-mail
            <input
              className="register__item"
              name="email"
              type="text"
              id="email"
              required
              minLength="2"
              maxLength="40"
              value={formParams.email}
              onChange={handleChange}
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
              value={formParams.password}
              onChange={handleChange}
            />
            <span className="register__message"></span>
          </label>
        </FromBlock>
      </section>
  );
}
