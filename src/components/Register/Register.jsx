import React from "react";
import { useState } from "react";
import FromBlock from "../FormBlock/FormBlock";
import "./Register.css";

export default function Register(props) {
  const [formParams, setFormParams] = useState({
    name: "",
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
    let {name, email, password } = formParams;
    props.handleRegister({name, email, password });
  };
  return (
  
      <section className="register">
        <FromBlock
          title="Добро пожаловать!"
          formName="register"
          buttonText="Зарегистрироваться"
          subtitle="Уже зарегистрированы?"
          toLink="/signin"
          namelink="Войти"
          handleSubmit={handleSubmit}
          isOpen={props.isOpen}
          message={props.message}
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
              value={formParams.name}
              onChange={handleChange}
            />
            <span className="register__message"></span>
          </label>
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
