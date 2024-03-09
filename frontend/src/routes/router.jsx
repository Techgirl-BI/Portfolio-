import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Aboutme from "../pages/Aboutme";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Aboutme />,
      },
      {
        path: "/project",
        element: <Projects/>
      },
      {
        path: "contact",
        element: <Contacts/>
      }
    ],
  },
]);
export default router;
