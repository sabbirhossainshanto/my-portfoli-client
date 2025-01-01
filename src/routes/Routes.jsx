import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Portfolio from "../pages/Portfolio/Portfolio";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import Experience from "../pages/Experience/Experience";
import Blog from "../pages/Blog/Blog";
import SingleBlog from "../pages/SingleBlog/SingleBlog";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:blogId",
        element: <SingleBlog />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
    ],
  },
]);

export default router;
