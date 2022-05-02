import React, { useState } from "react";

export default function Start({ onStart, isRunning }) {
  const [name, setName] = useState("");
  return (
    <div className="container">
      <input
        className="enter"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      ></input>
      <br /> <br />
      <br />
      <button
        onClick={() => onStart(name)}
        className={`start-button ${isRunning && "display-none"}`}
      >
        Start
      </button>
    </div>
  );
}
