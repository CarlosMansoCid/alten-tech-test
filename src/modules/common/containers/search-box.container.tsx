import { memo } from "react";
// import { useTranslation } from "react-i18next";
import SearchForm from "../components/search-form.component";
import ResultsCountComponent from "../components/results-count.component";
import { useCharacterContext } from "../../character/contexts/useCharacterContext";
import "../styles/search-box-container.css";

const SearchBoxContainer = () => {
  const { characters } = useCharacterContext();
  //   const { t } = useTranslation("character");
  return (
    <section className="search_box__root" role="search">
      <span className="search_box__input_wrapper">
        <SearchForm />
      </span>
      <ResultsCountComponent count={characters?.length || 0} />
    </section>
  );
};

export default memo(SearchBoxContainer);
