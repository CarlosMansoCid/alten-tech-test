import { memo } from "react";
import "../styles/navbar-container.css";
import LogoComponent from "../components/logo.component";
import FavoriteCounterContainer from "./favorite-counter.container";

const NavbarContainer = () => {
  return (
    <section className="navbar_container__root">
      <LogoComponent />
      <FavoriteCounterContainer />
    </section>
  );
};

export default memo(NavbarContainer);
