import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LocalizedFooter, LocalizedHeader } from "@/components/LocalizedShell";
import { JsonLd } from "@/components/SeoBlocks";
import { dict, isLocale, languageAlternates, localizedPath, locales, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site-data";

type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; const t = dict(locale); const path = "/faq"; return { title: { absolute: `${t.faq.title} | ${t.brand}` }, description: t.faq.lead, alternates: { canonical: `${siteUrl}${localizedPath(locale, path)}`, languages: languageAlternates(path) } }; }
export default async function LocalizedFaqPage({ params }: Props) { const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale: Locale = raw; const t = dict(locale); const p = (path = "") => localizedPath(locale, path); const faqs = [...t.service.faqItems, [t.language, "ไทย • English • မြန်မာ • हिन्दी • 中文"], [t.nav.services, t.directory.lead]] as readonly (readonly [string, string])[]; const schema = { "@context": "https://schema.org", "@type": "FAQPage", inLanguage: t.htmlLang, mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <><LocalizedHeader locale={locale} path="/faq" /><main className="inner-main" lang={t.htmlLang}><JsonLd data={schema} /><section className="inner-hero localized-inner-hero"><div className="container"><p className="eyebrow"><span /> {t.faq.eyebrow}</p><h1>{t.faq.title}</h1><p>{t.faq.lead}</p></div></section><section className="faq-index"><div className="container faq-index-layout"><aside><span>{t.faq.eyebrow}</span><h2>{t.section.ctaTitle}</h2><p>{t.section.ctaLead}</p><Link className="button button-primary" href={`${p()}#contact`}>{t.consult} <span aria-hidden="true">↗</span></Link></aside><div className="faq-list">{faqs.map(([question, answer], index) => <details key={`${question}-${index}`} open={index === 0}><summary><span>{question}</span><i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div></div></section></main><LocalizedFooter locale={locale} /></>;
}
