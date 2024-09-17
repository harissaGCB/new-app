import { useRoutes } from "react-router-dom";
import Router from "./routes/Router.js";
import "./App.css";

const App = () => {
  const routing = useRoutes(Router);

  return <div>{routing}</div>;
};

export default App;
