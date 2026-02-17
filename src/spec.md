# Specification

## Summary
**Goal:** Perform site-wide QA polish for MORSHID by unifying the green color, standardizing button/card styling, and verifying key UI elements (sticky header, WhatsApp button), links, images, and YouTube embeds without changing unrelated content.

**Planned changes:**
- Audit and replace every green UI color across the site with hex `#25D366` (including hover/focus states, borders, icons, and any CSS/Tailwind variables) while leaving all non-green colors unchanged.
- Standardize button styling site-wide (rounded corners and consistent padding/height) without editing any files under `frontend/src/components/ui`.
- Standardize card styling site-wide (consistent borders and visible shadows) without editing any files under `frontend/src/components/ui`.
- Verify and fix sticky header behavior across all routes, including z-index/overlap issues, without changing header content or navigation structure.
- Verify and fix the floating WhatsApp button visibility/fixed positioning across all routes; keep link exactly `https://wa.me/212623237732` and open in a new tab.
- Ensure hero images are high-quality and clearly depict Moroccan farmers, updating/replacing existing generated assets while keeping the same file paths referenced in code.
- Validate and fix all links across the site (nav routes, WhatsApp CTAs, `mailto:hello@tmu.ai`, `http://app.morshid.ai`, and any footer attribution) without changing displayed text.
- Verify the two Home page YouTube embeds render/play correctly, use proper embed URLs with the same video IDs, and remain responsive.

**User-visible outcome:** The site has consistent green styling, uniform button/card visuals, a reliably sticky header and WhatsApp button on all pages, working links, high-quality Moroccan farmer hero imagery, and properly functioning responsive YouTube videos on the Home page.
