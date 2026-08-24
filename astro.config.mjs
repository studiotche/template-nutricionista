import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readFileSync } from "node:fs";

const client = JSON.parse(readFileSync(new URL("./src/data/client.json", import.meta.url), "utf-8"));
const pagesBase = process.env.PAGES_BASE;

export default defineConfig({
  site: client.canonical || client.pagesUrl || "https://example.invalid",
  base: pagesBase || client.basePath || "/",
  output: "static",
  integrations: client.sitemapEnabled && client.canonical ? [sitemap()] : [],
  build: { format: "directory" },
});
