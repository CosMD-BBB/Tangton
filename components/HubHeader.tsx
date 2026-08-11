import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LocalizedShell";
import { ServiceMegaMenu } from "@/components/ServiceMegaMenu";

export function HubHeader({ path = "" }: { path?: string } = {}) {
  return (
    <>
      <div className="announcement">
        <div className="container announcement-inner">
          <span>40 บริการ • 5 หมวดใหญ่ • คู่มือและเครื่องมือสำหรับผู้ประกอบการไทย</span>
          <Link href="/#contact">ปรึกษาเบื้องต้นฟรี <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <header className="site-header hub-header">
        <div className="container nav-wrap">
          <BrandLogo />
          <nav className="desktop-nav" aria-label="เมนูหลัก">
            <ServiceMegaMenu />
            <Link href="/business-guides">เริ่มตามธุรกิจ</Link>
            <Link href="/guides">คู่มือธุรกิจ</Link>
            <Link href="/tools">เครื่องมือฟรี</Link>
            <Link href="/faq">คำถามที่พบบ่อย</Link>
          </nav>
          <div className="header-actions"><LanguageSwitcher current="th" path={path} /><Link className="nav-cta" href="/#contact">ปรึกษาฟรี <span aria-hidden="true">↗</span></Link></div>
          <details className="mobile-menu">
            <summary>เมนู</summary>
            <nav aria-label="เมนูบนมือถือ">
              <Link href="/services">บริการทั้งหมด</Link><Link href="/business-guides">เริ่มตามธุรกิจ</Link><Link href="/guides">คู่มือธุรกิจ</Link><Link href="/areas">บริการทั่วไทย</Link><Link href="/tools">เครื่องมือฟรี</Link><Link href="/faq">คำถามที่พบบ่อย</Link><Link href="/#contact">ปรึกษาฟรี</Link><div className="mobile-languages"><Link href="/">ไทย</Link><Link href="/en">English</Link><Link href="/my">မြန်မာ</Link><Link href="/hi">हिन्दी</Link><Link href="/zh">中文</Link></div>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function HubFooter() {
  return (
    <footer>
      <div className="container footer-top">
        <div><BrandLogo footer /><p>เพื่อนคู่คิดด้านทะเบียน บัญชี ภาษี<br />และใบอนุญาตสำหรับผู้ประกอบการไทย</p><div className="footer-contact-links"><a href="https://lin.ee/rNBJrQF" target="_blank" rel="noreferrer"><span>LINE</span><strong>@tangton</strong></a><div><span>WeChat</span><strong>@tangton</strong></div><a href="https://t.me/tangton" target="_blank" rel="noreferrer"><span>Telegram</span><strong>@tangton</strong></a><a href="https://wa.me/66815199922" target="_blank" rel="noreferrer" aria-label="เปิดแชต WhatsApp"><span>WhatsApp</span><strong>เปิดแชต</strong></a></div></div>
        <div><strong>บริการ 5 หมวด</strong><Link href="/services#เริ่มต้นและจดทะเบียน">เริ่มต้นและจดทะเบียน</Link><Link href="/services#บัญชี ภาษี และการเงิน">บัญชี ภาษี และการเงิน</Link><Link href="/services#บุคลากรและการบริหาร">บุคลากรและการบริหาร</Link><Link href="/services#เปลี่ยนแปลงและปิดกิจการ">เปลี่ยนแปลงและปิดกิจการ</Link><Link href="/services#ใบอนุญาตและการลงทุน">ใบอนุญาตและการลงทุน</Link></div>
        <div><strong>แหล่งความรู้</strong><Link href="/business-guides">เริ่มตามประเภทธุรกิจ</Link><Link href="/guides">คู่มือธุรกิจ</Link><Link href="/tools">เครื่องมือฟรี</Link><Link href="/areas">บริการทุกจังหวัด</Link><Link href="/faq">คำถามที่พบบ่อย</Link></div>
        <div className="footer-cta"><strong>ไม่แน่ใจว่าควรเริ่มตรงไหน?</strong><p>เล่าเป้าหมายสั้น ๆ แล้วให้ผู้ดูแลช่วยจัดลำดับ</p><Link href="/#contact">ปรึกษาฟรี <span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className="container footer-bottom"><span>© 2569 ตั้งต้น — เว็บไซต์ตัวอย่างสำหรับการนำเสนอแนวทาง</span><div><Link href="/privacy">นโยบายความเป็นส่วนตัว</Link><Link href="/terms">เงื่อนไขบริการ</Link></div></div>
    </footer>
  );
}
