import { describe, expect, it } from "vitest";
import { familyFacts } from "@/i18n/families";
import { localizePath, switchLocalePath } from "@/i18n/config";

describe("family stay facts", () => {
  it("limits Bloco Gaúcha to 6 guests", () => expect(familyFacts.maxOccupancy.gaucha).toBe(6));
  it("limits Bloco Garden to 4 guests", () => expect(familyFacts.maxOccupancy.garden).toBe(4));
  it("offers one- and two-bedroom apartments", () => expect(familyFacts.bedrooms).toEqual([1, 2]));
  it("has four rooftop jacuzzis", () => expect(familyFacts.jacuzzis).toBe(4));
  it("serves breakfast from 07:30 to 10:00", () => expect(familyFacts.breakfast).toEqual({ start: "07:30", end: "10:00" }));
  it("provides one parking space per stay", () => expect(familyFacts.parkingSpacesPerStay).toBe(1));
  it("does not accept pets", () => expect(familyFacts.petsAllowed).toBe(false));
  it("provides equipped kitchens in every apartment", () => expect(familyFacts.equippedKitchenInAllApartments).toBe(true));
});

describe("family page locales", () => {
  const path = "/pousada-para-familias-em-bombinhas";
  it.each(["pt", "es", "en"] as const)("keeps the family page when switching to %s", (locale) => {
    const expected = locale === "pt" ? path : `/${locale}${path}`;
    expect(localizePath(path, locale)).toBe(expected);
    expect(switchLocalePath(`/es${path}`, "", locale)).toBe(expected);
  });
});