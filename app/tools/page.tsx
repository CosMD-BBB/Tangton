import type { Metadata } from "next";
import { HubFooter, HubHeader } from "@/components/HubHeader";
import { Breadcrumbs, ConsultationCta } from "@/components/SeoBlocks";
import { languageAlternates } from "@/lib/i18n";
import Toolbox from "./Toolbox";
export const metadata: Metadata = { title: "5 เครื่องมือธุรกิจที่ใช้งานได้จริง", description: "คำนวณ VAT ประเมินต้นทุนพนักงาน บันทึกเช็กลิสต์จดบริษัท แนะนำโครงสร้างกิจการ และตรวจความพร้อมชื่อบริษัท ใช้ฟรีบนเว็บไซต์", alternates: { canonical: "/tools", languages: languageAlternates("/tools") } };
const tools = [
  ["#vat-tool", "🧮", "คำนวณ VAT", "แยกฐานภาษีและยอดรวม"],
  ["#employee-cost-tool", "👥", "ต้นทุนพนักงาน", "เห็นเงินเดือนและเงินสมทบ"],
  ["#checklist-tool", "✅", "เช็กลิสต์บริษัท", "บันทึกและดาวน์โหลดได้"],
  ["#structure-tool", "🧭", "โครงสร้างกิจการ", "เทียบตัวเลือกจาก 3 คำตอบ"],
  ["#name-tool", "🔎", "ตรวจชื่อเบื้องต้น", "คัดข้อสังเกตก่อนจองจริง"],
];

export default function ToolsPage() { return <><HubHeader path="/tools" /><main className="inner-main"><section className="inner-hero tools-hero tools-hero-v3"><div className="container"><Breadcrumbs items={[{ label: "หน้าหลัก", href: "/" }, { label: "เครื่องมือฟรี" }]} /><div className="tools-hero-grid"><div><p className="eyebrow"><span /> กรอกจริง คำนวณจริง บันทึกได้</p><h1>5 เครื่องมือช่วยเตรียมธุรกิจ<br />ก่อนเริ่มดำเนินการ</h1><p>ทุกเครื่องมือแสดงสมมติฐานและข้อจำกัดชัดเจน ช่วยจัดข้อมูลให้พร้อมก่อนคุยกับนักบัญชีหรือผู้ดูแลงานทะเบียน โดยไม่ส่งข้อมูลออกจากอุปกรณ์</p><div className="hero-index"><div><strong>5</strong><span>เครื่องมือโต้ตอบได้</span></div><div><strong>ทันที</strong><span>คำนวณเมื่อข้อมูลเปลี่ยน</span></div><div><strong>ส่วนตัว</strong><span>ข้อมูลอยู่ในอุปกรณ์</span></div></div></div><figure data-reveal><img src="/illustration-tools-v7.webp" alt="ภาพเครื่องมือคำนวณและเตรียมข้อมูลสำหรับผู้ประกอบการ" width="1280" height="720" loading="eager" decoding="async" /><figcaption><span>ทดลองได้ทันที</span><strong>เลือกเครื่องมือ แล้วกรอกตัวเลขของคุณ</strong></figcaption></figure></div></div></section><nav className="tool-anchor-nav" aria-label="เลือกเครื่องมือ"><div className="container">{tools.map(([href, icon, title, detail]) => <a href={href} key={href}><span aria-hidden="true">{icon}</span><div><strong>{title}</strong><small>{detail}</small></div><b aria-hidden="true">↓</b></a>)}</div></nav><section className="tools-section"><div className="container"><Toolbox /><ConsultationCta title="คำนวณและเตรียมข้อมูลแล้ว ให้ทีมช่วยตรวจกรณีจริงต่อ" /></div></section></main><HubFooter /></>; }
