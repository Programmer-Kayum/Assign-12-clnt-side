import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Details from "../../MainPart/Details/Details";
import Login from "../../secreteRoom/Login/Login";
import PrivateRoute from "../../secreteRoom/PrivateRoute/PrivateRoute";
import Register from "../../secreteRoom/Register/Register";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import ErrorPage from "../ErrorPage/ErrorPage";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Premium from "../Premium/Premium";

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
        path: "/faq",
        element: <Faq></Faq>,
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
        element: <Details></Details>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/details/${params.id}`);
        },
      },
      {
        path: "/premium",
        element: (
          <PrivateRoute>
            <Premium></Premium>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
