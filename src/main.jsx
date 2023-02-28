import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initFirestore } from "./Firebase/config";
import "./index.css";

initFirestore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
