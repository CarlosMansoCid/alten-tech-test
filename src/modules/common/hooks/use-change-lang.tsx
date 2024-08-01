import { useState } from "react";
import { i18n } from "../../../settings";
import { langList } from "../../../settings/langResources";

const useChangeLang = () => {
  const [selectedLang, setSelectedLang] = useState<string>(
    localStorage.getItem("i18nextLng") as string | "es"
  );
  const changeLang = (key: string) => {
    i18n.changeLanguage(key).then(() => {
      setSelectedLang(key);
    });
  };

  return {
    langList,
    selectedLang,
    changeLang,
  };
};

export default useChangeLang;
