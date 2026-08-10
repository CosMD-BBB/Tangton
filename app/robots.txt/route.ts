import { siteUrl } from "@/lib/site-data";
export async function GET() { return new Response(`User-agent: *\nAllow: /\nDisallow: /__debug\nDisallow: /api/\nSitemap: ${siteUrl}/sitemap.xml\n`, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } }); }
