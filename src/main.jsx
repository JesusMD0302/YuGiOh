import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CardProvider } from "./context/CardContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CardProvider>
  </React.StrictMode>
);
