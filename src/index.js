import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

// Replace your existing ReactDOM.render code with createRoot
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
