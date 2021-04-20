import React from "react";
import "../css/checkButton.css";
import iconCheck from "../images/icon-check.svg";

function CheckButton({ checked }) {
  return (
    <button className={`${checked ? "button checked" : "button"}`}>
      {checked && <img src={iconCheck} alt="" />}
    </button>
  );
}

export default CheckButton;
