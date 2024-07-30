import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../modules/common/layouts/main.layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "", element: <p>Test</p> }],
  },
  {
    path: "*",
    element: <>Not found 404</>,
  },
]);
