import { Map, List } from "immutable";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

export const initial = Map({
    articles: List([]),
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, initial, composeEnhancers(applyMiddleware(thunk)));


