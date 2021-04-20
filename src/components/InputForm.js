import React, { useState } from "react";
import "../css/inputForm.css";
import CheckButton from "./CheckButton";

function InputForm({ theme, addItem }) {
  const [inputText, setInputText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime().toString(),
      text: inputText,
      isDone: false,
    };
    addItem(newItem);
    setInputText("");
  };

  return (
    <div className={`inputForm inputForm-${theme}`}>
      <CheckButton checked={false} />
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Create some todo..."
        />
      </form>
    </div>
  );
}

export default InputForm;
