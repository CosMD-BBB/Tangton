"use client";

import { useEffect, useMemo, useState } from "react";

const checklist = [
  "กำหนดผู้ก่อตั้งและสัดส่วนการถือหุ้น",
  "เลือกกรรมการและเงื่อนไขการลงนาม",
  "เตรียมชื่อหลักและชื่อสำรองอย่างน้อย 2 ชื่อ",
  "สรุปสินค้า บริการ และช่องทางรายได้",
  "กำหนดทุนจากแผนใช้เงินจริง",
  "เตรียมหลักฐานสิทธิใช้ที่ตั้งสำนักงาน",
  "วางระบบเอกสารซื้อ ขาย รับ และจ่าย",
  "ประเมินความจำเป็นของ VAT",
  "เตรียมขึ้นทะเบียนนายจ้างเมื่อเริ่มมีลูกจ้าง",
  "ตั้งปฏิทินบัญชี ภาษี และงานประชุมบริษัท",
];

const money = (value: number) => value.toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Toolbox() {
  const [amount, setAmount] = useState("10000");
  const [inclusive, setInclusive] = useState(false);
  const [vatRate, setVatRate] = useState("7");
  const [salary, setSalary] = useState("25000");
  const [employees, setEmployees] = useState("3");
  const [ssoRate, setSsoRate] = useState("5");
  const [ssoCap, setSsoCap] = useState("15000");
  const [checked, setChecked] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [owners, setOwners] = useState("one");
  const [risk, setRisk] = useState("normal");
  const [clients, setClients] = useState("consumer");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = localStorage.getItem("tangton-company-checklist");
        if (stored) setChecked(JSON.parse(stored));
      } catch { /* เก็บรายการเฉพาะเมื่อเบราว์เซอร์รองรับ */ }
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("tangton-company-checklist", JSON.stringify(checked));
  }, [checked, loaded]);

  const vat = useMemo(() => {
    const n = Math.max(0, Number(amount.replace(/,/g, "")) || 0);
    const rate = Math.max(0, Number(vatRate) || 0) / 100;
    return inclusive
      ? { base: n / (1 + rate), vat: n - n / (1 + rate), total: n }
      : { base: n, vat: n * rate, total: n * (1 + rate) };
  }, [amount, inclusive, vatRate]);

  const employeeCost = useMemo(() => {
    const wage = Math.max(0, Number(salary.replace(/,/g, "")) || 0);
    const people = Math.max(1, Math.round(Number(employees) || 1));
    const rate = Math.max(0, Number(ssoRate) || 0) / 100;
    const cap = Math.max(0, Number(ssoCap.replace(/,/g, "")) || 0);
    const contribution = Math.min(wage, cap) * rate;
    return { people, contribution, payroll: wage * people, sso: contribution * people, total: (wage + contribution) * people };
  }, [salary, employees, ssoRate, ssoCap]);

  const nameChecks = useMemo(() => {
    const name = companyName.trim();
    const conditionalWords = ["ธนาคาร", "ประกันภัย", "มหาชน", "มหาวิทยาลัย", "สมาคม"];
    return [
      { label: "มีความยาวอย่างน้อย 3 ตัวอักษร", pass: name.length >= 3 },
      { label: "ไม่มีอักขระพิเศษที่มักใช้ไม่ได้", pass: name.length > 0 && !name.split("").some((char) => "!@#$%^&*_=+{}[]<>\\".includes(char)) },
      { label: "ไม่พบคำที่ควรตรวจเงื่อนไขเพิ่ม", pass: name.length > 0 && !conditionalWords.some((word) => name.includes(word)) },
      { label: "ชื่อไม่ยาวเกินไปสำหรับการใช้งาน", pass: name.length > 0 && name.length <= 40 },
    ];
  }, [companyName]);

  const recommendation = useMemo(() => {
    let score = 0;
    if (owners === "many") score += 2;
    if (risk === "separate") score += 2;
    if (clients === "corporate") score += 2;
    if (score >= 4) return { title: "บริษัทจำกัด", text: "มีแนวโน้มเหมาะเมื่อมีผู้ร่วมลงทุน ต้องการแยกความรับผิด หรือทำงานกับองค์กร ควรวางสัดส่วนหุ้น อำนาจกรรมการ และทุนให้สัมพันธ์กับการใช้เงินจริง", slug: "register-company" };
    if (score >= 2 && owners === "many") return { title: "ห้างหุ้นส่วนจำกัด", text: "อาจเหมาะกับกิจการที่มีหุ้นส่วนร่วมบริหารและต้องการโครงสร้างไม่ซับซ้อน แต่ควรทำความเข้าใจบทบาทหุ้นส่วนแต่ละประเภทก่อนเลือก", slug: "register-partnership" };
    return { title: "บุคคลธรรมดา / ทะเบียนพาณิชย์", text: "อาจเริ่มง่ายกว่าเมื่องานมีเจ้าของคนเดียว ความเสี่ยงไม่สูง และยังทดสอบตลาดอยู่ จากนั้นค่อยเปรียบเทียบต้นทุนกับการตั้งนิติบุคคล", slug: "commercial-registration" };
  }, [owners, risk, clients]);

  async function copyVat() {
    const text = `ยอดก่อนภาษี ${money(vat.base)} บาท\nVAT ${vatRate}% ${money(vat.vat)} บาท\nยอดรวม ${money(vat.total)} บาท`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function downloadChecklist() {
    const lines = checklist.map((item, index) => `${checked.includes(index) ? "[✓]" : "[ ]"} ${item}`);
    const content = `เช็กลิสต์เตรียมเปิดบริษัท — ตั้งต้น\nอัปเดต ${new Date().toLocaleDateString("th-TH")}\n\n${lines.join("\n")}\n\nทำแล้ว ${checked.length}/${checklist.length} รายการ`;
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url; link.download = "checklist-tangton.txt"; link.click(); URL.revokeObjectURL(url);
  }

  return <div className="toolbox-grid toolbox-v2">
    <section className="tool-card tool-wide calculator" id="vat-tool" data-testid="vat-tool" data-reveal>
      <div className="tool-head"><span>01</span><i aria-hidden="true">🧮</i><div><h2>คำนวณภาษีมูลค่าเพิ่ม</h2><p>บวกหรือถอด VAT พร้อมคัดลอกผลลัพธ์ไปใช้งานต่อ</p></div></div>
      <div className="tool-two-columns"><div className="tool-controls"><label>จำนวนเงิน<input value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="decimal" aria-label="จำนวนเงินสำหรับคำนวณ VAT" /></label><label>อัตรา VAT (%)<input value={vatRate} onChange={(e) => setVatRate(e.target.value)} inputMode="decimal" aria-label="อัตรา VAT" /></label><div className="segmented"><button type="button" className={!inclusive ? "active" : ""} onClick={() => setInclusive(false)}>ยังไม่รวม VAT</button><button type="button" className={inclusive ? "active" : ""} onClick={() => setInclusive(true)}>รวม VAT แล้ว</button></div></div><dl className="vat-result"><div><dt>มูลค่าก่อนภาษี</dt><dd data-testid="vat-base">{money(vat.base)}</dd></div><div><dt>ภาษีมูลค่าเพิ่ม</dt><dd data-testid="vat-amount">{money(vat.vat)}</dd></div><div><dt>ยอดรวม</dt><dd data-testid="vat-total">{money(vat.total)}</dd></div><button type="button" className="tool-action" onClick={copyVat}>{copied ? "คัดลอกแล้ว ✓" : "คัดลอกผลลัพธ์"}</button></dl></div>
      <small>ตั้งต้นที่ 7% ตามอัตราที่กรมสรรพากรประกาศถึง 30 กันยายน 2570 และเปิดให้แก้อัตราได้เพื่อรองรับกรณีอื่น ผลลัพธ์เป็นการคำนวณเบื้องต้น</small>
    </section>

    <section className="tool-card" id="employee-cost-tool" data-testid="employee-cost-tool" data-reveal>
      <div className="tool-head"><span>02</span><i aria-hidden="true">👥</i><div><h2>ประเมินต้นทุนพนักงาน</h2><p>เห็นเงินเดือนและเงินสมทบฝั่งนายจ้างต่อเดือน</p></div></div>
      <div className="compact-fields"><label>เงินเดือนต่อคน<input value={salary} onChange={(e) => setSalary(e.target.value)} inputMode="decimal" aria-label="เงินเดือนต่อคน" /></label><label>จำนวนพนักงาน<input value={employees} onChange={(e) => setEmployees(e.target.value)} inputMode="numeric" aria-label="จำนวนพนักงาน" /></label><label>อัตราสมทบ (%)<input value={ssoRate} onChange={(e) => setSsoRate(e.target.value)} inputMode="decimal" aria-label="อัตราเงินสมทบ" /></label><label>เพดานค่าจ้าง<input value={ssoCap} onChange={(e) => setSsoCap(e.target.value)} inputMode="decimal" aria-label="เพดานค่าจ้างที่ใช้คำนวณ" /></label></div>
      <dl className="cost-result"><div><dt>เงินเดือนรวม</dt><dd>{money(employeeCost.payroll)}</dd></div><div><dt>เงินสมทบนายจ้าง</dt><dd>{money(employeeCost.sso)}</dd></div><div><dt>ต้นทุนรวมเบื้องต้น</dt><dd data-testid="employee-cost-total">{money(employeeCost.total)} บาท</dd></div></dl>
      <div className="tool-warning"><strong>ปรับสมมติฐานได้</strong><p>ค่าเริ่มต้นใช้อัตรา 5% และเพดาน 15,000 บาทตามแบบนำส่งเงินสมทบที่เผยแพร่ล่าสุดที่ตรวจสอบ เครื่องมือนี้ยังไม่รวมโบนัส สวัสดิการ กองทุนทดแทน และภาษีเงินเดือน</p></div>
    </section>

    <section className="tool-card checklist-card" id="checklist-tool" data-testid="checklist-tool" data-reveal>
      <div className="tool-head"><span>03</span><i aria-hidden="true">✅</i><div><h2>เช็กลิสต์เปิดบริษัท</h2><p>ระบบจำสถานะไว้ในอุปกรณ์นี้โดยอัตโนมัติ</p></div></div>
      <div className="check-progress"><strong>{checked.length}/{checklist.length}</strong><div><i style={{ width: `${checked.length / checklist.length * 100}%` }} /></div><span>{Math.round(checked.length / checklist.length * 100)}%</span></div>
      <div className="interactive-checks">{checklist.map((item, index) => <button type="button" className={checked.includes(index) ? "done" : ""} onClick={() => setChecked((current) => current.includes(index) ? current.filter((value) => value !== index) : [...current, index])} key={item}><span>{checked.includes(index) ? "✓" : index + 1}</span>{item}</button>)}</div>
      <div className="tool-actions"><button type="button" className="tool-action" onClick={downloadChecklist}>ดาวน์โหลดรายการ</button><button type="button" className="tool-action ghost" onClick={() => setChecked([])}>เริ่มใหม่</button></div>
    </section>

    <section className="tool-card recommender" id="structure-tool" data-testid="structure-tool" data-reveal>
      <div className="tool-head"><span>04</span><i aria-hidden="true">🧭</i><div><h2>แนะนำโครงสร้างกิจการ</h2><p>ตอบ 3 ข้อเพื่อดูตัวเลือกที่ควรนำไปเปรียบเทียบ</p></div></div>
      <label>จำนวนผู้ร่วมก่อตั้ง<select value={owners} onChange={(e) => setOwners(e.target.value)} aria-label="จำนวนผู้ร่วมก่อตั้ง"><option value="one">เจ้าของคนเดียว</option><option value="many">มีผู้ร่วมก่อตั้งหลายคน</option></select></label>
      <label>ความต้องการแยกความรับผิด<select value={risk} onChange={(e) => setRisk(e.target.value)} aria-label="ความต้องการแยกความรับผิด"><option value="normal">ความเสี่ยงยังไม่สูง</option><option value="separate">ต้องการแยกความรับผิดชัดเจน</option></select></label>
      <label>ลูกค้าหลัก<select value={clients} onChange={(e) => setClients(e.target.value)} aria-label="ลูกค้าหลัก"><option value="consumer">บุคคลทั่วไป</option><option value="corporate">บริษัทหรือองค์กร</option></select></label>
      <div className="recommendation-result"><span>ตัวเลือกที่ควรศึกษาเพิ่ม</span><h3 data-testid="structure-result">{recommendation.title}</h3><p>{recommendation.text}</p><a href={`/services/${recommendation.slug}`}>อ่านรายละเอียดบริการ ↗</a></div>
      <small>ผลนี้ไม่ใช่คำแนะนำทางกฎหมายหรือภาษี ควรเปรียบเทียบข้อเท็จจริงและต้นทุนดูแลระยะยาวก่อนเลือก</small>
    </section>

    <section className="tool-card name-tool" id="name-tool" data-testid="name-tool" data-reveal>
      <div className="tool-head"><span>05</span><i aria-hidden="true">🔎</i><div><h2>ตรวจความพร้อมชื่อบริษัท</h2><p>ช่วยคัดข้อสังเกตก่อนตรวจและจองชื่อกับหน่วยงานจริง</p></div></div>
      <label>ชื่อบริษัทที่ต้องการ<input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="เช่น ตั้งต้น โซลูชัน" aria-label="ชื่อบริษัทที่ต้องการตรวจ" /></label>
      <div className="name-score"><strong>{nameChecks.filter((item) => item.pass).length}/{nameChecks.length}</strong><span>เกณฑ์เบื้องต้นผ่าน</span></div>
      <div className="name-results">{nameChecks.map((item) => <div className={item.pass ? "pass" : ""} key={item.label}><span>{item.pass ? "✓" : "○"}</span>{item.label}</div>)}</div>
      <div className="tool-warning"><strong>ยังต้องตรวจสถานะจริง</strong><p>เครื่องมือนี้ไม่ตรวจฐานข้อมูลชื่อซ้ำและไม่ใช่การจองชื่อ ควรเตรียมชื่อสำรองอย่างน้อย 2 ชื่อ และตรวจความคล้ายหรือคำที่มีเงื่อนไขผ่านระบบของกรมพัฒนาธุรกิจการค้า</p></div>
    </section>
  </div>;
}
