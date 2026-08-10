import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubFooter, HubHeader } from "@/components/HubHeader";
import { IndustryGuide } from "@/components/IndustryPages";
import { getIndustry, industries, industryCopy } from "@/lib/industry-data";
import { languageAlternates } from "@/lib/i18n";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const industry = getIndustry((await params).slug); if (!industry) return {}; const copy = industryCopy(industry, "th"); const path = `/business-guides/${industry.slug}`; return { title: copy.title, description: copy.summary, keywords: [copy.title, `${copy.shortTitle} ใบอนุญาต`, `${copy.shortTitle} จดทะเบียน`], alternates: { canonical: path, languages: languageAlternates(path) }, openGraph: { title: copy.title, description: copy.summary, url: path, images: ["/og.png"] } }; }
export default async function BusinessGuidePage({ params }: Props) { const industry = getIndustry((await params).slug); if (!industry) notFound(); return <><HubHeader path={`/business-guides/${industry.slug}`} /><main className="inner-main"><IndustryGuide industry={industry} /></main><HubFooter /></>; }
