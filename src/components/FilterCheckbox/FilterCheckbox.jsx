import React from "react";

import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  return (
    <>
      <input
        type="checkbox"
        class="custom-checkbox"
        id="happy"
        name="happy"
        value="yes"
      ></input>
      <label for="happy"></label>
      <p className="custom-checkbox__title">Короткометражки</p>
    </>
  );
}
