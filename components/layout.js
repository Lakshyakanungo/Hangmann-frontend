import React from "react";
import Lives from "./lives.js";
import Word from "./word";
import Letters from "./letters";
import Start from "./start";

export default function Layout({ session, guess, start, isRunning }) {
  return (
    <>
      <div className="game-wrapper">
        {isRunning && (
          <>
            <div className="left-pane">
              <Lives livesLeft={session.livesLeft} />
            </div>
            <div className="right-pane">
              <Word masked_word={session.maskedWord} />
              <Letters onSelect={guess} />
            </div>
          </>
        )}

        {isRunning && session.result && session.livesLeft && (
          <>
            <div className="message">You Won!</div>
          </>
        )}
        {isRunning && session.result && !session.livesLeft && (
          <>
            <div className="message">You Lost!</div>
          </>
        )}

        {!isRunning && <Start onStart={start} isRunning={isRunning} />}
      </div>
    </>
  );
}
