import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteUrl } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "ตั้งต้น | จดทะเบียนและดูแลธุรกิจครบวงจร", template: "%s | ตั้งต้น" },
  description: "40 บริการครบ 5 หมวด: จดทะเบียน บัญชี ภาษี การเงิน บุคลากร งานบริหาร การเปลี่ยนแปลง ปิดกิจการ และใบอนุญาต พร้อมคู่มือและเครื่องมือสำหรับผู้ประกอบการไทย",
  keywords: ["จดทะเบียนบริษัท", "จดบริษัทออนไลน์", "รับทำบัญชี", "บริหารธุรกิจ", "Payroll", "PDPA", "จด VAT", "เปลี่ยนแปลงบริษัท", "ใบอนุญาตธุรกิจ"],
  applicationName: "ตั้งต้น",
  category: "บริการธุรกิจ",
  icons: { icon: "/tangton-symbol.png", apple: "/tangton-symbol.png" },
  alternates: { canonical: "/" },
  openGraph: { title: "ตั้งต้น — เริ่มธุรกิจให้ถูก บริหารต่อให้เป็นระบบ", description: "40 บริการครบ 5 หมวด พร้อม 14 คู่มือธุรกิจและเครื่องมือสำหรับผู้ประกอบการไทย", url: siteUrl, siteName: "ตั้งต้น", locale: "th_TH", type: "website", images: [{ url: "/og-v8.png", width: 1200, height: 630, alt: "ตั้งต้น 40 บริการ 14 ประเภทธุรกิจ 5 ภาษา" }] },
  twitter: { card: "summary_large_image", title: "ตั้งต้น — เริ่มธุรกิจให้ถูก บริหารต่อให้เป็นระบบ", description: "40 บริการครบ 5 หมวด พร้อม 14 คู่มือธุรกิจและเครื่องมือสำหรับผู้ประกอบการไทย", images: ["/og-v8.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}<ScrollReveal /></body>
    </html>
  );
}
