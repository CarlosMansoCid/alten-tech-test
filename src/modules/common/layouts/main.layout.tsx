import { memo } from "react";
import { Outlet } from "react-router-dom";
import NavbarContainer from "../containers/navbar.container";
import "../styles/main-layout.css";

const MainLayout = () => {
  return (
    <section>
      <NavbarContainer />
      <section className="main_layout__content_container">
        <Outlet />
      </section>
    </section>
  );
};

export default memo(MainLayout);
