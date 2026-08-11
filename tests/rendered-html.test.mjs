import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("แบ่งบริการเป็น 5 หมวดและมีหน้าบริการครบ 40 เรื่อง", async () => {
  const data = await readFile(new URL("lib/site-data.ts", root), "utf8");
  const serviceSection = data.slice(data.indexOf("export const services"), data.indexOf("export const serviceCategories"));
  const slugs = [...serviceSection.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);

  assert.equal(slugs.length, 40);
  assert.equal(new Set(slugs).size, 40);
  for (const category of [
    "เริ่มต้นและจดทะเบียน",
    "บัญชี ภาษี และการเงิน",
    "บุคลากรและการบริหาร",
    "เปลี่ยนแปลงและปิดกิจการ",
    "ใบอนุญาตและการลงทุน",
  ]) assert.match(data, new RegExp(category));
});

test("หน้าแรกแสดงเนื้อหา ราคา ขั้นตอน รีวิว คำถาม และ CTA", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  for (const marker of ["category-atlas", "content-proof", "tools-preview", "process-section", "pricing-section", "reviews-section", "faq-section", "contact-section"]) {
    assert.match(page, new RegExp(marker));
  }
  assert.match(page, /40 หน้าบริการ/);
  assert.match(page, /8 งานบริหารที่เดิมยังขาด/);
});

test("เครื่องมือทั้ง 5 รายการมีการคำนวณและจัดเก็บสถานะ", async () => {
  const toolbox = await readFile(new URL("app/tools/Toolbox.tsx", root), "utf8");
  for (const testId of ["vat-tool", "employee-cost-tool", "checklist-tool", "structure-tool", "name-tool"]) {
    assert.match(toolbox, new RegExp(`data-testid=\\"${testId}\\"`));
  }
  assert.match(toolbox, /localStorage\.setItem/);
  assert.match(toolbox, /URL\.createObjectURL/);
  assert.match(toolbox, /navigator\.clipboard\.writeText/);
});

test("รองรับ 5 ภาษาพร้อมเส้นทางบริการ เครื่องมือ และ FAQ", async () => {
  const i18n = await readFile(new URL("lib/i18n.ts", root), "utf8");
  for (const marker of ["ไทย", "English", "မြန်မာ", "हिन्दी", "中文"]) assert.match(i18n, new RegExp(marker));
  for (const locale of ["en", "my", "hi", "zh"]) {
    assert.match(i18n, new RegExp(`${locale}: \\[`));
  }
  await Promise.all([
    access(new URL("app/[locale]/page.tsx", root)),
    access(new URL("app/[locale]/services/page.tsx", root)),
    access(new URL("app/[locale]/services/[slug]/page.tsx", root)),
    access(new URL("app/[locale]/tools/page.tsx", root)),
    access(new URL("app/[locale]/faq/page.tsx", root)),
    access(new URL("app/[locale]/business-guides/page.tsx", root)),
    access(new URL("app/[locale]/business-guides/[slug]/page.tsx", root)),
  ]);
});

test("FAQ ต่างประเทศครบภาษาและช่องทางติดต่อใช้โลโก้จริง", async () => {
  const faqData = await readFile(new URL("lib/localized-faqs.ts", root), "utf8");
  const markers = [["en: [", "my: ["], ["my: [", "hi: ["], ["hi: [", "zh: ["], ["zh: [", "};"]];
  for (const [start, end] of markers) {
    const section = faqData.slice(faqData.indexOf(start), faqData.indexOf(end, faqData.indexOf(start) + start.length));
    assert.equal([...section.matchAll(/^\s+\["/gm)].length, 20);
  }
  const localizedService = await readFile(new URL("app/[locale]/services/[slug]/page.tsx", root), "utf8");
  const form = await readFile(new URL("components/ConsultationForm.tsx", root), "utf8");
  assert.match(localizedService, /side-service-label/);
  assert.match(form, /contact-icons\/telegram\.svg/);
  assert.match(form, /contact-icons\/whatsapp\.svg/);
  await Promise.all([
    access(new URL("public/contact-icons/telegram.svg", root)),
    access(new URL("public/contact-icons/whatsapp.svg", root)),
  ]);
});

test("มีคู่มือ 14 ประเภทธุรกิจ เมนูรวม 40 บริการ และไอคอน", async () => {
  const industries = await readFile(new URL("lib/industry-data.ts", root), "utf8");
  const section = industries.slice(industries.indexOf("export const industries"), industries.indexOf("export const industryUi"));
  const industrySlugs = [...section.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(industrySlugs.length, 14);
  for (const slug of ["school", "it-company", "pharmacy", "pet-business"]) assert.ok(industrySlugs.includes(slug));
  const mega = await readFile(new URL("components/ServiceMegaMenu.tsx", root), "utf8");
  const visuals = await readFile(new URL("lib/service-visuals.ts", root), "utf8");
  assert.match(mega, /serviceCategories\.map/);
  assert.match(mega, /services\.filter/);
  assert.match(visuals, /register-company/);
  await Promise.all([access(new URL("public/tangton-logo-source.png", root)), access(new URL("public/tangton-symbol.png", root))]);
});

test("คู่มือธุรกิจแสดงใบอนุญาตเฉพาะทางและแก้เลขแบบสำคัญแล้ว", async () => {
  const permitData = await readFile(new URL("lib/industry-permits.ts", root), "utf8");
  const industryPage = await readFile(new URL("components/IndustryPages.tsx", root), "utf8");
  for (const slug of ["restaurant", "cafe", "beauty-clinic", "online-store", "factory", "hotel", "salon", "fitness", "bubble-tea", "bakery", "school", "it-company", "pharmacy", "pet-business"]) {
    assert.match(permitData, new RegExp(`(?:"${slug}"|${slug}): \\[`));
  }
  assert.match(permitData, /ส\.พ\.8 — ไม่ใช่ ส\.พ\.18/);
  assert.match(permitData, /คำขอ ข\.ย\.1 \/ ใบอนุญาต ข\.ย\.5/);
  assert.match(permitData, /opec\.go\.th/);
  assert.match(permitData, /dld\.go\.th/);
  for (const marker of ["industry-permit-section", "permit-card", "ตรวจข้อมูลจากหน่วยงานรัฐ", "permits.length"]) {
    assert.match(industryPage, new RegExp(marker));
  }
  assert.match(industryPage, /ไม่รวมในแพ็กเกจบริการด้านบน/);
  assert.ok(industryPage.indexOf("industry-permit-section") > industryPage.indexOf("related-industry"));
});

test("รองรับ SEO รายธุรกิจและแอนิเมชันแบบเคารพการตั้งค่าผู้ใช้", async () => {
  const sitemap = await readFile(new URL("app/sitemap.xml/route.ts", root), "utf8");
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  const reveal = await readFile(new URL("components/ScrollReveal.tsx", root), "utf8");
  assert.match(sitemap, /business-guides/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(reveal, /IntersectionObserver/);
});

test("เครื่องมือหลายภาษาคำนวณผลได้ในเบราว์เซอร์", async () => {
  const toolbox = await readFile(new URL("app/[locale]/tools/LocalizedToolbox.tsx", root), "utf8");
  for (const testId of ["localized-vat", "localized-vat-amount", "localized-employee", "localized-structure", "localized-structure-result"]) {
    assert.match(toolbox, new RegExp(`data-testid=\\"${testId}\\"`));
  }
  assert.match(toolbox, /setAmount/);
  assert.match(toolbox, /employee\.cost/);
  assert.match(toolbox, /const result = liability/);
});

test("ผลลัพธ์บิลด์มี worker และภาพแชร์รุ่นใหม่", async () => {
  await Promise.all([
    access(new URL("dist/server/index.js", root)),
    access(new URL("dist/client/og-v8.png", root)),
  ]);
});

test("หน้ารายละเอียดรุ่นใหม่แยกข้อมูลสำคัญและมีภาพประกอบครบ", async () => {
  const servicePage = await readFile(new URL("app/services/[slug]/page.tsx", root), "utf8");
  const serviceContent = await readFile(new URL("lib/service-content.ts", root), "utf8");
  const serviceData = await readFile(new URL("lib/site-data.ts", root), "utf8");
  const serviceSection = serviceData.slice(serviceData.indexOf("export const services"), serviceData.indexOf("export const serviceCategories"));
  const serviceSlugs = [...serviceSection.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
  const profileSection = serviceContent.slice(serviceContent.indexOf("const profileBySlug"), serviceContent.indexOf("const profiles"));
  const outcomeSection = serviceContent.slice(serviceContent.indexOf("const outcomesBySlug"), serviceContent.indexOf("const risksBySlug"));
  const riskSection = serviceContent.slice(serviceContent.indexOf("const risksBySlug"), serviceContent.indexOf("export function getServiceContent"));
  const industryPage = await readFile(new URL("components/IndustryPages.tsx", root), "utf8");
  const toolsPage = await readFile(new URL("app/tools/page.tsx", root), "utf8");
  const form = await readFile(new URL("components/ConsultationForm.tsx", root), "utf8");

  for (const marker of ["service-jump-nav", "service-content-card", "time-summary", "risk-grid", "serviceImage", "getServiceContent", "document-list-detailed", "step-list-detailed"]) {
    assert.match(servicePage, new RegExp(marker));
  }
  for (const slug of serviceSlugs) {
    const slugPattern = new RegExp(`(?:"${slug}"|\\b${slug}:)`);
    assert.match(profileSection, slugPattern);
    assert.match(outcomeSection, slugPattern);
    assert.match(riskSection, slugPattern);
  }
  assert.match(serviceContent, /outcomesBySlug/);
  assert.match(serviceContent, /risksBySlug/);
  assert.match(serviceContent, /documentHelp/);

  for (const marker of ["industry-cost-summary", "industry-service-grid detailed", "coreCounts", "startingBudget", "illustration-industries-v7.webp"]) {
    assert.match(industryPage, new RegExp(marker));
  }
  for (const marker of ["tool-anchor-nav", "illustration-tools-v7.webp", "#vat-tool", "#name-tool"]) {
    assert.match(toolsPage, new RegExp(marker));
  }
  for (const marker of ["form-grid", "businessType", "budgetOptions", "illustration-consultation-v7.webp"]) {
    const source = marker.includes("illustration") ? await readFile(new URL("app/page.tsx", root), "utf8") : form;
    assert.match(source, new RegExp(marker));
  }
  await Promise.all([
    access(new URL("public/service-start-v7.webp", root)),
    access(new URL("public/service-finance-v7.webp", root)),
    access(new URL("public/service-people-v7.webp", root)),
    access(new URL("public/service-change-v7.webp", root)),
    access(new URL("public/service-license-v7.webp", root)),
    access(new URL("public/illustration-industries-v7.webp", root)),
    access(new URL("public/illustration-tools-v7.webp", root)),
    access(new URL("public/illustration-consultation-v7.webp", root)),
  ]);
});
