import { memo } from "react";
import "../styles/favorites-counter-container.css";

interface IFavoriteLabel {
  count: number | string;
}
const FavoriteLabel = ({ count }: IFavoriteLabel) => {
  return <p className="favorite_counter__label">{count}</p>;
};

export default memo(FavoriteLabel);
