import { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavbarContainer from "../containers/navbar.container";
import SpinnerComponent from "../components/spinner.component";
import { CharacterContextProvider } from "../../character/contexts/charactersContextProvider";

const MainLayout = () => {
  return (
    <section>
      <CharacterContextProvider>
        <NavbarContainer />
        <Suspense fallback={<SpinnerComponent />}>
          <section style={{ marginTop: "84px" }}>
            <Outlet />
          </section>
        </Suspense>
      </CharacterContextProvider>
    </section>
  );
};

export default memo(MainLayout);
