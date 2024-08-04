import { memo } from "react";
import Skelleton from "../../common/components/skelleton.component";
import "../styles/comics-section.css";

const ComicCardSkelleton = () => {
  return (
    <article className="comic_card__root">
      <div className="comic_card__image_container ">
        <Skelleton />
      </div>
      <div className="comic_card__info_container ">
        <div className="comic_card__title">
          <Skelleton style={{ width: "90%", height: "16px" }} />
          <Skelleton
            style={{ width: "80%", height: "16px", marginTop: "5px" }}
          />
        </div>
        <div className="comic_card__date_tag">
          <Skelleton
            style={{ width: "20%", height: "8px", marginTop: "5px" }}
          />
        </div>
      </div>
    </article>
  );
};
export default memo(ComicCardSkelleton);
