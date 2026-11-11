import { createBrowserRouter } from "react-router";
import { WelcomePage } from "@/pages/welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "*",
    element: (
      <main>
        <h1>404 — Page not found</h1>
        <a href="/">Back to home</a>
      </main>
    ),
  },
]);
