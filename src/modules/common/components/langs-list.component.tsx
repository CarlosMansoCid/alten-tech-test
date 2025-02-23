import { memo } from "react";
import LangTag from "./lang-tag.component";
import { TLang } from "../../../settings/langResources";
import "../styles/change-lang-container.css";

interface ILangList {
  langs: TLang[];
  // eslint-disable-next-line no-unused-vars
  action: (key: string) => void;
}

const LangList = ({ langs, action }: ILangList) => {
  return (
    <ul className="change_lang__lang_list" data-testid="langs-list">
      {langs.map((lang: TLang) => {
        return (
          <LangTag
            lang={lang}
            action={() => action(lang.lang)}
            key={lang.code}
          />
        );
      })}
    </ul>
  );
};

export default memo(LangList);
