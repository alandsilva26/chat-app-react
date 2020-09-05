import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  HashRouter,
  Link,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import LoginComponent from "./Login/login";
import SignupComponent from "./Signup/signup";
import DashboardComponent from "./Dashboard/dashboard";
import Home from "./Home/home";

const firebase = require("firebase");
require("firebase/firestore");
require("dotenv").config();

firebase.initializeApp({
  apiKey: process.env.REACT_APP_AUTH_TOKEN,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "chat-app-react-16a72.appspot.com",
  messagingSenderId: "609682809334",
  appId: "1:609682809334:web:183f3c1dad2ea16f7c27d7",
  measurementId: "G-6DQGWQ0YV7",
});

const routing = (
  <HashRouter basename="/">
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignupComponent} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/dashboard" component={DashboardComponent} />
    </div>
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
