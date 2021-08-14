import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "../src/app/App";
import store from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
