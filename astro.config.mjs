import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://glittering-cuchufli-452743.netlify.app",
  integrations: [preact()]
});