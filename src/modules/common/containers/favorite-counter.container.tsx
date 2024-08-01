import { memo } from "react";
import Favorite from "../components/favorite.component";
import "../styles/favorites-counter-container.css";
import NavbarLabel from "../components/navbar-label.component";
import { useNavigate } from "react-router-dom";

const FavoriteCounterContainer = () => {
  const navigate = useNavigate();
  return (
    <div
      className="favorite_counter__root"
      onClick={() => navigate("/favorites")}
    >
      <Favorite isFavorite={true} />
      <NavbarLabel label="3" />
    </div>
  );
};

export default memo(FavoriteCounterContainer);
