import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  memo,
  MouseEvent,
} from "react";
import FavoriteIcon from "../icons/favorite.icon";
import OutlinedHeartIcon from "../icons/outlined-heart.icon";
import "../styles/favorites-counter-container.css";

interface IFavorite
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isFavorite: boolean;
  width?: string | number;
  height?: string | number;
  action?: () => void;
  colorOnFavoriteHover?: string;
}

const Favorite = ({
  isFavorite = false,
  width = "24px",
  height = "21.68px",
  action = () => {},
  ...rest
}: IFavorite) => {
  const onAction = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    action();
  };

  return (
    <button
      className="favorite_counter__icon_container"
      onClick={onAction}
      style={{
        width,
        height,
        color: isFavorite
          ? "var(--primary-color)"
          : "var(--font-color-contrast)",
      }}
      {...rest}
    >
      {isFavorite ? <FavoriteIcon /> : <OutlinedHeartIcon />}
    </button>
  );
};
export default memo(Favorite);
