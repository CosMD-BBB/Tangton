import type { Metadata } from "next";
import Link from "next/link";
import { HubFooter, HubHeader } from "@/components/HubHeader";
import ConsultationForm from "@/components/ConsultationForm";
import { JsonLd } from "@/components/SeoBlocks";
import { industries, industryCopy, industryUi } from "@/lib/industry-data";
import { languageAlternates } from "@/lib/i18n";
import { guides, services, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "จดทะเบียนและบริหารธุรกิจครบ 5 หมวด | ตั้งต้น" },
  description: "ศูนย์รวม 40 บริการด้านจดทะเบียน บัญชี ภาษี บุคลากร งานบริหารบริษัท การเปลี่ยนแปลง ใบอนุญาต พร้อมคู่มือและเครื่องมือใช้งานจริงสำหรับผู้ประกอบการไทย",
  keywords: ["จดทะเบียนบริษัท", "รับทำบัญชี", "บริหารธุรกิจ", "Payroll", "PDPA", "จด VAT", "เปลี่ยนแปลงบริษัท", "ใบอนุญาตธุรกิจ"],
  alternates: { canonical: "/", languages: languageAlternates() },
};

const categories = [
  { number: "01", title: "เริ่มต้นและจดทะเบียน", text: "เลือกโครงสร้าง จัดตั้งกิจการ และเตรียมระบบพื้นฐานให้พร้อมเริ่มขาย", count: 7, tone: "mint", href: "/services#เริ่มต้นและจดทะเบียน", items: ["จดบริษัทและห้างหุ้นส่วน", "ทะเบียนพาณิชย์", "จด VAT", "เปิดบัญชีและ DBD e-Filing"] },
  { number: "02", title: "บัญชี ภาษี และการเงิน", text: "ดูแลรอบงานประจำ พร้อมข้อมูลการเงินที่เจ้าของธุรกิจนำไปตัดสินใจได้", count: 9, tone: "sand", href: "/services#บัญชี ภาษี และการเงิน", items: ["บัญชีและภาษีรายเดือน", "ปิดงบและตรวจสอบบัญชี", "e-Tax Invoice", "แผนธุรกิจและประมาณการเงินสด"] },
  { number: "03", title: "บุคลากรและการบริหาร", text: "ดูแลงานตั้งแต่เริ่มจ้างคน งานประชุม สัญญา ไปจนถึงระบบคุ้มครองข้อมูล", count: 8, tone: "violet", href: "/services#บุคลากรและการบริหาร", items: ["Payroll และประกันสังคม", "สัญญาจ้างและระบบ HR", "เลขานุการบริษัท", "PDPA และสัญญาธุรกิจ"] },
  { number: "04", title: "เปลี่ยนแปลงและปิดกิจการ", text: "ปรับทะเบียนให้ตรงกับกิจการจริง หรือวางลำดับเลิกบริษัทอย่างครบถ้วน", count: 9, tone: "blue", href: "/services#เปลี่ยนแปลงและปิดกิจการ", items: ["กรรมการและผู้ถือหุ้น", "เพิ่มทุนและลดทุน", "ย้ายที่อยู่และเพิ่มสาขา", "เลิกและชำระบัญชี"] },
  { number: "05", title: "ใบอนุญาตและการลงทุน", text: "เตรียมข้อกำกับเฉพาะเพื่อขายสินค้า ขยายโรงงาน หรือรับการส่งเสริม", count: 7, tone: "rose", href: "/services#ใบอนุญาตและการลงทุน", items: ["เครื่องหมายการค้าและ อย.", "GMP และ ISO", "BOI และโรงงาน", "นำเข้า–ส่งออก"] },
];

const packages = [
  { eyebrow: "เริ่มนิติบุคคล", name: "แพ็กเกจตั้งต้น", price: "6,900", suffix: "บาท / ครั้ง", detail: "สำหรับผู้ประกอบการที่พร้อมเริ่มบริษัทและต้องการวางโครงสร้างให้ชัด", features: ["ตรวจและจองชื่อ", "จัดทำเอกสารจดทะเบียน", "ยื่นนิติบุคคล", "ชุดเอกสารดิจิทัล"] },
  { eyebrow: "พร้อมเริ่มขาย", name: "แพ็กเกจพร้อมดำเนินการ", price: "12,900", suffix: "บาท / ครั้ง", detail: "เพิ่มงานภาษีและนายจ้าง เหมาะกับธุรกิจที่จะออกใบกำกับหรือเริ่มมีทีม", features: ["ทุกอย่างในแพ็กเกจตั้งต้น", "จดภาษีมูลค่าเพิ่ม", "ขึ้นทะเบียนนายจ้าง", "วางระบบบัญชี 1 ชั่วโมง"], featured: true },
  { eyebrow: "ดูแลต่อเนื่อง", name: "แพ็กเกจบริหารหลังบ้าน", price: "2,900", suffix: "บาท / เดือน", detail: "เริ่มจากบัญชีและภาษี แล้วเลือกเพิ่มเงินเดือนหรืองานเลขานุการบริษัทได้", features: ["บัญชีรายเดือน", "ยื่นแบบภาษี", "สรุปงานที่ต้องทำ", "ผู้ดูแลประจำ"] },
];

const faqs = [
  ["เว็บไซต์ครอบคลุมงานบริหารธุรกิจด้านใดบ้าง?", "บริการแบ่งเป็น 5 หมวด ครอบคลุมการเริ่มต้นและจดทะเบียน บัญชี ภาษีและการเงิน บุคลากรและการบริหาร การเปลี่ยนแปลงหรือปิดกิจการ ตลอดจนใบอนุญาตและการลงทุน รวม 40 บริการ"],
  ["แต่ละหน้ามีเนื้อหาอะไร?", "ทุกหน้าบริการมีสรุปสั้น ราคาและเวลาเบื้องต้น กลุ่มผู้ใช้ เอกสาร ขั้นตอน คำถามพบบ่อย บริการที่เกี่ยวข้อง และข้อมูลโครงสร้างสำหรับระบบค้นหา"],
  ["เครื่องมือฟรีบนเว็บไซต์ช่วยเตรียมข้อมูลอะไรได้บ้าง?", "เครื่องมือสามารถคำนวณ VAT และต้นทุนพนักงาน บันทึกเช็กลิสต์บนอุปกรณ์ ดาวน์โหลดรายการ ตรวจความพร้อมชื่อ และแนะนำโครงสร้างกิจการเบื้องต้นจากคำตอบของผู้ใช้"],
  ["ไม่อยู่กรุงเทพฯ ใช้บริการได้ไหม?", "ได้ เว็บไซต์มีหน้าข้อมูลครบ 77 จังหวัด และงานส่วนใหญ่เริ่มจากการปรึกษา ส่งข้อมูล และตรวจเอกสารออนไลน์ได้ โดยขั้นตอนจริงขึ้นอยู่กับประเภทงานและหน่วยงาน"],
  ["ราคาบนเว็บเป็นราคาสุดท้ายหรือไม่?", "เป็นราคาเริ่มต้นสำหรับวางแผน เว็บไซต์จะแยกค่าบริการ ค่าธรรมเนียมราชการ ภาษีมูลค่าเพิ่ม และค่าใช้จ่ายเฉพาะกรณีให้ตรวจสอบก่อนเริ่มงาน"],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "ProfessionalService", name: "ตั้งต้น", url: siteUrl, areaServed: { "@type": "Country", name: "ประเทศไทย" }, description: "แพลตฟอร์มบริการจดทะเบียนและบริหารธุรกิจครบ 5 หมวดสำหรับผู้ประกอบการไทย", knowsAbout: categories.map((item) => item.title) },
    { "@type": "WebSite", name: "ตั้งต้น", url: siteUrl, inLanguage: "th" },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ],
};

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Check() { return <span className="check" aria-hidden="true">✓</span>; }

export default function Home() {
  return <>
    <JsonLd data={schema} />
    <HubHeader />
    <main>
      <section className="hero hero-v2" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> แพลตฟอร์มสำหรับผู้ประกอบการไทย</p>
            <h1>เริ่มธุรกิจให้ถูก<br />บริหารต่อให้<br /><em>เป็นระบบ</em></h1>
            <p className="hero-lead">รวมงานทะเบียน บัญชี ภาษี บุคลากร งานบริหาร และใบอนุญาตไว้ในที่เดียว พร้อมเนื้อหาที่อ่านรู้เรื่องและเครื่องมือที่ใช้เตรียมงานได้จริง</p>
            <div className="hero-actions"><Link className="button button-primary" href="#contact">รับแผนเริ่มต้นฟรี <Arrow /></Link><Link className="button button-ghost" href="/services">ดู 40 บริการ</Link></div>
            <div className="hero-proof"><div><strong>5 หมวดใหญ่</strong><span>ครอบคลุมทุกช่วงธุรกิจ</span></div><div><strong>40 หน้าบริการ</strong><span>มีรายละเอียดเฉพาะเรื่อง</span></div><div><strong>77 จังหวัด</strong><span>รองรับการค้นหาในพื้นที่</span></div></div>
          </div>
          <div className="business-board" aria-label="ภาพรวมการดูแลธุรกิจ 5 หมวด">
            <div className="board-head"><span className="live-dot" /> แผนดูแลธุรกิจของคุณ <b>ภาพรวม</b></div>
            <div className="board-score"><div><small>ความพร้อมเบื้องต้น</small><strong>ครบทั้งวงจร</strong></div><span>5/5</span></div>
            <div className="board-track"><i /></div>
            <div className="board-rows">{categories.map((item) => <div key={item.number}><span className={item.tone}>{item.number}</span><div><strong>{item.title}</strong><small>{item.count} บริการ</small></div><b>พร้อม</b></div>)}</div>
            <Link href="/tools">ประเมินความพร้อมด้วยเครื่องมือฟรี <Arrow /></Link>
          </div>
        </div>
        <div className="container category-ribbon">{categories.map((item) => <Link key={item.number} href={item.href}><span>{item.number}</span>{item.title}</Link>)}</div>
      </section>

      <section className="section category-atlas" id="services">
        <div className="container">
          <div className="section-heading split-heading"><div><p className="eyebrow"><span /> บริการธุรกิจครบวงจร</p><h2>5 หมวดใหญ่<br />ดูแลทุกช่วงของธุรกิจ</h2></div><div className="section-copy"><p>เราแยก “บุคลากรและการบริหาร” เป็นหมวดเฉพาะ เพื่อให้งานสำคัญหลังจดบริษัทค้นหาได้ง่ายและไม่ปะปนกับงานบัญชีหรือทะเบียน</p><Link className="text-link" href="/services">เปิดสารบัญบริการทั้งหมด <Arrow /></Link></div></div>
          <div className="atlas-grid">{categories.map((item) => <article className={`atlas-card ${item.tone}`} key={item.number}><div className="atlas-top"><span>{item.number}</span><small>{item.count} บริการ</small></div><h3>{item.title}</h3><p>{item.text}</p><ul>{item.items.map((label) => <li key={label}><Check />{label}</li>)}</ul><Link href={item.href}>ดูบริการในหมวดนี้ <Arrow /></Link></article>)}</div>
          <div className="coverage-note"><div><span>ดูแลหลังเริ่มธุรกิจ</span><strong>8 งานบริหารสำคัญ</strong></div><p>เลขานุการบริษัท • ระบบ HR • สัญญาจ้าง • PDPA • ตรวจสัญญา • e-Tax Invoice • Tax Health Check • แผนธุรกิจ</p><Link href="/services#บุคลากรและการบริหาร">ดูรายละเอียด <Arrow /></Link></div>
        </div>
      </section>

      <section className="section industry-home" id="business-types"><div className="container"><div className="section-heading split-heading" data-reveal><div><p className="eyebrow"><span /> {industryUi.th.eyebrow}</p><h2>เลือกจากธุรกิจของคุณ<br />แล้วเริ่มให้ถูกลำดับ</h2></div><div className="section-copy"><p>{industryUi.th.lead}</p><Link className="text-link" href="/business-guides">{industryUi.th.directoryTitle} <Arrow /></Link></div></div><div className="industry-grid compact">{industries.map((industry, index) => { const copy = industryCopy(industry, "th"); return <Link className={`industry-card ${industry.tone}`} href={`/business-guides/${industry.slug}`} key={industry.slug} data-reveal style={{ "--reveal-delay": `${Math.min(index % 5, 4) * 60}ms` } as React.CSSProperties}><span className="industry-icon" aria-hidden="true">{industry.icon}</span><small>{industry.serviceSlugs.length} งานที่เกี่ยวข้อง</small><h3>{copy.shortTitle}</h3><p>{copy.title}</p><b>ดูแผนเริ่มธุรกิจ <Arrow /></b></Link>; })}</div></div></section>

      <section className="answer-section content-proof">
        <div className="container content-proof-grid">
          <div><p className="eyebrow light"><span /> เนื้อหาไม่ได้อยู่แค่หน้าแรก</p><h2>อ่านให้เข้าใจ<br />ก่อนตัดสินใจใช้บริการ</h2><p>เว็บไซต์เชื่อมหน้าเนื้อหาเป็นคลังความรู้ ไม่ใช่เพียงหน้าโฆษณา แต่ละหัวข้อมีคำตอบเฉพาะและเชื่อมไปยังงานที่เกี่ยวข้อง</p><div className="content-stats"><div><strong>{services.length}</strong><span>หน้าบริการ</span></div><div><strong>{guides.length}</strong><span>คู่มือเชิงลึก</span></div><div><strong>77</strong><span>หน้าจังหวัด</span></div></div></div>
          <div className="content-stack">
            {guides.slice(0, 3).map((guide, index) => <Link href={`/guides/${guide.slug}`} key={guide.slug}><span>คู่มือ {String(index + 1).padStart(2, "0")}</span><h3>{guide.title}</h3><p>{guide.summary}</p><small>อ่านประมาณ {guide.readTime} <Arrow /></small></Link>)}
          </div>
        </div>
      </section>

      <section className="section tools-preview">
        <div className="container tools-preview-grid">
          <div className="tools-preview-copy"><p className="eyebrow"><span /> เครื่องมือที่ลงมือใช้ได้</p><h2>ไม่ใช่แค่การ์ดสวย<br />แต่ช่วยเตรียมงานได้จริง</h2><p>คำนวณทันที เห็นสมมติฐานชัด บันทึกความคืบหน้าบนอุปกรณ์ และนำผลไปคุยกับผู้ดูแลต่อได้</p><ul><li><Check /> คำนวณ VAT แบบรวมและยังไม่รวมภาษี</li><li><Check /> ประเมินต้นทุนพนักงานและเงินสมทบ</li><li><Check /> เช็กลิสต์ที่จำสถานะและดาวน์โหลดได้</li><li><Check /> แบบแนะนำโครงสร้างกิจการจากคำตอบ</li></ul><Link className="button button-primary" href="/tools">ลองใช้เครื่องมือฟรี <Arrow /></Link></div>
          <div className="tool-demo-card"><div className="tool-demo-head"><span>VAT 7%</span><small>ตัวอย่างผลลัพธ์</small></div><div className="tool-demo-input"><span>ยอดก่อนภาษี</span><strong>10,000.00</strong></div><div className="tool-demo-result"><div><span>ภาษีมูลค่าเพิ่ม</span><strong>700.00</strong></div><div><span>ยอดรวม</span><strong>10,700.00</strong></div></div><div className="tool-demo-foot"><span>✓ อัตราปัจจุบันถึง 30 ก.ย. 2570</span><Link href="/tools">คำนวณยอดของคุณ →</Link></div></div>
        </div>
      </section>

      <section className="section process-section" id="how"><div className="container"><div className="section-heading centered"><p className="eyebrow"><span /> ขั้นตอนที่เห็นสถานะได้</p><h2>จากเรื่องซับซ้อน ให้เป็น 4 ขั้นตอน</h2><p>เริ่มจากข้อมูลเท่าที่มี แล้วค่อยเติมเฉพาะสิ่งที่จำเป็นกับกรณีของคุณ</p></div><div className="process-grid">{[["01","คุยให้เข้าใจ","เล่าเป้าหมาย รูปแบบรายได้ และสิ่งที่กังวล"],["02","รับแผนงาน","เห็นขอบเขต ราคา เอกสาร และลำดับก่อนเริ่ม"],["03","ตรวจและดำเนินการ","ผู้ดูแลตรวจความครบถ้วนและแจ้งสถานะเป็นระยะ"],["04","รับงานพร้อมใช้","ส่งมอบเอกสาร พร้อมรายการสิ่งที่ต้องทำต่อ"]].map(([number,title,detail], index) => <article className="process-card" key={number}><div className="process-top"><span>{number}</span>{index < 3 && <i>→</i>}</div><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

      <section className="section pricing-section" id="pricing"><div className="container"><div className="section-heading split-heading pricing-heading"><div><p className="eyebrow"><span /> แพ็กเกจเริ่มต้น</p><h2>เห็นขอบเขต<br />ก่อนเริ่มงาน</h2></div><p>แพ็กเกจช่วยให้วางงบเบื้องต้น งานที่มีเงื่อนไขเฉพาะจะประเมินและแยกรายการให้ตรวจสอบก่อนยืนยัน</p></div><div className="pricing-grid">{packages.map((item) => <article className={`price-card ${item.featured ? "featured" : ""}`} key={item.name}>{item.featured && <div className="recommended">แนะนำ</div>}<p className="price-eyebrow">{item.eyebrow}</p><h3>{item.name}</h3><div className="price"><span>เริ่มต้น</span><strong>{item.price}</strong><small>{item.suffix}</small></div><p className="price-description">{item.detail}</p><ul>{item.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul><Link className={`button ${item.featured ? "button-primary" : "button-outline"}`} href="#contact">ขอรายละเอียด <Arrow /></Link></article>)}</div><p className="price-disclaimer">* ราคาเริ่มต้นสำหรับประเมินงบเบื้องต้น ยังไม่รวมค่าธรรมเนียมราชการ ภาษีมูลค่าเพิ่ม และค่าใช้จ่ายเฉพาะกรณี โดยจะยืนยันรายการทั้งหมดก่อนเริ่มงาน</p></div></section>

      <section className="section reviews-section"><div className="container review-layout"><div className="review-intro"><p className="eyebrow light"><span /> มาตรฐานก่อนเริ่มงาน</p><h2>ความน่าเชื่อถือ<br />เริ่มจากข้อมูล<br /><em>ที่ตรวจสอบได้</em></h2><p>ก่อนยืนยันบริการ คุณควรเห็นขอบเขต ผู้รับผิดชอบ ค่าใช้จ่าย และสิ่งที่จะได้รับอย่างชัดเจน เพื่อเปรียบเทียบและตัดสินใจได้โดยไม่ต้องเดา</p><div className="review-policy"><span aria-hidden="true">✓</span><p><strong>เผยแพร่เฉพาะรีวิวที่ยืนยันแหล่งที่มาได้</strong><small>ชื่อ ภาพ หรือข้อความของลูกค้าจะใช้เมื่อได้รับอนุญาตแล้วเท่านั้น</small></p></div></div><div className="trust-cards">
        <article><span className="trust-number">01</span><div className="trust-icon" aria-hidden="true">เอกสาร</div><h3>ขอบเขตเป็นลายลักษณ์อักษร</h3><p>ระบุงานที่รวม สิ่งที่ต้องเตรียม และผลลัพธ์ที่จะได้รับก่อนเริ่มดำเนินการ</p><small>ตรวจสอบได้ก่อนยืนยัน</small></article>
        <article><span className="trust-number">02</span><div className="trust-icon" aria-hidden="true">ราคา</div><h3>แยกค่าใช้จ่ายชัดเจน</h3><p>แยกค่าบริการ ค่าธรรมเนียมราชการ ภาษี และค่าใช้จ่ายเฉพาะกรณี</p><small>ลดค่าใช้จ่ายที่คาดไม่ถึง</small></article>
        <article><span className="trust-number">03</span><div className="trust-icon" aria-hidden="true">สถานะ</div><h3>ติดตามงานและผู้ดูแลได้</h3><p>รู้ว่างานอยู่ขั้นตอนไหน ใครเป็นผู้ประสานงาน และต้องดำเนินการอะไรต่อ</p><small>สื่อสารเป็นลำดับเดียวกัน</small></article>
      </div></div></section>

      <section className="section faq-section" id="faq"><div className="container faq-layout"><div className="faq-intro"><p className="eyebrow"><span /> คำถามสำคัญ</p><h2>ตอบตรงสิ่งที่<br />ผู้ประกอบการอยากรู้</h2><p>เนื้อหาทุกส่วนเขียนให้ดึงคำตอบสั้นได้ง่าย และยังมีรายละเอียดรองรับเมื่อต้องการอ่านต่อ</p><Link className="text-link" href="/faq">ดูคำถามทั้งหมด <Arrow /></Link></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><i>+</i></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow light"><span /> เริ่มจากโจทย์ของคุณ</p><h2>ยังไม่แน่ใจว่า<br />ควรอยู่หมวดไหน?</h2><p>บอกช่วงของธุรกิจและสิ่งที่ต้องการทำ แล้วรับรายการงาน เอกสาร และงบประมาณเบื้องต้นกลับไปพิจารณา</p><figure className="contact-visual"><img src="/illustration-consultation-v7.webp" alt="ภาพผู้ประกอบการกำลังวางแผนธุรกิจกับที่ปรึกษา" width="1280" height="720" loading="lazy" decoding="async" /></figure><div className="contact-assurance"><div><Check /><span><strong>คุยเบื้องต้นไม่มีค่าใช้จ่าย</strong><small>เห็นแนวทางก่อนตัดสินใจ</small></span></div><div><Check /><span><strong>ไม่บังคับเลือกแพ็กเกจ</strong><small>เลือกเฉพาะงานที่จำเป็น</small></span></div></div></div><ConsultationForm /></div></section>
    </main>
    <HubFooter />
    <Link className="mobile-sticky-cta" href="#contact">ปรึกษาธุรกิจฟรี <Arrow /></Link>
  </>;
}
