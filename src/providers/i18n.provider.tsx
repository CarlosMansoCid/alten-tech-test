import { ReactNode, memo } from "react";
import { I18nextProvider } from "react-i18next";
import { i18n } from "../settings";

interface II18Provider {
  children: ReactNode;
}

const I18nProvider = ({ children }: II18Provider) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default memo(I18nProvider);
