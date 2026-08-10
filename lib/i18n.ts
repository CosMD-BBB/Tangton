import type { ServiceCategory } from "@/lib/site-data";
import { services, siteUrl } from "@/lib/site-data";

export const locales = ["en", "my", "hi", "zh"] as const;
export type Locale = (typeof locales)[number];
export type LanguageCode = "th" | Locale;
export type CategoryKey = "start" | "finance" | "people" | "change" | "licenses";

export const languageOptions: { code: LanguageCode; label: string; short: string; href: string; htmlLang: string }[] = [
  { code: "th", label: "ไทย", short: "TH", href: "/", htmlLang: "th" },
  { code: "en", label: "English", short: "EN", href: "/en", htmlLang: "en" },
  { code: "my", label: "မြန်မာ", short: "MY", href: "/my", htmlLang: "my" },
  { code: "hi", label: "हिन्दी", short: "HI", href: "/hi", htmlLang: "hi" },
  { code: "zh", label: "中文", short: "中文", href: "/zh", htmlLang: "zh-CN" },
];

export function isLocale(value: string): value is Locale { return locales.includes(value as Locale); }

export const categoryKeyByThai: Record<ServiceCategory, CategoryKey> = {
  "เริ่มต้นและจดทะเบียน": "start",
  "บัญชี ภาษี และการเงิน": "finance",
  "บุคลากรและการบริหาร": "people",
  "เปลี่ยนแปลงและปิดกิจการ": "change",
  "ใบอนุญาตและการลงทุน": "licenses",
};

const serviceTitles: Record<Locale, string[]> = {
  en: [
    "Company registration", "Partnership registration", "Commercial registration", "VAT registration", "Social Security registration", "Company bank account preparation", "Company seal", "DBD e-Filing setup",
    "Monthly accounting", "Monthly tax filing", "Annual financial statements", "Payroll service", "Outsourced CFO advisory", "Financial audit", "Tax advisory",
    "Change of directors", "Change of shareholders", "Company name change", "Capital increase", "Capital reduction", "Registered address change", "Add a company branch", "Change company objectives", "Company dissolution and liquidation",
    "Trademark registration", "Thai FDA product registration", "GMP readiness", "ISO readiness", "BOI investment promotion", "Visa and work permit", "Factory licence", "Import–export registration",
    "Corporate secretary and meetings", "HR document system", "Employment contracts and work rules", "PDPA starter system", "Business contract review", "e-Tax Invoice / e-Receipt setup", "Tax and accounting health check", "Business plan and financial model",
  ],
  my: [
    "ကုမ္ပဏီမှတ်ပုံတင်ခြင်း", "မိတ်ဖက်လုပ်ငန်း မှတ်ပုံတင်ခြင်း", "ကူးသန်းရောင်းဝယ်ရေး မှတ်ပုံတင်ခြင်း", "VAT မှတ်ပုံတင်ခြင်း", "လူမှုဖူလုံရေး မှတ်ပုံတင်ခြင်း", "ကုမ္ပဏီဘဏ်စာရင်း ဖွင့်ရန်ပြင်ဆင်ခြင်း", "ကုမ္ပဏီတံဆိပ်", "DBD e-Filing စနစ်ပြင်ဆင်ခြင်း",
    "လစဉ်စာရင်းကိုင်ဝန်ဆောင်မှု", "လစဉ်အခွန်တင်ပြခြင်း", "နှစ်ပတ်လည်ဘဏ္ဍာရေးရှင်းတမ်း", "လစာတွက်ချက်မှုဝန်ဆောင်မှု", "ပြင်ပ CFO အကြံပေးဝန်ဆောင်မှု", "ဘဏ္ဍာရေးစာရင်းစစ်", "အခွန်အကြံပေးဝန်ဆောင်မှု",
    "ဒါရိုက်တာပြောင်းလဲခြင်း", "ရှယ်ယာရှင်ပြောင်းလဲခြင်း", "ကုမ္ပဏီအမည်ပြောင်းခြင်း", "အရင်းအနှီးတိုးခြင်း", "အရင်းအနှီးလျှော့ခြင်း", "မှတ်ပုံတင်လိပ်စာပြောင်းခြင်း", "ကုမ္ပဏီခွဲ ထပ်မံဖွင့်ခြင်း", "ကုမ္ပဏီရည်ရွယ်ချက်ပြောင်းခြင်း", "ကုမ္ပဏီဖျက်သိမ်းခြင်းနှင့် စာရင်းရှင်းလင်းခြင်း",
    "ကုန်အမှတ်တံဆိပ် မှတ်ပုံတင်ခြင်း", "ထိုင်း FDA ထုတ်ကုန်မှတ်ပုံတင်ခြင်း", "GMP အဆင်သင့်ပြင်ဆင်ခြင်း", "ISO အဆင်သင့်ပြင်ဆင်ခြင်း", "BOI ရင်းနှီးမြှုပ်နှံမှုမြှင့်တင်ရေး", "ဗီဇာနှင့် အလုပ်လုပ်ခွင့်", "စက်ရုံလိုင်စင်", "သွင်းကုန်–ပို့ကုန် မှတ်ပုံတင်ခြင်း",
    "ကုမ္ပဏီအတွင်းရေးမှူးနှင့် အစည်းအဝေးများ", "HR စာရွက်စာတမ်းစနစ်", "အလုပ်ခန့်စာချုပ်နှင့် လုပ်ငန်းစည်းမျဉ်း", "PDPA အခြေခံစနစ်", "စီးပွားရေးစာချုပ် စစ်ဆေးခြင်း", "e-Tax Invoice / e-Receipt စနစ်ပြင်ဆင်ခြင်း", "အခွန်နှင့်စာရင်းကိုင် ကျန်းမာရေးစစ်ဆေးမှု", "စီးပွားရေးအစီအစဉ်နှင့် ဘဏ္ဍာရေးပုံစံ",
  ],
  hi: [
    "कंपनी पंजीकरण", "साझेदारी पंजीकरण", "वाणिज्यिक पंजीकरण", "VAT पंजीकरण", "सामाजिक सुरक्षा पंजीकरण", "कंपनी बैंक खाता तैयारी", "कंपनी की मुहर", "DBD e-Filing सेटअप",
    "मासिक लेखांकन", "मासिक कर फाइलिंग", "वार्षिक वित्तीय विवरण", "पेरोल सेवा", "आउटसोर्स्ड CFO सलाह", "वित्तीय ऑडिट", "कर सलाह",
    "निदेशक परिवर्तन", "शेयरधारक परिवर्तन", "कंपनी का नाम बदलना", "पूंजी वृद्धि", "पूंजी में कमी", "पंजीकृत पता बदलना", "कंपनी शाखा जोड़ना", "कंपनी के उद्देश्य बदलना", "कंपनी बंद करना और परिसमापन",
    "ट्रेडमार्क पंजीकरण", "थाई FDA उत्पाद पंजीकरण", "GMP तैयारी", "ISO तैयारी", "BOI निवेश प्रोत्साहन", "वीज़ा और वर्क परमिट", "फैक्टरी लाइसेंस", "आयात–निर्यात पंजीकरण",
    "कंपनी सचिव और बैठकें", "HR दस्तावेज़ प्रणाली", "रोज़गार अनुबंध और कार्य नियम", "PDPA प्रारंभिक प्रणाली", "व्यावसायिक अनुबंध समीक्षा", "e-Tax Invoice / e-Receipt सेटअप", "कर और लेखांकन हेल्थ चेक", "बिज़नेस प्लान और वित्तीय मॉडल",
  ],
  zh: [
    "有限公司注册", "合伙企业注册", "商业登记", "增值税登记", "社会保障登记", "公司银行账户资料准备", "公司印章", "DBD 电子申报设置",
    "月度会计服务", "月度税务申报", "年度财务报表", "薪资服务", "外包 CFO 财务顾问", "财务审计", "税务顾问",
    "变更董事", "变更股东", "变更公司名称", "增加注册资本", "减少注册资本", "变更注册地址", "新增公司分支机构", "变更经营范围", "公司解散与清算",
    "商标注册", "泰国 FDA 产品注册", "GMP 体系准备", "ISO 体系准备", "BOI 投资促进申请", "签证与工作许可证", "工厂许可证", "进出口登记",
    "公司秘书与会议服务", "人力资源文件系统", "劳动合同与公司规章", "PDPA 基础合规", "商业合同审阅", "电子税务发票设置", "税务与会计健康检查", "商业计划与财务模型",
  ],
};

export const dictionaries = {
  en: {
    htmlLang: "en", brand: "Tangton", announcement: "40 services • 5 business categories • Support across Thailand", consult: "Free consultation", menu: "Menu",
    nav: { home: "Home", services: "All services", tools: "Free tools", faq: "FAQ" }, language: "Language",
    hero: { eyebrow: "Business services for founders in Thailand", line1: "Start correctly.", line2: "Run your business", accent: "with clarity.", lead: "Registration, accounting, tax, people operations and licences in one multilingual platform—explained step by step for Thai and international founders.", primary: "Get a free starting plan", secondary: "Explore 40 services", board: "Your business roadmap", ready: "Complete coverage" },
    proof: [["5 categories", "From setup to licences"], ["40 service pages", "Clear scope and next steps"], ["Thailand-wide", "Online-first support"]],
    section: { eyebrow: "Complete business coverage", title: "Five categories, one coordinated team", lead: "Choose the stage that matches your business. Each category connects registration work with the accounting, people and compliance tasks that follow.", services: "View services", contentEyebrow: "Information you can use", contentTitle: "Understand the work before you decide", contentLead: "Every service page explains the scope, expected timeline, starting price, documents and common questions in your language.", toolsEyebrow: "Useful tools", toolsTitle: "Prepare numbers and decisions before speaking with an adviser", toolsLead: "Calculate VAT and employee cost, then compare a suitable business structure.", toolsCta: "Open free tools", ctaTitle: "Not sure where to begin?", ctaLead: "Tell us your goal and receive a practical starting checklist before you decide.", ctaButton: "Talk to an adviser" },
    category: {
      start: { title: "Start and register", intro: "Choose a structure and complete the registrations needed to begin trading." },
      finance: { title: "Accounting, tax and finance", intro: "Keep recurring filings on track and turn records into useful financial information." },
      people: { title: "People and administration", intro: "Manage payroll, employment documents, company meetings, contracts and data." },
      change: { title: "Company changes and closure", intro: "Keep the public record aligned when ownership, capital, address or plans change." },
      licenses: { title: "Licences and investment", intro: "Prepare sector licences, intellectual property and investment promotion applications." },
    },
    directory: { eyebrow: "Service directory", title: "40 services in five clear categories", lead: "Browse by business stage. Every page includes practical scope, documents, steps and related services.", count: "services", price: "Starting price", time: "Typical timeline", details: "View details" },
    service: { summary: "Practical support for {title}, from reviewing your situation and documents to coordinating the next steps in Thailand.", overview: "Service overview", suitable: "Who this is for", suitableText: "Founders and companies that want clear scope, checked documents and coordinated follow-up before taking action.", documents: "Information to prepare", documentItems: ["Current company or identity documents", "Business address and contact information", "Goal, deadline and relevant supporting records"], steps: "How the process works", stepItems: ["Explain your goal and current situation", "Receive scope, price and a tailored checklist", "Review information and draft documents", "Proceed and track status", "Receive completed documents and next actions"], faqTitle: "Common questions", faqItems: [["Can this be handled online?", "Consultation, information collection, draft review and status updates can usually be handled online. Any original-document or identity step will be explained in advance."], ["Is the displayed price final?", "It is a starting service price. Government fees, VAT, certification and third-party costs are confirmed separately before work begins."], ["How long will it take?", "Timing depends on document readiness, the facts of the case and the reviewing authority. You will receive a practical range before confirmation."]], related: "Related services", back: "All services" },
    tools: { eyebrow: "Interactive tools", title: "Calculate and prepare in your language", lead: "Results update instantly in your browser. Figures are preliminary and can be adjusted to match the assumptions relevant to your case.", vatTitle: "VAT calculator", amount: "Amount", rate: "VAT rate (%)", exclusive: "VAT excluded", inclusive: "VAT included", base: "Before VAT", vat: "VAT", total: "Total", employeeTitle: "Employee cost estimator", salary: "Monthly salary per person", people: "Number of employees", ssoRate: "Employer contribution (%)", cap: "Contribution wage cap", payroll: "Total salary", contribution: "Employer contribution", cost: "Estimated monthly cost", structureTitle: "Business structure guide", founders: "Founders", one: "One founder", many: "Two or more founders", liability: "Separate business liability", low: "Not essential yet", separate: "Important", result: "Option to compare", resultSolo: "Individual / commercial registration", resultPartnership: "Partnership", resultCompany: "Limited company", note: "Preliminary information only. Confirm current legal, tax and social-security rules before acting." },
    faq: { eyebrow: "Frequently asked questions", title: "Clear answers before starting in Thailand", lead: "These answers explain the usual process. Your exact scope is confirmed after the facts and documents are reviewed." },
    footer: "Multilingual business registration and administration support for founders in Thailand.", copyright: "© 2026 Tangton — demonstration website" },
  my: {
    htmlLang: "my", brand: "Tangton", announcement: "ဝန်ဆောင်မှု ၄၀ • လုပ်ငန်းအုပ်စု ၅ မျိုး • ထိုင်းနိုင်ငံတစ်ဝန်း ဝန်ဆောင်မှု", consult: "အခမဲ့တိုင်ပင်ရန်", menu: "မီနူး",
    nav: { home: "ပင်မစာမျက်နှာ", services: "ဝန်ဆောင်မှုအားလုံး", tools: "အခမဲ့ကိရိယာများ", faq: "မေးလေ့ရှိသောမေးခွန်းများ" }, language: "ဘာသာစကား",
    hero: { eyebrow: "ထိုင်းနိုင်ငံရှိ စီးပွားရေးလုပ်ငန်းရှင်များအတွက်", line1: "မှန်ကန်စွာစတင်ပါ။", line2: "လုပ်ငန်းကို", accent: "စနစ်တကျစီမံပါ။", lead: "မှတ်ပုံတင်ခြင်း၊ စာရင်းကိုင်၊ အခွန်၊ ဝန်ထမ်းစီမံခန့်ခွဲမှုနှင့် လိုင်စင်များကို ဘာသာစကားမျိုးစုံဖြင့် တစ်နေရာတည်းတွင် အဆင့်လိုက်နားလည်နိုင်ပါသည်။", primary: "အခမဲ့အစီအစဉ် ရယူရန်", secondary: "ဝန်ဆောင်မှု ၄၀ ကြည့်ရန်", board: "သင့်လုပ်ငန်းလမ်းညွှန်", ready: "အပြည့်အစုံဝန်ဆောင်မှု" },
    proof: [["အုပ်စု ၅ မျိုး", "စတင်ခြင်းမှ လိုင်စင်အထိ"], ["ဝန်ဆောင်မှုစာမျက်နှာ ၄၀", "နယ်ပယ်နှင့်အဆင့်များ ရှင်းလင်း"], ["ထိုင်းနိုင်ငံတစ်ဝန်း", "အွန်လိုင်းဖြင့် စတင်နိုင်"]],
    section: { eyebrow: "လုပ်ငန်းဝန်ဆောင်မှု အပြည့်အစုံ", title: "အုပ်စု ၅ မျိုးကို အဖွဲ့တစ်ဖွဲ့တည်းမှ စီမံပေးသည်", lead: "သင့်လုပ်ငန်းအဆင့်နှင့် ကိုက်ညီသည့်အုပ်စုကို ရွေးပါ။ မှတ်ပုံတင်ခြင်းမှ စာရင်း၊ ဝန်ထမ်းနှင့် လိုက်နာမှုအလုပ်များအထိ ချိတ်ဆက်ထားပါသည်။", services: "ဝန်ဆောင်မှုကြည့်ရန်", contentEyebrow: "အသုံးဝင်သောအချက်အလက်", contentTitle: "ဆုံးဖြတ်မီ အလုပ်နယ်ပယ်ကို နားလည်ပါ", contentLead: "ဝန်ဆောင်မှုတစ်ခုစီတွင် နယ်ပယ်၊ အချိန်၊ စတင်ဈေးနှုန်း၊ စာရွက်စာတမ်းနှင့် မေးခွန်းများ ပါရှိသည်။", toolsEyebrow: "အသုံးဝင်သောကိရိယာများ", toolsTitle: "အကြံပေးနှင့်မပြောမီ ကိန်းဂဏန်းများကို ပြင်ဆင်ပါ", toolsLead: "VAT နှင့် ဝန်ထမ်းကုန်ကျစရိတ်ကို တွက်ချက်ပြီး လုပ်ငန်းပုံစံကို နှိုင်းယှဉ်နိုင်ပါသည်။", toolsCta: "အခမဲ့ကိရိယာဖွင့်ရန်", ctaTitle: "ဘယ်ကစရမလဲ မသေချာသေးဘူးလား?", ctaLead: "သင့်ရည်ရွယ်ချက်ကို ပြောပြပြီး ဆုံးဖြတ်မီ လုပ်ဆောင်ရမည့်စာရင်းကို ရယူပါ။", ctaButton: "အကြံပေးနှင့် ဆွေးနွေးရန်" },
    category: {
      start: { title: "စတင်ခြင်းနှင့် မှတ်ပုံတင်ခြင်း", intro: "လုပ်ငန်းပုံစံရွေးချယ်ပြီး စတင်ရောင်းချရန် လိုအပ်သည့်မှတ်ပုံတင်များ ပြီးစီးစေပါ။" },
      finance: { title: "စာရင်း၊ အခွန်နှင့် ဘဏ္ဍာရေး", intro: "ပုံမှန်တင်ပြရမည့်အလုပ်များကို အချိန်မီထားပြီး ဘဏ္ဍာရေးအချက်အလက်များကို အသုံးချပါ။" },
      people: { title: "ဝန်ထမ်းနှင့် စီမံခန့်ခွဲမှု", intro: "လစာ၊ အလုပ်ခန့်စာရွက်စာတမ်း၊ အစည်းအဝေး၊ စာချုပ်နှင့် ဒေတာကို စီမံပါ။" },
      change: { title: "ကုမ္ပဏီပြောင်းလဲခြင်းနှင့် ပိတ်သိမ်းခြင်း", intro: "ရှယ်ယာ၊ အရင်းအနှီး၊ လိပ်စာ သို့မဟုတ် အစီအစဉ်ပြောင်းသောအခါ မှတ်တမ်းကို အပ်ဒိတ်လုပ်ပါ။" },
      licenses: { title: "လိုင်စင်နှင့် ရင်းနှီးမြှုပ်နှံမှု", intro: "လုပ်ငန်းလိုင်စင်၊ ဉာဏပစ္စည်းနှင့် ရင်းနှီးမြှုပ်နှံမှုလျှောက်လွှာများကို ပြင်ဆင်ပါ။" },
    },
    directory: { eyebrow: "ဝန်ဆောင်မှုစာရင်း", title: "အုပ်စု ၅ မျိုးတွင် ဝန်ဆောင်မှု ၄၀", lead: "လုပ်ငန်းအဆင့်အလိုက် ရှာဖွေပါ။ စာမျက်နှာတိုင်းတွင် နယ်ပယ်၊ စာရွက်စာတမ်း၊ အဆင့်နှင့် ဆက်စပ်ဝန်ဆောင်မှု ပါရှိသည်။", count: "ဝန်ဆောင်မှု", price: "စတင်ဈေးနှုန်း", time: "ခန့်မှန်းအချိန်", details: "အသေးစိတ်ကြည့်ရန်" },
    service: { summary: "{title} အတွက် အခြေအနေနှင့် စာရွက်စာတမ်းစစ်ဆေးခြင်းမှ ထိုင်းနိုင်ငံရှိ နောက်တစ်ဆင့်များကို စီစဉ်ပေးခြင်းအထိ လက်တွေ့ကျသောပံ့ပိုးမှု။", overview: "ဝန်ဆောင်မှုအကျဉ်း", suitable: "ဘယ်သူအတွက်သင့်လဲ", suitableText: "အလုပ်မစတင်မီ နယ်ပယ်ရှင်းလင်းမှု၊ စာရွက်စာတမ်းစစ်ဆေးမှုနှင့် နောက်ဆက်တွဲစီမံမှုလိုသော လုပ်ငန်းရှင်များနှင့် ကုမ္ပဏီများအတွက်။", documents: "ပြင်ဆင်ရန်အချက်အလက်", documentItems: ["လက်ရှိကုမ္ပဏီ သို့မဟုတ် ကိုယ်ရေးအထောက်အထား", "လုပ်ငန်းလိပ်စာနှင့် ဆက်သွယ်ရန်အချက်အလက်", "ရည်ရွယ်ချက်၊ အချိန်နှင့် ဆက်စပ်အထောက်အထား"], steps: "လုပ်ငန်းစဉ်", stepItems: ["ရည်ရွယ်ချက်နှင့် လက်ရှိအခြေအနေကို ရှင်းပြပါ", "နယ်ပယ်၊ ဈေးနှုန်းနှင့် သီးသန့်စာရင်းရယူပါ", "အချက်အလက်နှင့် မူကြမ်းများကို စစ်ဆေးပါ", "လုပ်ဆောင်ပြီး အခြေအနေကို လိုက်ကြည့်ပါ", "ပြီးစီးသည့်စာရွက်စာတမ်းနှင့် နောက်တစ်ဆင့် ရယူပါ"], faqTitle: "မေးလေ့ရှိသောမေးခွန်းများ", faqItems: [["အွန်လိုင်းဖြင့် ဆောင်ရွက်နိုင်ပါသလား?", "တိုင်ပင်ခြင်း၊ အချက်အလက်ပေးပို့ခြင်း၊ မူကြမ်းစစ်ဆေးခြင်းနှင့် အခြေအနေသိရှိခြင်းကို အွန်လိုင်းဖြင့် ပြုလုပ်နိုင်ပါသည်။ မူရင်းစာရွက်စာတမ်းလိုအပ်ပါက ကြိုတင်ရှင်းပြပါမည်။"], ["ဖော်ပြထားသောဈေးနှုန်းက နောက်ဆုံးဈေးနှုန်းလား?", "၎င်းသည် စတင်ဝန်ဆောင်ခဖြစ်သည်။ အစိုးရကြေး၊ VAT၊ အတည်ပြုခနှင့် ပြင်ပကုန်ကျစရိတ်ကို အလုပ်မစမီ ခွဲခြားအတည်ပြုပါမည်။"], ["ဘယ်လောက်ကြာမလဲ?", "စာရွက်စာတမ်းအဆင်သင့်ဖြစ်မှု၊ အခြေအနေနှင့် စစ်ဆေးသည့်ဌာနပေါ်မူတည်ပါသည်။ အတည်ပြုမီ လက်တွေ့ကျသောအချိန်ကို ပေးပါမည်။"]], related: "ဆက်စပ်ဝန်ဆောင်မှုများ", back: "ဝန်ဆောင်မှုအားလုံး" },
    tools: { eyebrow: "အပြန်အလှန်ကိရိယာများ", title: "သင့်ဘာသာစကားဖြင့် တွက်ချက်ပြီး ပြင်ဆင်ပါ", lead: "ရလဒ်များသည် ဘရောက်ဇာတွင် ချက်ချင်းပြောင်းလဲသည်။ ကိန်းဂဏန်းများသည် အကြမ်းဖျဉ်းဖြစ်ပြီး သင့်အခြေအနေအလိုက် ပြင်နိုင်သည်။", vatTitle: "VAT တွက်စက်", amount: "ငွေပမာဏ", rate: "VAT နှုန်း (%)", exclusive: "VAT မပါ", inclusive: "VAT ပါ", base: "VAT မတိုင်မီ", vat: "VAT", total: "စုစုပေါင်း", employeeTitle: "ဝန်ထမ်းကုန်ကျစရိတ်", salary: "တစ်ဦးလျှင် လစဉ်လစာ", people: "ဝန်ထမ်းအရေအတွက်", ssoRate: "အလုပ်ရှင်ထည့်ဝင်မှု (%)", cap: "ထည့်ဝင်တွက်ချက်သည့် အများဆုံးလစာ", payroll: "စုစုပေါင်းလစာ", contribution: "အလုပ်ရှင်ထည့်ဝင်မှု", cost: "ခန့်မှန်းလစဉ်ကုန်ကျစရိတ်", structureTitle: "လုပ်ငန်းပုံစံလမ်းညွှန်", founders: "တည်ထောင်သူ", one: "တစ်ဦး", many: "နှစ်ဦးနှင့်အထက်", liability: "လုပ်ငန်းတာဝန်ကို ခွဲထားရန်", low: "ယခုမလိုသေး", separate: "အရေးကြီး", result: "နှိုင်းယှဉ်ရန်ရွေးချယ်မှု", resultSolo: "တစ်ဦးချင်း / ကူးသန်းမှတ်ပုံတင်", resultPartnership: "မိတ်ဖက်လုပ်ငန်း", resultCompany: "လီမိတက်ကုမ္ပဏီ", note: "အကြမ်းဖျဉ်းအချက်အလက်သာဖြစ်သည်။ မလုပ်ဆောင်မီ လက်ရှိဥပဒေ၊ အခွန်နှင့် လူမှုဖူလုံရေးစည်းမျဉ်းကို အတည်ပြုပါ။" },
    faq: { eyebrow: "မေးလေ့ရှိသောမေးခွန်းများ", title: "ထိုင်းနိုင်ငံတွင် စတင်မီ ရှင်းလင်းသောအဖြေများ", lead: "ဤအဖြေများသည် ပုံမှန်လုပ်ငန်းစဉ်ကို ရှင်းပြပါသည်။ သင့်အခြေအနေကို စာရွက်စာတမ်းစစ်ဆေးပြီးနောက် အတည်ပြုပါမည်။" },
    footer: "ထိုင်းနိုင်ငံရှိ လုပ်ငန်းရှင်များအတွက် ဘာသာစကားမျိုးစုံဖြင့် မှတ်ပုံတင်ခြင်းနှင့် စီမံခန့်ခွဲမှု ပံ့ပိုးမှု။", copyright: "© 2026 Tangton — နမူနာဝက်ဘ်ဆိုက်" },
  hi: {
    htmlLang: "hi", brand: "Tangton", announcement: "40 सेवाएँ • 5 व्यावसायिक श्रेणियाँ • पूरे थाईलैंड में सहायता", consult: "निःशुल्क परामर्श", menu: "मेनू",
    nav: { home: "मुखपृष्ठ", services: "सभी सेवाएँ", tools: "निःशुल्क टूल", faq: "सामान्य प्रश्न" }, language: "भाषा",
    hero: { eyebrow: "थाईलैंड में उद्यमियों के लिए", line1: "सही शुरुआत करें।", line2: "व्यवसाय चलाएँ", accent: "पूरी स्पष्टता से।", lead: "पंजीकरण, लेखांकन, कर, कर्मचारी प्रशासन और लाइसेंस—एक बहुभाषी प्लेटफ़ॉर्म पर, थाई और अंतरराष्ट्रीय संस्थापकों के लिए चरण-दर-चरण।", primary: "निःशुल्क शुरुआती योजना पाएँ", secondary: "40 सेवाएँ देखें", board: "आपके व्यवसाय का रोडमैप", ready: "पूरी कवरेज" },
    proof: [["5 श्रेणियाँ", "स्थापना से लाइसेंस तक"], ["40 सेवा पृष्ठ", "स्पष्ट दायरा और अगले कदम"], ["पूरे थाईलैंड में", "ऑनलाइन-प्रथम सहायता"]],
    section: { eyebrow: "संपूर्ण व्यावसायिक सहायता", title: "पाँच श्रेणियाँ, एक समन्वित टीम", lead: "अपने व्यवसाय के चरण के अनुसार श्रेणी चुनें। पंजीकरण को लेखांकन, कर्मचारी और अनुपालन के अगले कार्यों से जोड़ा गया है।", services: "सेवाएँ देखें", contentEyebrow: "उपयोगी जानकारी", contentTitle: "निर्णय से पहले काम को समझें", contentLead: "हर सेवा पृष्ठ पर दायरा, अनुमानित समय, शुरुआती मूल्य, दस्तावेज़ और सामान्य प्रश्न आपकी भाषा में दिए गए हैं।", toolsEyebrow: "उपयोगी टूल", toolsTitle: "सलाहकार से बात करने से पहले संख्याएँ और विकल्प तैयार करें", toolsLead: "VAT और कर्मचारी लागत की गणना करें, फिर उपयुक्त व्यावसायिक संरचना की तुलना करें।", toolsCta: "निःशुल्क टूल खोलें", ctaTitle: "समझ नहीं आ रहा कहाँ से शुरू करें?", ctaLead: "अपना लक्ष्य बताएँ और निर्णय से पहले व्यावहारिक शुरुआती सूची पाएँ।", ctaButton: "सलाहकार से बात करें" },
    category: {
      start: { title: "स्थापना और पंजीकरण", intro: "संरचना चुनें और व्यापार शुरू करने के लिए आवश्यक पंजीकरण पूरे करें।" },
      finance: { title: "लेखांकन, कर और वित्त", intro: "नियमित फाइलिंग समय पर रखें और रिकॉर्ड को उपयोगी वित्तीय जानकारी में बदलें।" },
      people: { title: "कर्मचारी और प्रशासन", intro: "पेरोल, रोज़गार दस्तावेज़, कंपनी बैठकें, अनुबंध और डेटा संभालें।" },
      change: { title: "कंपनी परिवर्तन और बंद करना", intro: "मालिकाना, पूंजी, पता या योजना बदलने पर सार्वजनिक रिकॉर्ड अपडेट रखें।" },
      licenses: { title: "लाइसेंस और निवेश", intro: "क्षेत्रीय लाइसेंस, बौद्धिक संपदा और निवेश प्रोत्साहन आवेदन तैयार करें।" },
    },
    directory: { eyebrow: "सेवा निर्देशिका", title: "पाँच श्रेणियों में 40 सेवाएँ", lead: "व्यवसाय के चरण के अनुसार खोजें। हर पृष्ठ पर दायरा, दस्तावेज़, प्रक्रिया और संबंधित सेवाएँ हैं।", count: "सेवाएँ", price: "शुरुआती मूल्य", time: "अनुमानित समय", details: "विवरण देखें" },
    service: { summary: "{title} के लिए व्यावहारिक सहायता—आपकी स्थिति और दस्तावेज़ जाँचने से लेकर थाईलैंड में अगले कदमों के समन्वय तक।", overview: "सेवा का सार", suitable: "किसके लिए", suitableText: "उन संस्थापकों और कंपनियों के लिए जिन्हें कार्रवाई से पहले स्पष्ट दायरा, जाँचे हुए दस्तावेज़ और समन्वित फॉलो-अप चाहिए।", documents: "तैयार करने की जानकारी", documentItems: ["मौजूदा कंपनी या पहचान दस्तावेज़", "व्यावसायिक पता और संपर्क जानकारी", "लक्ष्य, समय-सीमा और संबंधित रिकॉर्ड"], steps: "प्रक्रिया", stepItems: ["लक्ष्य और वर्तमान स्थिति बताएँ", "दायरा, मूल्य और व्यक्तिगत सूची पाएँ", "जानकारी और मसौदा दस्तावेज़ जाँचें", "कार्यवाही और स्थिति ट्रैक करें", "पूर्ण दस्तावेज़ और अगले कदम पाएँ"], faqTitle: "सामान्य प्रश्न", faqItems: [["क्या यह ऑनलाइन हो सकता है?", "परामर्श, जानकारी भेजना, मसौदा जाँचना और स्थिति अपडेट सामान्यतः ऑनलाइन हो सकते हैं। मूल दस्तावेज़ या पहचान की आवश्यकता पहले बताई जाएगी।"], ["क्या दिखाया गया मूल्य अंतिम है?", "यह शुरुआती सेवा शुल्क है। सरकारी शुल्क, VAT, प्रमाणन और तीसरे पक्ष की लागत काम शुरू होने से पहले अलग से बताई जाती है।"], ["कितना समय लगेगा?", "समय दस्तावेज़ों की तैयारी, मामले के तथ्यों और समीक्षा करने वाले विभाग पर निर्भर करता है। पुष्टि से पहले व्यावहारिक समय-सीमा दी जाएगी।"]], related: "संबंधित सेवाएँ", back: "सभी सेवाएँ" },
    tools: { eyebrow: "इंटरैक्टिव टूल", title: "अपनी भाषा में गणना और तैयारी करें", lead: "परिणाम आपके ब्राउज़र में तुरंत बदलते हैं। आँकड़े प्रारंभिक हैं और आपके मामले के अनुसार समायोजित किए जा सकते हैं।", vatTitle: "VAT कैलकुलेटर", amount: "राशि", rate: "VAT दर (%)", exclusive: "VAT शामिल नहीं", inclusive: "VAT शामिल", base: "VAT से पहले", vat: "VAT", total: "कुल", employeeTitle: "कर्मचारी लागत अनुमान", salary: "प्रति व्यक्ति मासिक वेतन", people: "कर्मचारियों की संख्या", ssoRate: "नियोक्ता योगदान (%)", cap: "योगदान वेतन सीमा", payroll: "कुल वेतन", contribution: "नियोक्ता योगदान", cost: "अनुमानित मासिक लागत", structureTitle: "व्यावसायिक संरचना मार्गदर्शिका", founders: "संस्थापक", one: "एक संस्थापक", many: "दो या अधिक", liability: "व्यावसायिक देयता अलग रखना", low: "अभी आवश्यक नहीं", separate: "महत्वपूर्ण", result: "तुलना करने का विकल्प", resultSolo: "व्यक्ति / वाणिज्यिक पंजीकरण", resultPartnership: "साझेदारी", resultCompany: "लिमिटेड कंपनी", note: "केवल प्रारंभिक जानकारी। कार्रवाई से पहले वर्तमान कानूनी, कर और सामाजिक सुरक्षा नियमों की पुष्टि करें।" },
    faq: { eyebrow: "सामान्य प्रश्न", title: "थाईलैंड में शुरू करने से पहले स्पष्ट उत्तर", lead: "ये उत्तर सामान्य प्रक्रिया बताते हैं। आपके मामले का सही दायरा तथ्यों और दस्तावेज़ों की जाँच के बाद तय होगा।" },
    footer: "थाईलैंड में उद्यमियों के लिए बहुभाषी व्यवसाय पंजीकरण और प्रशासन सहायता।", copyright: "© 2026 Tangton — प्रदर्शन वेबसाइट" },
  zh: {
    htmlLang: "zh-CN", brand: "Tangton", announcement: "40 项服务 • 5 大业务类别 • 覆盖泰国全境", consult: "免费咨询", menu: "菜单",
    nav: { home: "首页", services: "全部服务", tools: "免费工具", faq: "常见问题" }, language: "语言",
    hero: { eyebrow: "为在泰国创业者提供的企业服务", line1: "正确起步，", line2: "让企业运营", accent: "清晰有序。", lead: "公司注册、会计、税务、人事管理与许可证集中在一个多语言平台，为泰国及国际创业者提供清晰的分步说明。", primary: "获取免费起步方案", secondary: "查看 40 项服务", board: "您的企业路线图", ready: "全周期覆盖" },
    proof: [["5 大类别", "从设立到许可证"], ["40 个服务页面", "范围与步骤清晰"], ["覆盖泰国全境", "优先线上办理"]],
    section: { eyebrow: "完整企业服务", title: "五大类别，由一个团队统一协调", lead: "按照企业当前阶段选择类别。每项注册工作都与后续会计、人事和合规任务相互衔接。", services: "查看服务", contentEyebrow: "可直接使用的信息", contentTitle: "决定前先了解工作内容", contentLead: "每个服务页面都以您的语言说明服务范围、预计时间、起步价格、所需文件与常见问题。", toolsEyebrow: "实用工具", toolsTitle: "咨询前先准备数字与选择", toolsLead: "计算增值税和员工成本，并比较适合的企业结构。", toolsCta: "打开免费工具", ctaTitle: "不确定从哪里开始？", ctaLead: "告诉我们您的目标，在决定前先获得一份实用的起步清单。", ctaButton: "联系顾问" },
    category: {
      start: { title: "企业设立与登记", intro: "选择合适结构，完成开始经营所需的各项登记。" },
      finance: { title: "会计、税务与财务", intro: "按时完成周期性申报，并将记录转化为有用的财务信息。" },
      people: { title: "人事与企业行政", intro: "管理薪资、劳动文件、公司会议、合同与数据。" },
      change: { title: "公司变更与注销", intro: "股权、资本、地址或计划变化时，确保公共登记信息保持一致。" },
      licenses: { title: "许可证与投资", intro: "准备行业许可证、知识产权及投资促进申请。" },
    },
    directory: { eyebrow: "服务目录", title: "五大类别，共 40 项服务", lead: "按企业阶段浏览。每个页面均包含服务范围、文件、流程和相关服务。", count: "项服务", price: "起步价格", time: "预计时间", details: "查看详情" },
    service: { summary: "为{title}提供实务支持，从了解情况、审查文件到协调在泰国的后续步骤。", overview: "服务概览", suitable: "适合对象", suitableText: "适合希望在行动前明确范围、审查文件并获得持续协调的创业者与企业。", documents: "需要准备的信息", documentItems: ["现有公司文件或身份证明", "经营地址与联系方式", "目标、时间要求与相关记录"], steps: "办理流程", stepItems: ["说明目标与当前情况", "获取范围、价格与专属清单", "审查信息和文件草案", "办理并跟踪进度", "接收完成文件与后续事项"], faqTitle: "常见问题", faqItems: [["可以线上办理吗？", "咨询、提交信息、审查草案与进度更新通常可以在线完成。如需原件或身份确认，我们会提前说明。"], ["页面价格是最终价格吗？", "页面显示的是起步服务费。政府规费、增值税、认证及第三方费用会在开始前单独确认。"], ["需要多长时间？", "时间取决于文件准备情况、个案事实及审核机构。确认服务前会提供实际的时间范围。"]], related: "相关服务", back: "全部服务" },
    tools: { eyebrow: "互动工具", title: "使用您的语言进行计算与准备", lead: "结果会在浏览器中即时更新。数字仅供初步参考，可根据个案假设自行调整。", vatTitle: "增值税计算器", amount: "金额", rate: "增值税率（%）", exclusive: "未含增值税", inclusive: "已含增值税", base: "税前金额", vat: "增值税", total: "合计", employeeTitle: "员工成本估算", salary: "每人月薪", people: "员工人数", ssoRate: "雇主缴费比例（%）", cap: "缴费工资上限", payroll: "工资合计", contribution: "雇主缴费", cost: "预计月度成本", structureTitle: "企业结构指南", founders: "创始人", one: "一位创始人", many: "两位或以上", liability: "需要区分企业责任", low: "暂不重要", separate: "很重要", result: "建议比较的选项", resultSolo: "个人经营 / 商业登记", resultPartnership: "合伙企业", resultCompany: "有限公司", note: "仅供初步参考。行动前请确认最新法律、税务和社会保障规则。" },
    faq: { eyebrow: "常见问题", title: "在泰国创业前先获得清晰答案", lead: "以下说明为通常流程。具体范围将在审查事实和文件后确认。" },
    footer: "为在泰国创业者提供多语言企业注册与行政支持。", copyright: "© 2026 Tangton — 演示网站" },
} as const;

export function dict(locale: Locale) { return dictionaries[locale]; }

export function localizedServiceTitle(locale: Locale, slug: string) {
  const index = services.findIndex((service) => service.slug === slug);
  return index >= 0 ? serviceTitles[locale][index] : slug;
}

export function categoryKey(category: ServiceCategory) { return categoryKeyByThai[category]; }

export function localizedPath(locale: LanguageCode, path = "") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return locale === "th" ? (clean === "/" ? "/" : clean) : `/${locale}${clean === "/" ? "" : clean}`;
}

export function languageAlternates(path = "") {
  return {
    th: `${siteUrl}${localizedPath("th", path)}`,
    en: `${siteUrl}${localizedPath("en", path)}`,
    my: `${siteUrl}${localizedPath("my", path)}`,
    hi: `${siteUrl}${localizedPath("hi", path)}`,
    "zh-CN": `${siteUrl}${localizedPath("zh", path)}`,
    "x-default": `${siteUrl}${localizedPath("th", path)}`,
  };
}

export function localizedPrice(locale: Locale, value: string) {
  const number = value.match(/[\d,]+/)?.[0];
  if (!number) return locale === "zh" ? "按范围报价" : locale === "hi" ? "दायरे के अनुसार" : locale === "my" ? "နယ်ပယ်အလိုက်" : "Quoted by scope";
  const prefix = locale === "zh" ? "起价" : locale === "hi" ? "से शुरू" : locale === "my" ? "စတင်" : "From";
  return `${prefix} THB ${number}`;
}

export function localizedTime(locale: Locale, value: string) {
  const range = value.match(/\d+[–-]\d+/)?.[0];
  if (!range) return locale === "zh" ? "按工作范围" : locale === "hi" ? "कार्य के अनुसार" : locale === "my" ? "လုပ်ငန်းအလိုက်" : "By scope";
  const unit = value.includes("เดือน") ? (locale === "zh" ? "个月" : locale === "hi" ? "महीने" : locale === "my" ? "လ" : "months") : value.includes("สัปดาห์") ? (locale === "zh" ? "周" : locale === "hi" ? "सप्ताह" : locale === "my" ? "ပတ်" : "weeks") : (locale === "zh" ? "天" : locale === "hi" ? "दिन" : locale === "my" ? "ရက်" : "days");
  return `${range} ${unit}`;
}
