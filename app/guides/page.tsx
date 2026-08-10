import type { Metadata } from "next";
import Link from "next/link";
import { HubFooter, HubHeader } from "@/components/HubHeader";
import { Breadcrumbs, ConsultationCta, JsonLd } from "@/components/SeoBlocks";
import { guides, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = { title: "คู่มือผู้ประกอบการ จดบริษัท บัญชี ภาษี และใบอนุญาต", description: "บทความและคู่มือภาษาไทยสำหรับเริ่มต้นและบริหารธุรกิจ ตอบคำถามเรื่องทะเบียนบริษัท บัญชี ภาษี การเปลี่ยนแปลง และใบอนุญาต", alternates: { canonical: "/guides" } };
export default function GuidesPage() {
  const categories = [...new Set(guides.map((item) => item.category))];
  return <><HubHeader /><main className="inner-main"><JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "คู่มือผู้ประกอบการ", hasPart: guides.map((g) => ({ "@type": "Article", headline: g.title, url: `${siteUrl}/guides/${g.slug}` })) }} />
    <section className="inner-hero guide-index-hero"><div className="container"><Breadcrumbs items={[{ label: "หน้าหลัก", href: "/" }, { label: "คู่มือธุรกิจ" }]} /><p className="eyebrow"><span /> คลังความรู้ผู้ประกอบการ</p><h1>รู้ก่อนเริ่ม<br />ตัดสินใจได้ดีขึ้น</h1><p>คำตอบตรงประเด็นจากเรื่องที่เจ้าของธุรกิจถามจริง เรียงจากพื้นฐานไปสู่ขั้นตอนที่นำไปทำต่อได้</p></div></section>
    <section className="guide-directory"><div className="container"><div className="guide-feature"><div><span>คู่มือแนะนำ</span><h2>{guides[0].title}</h2><p>{guides[0].summary}</p><Link className="button button-primary" href={`/guides/${guides[0].slug}`}>อ่านคู่มือ <span aria-hidden="true">↗</span></Link></div><aside><span>{guides[0].readTime}</span>{guides[0].points.map((point, i) => <div key={point}><i>0{i + 1}</i><strong>{point}</strong></div>)}</aside></div>
      <nav className="topic-nav" aria-label="หมวดบทความ">{categories.map((category) => <a href={`#${category}`} key={category}>{category}</a>)}</nav>
      {categories.map((category) => <section className="guide-group" id={category} key={category}><div className="mini-heading"><span>{String(guides.filter((g) => g.category === category).length).padStart(2, "0")} บทความ</span><h2>{category}</h2></div><div className="guide-grid">{guides.filter((g) => g.category === category).map((guide) => <article key={guide.slug}><span>{guide.category} • {guide.readTime}</span><h3>{guide.title}</h3><p>{guide.summary}</p><Link href={`/guides/${guide.slug}`}>อ่านต่อ <b aria-hidden="true">↗</b></Link></article>)}</div></section>)}
      <ConsultationCta title="อ่านแล้วแต่กรณีของคุณไม่เหมือนในตัวอย่าง?" detail="ส่งข้อเท็จจริงสั้น ๆ ให้ผู้ดูแลช่วยแยกประเด็นและแนะนำสิ่งที่ควรตรวจต่อ" />
    </div></section>
  </main><HubFooter /></>;
}
