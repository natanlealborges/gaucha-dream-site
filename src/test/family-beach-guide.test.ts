import { describe, expect, it } from "vitest";
import { getGuide, getRelatedGuides, guideLocales, guidesFor } from "@/data/guides";
import { switchLocalePath } from "@/i18n/config";

const slug = "melhor-praia-de-santa-catarina-para-familia";

describe("family beach guide publication", () => {
  it("publishes only in Portuguese", () => {
    const guide = getGuide(slug);
    expect(guide).toBeDefined();
    if (!guide) throw new Error("Missing family beach guide");
    expect(guideLocales(guide)).toEqual(["pt"]);
    expect(guidesFor("pt").some((g) => g.slug === slug)).toBe(true);
    expect(guidesFor("es").some((g) => g.slug === slug)).toBe(false);
    expect(switchLocalePath(`/guias/${slug}`, "", "es")).toBe("/es");
    expect(switchLocalePath(`/guias/${slug}`, "", "en")).toBe("/en");
  });

  it("uses the guide-specific content date of November 23, 2026", () => {
    expect(getGuide(slug)?.datePublished).toBe("2026-11-23");
    expect(getGuide(slug)?.dateModified).toBe("2026-11-23");
  });

  it("keeps existing pages' automatic guide links unchanged", () => {
    expect(getGuide(slug)?.indexOnly).toBe(true);
    expect(getRelatedGuides("bombinhas-com-criancas").some((g) => g.slug === slug)).toBe(false);
  });
});