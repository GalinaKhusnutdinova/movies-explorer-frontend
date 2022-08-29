import React from "react";

import "./FilterCheckbox.css";

export default function FilterCheckbox(props) {
  return (
    <>
      <input
        onChange={props.changeCheckbox}
        checked={props.checked}
        type="checkbox"
        className="custom-checkbox"
        id="short"
        name="short"
      ></input>
      <label htmlFor="short"></label>
      <p className="custom-checkbox__title">Короткометражки</p>
    </>
  );
}
