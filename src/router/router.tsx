import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../modules/common/layouts/main.layout";
import { CharactersRoutes } from "../modules/character/routes";
import { ErrorPage, NotFoundPage } from "../modules/common/pages/common.pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [...CharactersRoutes],
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
