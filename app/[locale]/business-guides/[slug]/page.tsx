import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryGuide } from "@/components/IndustryPages";
import { LocalizedFooter, LocalizedHeader } from "@/components/LocalizedShell";
import { getIndustry, industries, industryCopy } from "@/lib/industry-data";
import { dict, isLocale, languageAlternates, localizedPath, locales, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site-data";
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return locales.flatMap((locale) => industries.map(({ slug }) => ({ locale, slug }))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { locale, slug } = await params; if (!isLocale(locale)) return {}; const industry = getIndustry(slug); if (!industry) return {}; const copy = industryCopy(industry, locale); const path = `/business-guides/${slug}`; return { title: { absolute: `${copy.title} | ${dict(locale).brand}` }, description: copy.summary, alternates: { canonical: `${siteUrl}${localizedPath(locale, path)}`, languages: languageAlternates(path) }, openGraph: { title: copy.title, description: copy.summary, url: `${siteUrl}${localizedPath(locale, path)}`, locale: dict(locale).htmlLang, images: ["/og.png"] } }; }
export default async function LocalizedBusinessGuide({ params }: Props) { const { locale: raw, slug } = await params; if (!isLocale(raw)) notFound(); const industry = getIndustry(slug); if (!industry) notFound(); const locale: Locale = raw; return <><LocalizedHeader locale={locale} path={`/business-guides/${slug}`} /><main className="inner-main" lang={dict(locale).htmlLang}><IndustryGuide industry={industry} locale={locale} /></main><LocalizedFooter locale={locale} /></>; }
