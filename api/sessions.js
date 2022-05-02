const BASE_URL = "https://sheltered-journey-51620.herokuapp.com/sessions";

async function create_session(name) {
  const response = await fetch(`${BASE_URL}/`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      name: name,
    }),
  });
  const session = response.json();
  return session;
}

async function play_in_session(letter, session_id) {
  const response = await fetch(`${BASE_URL}/${session_id}/play`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      letter: letter,
    }),
  });
  const session = response.json();
  return session;
}

module.exports = {
  create_session,
  play_in_session,
};
