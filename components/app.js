import React, { useState } from "react";
import Layout from "./layout";
import { create_session, play_in_session } from "../api/sessions";

const MAX_LIVES = 6;
export default function Game() {
  const [session, setSession] = useState(null);
  const isRunning = !!session;
  // && session.livesLeft
  // const isRunning = actualWord && lives > 0 && !isWon;

  const guess = async (letter) => {
    const updated_session = await play_in_session(letter, session.id);
    console.log(updated_session, "<--updated session");
    setSession(updated_session);
  };
  const start = async (name) => {
    console.log("working");
    const new_session = await create_session(name);
    console.log(new_session, "<--new session");
    setSession(new_session);
  };

  return (
    <>
      <Layout
        session={session}
        guess={guess}
        start={start}
        isRunning={isRunning}
      />
    </>
  );
}
