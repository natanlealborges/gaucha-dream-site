import { pt } from "./pt";
import { es } from "./es";
import { en } from "./en";
import { absoluteUrl, SITE_URL, splitLocale, type Locale } from "./config";

export const catalogs = { pt, es, en };
export type TranslationKey = keyof typeof pt;
const sourceKeys = new Map<string, TranslationKey>(Object.entries(pt).map(([key, value]) => [value, key as TranslationKey]));

export function translateText(text: string, locale: Locale): string {
  if (locale === "pt") return text;
  const key = sourceKeys.get(text);
  if (key) return catalogs[locale][key];
  // FAQ schema joins original paragraphs with blank lines.
  if (text.includes("\n\n")) return text.split("\n\n").map((part) => translateText(part, locale)).join("\n\n");
  return text;
}

const TEXT_FIELDS = new Set(["name", "description", "text", "unitText", "typeOfBed", "touristType"]);
const URL_FIELDS = new Set(["url", "item"]);
/** Translate schema descriptions only: IDs, addresses, assets, numbers and policies are never rewritten. */
export function translateSchema(value: unknown, locale: Locale, field?: string): unknown {
  if (typeof value === "string") {
    if (field && TEXT_FIELDS.has(field)) return translateText(value, locale);
    if (locale !== "pt" && field && URL_FIELDS.has(field) && value.startsWith(SITE_URL)) {
      const url = new URL(value);
      return absoluteUrl(splitLocale(url.pathname).path, locale) + url.search + url.hash;
    }
    if (locale !== "pt" && field === "inLanguage") return locale;
    return value;
  }
  if (Array.isArray(value)) return value.map((item) => translateSchema(item, locale));
  if (value && typeof value === "object") {
    const original = value as Record<string, unknown>;
    const result: Record<string, unknown> = {};
    for (const [key, entry] of Object.entries(original)) result[key] = translateSchema(entry, locale, key);
    if (locale !== "pt" && original["@context"]) result.inLanguage = locale;
    return result;
  }
  return value;
}
