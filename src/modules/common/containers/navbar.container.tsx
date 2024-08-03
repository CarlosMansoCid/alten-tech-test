import { memo } from "react";
import LogoComponent from "../components/logo.component";
import FavoriteCounterContainer from "./favorite-counter.container";
import ChangeLangContainer from "./change-lang.container";
import "../styles/navbar-container.css";

const NavbarContainer = () => {
  return (
    <header className="navbar_container__root">
      <LogoComponent />
      <div className="navbar_actions__container">
        <ChangeLangContainer />
        <FavoriteCounterContainer />
      </div>
    </header>
  );
};

export default memo(NavbarContainer);
