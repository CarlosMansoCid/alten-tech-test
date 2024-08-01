import { useTranslation } from "react-i18next";
import SearchIcon from "../icons/search.icon";
import { ChangeEvent, memo } from "react";
import "../styles/search-box-container.css";
import { useCharacterContext } from "../../character/contexts/useCharacterContext";

const SearchForm = () => {
  const { t } = useTranslation("character");
  const { setFilters } = useCharacterContext();
  return (
    <span className="search_box__input_wrapper_form">
      <span className="search_box__icon_button">
        <SearchIcon />
      </span>
      <input
        placeholder={t("searchInput.placeholder")}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFilters({ name: e.target.value })
        }
      />
    </span>
  );
};

export default memo(SearchForm);
