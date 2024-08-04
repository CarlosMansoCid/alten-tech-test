import { memo } from "react";
import { IComic } from "../interfaces/IComic";
import "../styles/comics-section.css";

interface IComicCard {
  comic: IComic;
}

const ComicCard = ({ comic }: IComicCard) => {
  const date =
    new Date(comic?.dates[0]?.date)?.toISOString()?.substring(0, 4) || "";
  return (
    <article className="comic_card__root">
      <div className="comic_card__image_container ">
        <figure
          role="figure"
          className="comic_card__image"
          style={{
            background: `url(${comic.thumbnail?.path}.${comic.thumbnail?.extension})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div className="comic_card__info_container ">
        <p className="comic_card__title">{comic?.title}</p>
        <p className="comic_card__date_tag">{date}</p>
      </div>
    </article>
  );
};

export default memo(ComicCard);
