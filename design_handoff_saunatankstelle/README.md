# Handoff: Saunatankstelle A. Rossi, one-pager

## Overview
A single-page website for the Saunatankstelle A. Rossi, a free, wood-fired community sauna on the CAMPO parking lot in Winterthur. Built by Kollektiv Hotel Regina for SKKG, run by volunteers. Open Thursdays 18–21. The page explains how it works and asks people to volunteer. Language: German only (English may follow later).

## About the design files
`reference/saunatankstelle.html` is a **design reference made in HTML**, not production code. Rebuild it as an **Astro** site using Astro's own conventions (components, scoped styles, `astro:assets`). The reference uses inline styles everywhere; in Astro, move these into scoped `<style>` blocks and CSS custom properties.

## Fidelity
**High fidelity.** Colors, type, spacing and copy are final. Copy is German and must be used **verbatim**, including the soft hyphen in `Sauna­tankstelle` (`&shy;`) and the non-breaking spaces noted below. No em dashes in the copy, on purpose.

## Target stack
- Astro, `output: 'static'`. **No client-side JavaScript is needed** — ship zero JS.
- Fonts self-hosted via `@fontsource/abril-fatface`, `@fontsource/archivo` (400, 500, 600, 700, 400-italic), `@fontsource/archivo-narrow` (400, 500, 600, 700). Do not load from Google Fonts.
- Images through `astro:assets` `<Image>` / `<Picture>` (AVIF/WebP, responsive `widths`).
- Suggested structure: `src/pages/index.astro`, `src/layouts/Base.astro`, components `Header`, `Intro`, `InfoGrid`, `Volunteer`, `Footer`. Keep copy in one `src/content/site.ts` (or similar) so a volunteer can edit text without touching layout.
- Domain: **sauna-rossi.ch**. Contact: sauna.rossi@gmail.com. Set `site: 'https://sauna-rossi.ch'` in `astro.config` and add a canonical URL.
- `<html lang="de">`, `<title>Die Saunatankstelle A. Rossi</title>`, meta description: "Eine holzbefeuerte Sauna auf dem Campo Parkplatz in Winterthur. Jeden Donnerstag 18 bis 21 Uhr, gratis." Add Open Graph tags using the hero photo.

## Layout
One column, `max-width: 1080px`, centered. Page background `#f2efe6` edge to edge. Horizontal gutter everywhere: `clamp(20px, 6vw, 64px)`. Photos and the black volunteer block are **full width of the 1080 column** (no gutter).

Fully fluid, no media queries needed: all grids use `repeat(auto-fit, minmax(min(Npx, 100%), 1fr))`, so they collapse to one column on their own.

### 1. Header
- Padding: `clamp(32px,6vw,56px)` top, gutter sides. Flex, `space-between`, `align-items: flex-start`, `gap: 32px`, wraps.
- Left: "Kollektiv<br>Hotel Regina<br>präsentiert:" — Archivo Narrow 600, 16px, line-height 1.25, letter-spacing 0.02em.
- Right: "Ein Projekt der Stiftung für Kunst, Kultur und Geschichte und von Terresta" — Archivo Narrow 400, 14px, line-height 1.35, right-aligned, `max-width: 230px`, opacity 0.75.

### 2. Title (h1)
- `margin-top: 26px`, gutter sides.
- "Die Sauna&shy;tankstelle" line break, then "A. Rossi" in red `#d8412a`.
- Abril Fatface 400, `font-size: clamp(46px, 10.5vw, 124px)`, line-height 0.86, letter-spacing −0.022em, `text-wrap: pretty`.

### 3. Intro + schedule
- `padding-top: 34px`, gutter sides. Grid `repeat(auto-fit, minmax(min(280px,100%), 1fr))`, gap `clamp(28px,4vw,48px)`, `align-items: start`.
- Left `<p>`, Archivo 400, 22px, line-height 1.42, `text-wrap: pretty`:
  "Eine Sauna als Hommage an den Winterthurer Zapfsäulen-Pionier. Getankt wird an seiner legendären Tankstelle nicht mehr. Jetzt ist sie holzbefeuert und offen für alle. Gebaut hat sie das Basler Kunstkollektiv Hotel Regina, im Auftrag der SKKG. Am Laufen halten wir sie: ein paar Freiwillige."
- Right: `border-top: 2px solid #17171a`, `padding-top: 16px`, flex column, gap 14px.
  - "Donnerstag" (ink) and "18 – 21 Uhr" (red `#d8412a`): Abril Fatface, `clamp(38px,6vw,50px)`, line-height 0.95. The dash is an en dash with spaces.
  - "Gratis. Textilsauna, also mit Badebekleidung.<br>Kinder willkommen." — Archivo 500, 18px, line-height 1.4.

### 4. Hero photo
- `margin-top: 44px`, full column width, `height: clamp(300px, 46vw, 620px)`, `object-fit: cover`, `object-position: 50% 50%`. Placeholder bg `#cdcac1`.
- Asset: `assets/buckets.jpeg` (red buckets and hose). Alt: "Rote Kübel und Schlauch vor der Sauna".
- This file is already converted to **SDR**. The original was an iPhone HDR photo that rendered much brighter than the rest of the page. Don't swap it for the original.

### 5. Info grid (2×2 on desktop)
- Padding `clamp(38px,6vw,52px)` top, gutter sides. Grid `repeat(auto-fit, minmax(min(360px,100%), 1fr))`, gap `40px clamp(28px,4vw,48px)`. Two columns at full width, one on narrow screens.
- Each item: flex column, gap 9px.
  - Label: Archivo Narrow 700, 12px, letter-spacing 0.16em, uppercase, red `#d8412a`.
  - Body: Archivo 400, 20px, line-height 1.4.
- Items, in order:
  1. **Mitbringen** — "Badelatschen und Badetuch. Badebekleidung. Sonst nichts."
  2. **Abkühlen** — "Kaltes Wasser aus dem Schlauch, vier rote Kübel. Wer mehr will: die Eulach fliesst gleich nebenan."
  3. **Wo** — two paragraphs, flex column, gap 12px:
     - "Auf dem Campo Parkplatz. Das Auto lässt du besser stehen."
     - Link: "Zum&nbsp;Park&nbsp;5, 8404&nbsp;Winterthur" → `https://www.google.com/maps/search/?api=1&query=Zum+Park+5%2C+8404+Winterthur`, new tab. Use non-breaking spaces so street+number and zip+town never split.
  4. **Heizen** — "Holzbefeuert. Das Feuer brennt schon, wenn du kommst. Jemand hat es angemacht."

### 6. Volunteer block (black)
- `margin-top: clamp(40px,6vw,56px)`, full column width, background `#17171a`. Grid `repeat(auto-fit, minmax(min(420px,100%), 1fr))`, two halves side by side, stacked on narrow screens.
- **Text comes first in source order**, so on mobile the CTA appears before the photo.
- Text half: color `#f2efe6`, padding `clamp(38px,5vw,56px) clamp(20px,5vw,56px)`, flex column, gap 30px, vertically centered.
  - "Mithelfen?" — Abril Fatface, `clamp(40px,5vw,50px)`, line-height 1, color **`#abc1ff`** (periwinkle, from the original A. Rossi sign). Several reds were tried and rejected; keep the periwinkle.
  - Paragraph, 16px below — Archivo 400, 19px, line-height 1.45: "Wir sind ein paar Freiwillige. Es braucht immer Leute, die einheizen und das Feuer hüten, die auf- und zuschliessen, und die nachher putzen. Nichts davon ist kompliziert."
  - "So gehts" — Archivo Narrow 700, 13px, letter-spacing 0.14em, uppercase, opacity 0.6.
  - 8px below: "Komm an einem Donnerstag vorbei und frag." — Archivo Narrow 700, `clamp(26px,3.6vw,34px)`, line-height 1.12, color `#f2efe6`.
- Photo half: `min-height: clamp(320px,42vw,560px)`, image `object-fit: cover`, `object-position: 50% 38%`, **no filter**, full colour. Alt: "Die Saunatankstelle auf dem Campo Parkplatz".

### 7. New location notice
- Padding `clamp(44px,7vw,64px)` top, gutter sides. Grid `repeat(auto-fit, minmax(min(360px,100%), 1fr))`, gap `24px clamp(28px,4vw,48px)`, `align-items: start`.
- Left: label "Ab Mai 2027" (Archivo Narrow 700, 12px, 0.16em, uppercase, red), then 10px below the heading "Die Sauna braucht einen neuen Platz." — Abril Fatface, `clamp(34px,5vw,50px)`, line-height 0.95, `text-wrap: pretty`.
- Right: Archivo 400, 20px, line-height 1.4, flex column gap 12px:
  - "Auf dem Campo darf sie bis April 2027 stehen. Wir suchen einen Ort, an dem sie weiterleben kann, am liebsten in Hegi oder Oberi."
  - "Du kennst einen? [sauna.rossi@gmail.com](mailto:sauna.rossi@gmail.com)"

### 8. Footer
- Padding `clamp(44px,7vw,64px)` top, gutter sides, `64px` bottom. Centered. Archivo Narrow 400, 13px, line-height 1.6, opacity 0.72, `text-wrap: pretty`. No divider above it.
- Text, with links (all new tab):
  "Gebaut vom [Kollektiv Hotel Regina](https://hotelregina.org) · Ein Projekt der [Stiftung für Kunst, Kultur und Geschichte](https://www.skkg.ch) und von [Terresta](https://www.terresta.ch) · Auf dem [CAMPO](https://www.campo-winterthur.ch) · Betrieben von Freiwilligen · [sauna.rossi@gmail.com](mailto:sauna.rossi@gmail.com)"

## Links & states
- All links: `color: inherit`, underline, `text-decoration-thickness: 1px`, `text-underline-offset: 3px`. Hover: color `#d8412a`.
- Add a visible `:focus-visible` outline (e.g. 2px `#d8412a`, offset 3px). Not in the reference, but needed.
- External links: `target="_blank" rel="noopener"`.
- No animations, no other interactions, no state.

## Design tokens
| Token | Value | Use |
|---|---|---|
| `--paper` | `#f2efe6` | page bg, text on black |
| `--ink` | `#17171a` | text, volunteer block bg, rule |
| `--red` | `#d8412a` | title accent, time, labels, link hover |
| `--blue` | `#abc1ff` | "Mithelfen?" only |
| `--placeholder` | `#cdcac1` | image bg while loading |
| `--gutter` | `clamp(20px, 6vw, 64px)` | horizontal padding |
| `--max` | `1080px` | content column |

Fonts: Abril Fatface (display), Archivo (body), Archivo Narrow (labels, small print). No radii, no shadows.

## Assets
- `assets/buckets.jpeg` — hero photo, provided by the team, SDR-converted.
- **Volunteer photo** — currently hot-linked from CAMPO's CMS: `https://cms.campo-winterthur.ch/uploads/media/Manche-moegens-heiss/SKKG_Campo_17April2026-7681.jpg` (from campo-winterthur.ch/aktuell/manche-moegens-heiss). **Do not hot-link in production.** Download it into `src/assets/`, and confirm usage rights and photo credit with SKKG / CAMPO first.

## Files
- `reference/saunatankstelle.html` — the design, static, no JS. Open in a browser to compare.
- `assets/buckets.jpeg` — hero image.

## Kickoff prompt for Claude Code
> Read `design_handoff_saunatankstelle/README.md` and open `reference/saunatankstelle.html`. Scaffold a new Astro project (static output, zero client JS), self-host the fonts with Fontsource, put the images in `src/assets/` and serve them with `astro:assets`, and rebuild the page to match the reference exactly. Keep all German copy verbatim. Use CSS custom properties for the tokens and scoped styles per component. When done, compare against the reference at 1280px, 800px and 375px wide.
