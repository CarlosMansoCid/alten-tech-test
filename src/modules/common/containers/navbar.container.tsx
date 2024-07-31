import { memo } from "react";
import "../styles/navbar-container.css";
import LogoComponent from "../components/logo.component";
import FavoriteCounterContainer from "./favorite-counter.container";
import ChangeLangContainer from "./change-lang.container";

const NavbarContainer = () => {
  return (
    <section className="navbar_container__root">
      <LogoComponent />
      <div className="navbar_actions__container">
        <ChangeLangContainer />
        <FavoriteCounterContainer />
      </div>
    </section>
  );
};

export default memo(NavbarContainer);
