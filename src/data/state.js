import { Map, List } from "immutable";

import { createStore } from "redux";

import reducer from "./reducer";

export const initial = Map({

    articles: List([

        Map({
            id: 1,
            title: "Post #1",
            article: "<p>Blah blah blah</p>",
            comments: List([
                Map({ email: "bob@bob.com", comment: "Great blog post" }),
            ]),
            tags: List(["blah", "monkeys"]),
        }),

        Map({
            id: 2,
            title: "Post #2",
            article: "<p>Blah blah blah</p>",
            comments: List([
                Map({ email: "sandi@sandi.com", comment: "I disagree, but not in an agressive and unpleasant manner" }),
            ]),
            tags: List(["blah", "fish-fingers"]),
        })
    ])
});

export const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

