import React from "react";

export default function Word({ masked_word }) {
  return (
    <div className="display-flex justify-content-around word-flex">
      {masked_word.map((letter) => (
        <div className="word">{letter}</div>
      ))}
    </div>
  );
}
