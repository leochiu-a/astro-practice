// @ts-check
import { defineConfig } from "astro/config";

import vercelServerless from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [react()],
});