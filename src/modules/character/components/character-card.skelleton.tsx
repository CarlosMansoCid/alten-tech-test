import { memo } from "react";
import Favorite from "../../common/components/favorite.component";
import Skelleton from "../../common/components/skelleton.component";
import "../styles/character-card.css";

const CharacterCardSkelleton = () => {
  return (
    <article className="character_card__root_skelleton">
      <figure className="character_card__image_container">
        <Skelleton />
      </figure>
      <div className="character_card__info_container">
        <Skelleton style={{ width: "80%", height: 20 }} />
        <Favorite
          isFavorite={false}
          width={"12px"}
          height={"10.84px"}
          disabled
        />
      </div>
    </article>
  );
};

export default memo(CharacterCardSkelleton);
