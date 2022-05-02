import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./styles/main.scss";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(<App />);

// const App = () => {
//   <div>Hello world</div>;
// };
// ReactDOM.render(<App />, document.getElementById("app"));
