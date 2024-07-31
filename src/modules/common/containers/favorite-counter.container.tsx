import { memo } from "react";
import Favorite from "../components/favorite.component";
import "../styles/favorites-counter-container.css";
import NavbarLabel from "../components/navbar-label.component";

const FavoriteCounterContainer = () => {
  return (
    <div className="favorite_counter__root">
      <Favorite isActive={true} />
      <NavbarLabel label="3" />
    </div>
  );
};

export default memo(FavoriteCounterContainer);
