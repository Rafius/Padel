import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Home from "@/components/Home";
import configureStore from "./redux/store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
