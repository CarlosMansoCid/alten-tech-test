import { memo } from "react";
import GlobalIcon from "../icons/global.icon";
import LangsList from "../components/langs-list.component";
import NavbarLabel from "../components/navbar-label.component";
import useChangeLang from "../hooks/use-change-lang";
import { TLang } from "../../../settings/langResources";
import "../styles/change-lang-container.css";

const ChangeLangContainer = () => {
  const { changeLang, selectedLang, langList } = useChangeLang();
  return (
    <div className="change_lang__root">
      <div
        className="change_lang__icon_container"
        role="img"
        aria-label="flag-icon"
        data-testid="global-icon"
      >
        <GlobalIcon height={"21.68px"} width={"24px"} />
      </div>
      <span className="change_lang__button">
        <NavbarLabel
          label={selectedLang.toUpperCase()}
          data-testid="selected-language-label"
        />
      </span>
      <LangsList
        langs={langList.filter((value: TLang) => value.lang !== selectedLang)}
        action={changeLang}
      />
    </div>
  );
};

export default memo(ChangeLangContainer);
