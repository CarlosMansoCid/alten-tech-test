import { lazy } from "react";

export const MainPage = lazy(() => import("./main.page"));
export const FavoritesPage = lazy(() => import("./favorites.page"));
export const DetailsPage = lazy(() => import("./details-page"));
