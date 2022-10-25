import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../secreteRoom/Login/Login";
import Register from "../../secreteRoom/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
