import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> }, 
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <HomePage /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
