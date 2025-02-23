import { memo } from "react";
import { useTranslation } from "react-i18next";

interface IErrorOnFetchElement {
  // eslint-disable-next-line no-unused-vars
  resetErrorBoundary: (...args: []) => void;
}

const ErrorOnFetchElement = ({ resetErrorBoundary }: IErrorOnFetchElement) => {
  const { t } = useTranslation("common");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2
        aria-errormessage={t("errors.query")}
        data-testid="error-on-fetch-message"
      >
        {t("errors.query")}
      </h2>
      <button
        onClick={resetErrorBoundary}
        className="button"
        data-testid="error-on-fetch-button"
      >
        Try again
      </button>
    </div>
  );
};

export default memo(ErrorOnFetchElement);
