import { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavbarContainer from "../containers/navbar.container";
import SpinnerComponent from "../components/spinner.component";

const MainLayout = () => {
  return (
    <section>
      <NavbarContainer />
      <Suspense fallback={<SpinnerComponent />}>
        <section style={{ marginTop: "84px" }}>
          <Outlet />
        </section>
      </Suspense>
    </section>
  );
};

export default memo(MainLayout);
