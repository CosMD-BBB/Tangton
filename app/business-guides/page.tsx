import type { Metadata } from "next";
import { HubFooter, HubHeader } from "@/components/HubHeader";
import { IndustryDirectory } from "@/components/IndustryPages";
import { languageAlternates } from "@/lib/i18n";

export const metadata: Metadata = { title: "14 คู่มือเปิดธุรกิจและใบอนุญาตเฉพาะทางในไทย", description: "คู่มือเปิดร้านอาหาร คลินิก โรงเรียน บริษัท IT ร้านขายยา ธุรกิจสัตว์เลี้ยง โรงงาน โรงแรม และกิจการยอดนิยม พร้อมค่าใช้จ่าย ขั้นตอน และใบอนุญาตจากแหล่งราชการ", keywords: ["เปิดธุรกิจต้องขอใบอนุญาตอะไร", "เปิดคลินิก ใบอนุญาต", "เปิดโรงเรียนเอกชน", "เปิดร้านขายยา", "เปิดธุรกิจสัตว์เลี้ยง", "เปิดบริษัท IT ในไทย"], alternates: { canonical: "/business-guides", languages: languageAlternates("/business-guides") } };
export default function BusinessGuidesPage() { return <><HubHeader path="/business-guides" /><main className="inner-main"><IndustryDirectory /></main><HubFooter /></>; }
