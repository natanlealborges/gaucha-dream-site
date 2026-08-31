// Meta Pixel (Facebook Pixel) tracking helpers.
// Pixel ID: 1313667655791937 — base code loads in index.html <head>.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires the Meta Pixel standard "InitiateCheckout" event.
 * Safe to call before the pixel script finishes loading: fbq buffers calls in a queue.
 */
export function trackInitiateCheckout(): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout");
  }
}

/**
 * Fires the Meta Pixel standard "Contact" event.
 * Used on phone (landline) click links. Does not affect WhatsApp events.
 */
export function trackContact(): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact");
  }
}
