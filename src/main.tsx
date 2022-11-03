import React from "react";
import ReactDOM from "react-dom/client";

import * as styled from "./styles/global";
import "./styles/colors";
import "./styles/shadow";
import App from "./core/App";
import { Pokemons } from "./data/pokemons";

styled.globalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
