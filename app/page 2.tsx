import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ตั้งต้น | จดทะเบียนและดูแลธุรกิจครบวงจร",
  description:
    "บริการจดทะเบียนบริษัท จดภาษีมูลค่าเพิ่ม ประกันสังคม บัญชี ภาษี และเปลี่ยนแปลงบริษัท สำหรับผู้ประกอบการไทย พร้อมผู้ดูแลส่วนตัวและราคาชัดเจน",
  keywords: [
    "จดทะเบียนบริษัท",
    "จดบริษัทออนไลน์",
    "รับทำบัญชี",
    "จดภาษีมูลค่าเพิ่ม",
    "ขึ้นทะเบียนประกันสังคม",
    "เปลี่ยนแปลงบริษัท",
  ],
};

const services = [
  {
    number: "01",
    title: "เริ่มต้นธุรกิจ",
    description: "ตั้งโครงสร้างให้ถูกตั้งแต่วันแรก พร้อมเอกสารที่พร้อมนำไปใช้งานต่อ",
    items: ["จดบริษัทและห้างหุ้นส่วน", "จดภาษีมูลค่าเพิ่ม", "ขึ้นทะเบียนประกันสังคม", "เปิดบัญชีนิติบุคคล"],
    tone: "mint",
  },
  {
    number: "02",
    title: "บัญชี ภาษี และเงินเดือน",
    description: "ดูแลภาระงานประจำให้ตรงกำหนด คุณจึงมีเวลาโฟกัสกับการเติบโต",
    items: ["รับทำบัญชีรายเดือน", "ยื่นภาษีและปิดงบ", "ตรวจสอบบัญชี", "คำนวณเงินเดือน"],
    tone: "sand",
  },
  {
    number: "03",
    title: "เปลี่ยนแปลงบริษัท",
    description: "ขยับโครงสร้างธุรกิจได้อย่างมั่นใจ พร้อมตรวจเอกสารก่อนยื่นทุกครั้ง",
    items: ["เปลี่ยนกรรมการและผู้ถือหุ้น", "เพิ่มทุนหรือลดทุน", "ย้ายที่อยู่และเพิ่มสาขา", "แก้ชื่อและวัตถุประสงค์"],
    tone: "blue",
  },
  {
    number: "04",
    title: "ใบอนุญาตและการลงทุน",
    description: "เตรียมธุรกิจให้พร้อมขยายตลาด จ้างงาน และคุ้มครองทรัพย์สินทางปัญญา",
    items: ["เครื่องหมายการค้า", "ส่งเสริมการลงทุน", "วีซ่าและใบอนุญาตทำงาน", "ใบอนุญาตเฉพาะกิจการ"],
    tone: "rose",
  },
];

const process = [
  ["01", "คุยให้เข้าใจ", "เล่าเป้าหมายและรูปแบบธุรกิจให้ผู้ดูแลฟัง ใช้เวลาประมาณ 15 นาที"],
  ["02", "รับแผนที่ชัดเจน", "สรุปบริการ ค่าใช้จ่าย เอกสาร และลำดับงานก่อนเริ่มทุกครั้ง"],
  ["03", "ตรวจและยื่นเรื่อง", "ทีมงานตรวจความครบถ้วน ประสานงาน และแจ้งสถานะเป็นระยะ"],
  ["04", "รับเอกสารพร้อมใช้", "ส่งมอบเอกสารสำคัญ พร้อมบอกสิ่งที่ธุรกิจต้องทำต่อจากนี้"],
];

const packages = [
  {
    name: "แพ็กเกจตั้งต้น",
    eyebrow: "สำหรับเริ่มบริษัท",
    price: "6,900",
    suffix: "บาท / ครั้ง",
    description: "เหมาะกับผู้ประกอบการที่พร้อมเริ่มนิติบุคคล และมีที่ปรึกษาช่วยวางโครงสร้างเบื้องต้น",
    features: ["ตรวจและจองชื่อบริษัท", "จัดทำเอกสารจดทะเบียน", "ยื่นจดทะเบียนนิติบุคคล", "ชุดเอกสารบริษัทแบบดิจิทัล"],
    cta: "เลือกแพ็กเกจนี้",
  },
  {
    name: "แพ็กเกจพร้อมขาย",
    eyebrow: "คนเลือกมากที่สุด",
    price: "12,900",
    suffix: "บาท / ครั้ง",
    description: "สำหรับธุรกิจที่ต้องออกใบกำกับภาษี จ้างพนักงาน หรืออยากพร้อมดำเนินงานทันที",
    features: ["ทุกอย่างในแพ็กเกจตั้งต้น", "จดภาษีมูลค่าเพิ่ม", "ขึ้นทะเบียนนายจ้าง", "ปรึกษาบัญชีและภาษี 1 ชั่วโมง"],
    cta: "เริ่มวางแผนธุรกิจ",
    featured: true,
  },
  {
    name: "แพ็กเกจดูแลต่อ",
    eyebrow: "สำหรับธุรกิจที่เปิดแล้ว",
    price: "2,900",
    suffix: "บาท / เดือน",
    description: "ดูแลงานบัญชีและภาษีรายเดือนแบบเป็นระบบ พร้อมสรุปสิ่งสำคัญให้เจ้าของธุรกิจเข้าใจง่าย",
    features: ["บันทึกบัญชีรายเดือน", "จัดทำและยื่นแบบภาษี", "สรุปรายรับรายจ่าย", "ผู้ดูแลประจำธุรกิจ"],
    cta: "ประเมินปริมาณเอกสาร",
  },
];

const faqs = [
  {
    question: "จดบริษัทใช้เวลากี่วัน?",
    answer:
      "โดยทั่วไปใช้ประมาณ 3–7 วันทำการหลังได้รับเอกสารและลายเซ็นครบ ระยะเวลาจริงขึ้นอยู่กับความพร้อมของชื่อบริษัท รายละเอียดผู้ถือหุ้น และรอบพิจารณาของหน่วยงาน ผู้ดูแลจะแจ้งกรอบเวลาที่เหมาะกับกรณีของคุณก่อนเริ่มงาน",
  },
  {
    question: "ไม่อยู่กรุงเทพฯ ใช้บริการได้ไหม?",
    answer:
      "ได้ กระบวนการส่วนใหญ่ดำเนินการออนไลน์ได้ ตั้งแต่ปรึกษา ส่งข้อมูล ตรวจเอกสาร ลงลายมือชื่อ ไปจนถึงติดตามสถานะ และสามารถจัดส่งเอกสารตัวจริงทั่วประเทศ",
  },
  {
    question: "ราคาแพ็กเกจรวมค่าธรรมเนียมราชการแล้วหรือยัง?",
    answer:
      "ราคาบนหน้าเว็บนี้เป็นราคาตัวอย่างของค่าบริการ ยังไม่รวมค่าธรรมเนียมราชการ ค่ารับรองเอกสาร และค่าใช้จ่ายเฉพาะกรณี คุณจะได้รับสรุปค่าใช้จ่ายทั้งหมดให้ตรวจสอบก่อนยืนยันเริ่มงาน",
  },
  {
    question: "ต้องจดภาษีมูลค่าเพิ่มทันทีที่เปิดบริษัทหรือไม่?",
    answer:
      "ไม่ใช่ทุกบริษัทที่ต้องจดทันที โดยทั่วไปควรพิจารณาจากประเภทธุรกิจ รายได้ และเงื่อนไขของลูกค้าหรือคู่ค้า ทีมงานจะช่วยประเมินว่าควรจดตั้งแต่เริ่ม หรือรอให้ถึงจังหวะที่เหมาะสม",
  },
  {
    question: "ต้องเตรียมเอกสารอะไรบ้าง?",
    answer:
      "ข้อมูลหลักได้แก่ ชื่อบริษัทที่ต้องการ รายละเอียดผู้ถือหุ้นและกรรมการ ที่ตั้งสำนักงาน ทุนจดทะเบียน และวัตถุประสงค์ธุรกิจ หลังการปรึกษา คุณจะได้รับรายการเอกสารเฉพาะกรณีแบบเช็กได้ทีละข้อ",
  },
  {
    question: "หลังจดบริษัทแล้วต้องทำอะไรต่อ?",
    answer:
      "สิ่งที่มักต้องทำต่อ ได้แก่ เปิดบัญชีธนาคาร จัดระบบบัญชี ออกเอกสารให้ถูกต้อง พิจารณาจดภาษีมูลค่าเพิ่มและประกันสังคม รวมถึงเตรียมปฏิทินภาษี ผู้ดูแลจะสรุปงานหลังจดทะเบียนให้ในชุดส่งมอบ",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "ตั้งต้น",
      description: "แพลตฟอร์มบริการจดทะเบียนและดูแลธุรกิจสำหรับผู้ประกอบการไทย",
      areaServed: { "@type": "Country", name: "ประเทศไทย" },
      knowsAbout: ["จดทะเบียนบริษัท", "บัญชี", "ภาษี", "ประกันสังคม", "ใบอนุญาตธุรกิจ"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Check() {
  return <span className="check" aria-hidden="true">✓</span>;
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="announcement">
        <div className="container announcement-inner">
          <span>ปรึกษาเบื้องต้นฟรี • รู้ขอบเขตงานและค่าใช้จ่ายก่อนเริ่ม</span>
          <a href="#contact">นัดคุยกับผู้ดูแล <Arrow /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="ตั้งต้น หน้าหลัก">
            <span className="brand-mark">ต</span>
            <span>ตั้งต้น</span>
          </a>
          <nav className="desktop-nav" aria-label="เมนูหลัก">
            <a href="#services">บริการ</a>
            <a href="#how">ขั้นตอน</a>
            <a href="#pricing">ราคา</a>
            <a href="#reviews">เสียงจากลูกค้า</a>
            <a href="#faq">คำถามที่พบบ่อย</a>
          </nav>
          <a className="nav-cta" href="#contact">ปรึกษาฟรี <Arrow /></a>
          <details className="mobile-menu">
            <summary>เมนู</summary>
            <nav aria-label="เมนูบนมือถือ">
              <a href="#services">บริการ</a>
              <a href="#how">ขั้นตอน</a>
              <a href="#pricing">ราคา</a>
              <a href="#reviews">เสียงจากลูกค้า</a>
              <a href="#faq">คำถามที่พบบ่อย</a>
              <a href="#contact">ปรึกษาฟรี</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> ผู้ช่วยตั้งต้นธุรกิจสำหรับคนไทย</p>
            <h1>เรื่องเอกสารธุรกิจ<br />ให้เป็นเรื่องที่<br /><em>เริ่มได้ง่าย</em></h1>
            <p className="hero-lead">
              จดทะเบียน วางระบบบัญชี และดูแลงานหลังบ้านครบในที่เดียว
              มีผู้เชี่ยวชาญช่วยแปลเรื่องยากให้เป็นขั้นตอนที่เข้าใจได้
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">ปรึกษาเรื่องธุรกิจฟรี <Arrow /></a>
              <a className="button button-ghost" href="#services">ดูบริการทั้งหมด</a>
            </div>
            <div className="hero-proof" aria-label="จุดเด่นของบริการ">
              <div><strong>ชัดก่อนเริ่ม</strong><span>สรุปราคาและขอบเขตงาน</span></div>
              <div><strong>ทำได้ทางไกล</strong><span>ดูแลออนไลน์ทั่วประเทศ</span></div>
              <div><strong>มีคนดูแล</strong><span>ติดตามงานกับทีมเดียว</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="ตัวอย่างสรุปแพ็กเกจเริ่มต้นธุรกิจ">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="summary-card">
              <div className="card-topline">
                <span className="status-dot" />
                <span>แผนเริ่มต้นธุรกิจ</span>
                <span className="mini-pill">พร้อมดำเนินการ</span>
              </div>
              <div className="summary-title-row">
                <div>
                  <p>แพ็กเกจพร้อมขาย</p>
                  <h2>12,900 <small>บาท</small></h2>
                </div>
                <div className="stamp"><span>ตรวจแล้ว</span><strong>✓</strong></div>
              </div>
              <div className="progress-label"><span>ความพร้อมของข้อมูล</span><strong>80%</strong></div>
              <div className="progress"><i /></div>
              <div className="summary-list">
                <div><Check /><span>จดทะเบียนนิติบุคคล</span><b>พร้อม</b></div>
                <div><Check /><span>จดภาษีมูลค่าเพิ่ม</span><b>รวมแล้ว</b></div>
                <div><Check /><span>ขึ้นทะเบียนนายจ้าง</span><b>รวมแล้ว</b></div>
              </div>
              <div className="advisor-row">
                <div className="avatars" aria-hidden="true"><i>ท</i><i>บ</i><i>ภ</i></div>
                <div><strong>ผู้เชี่ยวชาญ 3 ด้าน</strong><span>ทะเบียน • บัญชี • ภาษี</span></div>
                <a href="#pricing" aria-label="ดูรายละเอียดแพ็กเกจ">→</a>
              </div>
            </div>
            <div className="float-note note-one"><span>✓</span><div><strong>ไม่ต้องเดินทาง</strong><small>ส่งข้อมูลออนไลน์ได้</small></div></div>
            <div className="float-note note-two"><strong>3–7</strong><span>วันทำการโดยประมาณ</span></div>
          </div>
        </div>
        <div className="container scope-bar">
          <span>ดูแลกระบวนงานที่เกี่ยวข้องกับ</span>
          <strong>กรมพัฒนาธุรกิจการค้า</strong>
          <i />
          <strong>กรมสรรพากร</strong>
          <i />
          <strong>สำนักงานประกันสังคม</strong>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span /> บริการของเรา</p><h2>หนึ่งทีม ดูแลครบ<br />ทุกจังหวะธุรกิจ</h2></div>
            <p>ตั้งแต่ไอเดียแรก ไปจนถึงวันที่ธุรกิจเติบโต เราช่วยจัดการงานเอกสารให้ถูกต้อง เป็นระบบ และพร้อมก้าวต่อ</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className={`service-card ${service.tone}`} key={service.number}>
                <div className="service-number">{service.number}</div>
                <div className="service-icon" aria-hidden="true"><span /><span /><span /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => <li key={item}><Check />{item}</li>)}
                </ul>
                <a href="#contact">สอบถามบริการนี้ <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-answer">
        <div className="container quick-grid">
          <div>
            <p className="eyebrow light"><span /> สรุปให้เข้าใจใน 30 วินาที</p>
            <h2>อยากเปิดบริษัท<br />ต้องเริ่มจากอะไร?</h2>
          </div>
          <div className="answer-copy">
            <p className="answer-lead">เริ่มจากกำหนด <strong>ผู้ถือหุ้น กรรมการ ทุน ที่ตั้ง และประเภทธุรกิจ</strong> จากนั้นจองชื่อ จัดทำเอกสาร และยื่นจดทะเบียน เมื่ออนุมัติแล้วจึงเปิดบัญชีธนาคารและวางระบบบัญชีภาษี</p>
            <div className="answer-facts">
              <div><span>ใช้เวลา</span><strong>ประมาณ 3–7 วันทำการ</strong></div>
              <div><span>เอกสารหลัก</span><strong>บัตรประชาชนและข้อมูลธุรกิจ</strong></div>
              <div><span>ทำออนไลน์</span><strong>ได้เกือบทุกขั้นตอน</strong></div>
            </div>
            <a href="#contact" className="text-link">รับเช็กลิสต์เฉพาะธุรกิจของคุณ <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section process-section" id="how">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow"><span /> วิธีเริ่มต้น</p>
            <h2>จากเรื่องยุ่ง ให้เป็น 4 ขั้นตอน</h2>
            <p>คุณเตรียมเฉพาะข้อมูลที่จำเป็น ที่เหลือให้ทีมงานช่วยจัดลำดับและพาไปจนจบ</p>
          </div>
          <div className="process-grid">
            {process.map(([number, title, detail], index) => (
              <article className="process-card" key={number}>
                <div className="process-top"><span>{number}</span>{index < 3 && <i aria-hidden="true">→</i>}</div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
          <div className="process-note"><span>“</span><p>ไม่แน่ใจว่าต้องเลือกบริการไหน? เล่าเป้าหมายของคุณให้เราฟัง แล้วรับแผนงานเบื้องต้นโดยไม่มีค่าใช้จ่าย</p><a href="#contact">เริ่มคุยกับผู้ดูแล <Arrow /></a></div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="section-heading split-heading pricing-heading">
            <div><p className="eyebrow"><span /> ราคาแพ็กเกจตัวอย่าง</p><h2>เลือกจุดเริ่ม<br />ที่พอดีกับธุรกิจ</h2></div>
            <p>เห็นรายการงานและราคาเบื้องต้นได้ทันที หากธุรกิจมีเงื่อนไขพิเศษ ทีมงานจะสรุปส่วนต่างให้ทราบก่อนเริ่ม</p>
          </div>
          <div className="pricing-grid">
            {packages.map((item) => (
              <article className={`price-card ${item.featured ? "featured" : ""}`} key={item.name}>
                {item.featured && <div className="recommended">แนะนำ</div>}
                <p className="price-eyebrow">{item.eyebrow}</p>
                <h3>{item.name}</h3>
                <div className="price"><span>เริ่มต้น</span><strong>{item.price}</strong><small>{item.suffix}</small></div>
                <p className="price-description">{item.description}</p>
                <ul>{item.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul>
                <a className={`button ${item.featured ? "button-primary" : "button-outline"}`} href="#contact">{item.cta} <Arrow /></a>
              </article>
            ))}
          </div>
          <p className="price-disclaimer">* ราคานี้จัดทำเพื่อแสดงตัวอย่างหน้าเว็บไซต์ ยังไม่รวมค่าธรรมเนียมราชการ ภาษีมูลค่าเพิ่ม และค่าใช้จ่ายเฉพาะกรณี</p>
        </div>
      </section>

      <section className="section reviews-section" id="reviews">
        <div className="container">
          <div className="review-layout">
            <div className="review-intro">
              <p className="eyebrow light"><span /> ตัวอย่างเสียงจากผู้ประกอบการ</p>
              <h2>ทำเรื่องยาก<br />ให้คนทำธุรกิจ<br /><em>เบาใจขึ้น</em></h2>
              <div className="review-stat"><strong>4.9</strong><div><span>★★★★★</span><small>รูปแบบคะแนนรีวิวตัวอย่าง</small></div></div>
            </div>
            <div className="review-cards">
              <article>
                <div className="quote">“</div>
                <p>ตอนแรกไม่รู้เลยว่าต้องเริ่มตรงไหน ทีมช่วยถามทีละเรื่องและสรุปเป็นรายการให้ เห็นทั้งค่าใช้จ่ายกับกำหนดการก่อนตัดสินใจ รู้สึกควบคุมได้มากขึ้นค่ะ</p>
                <div className="reviewer"><span>ม</span><div><strong>คุณเมย์</strong><small>เจ้าของแบรนด์สินค้าเพื่อสุขภาพ • รีวิวตัวอย่าง</small></div></div>
              </article>
              <article>
                <div className="quote">“</div>
                <p>ชอบที่อธิบายภาษีเป็นภาษาคนทำธุรกิจ ไม่ได้แค่ยื่นเอกสารให้ แต่บอกด้วยว่าเดือนต่อไปต้องเตรียมอะไร ทำให้วางแผนเงินและงานได้ง่ายขึ้น</p>
                <div className="reviewer"><span>น</span><div><strong>คุณนนท์</strong><small>ผู้ก่อตั้งสตูดิโอออกแบบ • รีวิวตัวอย่าง</small></div></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div className="faq-intro">
            <p className="eyebrow"><span /> คำถามที่พบบ่อย</p>
            <h2>คำตอบที่ควรรู้<br />ก่อนเริ่มธุรกิจ</h2>
            <p>ยังมีคำถามเฉพาะกรณีของคุณ? ส่งข้อมูลสั้น ๆ แล้วให้ผู้ดูแลช่วยไล่คำตอบทีละข้อ</p>
            <a className="text-link" href="#contact">ถามเรื่องของคุณโดยตรง <Arrow /></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><i aria-hidden="true">+</i></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light"><span /> เริ่มต้นได้วันนี้</p>
            <h2>ธุรกิจคุณมีเรื่องไหน<br />ที่อยากทำให้ชัด?</h2>
            <p>บอกเราเพียงเล็กน้อย แล้วรับแนวทางเริ่มต้น รายการเอกสาร และค่าใช้จ่ายเบื้องต้นกลับไปพิจารณา</p>
            <div className="contact-assurance"><div><Check /><span><strong>ไม่มีค่าใช้จ่ายในการปรึกษา</strong><small>คุยก่อน ตัดสินใจภายหลัง</small></span></div><div><Check /><span><strong>ข้อมูลใช้เพื่อประเมินงานเท่านั้น</strong><small>ไม่ส่งต่อให้บุคคลภายนอก</small></span></div></div>
          </div>
          <form className="lead-form" action="#contact">
            <div className="form-head"><span>01</span><div><strong>เล่าเรื่องธุรกิจของคุณ</strong><small>ใช้เวลาประมาณ 1 นาที</small></div></div>
            <label>ชื่อที่ให้เราเรียก<input name="name" type="text" placeholder="เช่น คุณต้น" required /></label>
            <label>ช่องทางติดต่อ<input name="contact" type="text" placeholder="เบอร์โทรหรือไลน์" required /></label>
            <label>เรื่องที่อยากปรึกษา<select name="service" defaultValue=""><option value="" disabled>เลือกหัวข้อ</option><option>จดทะเบียนธุรกิจใหม่</option><option>บัญชี ภาษี และเงินเดือน</option><option>เปลี่ยนแปลงข้อมูลบริษัท</option><option>ใบอนุญาตและการลงทุน</option><option>ยังไม่แน่ใจ อยากให้ช่วยแนะนำ</option></select></label>
            <label>รายละเอียดเพิ่มเติม<textarea name="detail" rows={3} placeholder="เล่าเป้าหมายหรือคำถามสั้น ๆ" /></label>
            <button className="button button-primary" type="submit">ขอรับคำปรึกษาเบื้องต้น <Arrow /></button>
            <small className="form-note">กดส่งเพื่อดูตัวอย่างการเชื่อมต่อแบบฟอร์มในขั้นต่อไป</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-top">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark">ต</span><span>ตั้งต้น</span></a><p>เพื่อนคู่คิดด้านทะเบียน บัญชี และภาษี<br />สำหรับผู้ประกอบการไทย</p></div>
          <div><strong>บริการ</strong><a href="#services">เริ่มต้นธุรกิจ</a><a href="#services">บัญชีและภาษี</a><a href="#services">เปลี่ยนแปลงบริษัท</a><a href="#services">ใบอนุญาต</a></div>
          <div><strong>ข้อมูลสำคัญ</strong><a href="#pricing">ราคาแพ็กเกจ</a><a href="#how">ขั้นตอนการทำงาน</a><a href="#faq">คำถามที่พบบ่อย</a><a href="#contact">ติดต่อเรา</a></div>
          <div className="footer-cta"><strong>ยังไม่แน่ใจว่าต้องเริ่มตรงไหน?</strong><p>ส่งคำถามไว้ แล้วให้ผู้ดูแลช่วยจัดลำดับให้</p><a href="#contact">ปรึกษาฟรี <Arrow /></a></div>
        </div>
        <div className="container footer-bottom"><span>© 2569 ตั้งต้น — เว็บไซต์ตัวอย่างสำหรับการนำเสนอแนวทาง</span><div><a href="#top">นโยบายความเป็นส่วนตัว</a><a href="#top">เงื่อนไขบริการ</a></div></div>
      </footer>
      <a className="mobile-sticky-cta" href="#contact">ปรึกษาธุรกิจฟรี <Arrow /></a>
    </main>
  );
}
