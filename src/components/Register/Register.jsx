import React from "react";
import FromBlock from "../FormBlock/FormBlock";
import "./Register.css";
import { useFormWithValidation } from "../../hooks/form";
import { useState } from "react";

export default function Register(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [disabled, setDisabled] = useState(!isValid);
  console.log(isValid);

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name, email, password } = values;
    props.handleRegister({ name, email, password });
  };

  function handleChange2(e) {
    handleChange(e);

    if (isValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

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
        disabled={disabled}
        isValid={disabled ? "" : "non-disabled"}
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
            value={values.name || ""}
            onChange={handleChange2}
          />
          <span className="register__message">{errors.name}</span>
        </label>
        <label className="register__label">
          E-mail
          <input
            className="register__item"
            name="email"
            type="email"
            id="email"
            required
            minLength="2"
            maxLength="40"
            value={values.email || ""}
            onChange={handleChange2}
          />
          <span className="register__message">{errors.email}</span>
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
            maxLength="20"
            value={values.password || ""}
            onChange={handleChange2}
          />
          <span className="register__message">{errors.password}</span>
        </label>
      </FromBlock>
    </section>
  );
}
