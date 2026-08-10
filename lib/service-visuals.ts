import type { ServiceCategory } from "@/lib/site-data";

const iconBySlug: Record<string, string> = {
  "register-company": "🏢", "register-partnership": "🤝", "commercial-registration": "🏪", "vat-registration": "🧾",
  "social-security": "👥", "company-bank-account": "🏦", "company-seal": "🔖", "dbd-efiling": "🖥️",
  "monthly-accounting": "📒", "tax-filing": "🗓️", "financial-statements": "📊", payroll: "💳",
  "cfo-advisory": "🧮", audit: "🔎", "tax-advisory": "💡", "change-director": "💼",
  "change-shareholder": "🔄", "change-company-name": "✍️", "capital-increase": "📈", "capital-reduction": "📉",
  "change-address": "📍", "add-branch": "🏗️", "change-objective": "🧭", "dissolve-company": "🗃️",
  trademark: "®️", "fda-registration": "🧪", gmp: "✅", iso: "🌐", boi: "🌱",
  "visa-work-permit": "🛂", "factory-license": "🏭", "import-export": "🚢", "corporate-secretary": "📋",
  "hr-document-system": "🗂️", "employment-contracts": "📝", "pdpa-starter": "🛡️", "business-contract-review": "⚖️",
  "e-tax-invoice": "📨", "tax-health-check": "🩺", "business-plan-financial-model": "🗺️",
};

const fallbackByCategory: Record<ServiceCategory, string> = {
  "เริ่มต้นและจดทะเบียน": "🏢", "บัญชี ภาษี และการเงิน": "📊", "บุคลากรและการบริหาร": "👥",
  "เปลี่ยนแปลงและปิดกิจการ": "🔄", "ใบอนุญาตและการลงทุน": "📜",
};

const imageByCategory: Record<ServiceCategory, string> = {
  "เริ่มต้นและจดทะเบียน": "/service-start-v7.webp",
  "บัญชี ภาษี และการเงิน": "/service-finance-v7.webp",
  "บุคลากรและการบริหาร": "/service-people-v7.webp",
  "เปลี่ยนแปลงและปิดกิจการ": "/service-change-v7.webp",
  "ใบอนุญาตและการลงทุน": "/service-license-v7.webp",
};

export function serviceIcon(slug: string, category?: ServiceCategory) {
  return iconBySlug[slug] ?? (category ? fallbackByCategory[category] : "✦");
}

export function serviceImage(category: ServiceCategory) {
  return imageByCategory[category];
}
