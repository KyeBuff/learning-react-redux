import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import { BrowserRouter as Router } from "react-router-dom";

// import the App component
import App from "./App";



import { initial, store } from "./data/state";

let articles = store.getState().get("articles");

// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Router>
        <App articles={ articles } />
    </Router>,
    document.getElementById("root"),
);
