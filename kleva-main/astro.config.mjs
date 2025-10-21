// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kleva.co",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    icon(),
    sanity({
      projectId: "f8pskp0q",
      dataset: "kleva",
      apiVersion: "2025-01-28",
      useCdn: false,
      studioBasePath: "/sanity",
    }),
    react(),
    sitemap(),
    robotsTxt({
      sitemap: true,
      policy: [
        {
          userAgent: "*",
          allow: "/",
        },
        {
          userAgent: "GPTBot",
          allow: "/",
        },
        {
          userAgent: "ChatGPT-User",
          allow: "/",
        },
        {
          userAgent: "CCBot",
          allow: "/",
        },
        {
          userAgent: "anthropic-ai",
          allow: "/",
        },
        {
          userAgent: "Claude-Web",
          allow: "/",
        },
        {
          userAgent: "PerplexityBot",
          allow: "/",
        },
        {
          userAgent: "*",
          disallow: "/sanity/",
        },
      ],
    }),
  ],

  adapter: vercel(),
});
