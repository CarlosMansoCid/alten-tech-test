import { memo } from "react";
import "../styles/change-lang-container.css";
import GlobalIcon from "../icons/global.icon";
import LangsList from "../components/langs-list.component";
import NavbarLabel from "../components/navbar-label.component";
import useChangeLang from "../hooks/use-change-lang";
import { TLang } from "../../../settings/langResources";

const ChangeLangContainer = () => {
  const { changeLang, selectedLang, langList } = useChangeLang();
  return (
    <div className="change_lang__root">
      <div className="change_lang__icon_container">
        <GlobalIcon />
      </div>
      <span className="change_lang__button">
        <NavbarLabel label={selectedLang.toUpperCase()} />
      </span>
      <LangsList
        langs={langList.filter((value: TLang) => value.lang !== selectedLang)}
        action={changeLang}
      />
    </div>
  );
};

export default memo(ChangeLangContainer);
