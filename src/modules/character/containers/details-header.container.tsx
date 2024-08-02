import { memo } from "react";
import { ICharacter } from "../interfaces/ICharacter";
import ImageIcon from "../../common/icons/image.icon";
import LongTextComponent from "../../common/components/long-text.component";
import Favorite from "../../common/components/favorite.component";
import { useCharacterCard } from "../hooks/useCharacterCard";
import "../styles/details-header.css";

interface IDetailsHeaderContainer {
  character: ICharacter;
}

const DetailsHeaderContainer = ({ character }: IDetailsHeaderContainer) => {
  const { thumbnail, name, description } = character;
  const { isFavorite, toggleFavorite } = useCharacterCard(character);
  return (
    <article className="details_header__info_container">
      <div className="details_header__image_container">
        <figure
          className="details_header__image"
          style={{
            background: `url(${thumbnail?.path}.${thumbnail?.extension})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {!thumbnail?.path && <ImageIcon />}
        </figure>
      </div>
      <article className="details_header__details_container">
        <div className="details_header__title_and_favorite_container">
          <LongTextComponent
            label={name}
            isTitle={true}
            classnames="details_header__title"
          />
          <Favorite
            isFavorite={isFavorite}
            action={toggleFavorite}
            width={"24px"}
            height={"21.68px"}
          />
        </div>
        <p className="details_header__description">{description || ""}</p>
      </article>
    </article>
  );
};

export default memo(DetailsHeaderContainer);
