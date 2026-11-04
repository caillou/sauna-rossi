# Die Saunatankstelle A. Rossi

One-page website for the free, wood-fired community sauna on the CAMPO Areal
parking lot in Winterthur. Served at sauna-rossi.ch.

## Stack

Astro (static output, zero client JS), scoped CSS, self-hosted Fontsource fonts,
`astro:assets` for images. Deployed locally to GitHub Pages.

## Development

```bash
pnpm install
pnpm dev
pnpm build      # astro check, then astro build
pnpm preview
pnpm lint
pnpm format:check
```

## Deploy

```bash
pnpm run deploy
```

This builds and pushes `dist` to the `gh-pages` branch. Use `pnpm run deploy`:
plain `pnpm deploy` is pnpm's own workspace command.

## Editing copy

All text lives in `src/content/site.ts`. Soft hyphens and non-breaking spaces
are written there as the JS escapes `\u00AD` and `\u00A0`. Text with line breaks
or inline links is a list of segments, rendered by `src/components/Rich.astro`.

## Icons

`public/favicon.svg` is a slanted Abril Fatface "R", outlined once. After
changing it, run `pnpm run icons` and commit the PNGs.

## Overrides to the design handoff

`design_handoff_saunatankstelle/` is kept as supplied, apart from a name removed
from `CHANGES-2026-11-04.md`. The two `CHANGES-2026-11-04*.md` files override
its README, the later one first, including the fonts: Archivo Narrow 600 went
with the header. The reference HTML includes both change lists. The site differs
from it only in the fonts, which are self-hosted, and in these decisions:

- Footer: three lines from 520px up, one item per line below, as the second
  change list recommends. The reference's two-line variant is not used.
- Open Graph image: the volunteer photo at 1200x630, not the hero.
- Volunteer photo: a sharper self-hosted 2400x1600 version, not the reference's
  hotlink, rights cleared, no credit line. Its alt says "CAMPO Areal".
- New location label: "Ab März 2027", owner decision, not the "Ab Mai 2027" in
  the change lists.

Added on top of the handoff:

- Favicon: paper "R" on red.
- 404 page: German, not indexed.

## Launch runbook

1. Make the repo public, because Pages needs that on a free plan:

   ```bash
   gh repo edit caillou/sauna-rossi --visibility public --accept-visibility-change-consequences
   ```

2. Run `pnpm run deploy`.
3. Enable Pages:

   ```bash
   gh api -X POST repos/caillou/sauna-rossi/pages -f 'source[branch]=gh-pages' -f 'source[path]=/'
   ```

4. In OVH, for sauna-rossi.ch:
   - Remove the web redirect, which owns the A record 213.186.33.5 on the apex
     and on www, and the TXT record `1|www.sauna-rossi.ch`.
   - Add the four GitHub A records on the apex: 185.199.108.153,
     185.199.109.153, 185.199.110.153, 185.199.111.153.
   - Add CNAME www to caillou.github.io.
   - Keep the MX records, the SPF record and the
     `_github-pages-challenge-caillou` TXT record.
5. Wait for the certificate, then enforce HTTPS in the Pages settings.
6. Verify:

   ```bash
   gh api repos/caillou/sauna-rossi/pages
   ```
