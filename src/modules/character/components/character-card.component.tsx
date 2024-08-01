import { memo } from "react";
import { ICharacter } from "../interfaces/ICharacter";
import "../styles/character-card.css";
import ImageIcon from "../../common/icons/image.icon";
import Favorite from "../../common/components/favorite.component";
import LongText from "../../common/components/long-text.component";
import { useNavigate } from "react-router-dom";

interface ICharacterCard {
  character: ICharacter;
  isFavorite: boolean;
}

const CharacterCard = ({ character, isFavorite = false }: ICharacterCard) => {
  const { name, thumbnail } = character;
  const navigate = useNavigate();
  return (
    <article
      className="character_card__root"
      onClick={() => navigate(`/${character.id}/details`)}
    >
      <figure
        className="character_card__image_container"
        style={{
          background: `url(${thumbnail?.path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {!thumbnail?.path && <ImageIcon />}
      </figure>
      <div className="character_card__info_container">
        <LongText classnames="character_card__name_label" label={name} />
        <Favorite isFavorite={isFavorite} width={"12px"} height={"10.84px"} />
      </div>
    </article>
  );
};

export default memo(CharacterCard);
