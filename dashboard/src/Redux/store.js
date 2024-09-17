import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import RootReducer from "./rootreducer";

const reducer = RootReducer;

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
