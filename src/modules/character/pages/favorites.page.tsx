import { memo } from "react";
import Title from "../../common/components/title.component";
import { useTranslation } from "react-i18next";
import "../../common/styles/section-p-container.css";
import "../styles/character-list.css";
import FavoritesListContainer from "../containers/favorites-list.container";
import { Helmet } from "react-helmet";

const FavoritesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo:favoritesSection.title")}</title>
      </Helmet>
      <Title label={t("character:favoritesPage.title")} />
      <FavoritesListContainer />
    </>
  );
};

export default memo(FavoritesPage);
