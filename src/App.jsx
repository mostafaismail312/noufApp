import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

import MasterLayOut from "./components/MasterLayOut/MasterLayOut";
import NotFound from "./Shared/NotFound/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MasterLayOut />,
      errorElement: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
