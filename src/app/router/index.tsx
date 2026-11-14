import { createBrowserRouter, Navigate } from "react-router-dom";

import { LoginPage } from "@/pages/login";
import { ForgotPasswordPage } from "@/pages/forgot-password";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);
