import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../modules/common/layouts/main.layout";
import { ErrorPage } from "../modules/common/pages/common.pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "", element: <p>Test</p> }],
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <>Not found 404</>,
  },
]);
