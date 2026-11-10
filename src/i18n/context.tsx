import { createContext, useContext, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { localizePath, splitLocale, type Locale } from "./config";
import { catalogs, translateText, type TranslationKey } from "./translate";

const LocaleContext = createContext<Locale>("pt");

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return <LocaleContext.Provider value={splitLocale(pathname).locale}>{children}</LocaleContext.Provider>;
}

export function useI18n() {
  const locale = useContext(LocaleContext);
  return {
    locale,
    t: (key: TranslationKey) => catalogs[locale][key],
    text: (source: string) => translateText(source, locale),
    path: (value: string) => localizePath(value, locale),
  };
}
