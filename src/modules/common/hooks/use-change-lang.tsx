import { useState } from "react";
import { langResources, i18n } from "../../../settings";

const useChangeLang = () => {
  const values = Object.keys(langResources);
  const [selectedLang, setSelectedLang] = useState<string>(
    localStorage.getItem("i18nextLng") as string | "es"
  );
  const changeLang = async (key: string) => {
    await i18n.changeLanguage(key);
    setSelectedLang(key);
  };

  return {
    values,
    selectedLang,
    changeLang,
  };
};

export default useChangeLang;
