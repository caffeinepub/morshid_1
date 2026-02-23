# Specification

## Summary
**Goal:** Add bilingual French support with a language switcher, allowing farmers to view the entire MORSHID website in either English or French.

**Planned changes:**
- Add language switcher ("EN | FR") in the header near navigation menu
- Implement language state management using React context to track selected language (default: English)
- Translate all text content on Home page to simple, farmer-friendly French
- Translate all text content on For Farmers page to simple, farmer-friendly French
- Translate all text content on Contact page to simple, farmer-friendly French
- Translate header navigation links to French ("Home" → "Accueil", "For Farmers" → "Pour les Agriculteurs", "Contact" → "Contact")
- Translate footer content to French while keeping technical details unchanged
- Translate WhatsApp floating button tooltip/aria-label to French
- Translate LogoPopup component text to French
- Keep "MORSHID" name unchanged in both languages throughout the site

**User-visible outcome:** Farmers can click "FR" in the header to view the entire website in simple French, or click "EN" to switch back to English. All content including navigation, pages, buttons, and components will display in the selected language, making the site accessible to French-speaking farmers.
