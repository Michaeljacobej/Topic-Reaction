import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Translate from "./pages/TranslateTest";
import { RefreshProvider } from "./components/RefreshContext";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> }, 
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <HomePage /> },
  { path: "/translate", element: <Translate /> },
]);

const App: React.FC = () => {
  return (
    <RefreshProvider>
      <RouterProvider router={router} />
    </RefreshProvider>
  );
};

export default App;
