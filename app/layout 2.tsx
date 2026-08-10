import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tangton.example"),
  title: {
    default: "ตั้งต้น | จดทะเบียนและดูแลธุรกิจครบวงจร",
    template: "%s | ตั้งต้น",
  },
  description:
    "บริการจดทะเบียนบริษัท บัญชี ภาษี ประกันสังคม และใบอนุญาตธุรกิจ สำหรับผู้ประกอบการไทย",
  openGraph: {
    title: "ตั้งต้น — เรื่องเอกสารธุรกิจ ให้เป็นเรื่องที่เริ่มได้ง่าย",
    description: "จดทะเบียน วางระบบบัญชี และดูแลงานหลังบ้านครบในที่เดียว",
    locale: "th_TH",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
