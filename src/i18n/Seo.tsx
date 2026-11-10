import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { absoluteUrl, isTranslatedPath, LOCALES, LOCALE_META, splitLocale } from "./config";
import { useI18n } from "./context";

export function LanguageSeo() {
  const { locale } = useI18n();
  const location = useLocation();
  const { path } = splitLocale(location.pathname);
  const meta = LOCALE_META[locale];
  return <Helmet>
    <html lang={meta.htmlLang} />
    <meta property="og:locale" content={meta.ogLocale} />
    {isTranslatedPath(path) && LOCALES.map((language) => <link key={language} rel="alternate" hrefLang={LOCALE_META[language].hreflang} href={absoluteUrl(path, language)} />)}
    {isTranslatedPath(path) && <link rel="alternate" hrefLang="x-default" href={absoluteUrl(path, "pt")} />}
  </Helmet>;
}
