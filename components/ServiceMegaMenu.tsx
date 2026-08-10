import Link from "next/link";
import { categoryKey, dict, localizedPath, localizedServiceTitle, type LanguageCode, type Locale } from "@/lib/i18n";
import { industryUi } from "@/lib/industry-data";
import { serviceIcon } from "@/lib/service-visuals";
import { serviceCategories, services } from "@/lib/site-data";

export function ServiceMegaMenu({ locale = "th" }: { locale?: LanguageCode }) {
  const t = locale === "th" ? null : dict(locale as Locale);
  const p = (route: string) => localizedPath(locale, route);
  return <details className="service-mega">
    <summary>{locale === "th" ? "บริการทั้งหมด" : t?.nav.services}<span aria-hidden="true">⌄</span></summary>
    <div className="mega-panel">
      <div className="mega-intro"><span>40</span><div><strong>{locale === "th" ? "บริการครบวงจร" : t?.directory.title}</strong><small>{locale === "th" ? "ตั้งแต่เริ่มธุรกิจถึงใบอนุญาต" : t?.directory.lead}</small></div></div>
      <div className="mega-columns">
        {serviceCategories.map((category) => {
          const key = categoryKey(category);
          return <section key={category}><h3><span>{serviceIcon("", category)}</span>{locale === "th" ? category : t?.category[key].title}</h3>
            <div>{services.filter((service) => service.category === category).map((service) => <Link href={p(`/services/${service.slug}`)} key={service.slug}><span aria-hidden="true">{serviceIcon(service.slug, category)}</span>{locale === "th" ? service.title : localizedServiceTitle(locale as Locale, service.slug)}</Link>)}</div>
          </section>;
        })}
      </div>
      <div className="mega-footer"><Link href={p("/services")}>{locale === "th" ? "เปิดสารบัญบริการทั้งหมด" : t?.section.services} <span aria-hidden="true">↗</span></Link><Link href={p("/business-guides")}>{industryUi[locale].nav} <span aria-hidden="true">↗</span></Link></div>
    </div>
  </details>;
}
