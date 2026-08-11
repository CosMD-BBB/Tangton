import process from "node:process";

const base = new URL(process.argv[2] || "http://127.0.0.1:3107");
const forbidden = /SEO\s*•\s*hreflang|localized content|เว็บไซต์ตัวอย่าง|เว็บไซต์สาธิต|demonstration website|နမူနာဝက်ဘ်ဆိုက်|प्रदर्शन वेबसाइट|演示网站|ตัวอย่างรูปแบบรีวิว|ราคาแพ็กเกจตัวอย่าง|เดิมยังขาด/i;

function expectedLanguage(pathname) {
  const prefix = pathname.split("/").filter(Boolean)[0];
  return ({ en: "en", my: "my", hi: "hi", zh: "zh-CN" })[prefix] || "th";
}

async function parallel(items, limit, worker) {
  const queue = [...items];
  const results = [];
  await Promise.all(Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length) results.push(await worker(queue.shift()));
  }));
  return results;
}

const sitemapResponse = await fetch(new URL("/sitemap.xml", base));
if (!sitemapResponse.ok) throw new Error(`Unable to read sitemap: ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
for (const required of ["/", "/privacy", "/terms"]) if (!paths.includes(required)) paths.push(required);

const assets = new Set();
const linkedPages = new Set();
const pageErrors = [];
const pages = await parallel([...new Set(paths)], 12, async (pathname) => {
  const response = await fetch(new URL(pathname, base));
  const html = await response.text();
  const language = html.match(/<html[^>]*lang="([^"]+)"/i)?.[1];
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim();
  const errors = [];
  if (!response.ok) errors.push(`HTTP ${response.status}`);
  if (language !== expectedLanguage(pathname)) errors.push(`lang=${language || "missing"}`);
  if (!title) errors.push("missing title");
  if (!/<h1(?:\s|>)/i.test(html)) errors.push("missing h1");
  if (forbidden.test(html)) errors.push("contains internal/demo copy");
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const value = match[1];
    if (!value.startsWith("/")) continue;
    const url = new URL(value, base);
    if (value.startsWith("/_next/") || /\.(?:avif|gif|jpe?g|png|svg|webp|ico|css|js)(?:\?|$)/i.test(url.pathname)) assets.add(url.pathname + url.search);
    else if (!url.pathname.startsWith("/api/")) linkedPages.add(url.pathname);
  }
  if (errors.length) pageErrors.push({ pathname, errors });
  return { pathname, status: response.status, language, title };
});

const assetErrors = (await parallel([...assets], 16, async (pathname) => {
  const response = await fetch(new URL(pathname, base));
  return response.ok ? null : { pathname, status: response.status };
})).filter(Boolean);

const sitemapPaths = new Set(paths);
const missingLinkedPages = (await parallel([...linkedPages].filter((path) => !sitemapPaths.has(path)), 12, async (pathname) => {
  const response = await fetch(new URL(pathname, base));
  return response.ok ? null : { pathname, status: response.status };
})).filter(Boolean);

const report = {
  pagesChecked: pages.length,
  assetsChecked: assets.size,
  extraLinksChecked: [...linkedPages].filter((path) => !sitemapPaths.has(path)).length,
  pageErrors,
  assetErrors,
  missingLinkedPages,
};

console.log(JSON.stringify(report, null, 2));
if (pageErrors.length || assetErrors.length || missingLinkedPages.length) process.exitCode = 1;
