import "./FormBlock.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import TextMessage from "../TextMessage/TextMessage";

export default function FormBlock(props) {
  console.log(props.isValid);
  return (
    <>
      <Header name="register" />
      <div className="register__container">
        <h3 className="register__title">{props.title}</h3>
        <form
          method="get"
          name={props.formName}
          className={`register__form register__form_${props.formName}`}
          onSubmit={props.handleSubmit}
          noValidate
        >
          {props.children}

          <TextMessage
            name={props.formName}
            isOpen={props.isOpen}
            message={props.message}
          />

          <button
            disabled={props.disabled}
            type="submit"
            className={`register__save-button register__save-button_${props.formName} register__save-button_${props.isValid}`}
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
