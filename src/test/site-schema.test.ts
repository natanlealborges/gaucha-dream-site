import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { siteSchemas } from "@/i18n/siteSchema";
import { translateSchema } from "@/i18n/translate";

const index = readFileSync("index.html", "utf8");
const scripts = [...index.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
const lodging = scripts.find((schema) => schema["@type"] === "LodgingBusiness");

describe("sitewide lodging facts", () => {
  it("uses the requested Google rating and review count in every language", () => {
    const rating = { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: 1100, bestRating: "5" };
    expect(lodging.aggregateRating).toEqual(rating);
    for (const locale of ["pt", "es", "en"] as const) {
      expect(translateSchema(siteSchemas[0], locale)).toMatchObject({ aggregateRating: rating });
    }
  });

  it.each([
    ["Bloco Garden", 4],
    ["Bloco Gaúcha", 6],
    ["Bloco Praia", 6],
  ])("uses the real maximum occupancy for %s", (name, maximum) => {
    const occupancy = { "@type": "QuantitativeValue", maxValue: maximum, unitText: "pessoas" };
    expect(lodging.containsPlace.find((block: { name: string }) => block.name === name)?.occupancy).toEqual(occupancy);
    expect(siteSchemas[0].containsPlace.find((block) => block.name === name)?.occupancy).toEqual(occupancy);
  });
});