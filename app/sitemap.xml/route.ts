import { guides, provinces, services, siteUrl } from "@/lib/site-data";
import { locales, localizedPath } from "@/lib/i18n";
import { industries } from "@/lib/industry-data";

export async function GET() {
  const industryPaths = ["/business-guides", ...industries.map((industry) => `/business-guides/${industry.slug}`)];
  const thaiPaths = ["", "/services", "/guides", "/areas", "/tools", "/faq", ...industryPaths, ...services.map((s) => `/services/${s.slug}`), ...guides.map((g) => `/guides/${g.slug}`), ...provinces.map((p) => `/areas/${p.slug}`)];
  const translatedPaths = ["", "/services", "/tools", "/faq", ...industryPaths, ...services.map((s) => `/services/${s.slug}`)];
  const localizedPaths = locales.flatMap((locale) => translatedPaths.map((path) => localizedPath(locale, path)));
  const paths = [...thaiPaths, ...localizedPaths];
  const urls = paths.map((path) => `<url><loc>${siteUrl}${path}</loc><lastmod>2026-08-10</lastmod></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
