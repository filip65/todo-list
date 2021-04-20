import React from "react";
import "../css/options.css";

function Options({ theme, filterState, setFilterState }) {
  const hadnleClick = (e) => {
    setFilterState(e.target.innerHTML);
    e.target.classList.toggle("active");
  };

  const buttonText = ["all", "active", "completed"];

  return (
    <div className={`options options-${theme}`}>
      <div className={`options-center .${filterState}`}>
        {buttonText.map((btnText, index) => {
          return (
            <button
              key={index}
              className={btnText === filterState ? "active" : ""}
              onClick={hadnleClick}
            >
              {btnText}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Options;
