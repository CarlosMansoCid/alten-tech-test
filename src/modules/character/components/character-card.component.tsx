import { memo } from "react";
import { ICharacter } from "../interfaces/ICharacter";
import ImageIcon from "../../common/icons/image.icon";
import Favorite from "../../common/components/favorite.component";
import LongText from "../../common/components/long-text.component";
import { useCharacterCard } from "../hooks/useCharacterCard";
import "../styles/character-card.css";

interface ICharacterCard {
  character: ICharacter;
}

const CharacterCard = ({ character }: ICharacterCard) => {
  const { name, thumbnail } = character;
  const { navigate, isFavorite, toggleFavorite } = useCharacterCard(character);

  return (
    <article
      className="character_card__root"
      onClick={() => navigate(`/${character.id}/details`)}
    >
      <figure
        role="figure"
        className="character_card__image_container"
        style={{
          background: `url(${thumbnail?.path}.${thumbnail?.extension})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {!thumbnail?.path && <ImageIcon />}
      </figure>
      <div className="character_card__info_container">
        <LongText classnames="character_card__name_label" label={name} />
        <Favorite
          isFavorite={isFavorite}
          width={"12px"}
          height={"10.84px"}
          action={toggleFavorite}
        />
      </div>
    </article>
  );
};

export default memo(CharacterCard);
