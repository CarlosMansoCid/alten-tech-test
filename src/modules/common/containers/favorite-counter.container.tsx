import { memo } from "react";
import Favorite from "../components/favorite.component";
import NavbarLabel from "../components/navbar-label.component";
import { useCharacterContext } from "../../character/contexts/useCharacterContext";
import "../styles/favorites-counter-container.css";

const FavoriteCounterContainer = () => {
  const { favorites, toggleShowFavorites, showFavorites } =
    useCharacterContext();
  const action = () =>
    favorites.length > 0
      ? toggleShowFavorites(!showFavorites)
      : toggleShowFavorites(false);
  return (
    <div className="favorite_counter__root" onClick={action}>
      <Favorite action={action} isFavorite={favorites.length > 0} />
      <NavbarLabel label={favorites.length || 0} />
    </div>
  );
};

export default memo(FavoriteCounterContainer);
