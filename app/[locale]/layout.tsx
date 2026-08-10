import { notFound } from "next/navigation";
import { dict, isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dict(locale);
  return <div className={`localized-site locale-${locale}`} lang={t.htmlLang}>{children}</div>;
}
