import { memo } from "react";
import Favorite from "../components/favorite.component";
import NavbarLabel from "../components/navbar-label.component";
import { useCharacterContext } from "../../character/contexts/useCharacterContext";
import "../styles/favorites-counter-container.css";
import { useLocation, useNavigate } from "react-router-dom";

const FavoriteCounterContainer = () => {
  const { favorites, toggleShowFavorites, showFavorites } =
    useCharacterContext();
  const location = useLocation();
  const navigate = useNavigate();

  const action = () => {
    const hasFavorites = favorites.length > 0;
    if (hasFavorites) {
      if (location.pathname !== "/") {
        navigate("/");
        toggleShowFavorites(true);
      } else {
        toggleShowFavorites(!showFavorites);
      }
    } else {
      toggleShowFavorites(false);
    }
  };
  return (
    <div
      className="favorite_counter__root"
      onClick={action}
      role="button"
      data-testid="favorites-counter-container"
      aria-disabled={favorites.length > 0}
    >
      <Favorite action={action} isFavorite={favorites.length > 0} />
      <NavbarLabel
        label={favorites.length || 0}
        data-testid="favorites-counter-label"
      />
    </div>
  );
};

export default memo(FavoriteCounterContainer);
