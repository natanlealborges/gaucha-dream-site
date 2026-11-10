import { BOOKING_BASE_URL } from "@/config/site";

const STORAGE_KEY = "pousadagaucha:attribution";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"] as const;
type Attribution = Partial<Record<(typeof PARAMS)[number], string>>;
let sessionAttribution: Attribution | undefined;

function referrerAttribution(): Attribution {
  let hostname = "";
  try {
    hostname = document.referrer ? new URL(document.referrer).hostname.toLowerCase() : "";
  } catch {
    // An invalid referrer is treated like a direct visit.
  }
  if (!hostname) return { utm_source: "direto", utm_medium: "nenhum" };
  if (/(^|\.)google\.[a-z.]+$/.test(hostname)) return { utm_source: "google", utm_medium: "organic" };
  if (/(^|\.)instagram\.com$/.test(hostname)) return { utm_source: "instagram", utm_medium: "social" };
  if (/(^|\.)facebook\.com$/.test(hostname)) return { utm_source: "facebook", utm_medium: "social" };
  return { utm_source: hostname, utm_medium: "referral" };
}

/** Capture the first touch only, before links render. Safe during prerendering. */
export function initializeAttribution(): void {
  if (typeof window === "undefined" || typeof document === "undefined" || sessionAttribution) return;

  try {
    const stored: unknown = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "null");
    if (stored && typeof stored === "object") {
      const saved: Attribution = {};
      for (const key of PARAMS) {
        const value = (stored as Record<string, unknown>)[key];
        if (typeof value === "string" && value) saved[key] = value;
      }
      if (Object.keys(saved).length) {
        sessionAttribution = saved;
        return;
      }
    }
  } catch {
    // Continue with in-memory attribution when storage is blocked or invalid.
  }

  const query = new URLSearchParams(window.location.search);
  const captured: Attribution = {};
  for (const key of PARAMS) {
    const value = query.get(key);
    if (value) captured[key] = value;
  }
  const hasUtm = PARAMS.some((key) => key !== "gclid" && captured[key]);
  if (!hasUtm) {
    Object.assign(captured, captured.gclid
      ? { utm_source: "google", utm_medium: "cpc" }
      : referrerAttribution());
  }
  sessionAttribution = captured;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
  } catch {
    // The in-memory copy preserves the first touch for this page's lifetime.
  }
}

export function getBookingUrl(): string {
  initializeAttribution();
  const url = new URL(BOOKING_BASE_URL);
  for (const key of PARAMS) {
    const value = sessionAttribution?.[key];
    if (value) url.searchParams.set(key, value);
  }
  return url.toString();
}

export function getWhatsAppUrl(locale: "pt" | "es" | "en" = "pt"): string {
  initializeAttribution();
  const source = sessionAttribution?.utm_source?.toLowerCase();
  const origin = source === "google" ? "Google" : source === "instagram" || source === "facebook" ? "Instagram" : "site";
  const message = locale === "es"
    ? `¡Hola! Vine por ${origin === "site" ? "el sitio web" : origin} y quiero saber más sobre la Pousada Gaúcha.`
    : locale === "en"
      ? `Hi! I came from ${origin === "site" ? "the website" : origin} and would like to know more about Pousada Gaúcha.`
      : `Olá! Vim pelo ${origin} e quero saber mais sobre a Pousada Gaúcha.`;
  return `https://wa.me/5547997910034?text=${encodeURIComponent(message)}`;
}