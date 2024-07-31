import { useTranslation } from "react-i18next";
import SearchIcon from "../icons/search.icon";
import { memo } from "react";

const SearchForm = () => {
  const { t } = useTranslation("character");
  return (
    <form>
      <button className="search_box__icon_button" type="submit">
        <SearchIcon />
      </button>
      <input placeholder={t("searchInput.placeholder")} />
    </form>
  );
};

export default memo(SearchForm);
