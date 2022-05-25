import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AutheContextProvider } from "./state/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AutheContextProvider>
    <App />
  </AutheContextProvider>
);
