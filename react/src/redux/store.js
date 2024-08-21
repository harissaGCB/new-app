import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Ensure you import thunk correctly
import rootReducer from "./rootreducer"; // Ensure the file name matches

const middleware = [thunk];

// Check if Redux DevTools is available in the window object
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options if needed
      })
    : (f) => f;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
