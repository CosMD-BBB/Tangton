import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HubFooter, HubHeader } from "@/components/HubHeader";
import { Breadcrumbs, ConsultationCta, JsonLd } from "@/components/SeoBlocks";
import { getGuide, getService, guides, siteUrl } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return guides.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const guide = getGuide((await params).slug); if (!guide) return {}; return { title: guide.title, description: guide.summary, alternates: { canonical: `/guides/${guide.slug}` }, openGraph: { title: guide.title, description: guide.summary, type: "article", images: ["/og.png"] } }; }
export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug); if (!guide) notFound(); const relatedServices = guide.serviceSlugs.map(getService).filter(Boolean);
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.summary, inLanguage: "th", dateModified: "2026-08-04", datePublished: "2026-08-04", author: { "@type": "Organization", name: "ทีมตั้งต้น" }, publisher: { "@type": "Organization", name: "ตั้งต้น" }, mainEntityOfPage: `${siteUrl}/guides/${guide.slug}` };
  return <><HubHeader /><main className="inner-main"><JsonLd data={schema} /><article>
    <header className="article-hero"><div className="narrow-container"><Breadcrumbs items={[{ label: "หน้าหลัก", href: "/" }, { label: "คู่มือธุรกิจ", href: "/guides" }, { label: guide.title }]} /><span className="article-category">{guide.category}</span><h1>{guide.title}</h1><p>{guide.summary}</p><div className="article-meta"><span>อัปเดต {guide.updated}</span><span>อ่านประมาณ {guide.readTime}</span><span>ตรวจทานโดยทีมเนื้อหาธุรกิจ</span></div></div></header>
    <div className="narrow-container article-layout"><aside className="article-toc"><strong>ในบทความนี้</strong>{guide.points.map((point, i) => <a href={`#point-${i + 1}`} key={point}>{String(i + 1).padStart(2, "0")} {point}</a>)}</aside><div className="article-body"><p className="article-lead">{guide.summary} บทความนี้ช่วยจัดกรอบความคิดและรายการที่ควรตรวจ ไม่ใช่คำวินิจฉัยทางกฎหมาย ภาษี หรือบัญชีสำหรับทุกกรณี เพราะรายละเอียดของบุคคล สัญญา และช่วงเวลาอาจทำให้คำตอบต่างกัน</p>
      {guide.points.map((point, index) => <section id={`point-${index + 1}`} key={point}><span className="section-kicker">ประเด็น {index + 1}</span><h2>{point}</h2><p>{index === 0 ? `เริ่มจากรวบรวมข้อเท็จจริงที่เกี่ยวข้องกับ “${point}” ให้ครบ แยกสิ่งที่เกิดขึ้นแล้ว สิ่งที่กำลังจะทำ และผลลัพธ์ที่ต้องการ วิธีนี้ช่วยไม่ให้เลือกขั้นตอนจากชื่อบริการเพียงอย่างเดียว และทำให้เห็นว่าต้องประสานงานกับฝ่ายใดบ้าง` : index === 1 ? `ตรวจความเชื่อมโยงของ “${point}” กับเอกสารทะเบียน บัญชี ภาษี สัญญา และระบบภายใน ข้อมูลชุดเดียวกันควรอธิบายได้ตรงกัน หากพบตัวเลข ชื่อ ที่อยู่ หรือวันที่ไม่ตรง ควรแก้ที่ต้นทางก่อนยื่นหรือส่งต่อ` : `เปลี่ยน “${point}” ให้เป็นแผนปฏิบัติที่มีผู้รับผิดชอบ เอกสารนำเข้า วันตรวจร่าง วันยื่น และรายการหลังดำเนินการ การมีเช็กลิสต์เดียวช่วยลดงานซ้ำและทำให้ตรวจย้อนหลังได้`}</p><div className="article-example"><strong>นำไปใช้ทันที</strong><ul><li>เขียนเป้าหมายเป็นประโยคเดียว</li><li>รวบรวมเอกสารล่าสุดจากแหล่งต้นทาง</li><li>กำหนดวันที่ต้องการผลและงานต่อเนื่อง</li><li>ให้ผู้เกี่ยวข้องตรวจข้อมูลก่อนยืนยัน</li></ul></div></section>)}
      <section><span className="section-kicker">สรุป</span><h2>สิ่งสำคัญที่ควรจำ</h2><p>อย่าเริ่มจากแบบฟอร์ม ให้เริ่มจากเป้าหมายและข้อเท็จจริง ตรวจผลกระทบที่เชื่อมโยง และเก็บหลักฐานทุกขั้นตอน เมื่อไม่แน่ใจให้ขอคำแนะนำก่อนทำธุรกรรมที่ย้อนกลับยาก เช่น รับเงิน ลงนามสัญญา พิมพ์ฉลาก หรือย้ายสถานที่จริง</p></section>
      <div className="article-services"><span>บริการที่เกี่ยวข้อง</span>{relatedServices.map((service) => service && <Link href={`/services/${service.slug}`} key={service.slug}><strong>{service.title}</strong><small>{service.summary}</small><b aria-hidden="true">↗</b></Link>)}</div>
    </div></div>
    <div className="container"><ConsultationCta /></div>
  </article></main><HubFooter /></>;
}
