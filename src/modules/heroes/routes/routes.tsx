import { RouteObject } from "react-router-dom";
import { DetailsPage, FavoritesPage, MainPage } from "../pages/heroes.pages";

const routes: RouteObject[] = [
  {
    path: "",
    element: <MainPage />,
  },
  {
    path: "favorites",
    element: <FavoritesPage />,
  },
  {
    path: ":id/details",
    element: <DetailsPage />,
  },
];

export default routes;
