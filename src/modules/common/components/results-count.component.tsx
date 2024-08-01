import { memo } from "react";
import { useTranslation } from "react-i18next";
import "../styles/search-box-container.css";

interface IResultsCount {
  count: number | string;
}

const ResultsCount = ({ count }: IResultsCount) => {
  const { t } = useTranslation("character");
  return (
    <>
      {count ? (
        <p className="search_box__results_label">{`${count} ${t(
          "resultsCount.label"
        )}`}</p>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(ResultsCount);
