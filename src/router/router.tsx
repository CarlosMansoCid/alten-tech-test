import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../modules/common/layouts/main.layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "", element: <App /> }],
  },
  {
    path: "*",
    element: <>Not found 404</>,
  },
]);
