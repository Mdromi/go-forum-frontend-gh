import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import './index.css';
import store from './store/index';
import setAuthorizationToken from './authorization/authorization';
import { LOGIN_SUCCESS } from './store/modules/auth/authTypes';

//when the page reloads, the auth user is still set
if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  let userData = localStorage.getItem('user_data') == null ? null : JSON.parse(localStorage.getItem('user_data'));
  store.dispatch({ type: LOGIN_SUCCESS, payload: userData }); //provided he has a valid token 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}><App /></Provider>
);

serviceWorker.unregister();