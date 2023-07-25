import React from "react";
import ReactDOM from "react-dom";
// import App from './App.jsx';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Routes from './Routes';
import AppRoutes from "./Route";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store/index";
import setAuthorizationToken from "./authorization/authorization";
import { LOGIN_SUCCESS } from "./store/modules/auth/authTypes";


if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  const userDataString = localStorage.getItem("user_data");
  let userData = null;

  if (userDataString) {
    try {
      userData = JSON.parse(userDataString);
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }

  store.dispatch({ type: LOGIN_SUCCESS, payload: userData });
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}><App /></Provider>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

serviceWorker.unregister();
