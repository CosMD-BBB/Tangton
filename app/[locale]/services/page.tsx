import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LocalizedFooter, LocalizedHeader } from "@/components/LocalizedShell";
import { JsonLd } from "@/components/SeoBlocks";
import { categoryKey, dict, isLocale, languageAlternates, localizedPath, localizedPrice, localizedServiceTitle, localizedTime, locales, type CategoryKey, type Locale } from "@/lib/i18n";
import { services, siteUrl } from "@/lib/site-data";
import { serviceIcon, serviceImage } from "@/lib/service-visuals";

type Props = { params: Promise<{ locale: string }> };
const keys: CategoryKey[] = ["start", "finance", "people", "change", "licenses"];
const tones: Record<CategoryKey, string> = { start: "mint", finance: "sand", people: "violet", change: "blue", licenses: "rose" };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params; if (!isLocale(locale)) return {}; const t = dict(locale); const path = "/services";
  return { title: { absolute: `${t.directory.title} | ${t.brand}` }, description: t.directory.lead, alternates: { canonical: `${siteUrl}${localizedPath(locale, path)}`, languages: languageAlternates(path) } };
}

export default async function LocalizedServices({ params }: Props) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale: Locale = raw; const t = dict(locale); const p = (path = "") => localizedPath(locale, path);
  const schema = { "@context": "https://schema.org", "@type": "ItemList", name: t.directory.title, inLanguage: t.htmlLang, itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, name: localizedServiceTitle(locale, service.slug), url: `${siteUrl}${p(`/services/${service.slug}`)}` })) };
  return <><LocalizedHeader locale={locale} path="/services" /><main className="inner-main" lang={t.htmlLang}><JsonLd data={schema} />
    <section className="inner-hero localized-inner-hero"><div className="container"><nav className="breadcrumbs" aria-label="Breadcrumb"><span><Link href={p()}>{t.nav.home}</Link><i>/</i></span><span>{t.nav.services}</span></nav><p className="eyebrow"><span /> {t.directory.eyebrow}</p><h1>{t.directory.title}</h1><p>{t.directory.lead}</p><div className="hero-index"><div><strong>40</strong><span>{t.directory.count}</span></div><div><strong>5</strong><span>{t.section.eyebrow}</span></div><div><strong>5</strong><span>{t.language}</span></div></div></div></section>
    <section className="directory-section"><div className="container">{keys.map((key, categoryIndex) => { const items = services.filter((service) => categoryKey(service.category) === key); return <section className="directory-group" id={key} key={key}><div className="directory-heading"><span>{String(categoryIndex + 1).padStart(2, "0")}</span><div><h2>{t.category[key].title}</h2><p>{t.category[key].intro}</p></div></div><div className="directory-grid">{items.map((service) => { const title = localizedServiceTitle(locale, service.slug); return <article className={`directory-card ${tones[key]}`} key={service.slug} data-reveal><figure className="directory-card-visual"><img src={serviceImage(service.slug, service.category)} alt={title} width="1280" height="720" loading="lazy" decoding="async" /><span className="service-card-icon" aria-hidden="true">{serviceIcon(service.slug, service.category)}</span></figure><div><span className="directory-type">{t.category[key].title}</span><h3>{title}</h3><p>{t.service.summary.replace("{title}", title)}</p></div><dl><div><dt>{t.directory.price}</dt><dd>{localizedPrice(locale, service.price)}</dd></div><div><dt>{t.directory.time}</dt><dd>{localizedTime(locale, service.time)}</dd></div></dl><Link href={p(`/services/${service.slug}`)}>{t.directory.details} <span aria-hidden="true">↗</span></Link></article>; })}</div></section>; })}
      <section className="inner-cta"><div className="inner-cta-copy"><span>{t.consult}</span><h2>{t.section.ctaTitle}</h2><p>{t.section.ctaLead}</p></div><Link className="button button-primary" href={`${p()}#contact`}>{t.section.ctaButton} <span aria-hidden="true">↗</span></Link></section>
    </div></section>
  </main><LocalizedFooter locale={locale} /></>;
}
