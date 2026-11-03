// @ts-check

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://sauna-rossi.ch",
  output: "static",
  devToolbar: { enabled: false },
});
