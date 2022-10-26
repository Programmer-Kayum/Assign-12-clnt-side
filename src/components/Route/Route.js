import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Details from "../../MainPart/Details/Details";
import Login from "../../secreteRoom/Login/Login";
import PrivateRoute from "../../secreteRoom/PrivateRoute/PrivateRoute";
import Register from "../../secreteRoom/Register/Register";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
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
        path: "/courses",
        element: <Courses></Courses>,
        loader: async () => {
          return fetch("http://localhost:5000/alltopics");
        },
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/details/${params.id}`);
        },
      },
    ],
  },
]);

export default router;
