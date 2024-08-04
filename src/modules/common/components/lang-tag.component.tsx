import { memo } from "react";
import Flag from "react-world-flags";
import NavbarLabel from "./navbar-label.component";
import { TLang } from "../../../settings/langResources";
import { useTranslation } from "react-i18next";
import "../styles/change-lang-container.css";

interface ILangFlag {
  lang: TLang;
  action: () => void;
}

const LangFlag = ({ lang, action }: ILangFlag) => {
  const { t } = useTranslation("common");
  return (
    <li onClick={action} data-testid={"lang-tag"}>
      <div className="change_lang__flag_container">
        <Flag code={lang.code} role="img" />
      </div>
      <NavbarLabel label={t(`langs.${lang.lang}`)} />
    </li>
  );
};

export default memo(LangFlag);
