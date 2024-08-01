import { memo } from "react";
import Title from "../../common/components/title.component";
import { useTranslation } from "react-i18next";
import "../../common/styles/section-p-container.css";
import "../styles/character-list.css";
import FavoritesListContainer from "../containers/favorites-list.container";

const FavoritesPage = () => {
  const { t } = useTranslation("character");

  return (
    <>
      <Title label={t("favoritesPage.title")} />
      <FavoritesListContainer />
    </>
  );
};

export default memo(FavoritesPage);
