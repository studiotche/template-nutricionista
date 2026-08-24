import clientJson from "./client.json";

export type SiteClientV2 = {
  version: 2;
  content: {
    business: {
      name: string;
      category?: string;
      phone?: string;
      email?: string;
      address?: string;
      city?: string;
      state?: string;
      social?: Record<string, string>;
    };
    seo: { title: string; description: string; h1: string; ogTitle?: string; ogDescription?: string };
    hero: { eyebrow?: string; title: string; description: string; primaryCta?: { label: string; kind: "whatsapp" | "phone" | "contact" }; evidenceIds: string[] };
    about?: { heading: string; body: string; evidenceIds: string[] };
    services?: Array<{ name: string; description: string; evidenceIds: string[] }>;
    differentiators?: Array<{ title: string; description: string; evidenceIds: string[] }>;
    faq?: Array<{ question: string; answer: string; evidenceIds: string[] }>;
    reviews?: Array<{ evidenceId: string; author: string; rating: number; text: string; date?: string; source: "google" }>;
    media?: { heroAlt?: string; aboutAlt?: string };
    brand?: { primary?: string; accent?: string };
  };
  canonical: string | null;
  robots: "index,follow" | "noindex,nofollow";
  sitemapEnabled: boolean;
  jsonLd: Array<Record<string, unknown>>;
  assets?: { heroDesktop?: string; heroMobile?: string; about?: string; logo?: string; og?: string };
  basePath?: string;
  pagesUrl?: string;
  generatedAt: string;
};

const parsed = clientJson as unknown as SiteClientV2;
if (parsed.version !== 2 || !parsed.content?.business?.name || !parsed.content?.seo || !parsed.content?.hero) {
  throw new Error("src/data/client.json must contain a valid approved SiteClientV2 manifest");
}

export const client = parsed;
export const content = parsed.content;
export const business = content.business;
export const services = Array.isArray(content.services) ? content.services : [];
export const differentiators = Array.isArray(content.differentiators) ? content.differentiators : [];
export const faqs = Array.isArray(content.faq) ? content.faq : [];
export const reviews = Array.isArray(content.reviews)
  ? content.reviews.filter((review) => review.source === "google" && review.evidenceId)
  : [];

export const phoneDigits = String(business.phone || "").replace(/\D/g, "");
export const whatsappUrl = phoneDigits
  ? `https://wa.me/${phoneDigits}?text=${encodeURIComponent(`Olá! Gostaria de informações sobre ${business.name}.`)}`
  : "";
export const telephoneUrl = phoneDigits ? `tel:+${phoneDigits}` : "";
export const emailUrl = business.email ? `mailto:${business.email}` : "";
export const primaryContactUrl = whatsappUrl || telephoneUrl || emailUrl;
export const locationText = [business.address, business.city, business.state].filter(Boolean).join(" · ");

export function asset(path?: string): string {
  return path ? `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}` : "";
}

export function safeColor(value: string | undefined, fallback: string): string {
  return value && /^#[0-9a-f]{6}$/i.test(value) ? value : fallback;
}
