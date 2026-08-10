import type { Metadata } from "next";
import { HubFooter, HubHeader } from "@/components/HubHeader";
import { Breadcrumbs } from "@/components/SeoBlocks";
export const metadata: Metadata = { title: "เงื่อนไขการใช้บริการ", robots: { index: false, follow: true } };
export default function TermsPage() { return <><HubHeader /><main className="legal-page"><div className="narrow-container"><Breadcrumbs items={[{ label: "หน้าหลัก", href: "/" }, { label: "เงื่อนไขการใช้บริการ" }]} /><h1>เงื่อนไขการใช้บริการ</h1><p>เว็บไซต์นี้เป็นตัวอย่างเพื่อแสดงแนวทางการออกแบบและโครงสร้างเนื้อหา ราคา ระยะเวลา รีวิว และข้อความบริการยังไม่ใช่ข้อเสนอที่มีผลผูกพัน</p><h2>ข้อมูลทั่วไป</h2><p>เนื้อหาไม่ใช่คำปรึกษากฎหมาย ภาษี บัญชี หรือการลงทุนสำหรับข้อเท็จจริงทุกกรณี ควรตรวจข้อมูลล่าสุดกับผู้เชี่ยวชาญและหน่วยงานที่เกี่ยวข้องก่อนดำเนินการ</p><h2>ขอบเขตบริการ</h2><p>ขอบเขต ราคา กำหนดเวลา สิ่งที่รวมและไม่รวม จะมีผลเมื่อได้รับการยืนยันเป็นลายลักษณ์อักษรสำหรับกรณีจริงแล้วเท่านั้น</p></div></main><HubFooter /></>; }
