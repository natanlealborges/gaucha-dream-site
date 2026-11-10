# Architecture rules

- Keep the HBook base URL in site configuration and generate all booking and WhatsApp links through the attribution module, so session origin stays consistent across pages.
- Initialize first-touch attribution synchronously before App children render; guard browser access for static prerendering and retain an in-memory fallback when sessionStorage is unavailable.