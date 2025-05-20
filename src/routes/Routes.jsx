import { createBrowserRouter } from "react-router-dom";
import Portfolio from "../pages/Portfolio/Portfolio";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import Experience from "../pages/Experience/Experience";
import Blog from "../pages/Blog/Blog";
import SingleBlog from "../pages/SingleBlog/SingleBlog";
import App from "../App";
import Container from "../components/Container/Container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/projects",
        element: (
          <Container>
            <div className="pt-10">
              <Portfolio />
            </div>
          </Container>
        ),
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
