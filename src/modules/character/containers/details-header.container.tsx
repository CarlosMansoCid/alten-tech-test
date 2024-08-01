import { memo } from "react";
import { ICharacter } from "../interfaces/ICharacter";
import "../styles/details-header.css";
import ImageIcon from "../../common/icons/image.icon";
import LongTextComponent from "../../common/components/long-text.component";
import Favorite from "../../common/components/favorite.component";

interface IDetailsHeaderContainer {
  character: ICharacter;
}

const DetailsHeaderContainer = ({ character }: IDetailsHeaderContainer) => {
  const { thumbnail, name, description } = character;
  return (
    <section className="details_header__root">
      <article className="details_header__info_container">
        <figure
          className="details_header__image"
          style={{
            background: `url(${thumbnail?.path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {!thumbnail?.path && <ImageIcon />}
        </figure>
        <article className="details_header__details_container">
          <div className="details_header__title_and_favorite_container">
            <LongTextComponent
              label={name}
              isTitle={true}
              classnames="details_header__title"
            />
            <Favorite isFavorite={false} width={"24px"} height={"21.68px"} />
          </div>
          <p className="details_header__description">{description || ""}</p>
        </article>
      </article>
      <div className="details_header__shape" />
    </section>
  );
};

export default memo(DetailsHeaderContainer);
