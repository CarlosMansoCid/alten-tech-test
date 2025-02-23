import { memo } from "react";
import "../styles/error-page.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const { t } = useTranslation("common");

  return (
    <div role="alert" className="error_page__root">
      <h1 className="error_page__title">{t("notFound.title")}</h1>
      <Link to={"/"} className="error_page__link">
        {t("notFound.linkLabel")}
      </Link>
    </div>
  );
};

export default memo(NotFoundPage);
