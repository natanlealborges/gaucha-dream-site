import { afterEach, describe, expect, it, vi } from "vitest";
import { getBookingUrl, getWhatsAppUrl } from "@/lib/attribution";
import { CONVERSION_BOOKING, CONVERSION_WHATSAPP, installConversionClickListener } from "@/lib/gtag";
import { trackContact, trackInitiateCheckout } from "@/lib/pixel";

afterEach(() => {
  delete window.gtag;
  delete window.fbq;
  document.body.replaceChildren();
});

describe("attributed links preserve conversion events", () => {
  it.each([
    [getBookingUrl, CONVERSION_BOOKING],
    [getWhatsAppUrl, CONVERSION_WHATSAPP],
  ])("fires the existing Google Ads conversion for %s", (getUrl, conversion) => {
    window.gtag = vi.fn();
    const cleanup = installConversionClickListener();
    const anchor = document.createElement("a");
    anchor.href = getUrl();
    anchor.addEventListener("click", (event) => event.preventDefault());
    const icon = document.createElement("span");
    anchor.append(icon);
    document.body.append(anchor);
    icon.click();
    expect(window.gtag).toHaveBeenCalledExactlyOnceWith("event", "conversion", { send_to: conversion });
    cleanup();
  });

  it("keeps both existing Meta Pixel events", () => {
    window.fbq = vi.fn();
    trackInitiateCheckout();
    trackContact();
    expect(window.fbq).toHaveBeenNthCalledWith(1, "track", "InitiateCheckout");
    expect(window.fbq).toHaveBeenNthCalledWith(2, "track", "Contact");
  });
});