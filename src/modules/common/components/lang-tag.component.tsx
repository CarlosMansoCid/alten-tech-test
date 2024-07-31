import { memo } from "react";
import Flag from "react-world-flags";
import NavbarLabel from "./navbar-label.component";
import { TLang } from "../../../settings/langResources";
import { useTranslation } from "react-i18next";

interface ILangFlag {
  lang: TLang;
  action: () => void;
}

const LangFlag = ({ lang, action }: ILangFlag) => {
  const { t } = useTranslation("common");
  return (
    <li onClick={action}>
      <div className="change_lang__flag_container">
        <Flag code={lang.code} />
      </div>
      <NavbarLabel label={t(`langs.${lang.lang}`)} />
    </li>
  );
};

export default memo(LangFlag);
