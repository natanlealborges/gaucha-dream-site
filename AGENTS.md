# Architecture rules

- Keep the HBook base URL in site configuration and generate all booking and WhatsApp links through the attribution module, so session origin stays consistent across pages.
- Initialize first-touch attribution synchronously before App children render; guard browser access for static prerendering and retain an in-memory fallback when sessionStorage is unavailable.
- Derive locale from explicit URL prefixes and reuse page components with centralized translation catalogs; Portuguese remains the source language and guides stay unprefixed to prevent accidental language redirects.
- Render localized head tags and JSON-LD through shared locale helpers in both the browser and static prerendering; keep stable entity IDs and translate only descriptive fields to preserve identity and facts.