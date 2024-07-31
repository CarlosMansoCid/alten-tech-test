import { memo } from "react";
import "../styles/search-box-container.css";
// import { useTranslation } from "react-i18next";
import SearchForm from "../components/search-form.component";
import ResultsCountComponent from "../components/results-count.component";

const SearchBoxContainer = () => {
  //   const { t } = useTranslation("heroes");
  return (
    <section className="search_box__root">
      <span className="search_box__input_wrapper">
        <SearchForm />
      </span>
      <ResultsCountComponent count={50} />
    </section>
  );
};

export default memo(SearchBoxContainer);
