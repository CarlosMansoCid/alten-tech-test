import { memo } from "react";
import FavoriteIcon from "../icons/favorite.icon";

interface IFavorite {
  isActive: boolean;
}

const Favorite = ({ isActive = false }: IFavorite) => {
  return (
    <div className="favorite_counter__icon_container">
      {isActive ? <FavoriteIcon /> : <></>}
    </div>
  );
};
export default memo(Favorite);
