import { memo } from "react";
import "../styles/error-page.css";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation("common");
  return (
    <div role="alert" className="error_page__root">
      <h1 className="error_page__title">{t("errorPage.title")}</h1>
      <button className="error_page__link" onClick={() => history.back()}>
        {t("errorPage.linkLabel")}
      </button>
    </div>
  );
};

export default memo(ErrorPage);
