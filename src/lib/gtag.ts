// Google Ads (gtag.js) tracking helpers.
// Conversion ID: AW-998984141 — base tag loads in index.html <head>.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const ADS_ID = "AW-998984141";

/** WhatsApp click conversion */
export const CONVERSION_WHATSAPP = "AW-998984141/068tCPyg2cYDEM2TrdwD";
/** Booking engine (HBook) click conversion */
export const CONVERSION_BOOKING = "AW-998984141/wY6kCLL6h8ADEM2TrdwD";

/**
 * Fires a Google Ads conversion event.
 * Safe to call before gtag finishes loading: no-op if gtag is unavailable.
 */
export function trackConversion(sendTo: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: sendTo });
  }
}

/**
 * Sends a page_view to Google Ads. Used on every SPA route change.
 */
export function trackPageView(path: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", { send_to: ADS_ID, page_path: path });
  }
}

/**
 * Installs a single global click listener on the document that detects
 * clicks on WhatsApp links and booking-engine links and fires the
 * matching conversion. Covers every component without per-link edits.
 * Links open in a new tab, so navigation is never blocked.
 */
export function installConversionClickListener(): () => void {
  const onClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!anchor) return;
    const href = anchor.href || "";
    if (href.includes("wa.me") || href.includes("whatsapp")) {
      trackConversion(CONVERSION_WHATSAPP);
    } else if (href.includes("hbook.hsystem.com.br")) {
      trackConversion(CONVERSION_BOOKING);
    }
  };
  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
