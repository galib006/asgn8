import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Apps from "./Pages/Apps.jsx";
import Installation from "./Pages/Installation.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar></Navbar>
        <Home></Home>
      </>
    ),
  },
  {
    path: "/Apps",
    element: (
      <>
        <Navbar></Navbar>
        <Apps></Apps>
      </>
    ),
  },
  {
    path: "/Installation",
    element: (
      <>
        <Navbar></Navbar>
        <Installation></Installation>
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
