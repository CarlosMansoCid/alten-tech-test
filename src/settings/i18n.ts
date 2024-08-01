import i18n, { InitOptions } from "i18next";
import langResources from "./langResources";

let lng = localStorage.getItem("i18nextLng");
if (!lng) {
  lng = "es";
  localStorage.setItem("i18nextLng", lng);
}

const options: InitOptions = {
  debug: process.env.NODE_ENV !== "production",
  lng,
  resources: langResources,

  fallbackLng: lng,

  ns: ["test"],

  defaultNS: "test",

  react: {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    useSuspense: true,
  },
};

i18n.on("languageChanged", function (lng) {
  localStorage.setItem("i18nextLng", lng);
});

i18n.init(options).then();

export default i18n;
