export const LOCALES = ["pt", "es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const SITE_URL = "https://pousadagaucha.com";

/** Portuguese paths that also exist under /es and /en. Guides intentionally stay Portuguese-only. */
export const TRANSLATED_PATHS = [
  "/",
  "/acomodacoes",
  "/acomodacoes/garden",
  "/acomodacoes/bloco-gaucha",
  "/acomodacoes/bloco-praia",
  "/cafe-da-manha",
  "/jacuzzis",
  "/servico-de-praia",
  "/pousada-pe-na-areia-bombinhas",
  "/perguntas-frequentes",
] as const;

export const LOCALE_META: Record<Locale, { htmlLang: string; hreflang: string; ogLocale: string; label: string }> = {
  pt: { htmlLang: "pt-BR", hreflang: "pt-BR", ogLocale: "pt_BR", label: "PT" },
  es: { htmlLang: "es", hreflang: "es", ogLocale: "es_AR", label: "ES" },
  en: { htmlLang: "en", hreflang: "en", ogLocale: "en_US", label: "EN" },
};

export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const match = pathname.match(/^\/(es|en)(?=\/|$)/);
  if (!match) return { locale: "pt", path: pathname || "/" };
  return { locale: match[1] as Locale, path: pathname.slice(match[0].length) || "/" };
}

export function normalizePath(path: string): string {
  const clean = path.replace(/\/+$/, "");
  return clean || "/";
}

export function isTranslatedPath(path: string): boolean {
  return (TRANSLATED_PATHS as readonly string[]).includes(normalizePath(path));
}

/** Builds an internal path for a locale, keeping query and hash. Non-translated pages stay in Portuguese. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === "pt" || !path.startsWith("/")) return path;
  const match = path.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] || "/";
  const suffix = match?.[2] || "";
  const base = splitLocale(pathname).path;
  if (!isTranslatedPath(base)) return path;
  return `${base === "/" ? `/${locale}` : `/${locale}${normalizePath(base)}`}${suffix}`;
}

export function absoluteUrl(path: string, locale: Locale): string {
  const localized = localizePath(normalizePath(path), locale);
  return `${SITE_URL}${localized === "/" ? "/" : localized}`;
}

/** Target used by the language selector. Pages without translation open the selected home page. */
export function switchLocalePath(pathname: string, hash: string, locale: Locale): string {
  const { path } = splitLocale(pathname);
  if (!isTranslatedPath(path)) return locale === "pt" ? "/" : `/${locale}`;
  return localizePath(`${normalizePath(path)}${hash}`, locale);
}
