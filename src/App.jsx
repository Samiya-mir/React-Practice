import React from "react";
import { Footer } from "./components/Footer";
import Headers from "./components/Header";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./pages/Home";
import { routes } from "./util/Routs";

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
export default App;
