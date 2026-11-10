import { beforeEach, describe, expect, it, vi } from "vitest";
import { absoluteUrl, isTranslatedPath, localizePath, LOCALE_META, splitLocale, switchLocalePath, TRANSLATED_PATHS } from "@/i18n/config";
import { catalogs, translateSchema } from "@/i18n/translate";

beforeEach(() => {
  vi.resetModules();
  sessionStorage.clear();
  window.history.replaceState({}, "", "/");
  Object.defineProperty(document, "referrer", { configurable: true, value: "" });
});

describe("explicit language routes", () => {
  it("keeps Portuguese unprefixed and defaults to Portuguese", () => {
    expect(splitLocale("/acomodacoes/garden")).toEqual({ locale: "pt", path: "/acomodacoes/garden" });
    expect(localizePath("/cafe-da-manha", "pt")).toBe("/cafe-da-manha");
    expect(absoluteUrl("/", "pt")).toBe("https://pousadagaucha.com/");
  });
  it.each(["es", "en"] as const)("keeps the same paths under /%s", (locale) => {
    expect(splitLocale(`/${locale}/acomodacoes/garden`)).toEqual({ locale, path: "/acomodacoes/garden" });
    expect(localizePath("/cafe-da-manha", locale)).toBe(`/${locale}/cafe-da-manha`);
    expect(localizePath("/#contato", locale)).toBe(`/${locale}#contato`);
    expect(switchLocalePath("/es/acomodacoes/garden", "", locale)).toBe(`/${locale}/acomodacoes/garden`);
  });
  it("does not invent translated guide routes", () => {
    expect(isTranslatedPath("/guias")).toBe(false);
    expect(localizePath("/guias/bombinhas-no-inverno", "es")).toBe("/guias/bombinhas-no-inverno");
    expect(switchLocalePath("/guias/bombinhas-no-inverno", "", "en")).toBe("/en");
    expect(TRANSLATED_PATHS).toHaveLength(10);
  });
  it("uses the requested locale tags", () => {
    expect(LOCALE_META.pt).toMatchObject({ htmlLang: "pt-BR", hreflang: "pt-BR", ogLocale: "pt_BR" });
    expect(LOCALE_META.es).toMatchObject({ htmlLang: "es", hreflang: "es", ogLocale: "es_AR" });
    expect(LOCALE_META.en).toMatchObject({ htmlLang: "en", hreflang: "en", ogLocale: "en_US" });
  });
});

describe("localized WhatsApp keeps first-touch origin", () => {
  it.each([
    ["es", "google", "¡Hola! Vine por Google y quiero saber más sobre la Pousada Gaúcha."],
    ["es", "instagram", "¡Hola! Vine por Instagram y quiero saber más sobre la Pousada Gaúcha."],
    ["es", "direto", "¡Hola! Vine por el sitio web y quiero saber más sobre la Pousada Gaúcha."],
    ["en", "google", "Hi! I came from Google and would like to know more about Pousada Gaúcha."],
    ["en", "instagram", "Hi! I came from Instagram and would like to know more about Pousada Gaúcha."],
    ["en", "direto", "Hi! I came from the website and would like to know more about Pousada Gaúcha."],
  ] as const)("uses %s with origin %s", async (locale, origin, message) => {
    window.history.replaceState({}, "", `/?utm_source=${origin}`);
    const { getWhatsAppUrl, getBookingUrl } = await import("@/lib/attribution");
    const firstBooking = getBookingUrl();
    window.history.replaceState({}, "", `/${locale}/jacuzzis?utm_source=changed`);
    const whatsapp = new URL(getWhatsAppUrl(locale));
    expect(whatsapp.origin + whatsapp.pathname).toBe("https://wa.me/5547997910034");
    expect(whatsapp.searchParams.get("text")).toBe(message);
    expect(getBookingUrl()).toBe(firstBooking);
  });
  it("keeps Facebook mapped to Instagram in translated messages", async () => {
    window.history.replaceState({}, "", "/?utm_source=facebook");
    const { getWhatsAppUrl } = await import("@/lib/attribution");
    expect(new URL(getWhatsAppUrl("en")).searchParams.get("text")).toBe("Hi! I came from Instagram and would like to know more about Pousada Gaúcha.");
  });
});

describe("schema identity and translation coverage", () => {
  it.each(["es", "en"] as const)("has complete %s entries", (locale) => {
    expect(Object.keys(catalogs[locale]).sort()).toEqual(Object.keys(catalogs.pt).sort());
    for (const key of Object.keys(catalogs.pt) as (keyof typeof catalogs.pt)[]) expect(catalogs[locale][key].trim().length, key).toBeGreaterThan(0);
  });
  it("preserves Portuguese schema, rates, pets and check-in/out facts", () => {
    const schema = { "@context": "https://schema.org", "@type": "LodgingBusiness", "@id": "https://pousadagaucha.com/#lodging", name: "Pousada Gaúcha", url: "https://pousadagaucha.com/", petsAllowed: false, checkinTime: "15:00", checkoutTime: "12:00", priceRange: "R$ 595 - R$ 3595" };
    expect(translateSchema(schema, "pt")).toEqual(schema);
    expect(translateSchema(schema, "en")).toMatchObject({ "@id": "https://pousadagaucha.com/#lodging", name: "Pousada Gaúcha", url: "https://pousadagaucha.com/en", inLanguage: "en", petsAllowed: false, checkinTime: "15:00", checkoutTime: "12:00", priceRange: "R$ 595 - R$ 3595" });
  });
});
