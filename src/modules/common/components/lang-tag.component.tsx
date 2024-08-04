import { memo } from "react";
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
    <li
      onClick={action}
      data-testid={"lang-tag"}
      style={{ maxHeight: "50px", overflow: "hidden" }}
    >
      <div className="change_lang__flag_container">
        <img
          src={`/images/${lang.code}.png`}
          alt={lang.lang}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <NavbarLabel label={t(`langs.${lang.lang}`)} />
    </li>
  );
};

export default memo(LangFlag);
