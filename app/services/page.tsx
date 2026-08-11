import type { Metadata } from "next";
import Link from "next/link";
import { HubFooter, HubHeader } from "@/components/HubHeader";
import { Breadcrumbs, ConsultationCta, JsonLd } from "@/components/SeoBlocks";
import { languageAlternates } from "@/lib/i18n";
import { serviceIcon, serviceImage } from "@/lib/service-visuals";
import { categoryInfo, serviceCategories, services, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "40 บริการธุรกิจครบ 5 หมวด",
  description: "รวมบริการจดทะเบียน บัญชี ภาษี การเงิน บุคลากร งานบริหารบริษัท การเปลี่ยนแปลง ปิดกิจการ และใบอนุญาตสำหรับผู้ประกอบการไทย",
  alternates: { canonical: "/services", languages: languageAlternates("/services") },
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "ItemList", name: "บริการสำหรับผู้ประกอบการ",
    itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, name: service.title, url: `${siteUrl}/services/${service.slug}` })),
  };
  return <><HubHeader path="/services" /><main className="inner-main"><JsonLd data={schema} />
    <section className="inner-hero"><div className="container"><Breadcrumbs items={[{ label: "หน้าหลัก", href: "/" }, { label: "บริการทั้งหมด" }]} /><p className="eyebrow"><span /> สารบัญบริการครบวงจร</p><h1>40 บริการ<br />แบ่งชัดเป็น 5 หมวดใหญ่</h1><p>ตั้งแต่จัดตั้ง บัญชี การเงิน บุคลากร งานบริหาร การเปลี่ยนแปลง ไปจนถึงใบอนุญาต ทุกหน้ามีราคา เวลา เอกสาร ขั้นตอน คำถาม และบริการที่เกี่ยวข้อง</p><div className="hero-index"><div><strong>{services.length}</strong><span>หน้าบริการเฉพาะเรื่อง</span></div><div><strong>5</strong><span>หมวดงานหลัก</span></div><div><strong>ทั่วไทย</strong><span>ปรึกษาและส่งข้อมูลออนไลน์</span></div></div></div></section>
    <section className="directory-section"><div className="container">
      {serviceCategories.map((category, categoryIndex) => <section className="directory-group" id={category} key={category}>
        <div className="directory-heading"><span>0{categoryIndex + 1}</span><div><h2>{category}</h2><p>{categoryInfo[category].intro}</p></div></div>
        <div className="directory-grid">{services.filter((service) => service.category === category).map((service) => <article className={`directory-card ${categoryInfo[category].accent}`} key={service.slug} data-reveal><figure className="directory-card-visual"><img src={serviceImage(service.slug, service.category)} alt={`ภาพบริการ${service.title}`} width="1280" height="720" loading="lazy" decoding="async" /><span className="service-card-icon" aria-hidden="true">{serviceIcon(service.slug, service.category)}</span></figure><div><span className="directory-type">{category}</span><h3>{service.title}</h3><p>{service.summary}</p></div><dl><div><dt>เริ่มต้น</dt><dd>{service.price}</dd></div><div><dt>ระยะเวลา</dt><dd>{service.time}</dd></div></dl><Link href={`/services/${service.slug}`}>ดูรายละเอียดบริการ <span aria-hidden="true">↗</span></Link></article>)}</div>
      </section>)}
      <ConsultationCta />
    </div></section>
  </main><HubFooter /></>;
}
