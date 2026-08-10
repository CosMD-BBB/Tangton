/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { LanguageCode } from "@/lib/i18n";

export function BrandLogo({ locale = "th", href = "/", footer = false }: { locale?: LanguageCode; href?: string; footer?: boolean }) {
  const name = locale === "th" ? "ตั้งต้น" : "Tangton";
  return <Link className={`brand ${footer ? "footer-brand" : ""}`} href={href} aria-label={`${name} หน้าหลัก`}>
    <span className="brand-logo"><img src="/tangton-symbol-v7.webp" width="56" height="56" alt="" decoding="async" fetchPriority={footer ? "auto" : "high"} /></span>
    <span className="brand-word"><strong>{name}</strong><small>FOUNDATION &amp; BEGINNINGS</small></span>
  </Link>;
}
