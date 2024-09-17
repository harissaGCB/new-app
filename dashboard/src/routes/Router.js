import Login from "../pages/login/Login.js";
import Dashboard from "../pages/dashboard/Dashboard.js";
import News from "../pages/news/News.js";

const Router = [
  {
    path: "/",
    exact: true,
    element: <Login />,
  },
  {
    path: "/login",
    exact: true,
    element: <Login />,
  },
  {
    path: "/dashboard",
    exact: true,
    element: <Dashboard />,
  },
  {
    path: "/news",
    exact: true,
    element: <News />,
  },
];

export default Router;
