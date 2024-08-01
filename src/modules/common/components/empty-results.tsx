import { memo } from "react";
import { useTranslation } from "react-i18next";

const EmptyResults = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <h2>{t("noResults.title")}: (</h2>
    </div>
  );
};

export default memo(EmptyResults);
