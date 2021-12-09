import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Home from "@/pages/Home";
import configureStore from "./redux/store";
import "typeface-roboto";
import { GlobalStyle } from "./MainStyled";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
