import React from "react";
import "../css/header.css";
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";

function Header({ theme, changeTheme }) {
  return (
    <div className="header">
      <h1 className="todo-title">TODO</h1>
      <button className="toogle-btn" onClick={changeTheme}>
        <img src={theme === "dark" ? iconSun : iconMoon} alt="" />
      </button>
    </div>
  );
}

export default Header;
