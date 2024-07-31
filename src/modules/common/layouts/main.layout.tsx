import { memo } from "react";
import { Outlet } from "react-router-dom";
import NavbarContainer from "../containers/navbar.container";

const MainLayout = () => {
  return (
    <section>
      <NavbarContainer />
      <Outlet />
    </section>
  );
};

export default memo(MainLayout);
