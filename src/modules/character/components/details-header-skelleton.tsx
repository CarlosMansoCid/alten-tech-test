import { memo } from "react";
import Favorite from "../../common/components/favorite.component";
import Skelleton from "../../common/components/skelleton.component";
import "../styles/details-header.css";

const DetailsHeaderSkelleton = () => {
  return (
    <article className="details_header__info_container">
      <div className="details_header__image_container">
        <div className="details_header__image">
          <Skelleton />
        </div>
      </div>
      <article className="details_header__details_container">
        <div className="details_header__title_and_favorite_container">
          <Skelleton style={{ width: "90%", height: "30px" }} />
          <Favorite
            isFavorite={false}
            action={() => {}}
            width={"24px"}
            height={"21.68px"}
          />
        </div>
        <div style={{ marginTop: "12px" }}>
          <Skelleton style={{ width: "90%", height: "20px" }} />
          <Skelleton
            style={{ width: "90%", height: "20px", marginTop: "12px" }}
          />
          <Skelleton
            style={{ width: "90%", height: "20px", marginTop: "12px" }}
          />
        </div>
      </article>
    </article>
  );
};

export default memo(DetailsHeaderSkelleton);
