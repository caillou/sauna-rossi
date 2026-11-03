# Die Saunatankstelle A. Rossi

One-page website for the free, wood-fired community sauna on the CAMPO parking
lot in Winterthur. Served at sauna-rossi.ch.

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

`design_handoff_saunatankstelle/` is kept unchanged. These decisions override
its README:

- Hero: `src/assets/buckets.jpeg` is a 2200x1650 sRGB conversion of the
  original, without metadata, not the handoff's 1024px file.
- Open Graph image: the volunteer photo at 1200x630, not the hero.
- Volunteer photo: self-hosted, rights cleared, no credit line.
- Favicon: paper "R" on red, added on top of the handoff.
- 404 page: added on top of the handoff, German, not indexed.

## Launch runbook

1. Run `pnpm run deploy`.
2. Enable Pages:

   ```bash
   gh api -X POST repos/caillou/sauna-rossi/pages -f 'source[branch]=gh-pages' -f 'source[path]=/'
   ```

3. In OVH, for sauna-rossi.ch:
   - Remove the A record 213.186.33.5 on the apex and on www.
   - Add the four GitHub A records on the apex: 185.199.108.153,
     185.199.109.153, 185.199.110.153, 185.199.111.153.
   - Add CNAME www to caillou.github.io.
   - Keep the MX and TXT records.
4. Wait for the certificate, then enforce HTTPS in the Pages settings.
5. Verify:

   ```bash
   gh api repos/caillou/sauna-rossi/pages
   ```
