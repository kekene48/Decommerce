import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApiCode } from "./utils/ApiCode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiCode>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ApiCode>
);
