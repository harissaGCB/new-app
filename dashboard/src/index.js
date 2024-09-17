import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <HashRouter>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </HashRouter>,
  document.getElementById("root")
);
