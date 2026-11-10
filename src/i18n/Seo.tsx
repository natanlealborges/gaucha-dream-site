import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { absoluteUrl, isTranslatedPath, LOCALES, LOCALE_META, splitLocale } from "./config";
import { useI18n } from "./context";
import { useEffect } from "react";
import { siteSchemas } from "./siteSchema";
import { translateSchema } from "./translate";

export function LanguageSeo() {
  const { locale } = useI18n();
  const location = useLocation();
  const { path } = splitLocale(location.pathname);
  const meta = LOCALE_META[locale];
  useEffect(() => {
    if (locale === "pt") return;
    // The SPA template contains Portuguese sitewide schemas; replace only those unmanaged tags.
    const originals = Array.from(document.head.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]:not([data-rh])'));
    originals.forEach((script) => script.remove());
    return () => { originals.forEach((script) => document.head.append(script)); };
  }, [locale]);
  return <Helmet>
    <html lang={meta.htmlLang} />
    <meta property="og:locale" content={meta.ogLocale} />
    {isTranslatedPath(path) && LOCALES.map((language) => <link key={language} rel="alternate" hrefLang={LOCALE_META[language].hreflang} href={absoluteUrl(path, language)} />)}
    {isTranslatedPath(path) && <link rel="alternate" hrefLang="x-default" href={absoluteUrl(path, "pt")} />}
    {locale !== "pt" && path !== "/" && siteSchemas.map((schema) => <script key={schema["@type"]} type="application/ld+json">{JSON.stringify(translateSchema(schema, locale))}</script>)}
  </Helmet>;
}
