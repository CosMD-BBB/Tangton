import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryDirectory } from "@/components/IndustryPages";
import { LocalizedFooter, LocalizedHeader } from "@/components/LocalizedShell";
import { industryUi } from "@/lib/industry-data";
import { dict, isLocale, languageAlternates, localizedPath, locales, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site-data";
type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; const ui = industryUi[locale]; const path = "/business-guides"; return { title: { absolute: `${ui.directoryTitle} | ${dict(locale).brand}` }, description: ui.directoryLead, alternates: { canonical: `${siteUrl}${localizedPath(locale, path)}`, languages: languageAlternates(path) } }; }
export default async function LocalizedBusinessGuides({ params }: Props) { const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale: Locale = raw; return <><LocalizedHeader locale={locale} path="/business-guides" /><main className="inner-main" lang={dict(locale).htmlLang}><IndustryDirectory locale={locale} /></main><LocalizedFooter locale={locale} /></>; }
