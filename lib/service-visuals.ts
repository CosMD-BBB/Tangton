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

const imageBySlug: Record<string, string> = {
  "register-company": "/services/register-company.jpg",
  "register-partnership": "/services/register-partnership.jpg",
  "commercial-registration": "/services/commercial-registration.jpg",
  "vat-registration": "/services/vat-registration.jpg",
  "social-security": "/services/social-security.jpg",
  "company-bank-account": "/services/company-bank-account.jpg",
  "company-seal": "/services/company-seal.jpg",
  "dbd-efiling": "/services/dbd-efiling.jpg",
  "monthly-accounting": "/services/monthly-accounting.jpg",
  "tax-filing": "/services/tax-filing.jpg",
  "financial-statements": "/services/financial-statements.jpg",
  payroll: "/services/payroll.jpg",
  "cfo-advisory": "/services/cfo-advisory.jpg",
  audit: "/services/audit.jpg",
  "tax-advisory": "/services/tax-advisory.jpg",
  "change-director": "/services/change-director.jpg",
  "change-shareholder": "/services/change-shareholder.jpg",
  "change-company-name": "/services/change-company-name.jpg",
  "capital-increase": "/services/capital-increase.jpg",
  "capital-reduction": "/services/capital-reduction.jpg",
  "change-address": "/services/change-address.jpg",
  "add-branch": "/services/add-branch.jpg",
  "change-objective": "/services/change-objective.jpg",
  "dissolve-company": "/services/dissolve-company.jpg",
  trademark: "/services/trademark.jpg",
  "fda-registration": "/services/fda-registration.jpg",
  gmp: "/services/gmp.jpg",
  iso: "/services/iso.jpg",
  boi: "/services/boi.jpg",
  "visa-work-permit": "/services/visa-work-permit.jpg",
  "factory-license": "/services/factory-license.jpg",
  "import-export": "/services/import-export.jpg",
  "corporate-secretary": "/services/corporate-secretary.jpg",
  "hr-document-system": "/services/hr-document-system.jpg",
  "employment-contracts": "/services/employment-contracts.jpg",
  "pdpa-starter": "/services/pdpa-starter.jpg",
  "business-contract-review": "/services/business-contract-review.jpg",
  "e-tax-invoice": "/services/e-tax-invoice.jpg",
  "tax-health-check": "/services/tax-health-check.jpg",
  "business-plan-financial-model": "/services/business-plan-financial-model.jpg",
};

export function serviceIcon(slug: string, category?: ServiceCategory) {
  return iconBySlug[slug] ?? (category ? fallbackByCategory[category] : "✦");
}

export function serviceImage(slug: string, category?: ServiceCategory) {
  return imageBySlug[slug] ?? (category ? imageByCategory[category] : "/service-start-v7.webp");
}
