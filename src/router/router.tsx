import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../modules/common/layouts/main.layout";
import { HeroesRoutes } from "../modules/heroes/routes";
import { ErrorPage, NotFoundPage } from "../modules/common/pages/common.pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [...HeroesRoutes],
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
