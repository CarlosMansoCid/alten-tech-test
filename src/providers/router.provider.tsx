import { memo } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";

const MainRouterProvider = () => {
  return <RouterProvider router={router} />;
};
export default memo(MainRouterProvider);
