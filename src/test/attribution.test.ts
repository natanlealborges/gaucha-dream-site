import { beforeEach, describe, expect, it, vi } from "vitest";

beforeEach(() => {
  vi.restoreAllMocks();
  vi.resetModules();
  sessionStorage.clear();
  window.history.replaceState({}, "", "/");
  Object.defineProperty(document, "referrer", { configurable: true, value: "" });
});

async function booking(search = "", referrer = "") {
  window.history.replaceState({}, "", `/${search}`);
  Object.defineProperty(document, "referrer", { configurable: true, value: referrer });
  const attribution = await import("@/lib/attribution");
  return { ...attribution, url: new URL(attribution.getBookingUrl()) };
}

describe("first-session attribution", () => {
  it("uses the exact clean HBook endpoint and company", async () => {
    const { url } = await booking();
    expect(`${url.origin}${url.pathname}`).toBe("https://hbook.hsystem.com.br/Booking");
    expect(url.searchParams.get("companyId")).toBe("5cae2795ab41d51dd869d73a");
    expect([...url.searchParams.keys()].sort()).toEqual(["companyId", "utm_medium", "utm_source"]);
    expect(url.hash).toBe("");
  });

  it("preserves and encodes all five UTMs and gclid", async () => {
    const values = { utm_source: "google", utm_medium: "cpc", utm_campaign: "Verão & praia", utm_content: "a+b", utm_term: "pé na areia", gclid: "click/123" };
    const { url } = await booking(`?${new URLSearchParams(values)}`);
    for (const [key, value] of Object.entries(values)) expect(url.searchParams.get(key)).toBe(value);
    expect(url.href).toContain("Ver%C3%A3o");
  });

  it("classifies gclid without UTMs as google/cpc", async () => {
    const { url } = await booking("?gclid=click123");
    expect(url.searchParams.get("utm_source")).toBe("google");
    expect(url.searchParams.get("utm_medium")).toBe("cpc");
    expect(url.searchParams.get("gclid")).toBe("click123");
  });

  it("does not override partial explicit UTMs with referrer or gclid defaults", async () => {
    const { url } = await booking("?utm_campaign=summer&gclid=123", "https://google.com/");
    expect(url.searchParams.get("utm_campaign")).toBe("summer");
    expect(url.searchParams.has("utm_source")).toBe(false);
    expect(url.searchParams.has("utm_medium")).toBe(false);
  });

  it.each([
    ["https://www.google.com/search", "google", "organic"],
    ["https://www.google.com.br/search", "google", "organic"],
    ["https://l.instagram.com/", "instagram", "social"],
    ["https://m.facebook.com/", "facebook", "social"],
    ["", "direto", "nenhum"],
    ["https://example.com/article", "example.com", "referral"],
  ])("classifies referrer %s as %s/%s", async (referrer, source, medium) => {
    const { url } = await booking("", referrer);
    expect(url.searchParams.get("utm_source")).toBe(source);
    expect(url.searchParams.get("utm_medium")).toBe(medium);
  });

  it("retains the original attribution on navigation and reload", async () => {
    const { getBookingUrl } = await booking("?utm_source=instagram&utm_medium=social");
    window.history.replaceState({}, "", "/jacuzzis?utm_source=google");
    expect(new URL(getBookingUrl()).searchParams.get("utm_source")).toBe("instagram");
    vi.resetModules();
    const reloaded = await import("@/lib/attribution");
    expect(new URL(reloaded.getBookingUrl()).searchParams.get("utm_source")).toBe("instagram");
  });

  it("works without storage and preserves in-memory first touch", async () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("blocked"); });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("blocked"); });
    const { getBookingUrl, url } = await booking("?gclid=123");
    expect(url.searchParams.get("utm_source")).toBe("google");
    window.history.replaceState({}, "", "/?utm_source=facebook");
    expect(new URL(getBookingUrl()).searchParams.get("utm_source")).toBe("google");
  });

  it.each([
    ["google", "Google"], ["instagram", "Instagram"], ["facebook", "Instagram"], ["direto", "site"], ["example.com", "site"],
  ])("uses the WhatsApp origin for %s", async (source, origin) => {
    const { getWhatsAppUrl } = await booking(`?utm_source=${source}`);
    const url = new URL(getWhatsAppUrl());
    expect(`${url.origin}${url.pathname}`).toBe("https://wa.me/5547997910034");
    expect(url.searchParams.get("text")).toBe(`Olá! Vim pelo ${origin} e quero saber mais sobre a Pousada Gaúcha.`);
    expect(url.href).toContain("Ol%C3%A1!");
  });
});