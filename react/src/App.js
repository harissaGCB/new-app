import React from "react";
import PageSwitch from "./pages/page_switch";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <div className="App">
        <Router basename="/">
          <Provider store={Store}>
            <PageSwitch />
          </Provider>
        </Router>
      </div>
    </>
  );
}

export default App;
