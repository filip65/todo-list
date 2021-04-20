import React from "react";
import "../css/list.css";
import CheckButton from "./CheckButton";
import deleteIcon from "../images/icon-cross.svg";

function List({ theme, items, deleteItem, checkItem, deleteAllItems }) {
  return (
    <div className="list">
      <ul className="todo-list">
        {items.map((item) => {
          const { id, text, isDone } = item;
          return (
            <li
              key={id}
              className={`todo-item todo-item-${theme}`}
              onClick={() => checkItem(id)}
            >
              <div className="wrapper">
                <CheckButton
                  checked={isDone}
                  onClick={() => console.log("cikokot")}
                />
                <p className={isDone ? "item-done" : ""}>{text}</p>
              </div>
              <button
                onClick={() => {
                  deleteItem(id);
                }}
              >
                <img src={deleteIcon} alt="" />
              </button>
            </li>
          );
        })}
      </ul>
      <div className={`footer footer-${theme}`}>
        <p className="items-left">{`${items.length} ${
          items.length > 1 ? "items" : "item"
        }`}</p>
        <button className="clear-btn" onClick={deleteAllItems}>
          Clear all
        </button>
      </div>
    </div>
  );
}

export default List;
