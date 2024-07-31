import { memo } from "react";
import FavoritesPageSearchBoxContainer from "../containers/favorites-page-search-box.container";
import Title from "../../common/components/title.component";
import { useTranslation } from "react-i18next";
import "../../common/styles/section-p-container.css";

const FavoritesPage = () => {
  const { t } = useTranslation("heroes");
  return (
    <section className="section_p__content_container">
      <Title label={t("favoritesPage.title")} />
      <FavoritesPageSearchBoxContainer />
    </section>
  );
};

export default memo(FavoritesPage);
