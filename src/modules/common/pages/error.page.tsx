import { memo } from "react";
import { useTranslation } from "react-i18next";
import "../styles/error-page.css";

const ErrorPage = () => {
  const { t } = useTranslation("common");
  return (
    <div role="alert" className="error_page__root">
      <h1 className="error_page__title">{t("errorPage.title")}</h1>
      <button className="button" onClick={() => history.back()}>
        {t("errorPage.linkLabel")}
      </button>
    </div>
  );
};

export default memo(ErrorPage);
