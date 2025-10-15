import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Apps from "./Pages/Apps.jsx";
import Installation from "./Pages/Installation.jsx";
import ApiContext from "./Components/Utilities/ApiContext.jsx";
import SingleApps from "./Components/SingleApps.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home></Home>
          </>
        ),
      },
      {
        path: "/Apps",
        element: (
          <>
            <Apps></Apps>
          </>
        ),
      },
      {
        path: "/Installation",
        element: (
          <>
            <Installation></Installation>
          </>
        ),
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/public/apps.json"),
        element: (
          <>
            <SingleApps></SingleApps>
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiContext>
      <RouterProvider router={router} />
    </ApiContext>
  </StrictMode>
);
