import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Manual icon generator. Not in the build path: run `pnpm run icons` by hand
// after public/favicon.svg changes, then commit the two PNGs.

// Resolve everything off the script location, not the cwd, so it works no
// matter where node is invoked from.
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = resolve(root, "public/favicon.svg");

// The svg box is 64 units. Rasterize at a density high enough to stay sharp at
// the largest target size, then scale down.
const render = (size, name) =>
  sharp(SRC, { density: 72 * 8 })
    .resize(size, size)
    .flatten({ background: "#d8412a" }) // apple-touch icons must be opaque
    .png()
    .toFile(resolve(root, "public", name));

await render(32, "favicon-32.png");
await render(180, "apple-touch-icon.png");
console.log("wrote favicon-32.png + apple-touch-icon.png to public/");
