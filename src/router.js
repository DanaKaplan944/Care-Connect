import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TaskPage from "./pages/TaskPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

export default router;
