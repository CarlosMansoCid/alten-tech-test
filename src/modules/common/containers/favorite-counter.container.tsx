import { memo } from "react";
import Favorite from "../components/favorite.component";
import "../styles/favorites-counter-container.css";
import FavoriteLabel from "../components/favorite-label.component";

const FavoriteCounterContainer = () => {
  return (
    <div className="favorite_counter__root">
      <Favorite isActive={true} />
      <FavoriteLabel count={3} />
    </div>
  );
};

export default memo(FavoriteCounterContainer);
