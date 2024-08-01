import * as es from "../locales/ES";
import * as en from "../locales/EN";

const langResources = {
  es: es,
  en: en,
};

export type TLang = {
  lang: string;
  code: string;
};

export const langList: TLang[] = [
  {
    lang: "es",
    code: "es",
  },
  {
    lang: "en",
    code: "us",
  },
];
export default langResources;
