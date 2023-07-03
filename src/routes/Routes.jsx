import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Portfolio from "../pages/Portfolio/Portfolio";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
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
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element:<Contact/>
      }
    ],
  },
]);

export default router;
