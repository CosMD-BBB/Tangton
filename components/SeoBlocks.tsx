import Link from "next/link";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="เส้นทางหน้า">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}{index < items.length - 1 && <i aria-hidden="true">/</i>}</span>
      ))}
    </nav>
  );
}

export function ConsultationCta({ title = "อยากรู้ว่าธุรกิจของคุณควรเริ่มตรงไหน?", detail = "เล่าเป้าหมายและเงื่อนไขให้ผู้ดูแลฟัง แล้วรับขอบเขตงาน เอกสาร และค่าใช้จ่ายเบื้องต้นก่อนตัดสินใจ" }: { title?: string; detail?: string }) {
  return (
    <section className="inner-cta">
      <div className="inner-cta-copy"><span>ปรึกษาเบื้องต้นฟรี</span><h2>{title}</h2><p>{detail}</p></div>
      <Link className="button button-primary" href="/#contact">คุยกับผู้ดูแล <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
