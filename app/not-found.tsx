import Link from "next/link";
import { HubFooter, HubHeader } from "@/components/HubHeader";
export default function NotFound() { return <><HubHeader /><main className="not-found"><div><span>404</span><h1>ไม่พบหน้าที่ต้องการ</h1><p>ลิงก์อาจเปลี่ยนหรือข้อมูลนี้ยังไม่เผยแพร่ ลองเลือกจากบริการและคู่มือทั้งหมด</p><div><Link className="button button-primary" href="/">กลับหน้าหลัก</Link><Link className="button button-ghost" href="/services">ดูบริการทั้งหมด</Link></div></div></main><HubFooter /></>; }
