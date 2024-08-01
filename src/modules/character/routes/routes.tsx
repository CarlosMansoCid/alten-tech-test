import { RouteObject } from "react-router-dom";
import { DetailsPage, MainPage } from "../pages/characters.pages";

const routes: RouteObject[] = [
  {
    path: "",
    element: <MainPage />,
  },
  {
    path: ":id/details",
    element: <DetailsPage />,
  },
];

export default routes;
