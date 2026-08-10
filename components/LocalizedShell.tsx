import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { ServiceMegaMenu } from "@/components/ServiceMegaMenu";
import { industryUi } from "@/lib/industry-data";
import { dict, languageOptions, localizedPath, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ current, path = "" }: { current: "th" | Locale; path?: string }) {
  const active = languageOptions.find((item) => item.code === current) ?? languageOptions[0];
  return <details className="language-switcher">
    <summary aria-label="Select language"><span aria-hidden="true">◎</span>{active.short}</summary>
    <div className="language-menu">
      {languageOptions.map((item) => <Link className={item.code === current ? "active" : ""} href={localizedPath(item.code, path)} hrefLang={item.htmlLang} lang={item.htmlLang} key={item.code}><span>{item.short}</span>{item.label}{item.code === current && <b aria-hidden="true">✓</b>}</Link>)}
    </div>
  </details>;
}

export function LocalizedHeader({ locale, path = "" }: { locale: Locale; path?: string }) {
  const t = dict(locale);
  const p = (route = "") => localizedPath(locale, route);
  return <>
    <div className="announcement"><div className="container announcement-inner"><span>{t.announcement}</span><Link href={`${p()}#contact`}>{t.consult} <span aria-hidden="true">↗</span></Link></div></div>
    <header className="site-header hub-header"><div className="container nav-wrap">
      <BrandLogo locale={locale} href={p()} />
      <nav className="desktop-nav" aria-label={t.menu}><ServiceMegaMenu locale={locale} /><Link href={p("/business-guides")}>{industryUi[locale].nav}</Link><Link href={p("/tools")}>{t.nav.tools}</Link><Link href={p("/faq")}>{t.nav.faq}</Link></nav>
      <div className="header-actions"><LanguageSwitcher current={locale} path={path} /><Link className="nav-cta" href={`${p()}#contact`}>{t.consult} <span aria-hidden="true">↗</span></Link></div>
      <details className="mobile-menu"><summary>{t.menu}</summary><nav aria-label={t.menu}><Link href={p()}>{t.nav.home}</Link><Link href={p("/services")}>{t.nav.services}</Link><Link href={p("/business-guides")}>{industryUi[locale].nav}</Link><Link href={p("/tools")}>{t.nav.tools}</Link><Link href={p("/faq")}>{t.nav.faq}</Link><div className="mobile-languages">{languageOptions.map((item) => <Link href={localizedPath(item.code, path)} hrefLang={item.htmlLang} lang={item.htmlLang} key={item.code}>{item.label}</Link>)}</div></nav></details>
    </div></header>
  </>;
}

export function LocalizedFooter({ locale }: { locale: Locale }) {
  const t = dict(locale); const p = (route = "") => localizedPath(locale, route);
  return <footer lang={t.htmlLang}><div className="container footer-top localized-footer">
    <div><BrandLogo locale={locale} href={p()} footer /><p>{t.footer}</p></div>
    <div><strong>{t.nav.services}</strong>{(["start", "finance", "people", "change", "licenses"] as const).map((key) => <Link href={`${p("/services")}#${key}`} key={key}>{t.category[key].title}</Link>)}</div>
    <div><strong>{t.nav.tools}</strong><Link href={p("/business-guides")}>{industryUi[locale].nav}</Link><Link href={p("/tools")}>{t.tools.vatTitle}</Link><Link href={p("/tools")}>{t.tools.employeeTitle}</Link><Link href={p("/tools")}>{t.tools.structureTitle}</Link><Link href={p("/faq")}>{t.nav.faq}</Link></div>
    <div className="footer-cta"><strong>{t.section.ctaTitle}</strong><p>{t.section.ctaLead}</p><Link href={`${p()}#contact`}>{t.section.ctaButton} <span aria-hidden="true">↗</span></Link></div>
  </div><div className="container footer-bottom"><span>{t.copyright}</span><div>{languageOptions.map((item) => <Link href={localizedPath(item.code)} hrefLang={item.htmlLang} lang={item.htmlLang} key={item.code}>{item.short}</Link>)}</div></div></footer>;
}
