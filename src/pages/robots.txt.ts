import { client } from "../data/site";

export const prerender = true;
export function GET() {
  const indexable = client.robots === "index,follow" && client.canonical;
  const lines = ["User-agent: *", indexable ? "Allow: /" : "Disallow: /"];
  if (indexable && client.sitemapEnabled) lines.push(`Sitemap: ${client.canonical}/sitemap-index.xml`);
  return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
