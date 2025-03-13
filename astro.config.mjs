import { defineConfig } from "astro/config";
import icon from "astro-icon";
import i18n from "@astrolicious/i18n";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.yourwebsite.com", // update me!
  integrations: [
    icon(),
    i18n({
      defaultLocale: "en",
      locales: ["fr", "en"],
      client: {
        data: true,
        paths: true,
      },
      // used to localize the routes
      pages: {
        "/about": {
          fr: "/a-propos",
        }
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          fr: 'fr-FR',
        },
      },
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
