import type { LanguageCode } from "@/lib/i18n";

type Copy = {
  step: string;
  title: string;
  time: string;
  contact: string;
  business: string;
  name: string;
  namePlaceholder: string;
  channel: string;
  channelPlaceholder: string;
  businessType: string;
  businessOptions: string[];
  stage: string;
  stageOptions: string[];
  service: string;
  serviceOptions: string[];
  budget: string;
  budgetOptions: string[];
  detail: string;
  detailPlaceholder: string;
  consent: string;
  button: string;
  note: string;
};

const copies: Record<LanguageCode, Copy> = {
  th: {
    step: "เริ่มวางแผน", title: "เล่าเรื่องธุรกิจของคุณ", time: "ใช้เวลาประมาณ 1–2 นาที", contact: "ข้อมูลติดต่อ", business: "โจทย์ธุรกิจ",
    name: "ชื่อที่ให้เราเรียก", namePlaceholder: "เช่น คุณต้น", channel: "เบอร์โทรหรือ LINE", channelPlaceholder: "ช่องทางที่สะดวกให้ติดต่อกลับ",
    businessType: "ประเภทธุรกิจ", businessOptions: ["ร้านอาหาร / คาเฟ่", "คลินิก / ความงาม", "ร้านค้าออนไลน์", "โรงงาน / นำเข้า–ส่งออก", "โรงแรม / ที่พัก", "บริการวิชาชีพ", "ธุรกิจอื่น ๆ"],
    stage: "ตอนนี้อยู่ช่วงไหน", stageOptions: ["กำลังวางแผน", "พร้อมเริ่มจดทะเบียน", "เปิดดำเนินการแล้ว", "ต้องการเปลี่ยนแปลงบริษัท", "ต้องการเลิกหรือปิดกิจการ"],
    service: "เรื่องที่อยากให้ช่วย", serviceOptions: ["วางแผนเปิดธุรกิจทั้งชุด", "จดทะเบียนและภาษี", "บัญชี ภาษี และการเงิน", "พนักงานและงานบริหาร", "เปลี่ยนแปลงบริษัท", "ใบอนุญาตเฉพาะธุรกิจ", "ยังไม่แน่ใจ อยากให้ช่วยแนะนำ"],
    budget: "งบบริการที่วางไว้", budgetOptions: ["ยังไม่กำหนด", "ไม่เกิน 10,000 บาท", "10,000–30,000 บาท", "30,000–100,000 บาท", "มากกว่า 100,000 บาท"],
    detail: "รายละเอียดหรือเป้าหมาย", detailPlaceholder: "เช่น ต้องการเปิดร้านอาหารภายใน 2 เดือน มีสถานที่แล้ว แต่ยังไม่ได้จดบริษัท",
    consent: "ยินยอมให้ใช้ข้อมูลนี้เพื่อติดต่อกลับและประเมินงานเบื้องต้น", button: "ขอรับแผนและคำปรึกษาเบื้องต้น", note: "แบบฟอร์มตัวอย่างนี้ยังไม่ส่งข้อมูลจนกว่าจะเชื่อมช่องทาง LINE หรือระบบรับลูกค้าจริง",
  },
  en: {
    step: "Start planning", title: "Tell us about your business", time: "Takes about 1–2 minutes", contact: "Contact details", business: "Business needs",
    name: "Your name", namePlaceholder: "How should we address you?", channel: "Phone or LINE", channelPlaceholder: "Your preferred contact channel",
    businessType: "Business type", businessOptions: ["Restaurant / café", "Clinic / beauty", "Online store", "Factory / import-export", "Hotel / accommodation", "Professional services", "Other business"],
    stage: "Current stage", stageOptions: ["Planning", "Ready to register", "Already operating", "Changing an existing company", "Closing a business"],
    service: "What do you need?", serviceOptions: ["Complete launch plan", "Registration and tax", "Accounting, tax and finance", "People and administration", "Company changes", "Industry licences", "Not sure—please advise"],
    budget: "Planned service budget", budgetOptions: ["Not decided", "Under THB 10,000", "THB 10,000–30,000", "THB 30,000–100,000", "Over THB 100,000"],
    detail: "Goal or additional details", detailPlaceholder: "For example: opening a restaurant in two months; location secured; company not registered yet.",
    consent: "I consent to the use of this information for a preliminary assessment and follow-up.", button: "Request an initial plan and consultation", note: "This preview form will not send data until a real LINE or lead-management channel is connected.",
  },
  my: {
    step: "စီစဉ်မှုစတင်ရန်", title: "သင့်လုပ်ငန်းအကြောင်း ပြောပြပါ", time: "၁–၂ မိနစ်ခန့်", contact: "ဆက်သွယ်ရန်", business: "လုပ်ငန်းလိုအပ်ချက်",
    name: "အမည်", namePlaceholder: "မည်သို့ခေါ်ရမည်နည်း", channel: "ဖုန်း သို့မဟုတ် LINE", channelPlaceholder: "အဆင်ပြေသော ဆက်သွယ်နည်း",
    businessType: "လုပ်ငန်းအမျိုးအစား", businessOptions: ["စားသောက်ဆိုင် / ကဖေး", "ဆေးခန်း / အလှအပ", "အွန်လိုင်းဆိုင်", "စက်ရုံ / သွင်းကုန်ပို့ကုန်", "ဟိုတယ် / တည်းခိုခန်း", "ပညာရှင်ဝန်ဆောင်မှု", "အခြား"],
    stage: "လက်ရှိအဆင့်", stageOptions: ["စီစဉ်နေသည်", "မှတ်ပုံတင်ရန် အသင့်", "လုပ်ငန်းလည်ပတ်နေပြီ", "ကုမ္ပဏီပြောင်းလဲရန်", "လုပ်ငန်းပိတ်ရန်"],
    service: "လိုအပ်သောအကူအညီ", serviceOptions: ["လုပ်ငန်းစတင်မှုအစီအစဉ်", "မှတ်ပုံတင်နှင့်အခွန်", "စာရင်းနှင့်ဘဏ္ဍာရေး", "ဝန်ထမ်းနှင့်စီမံခန့်ခွဲမှု", "ကုမ္ပဏီပြောင်းလဲမှု", "လုပ်ငန်းလိုင်စင်", "မသေချာသေးပါ"],
    budget: "ခန့်မှန်းဘတ်ဂျက်", budgetOptions: ["မသတ်မှတ်ရသေး", "THB 10,000 အောက်", "THB 10,000–30,000", "THB 30,000–100,000", "THB 100,000 အထက်"],
    detail: "ရည်မှန်းချက်နှင့် အသေးစိတ်", detailPlaceholder: "ဥပမာ—၂ လအတွင်း စားသောက်ဆိုင်ဖွင့်ရန်၊ နေရာရှိပြီး ကုမ္ပဏီမမှတ်ပုံတင်ရသေးပါ။",
    consent: "အစောပိုင်းအကဲဖြတ်ရန်နှင့် ပြန်လည်ဆက်သွယ်ရန် ဤအချက်အလက်ကို အသုံးပြုခွင့်ပြုသည်။", button: "အစီအစဉ်နှင့် အခမဲ့တိုင်ပင်မှု တောင်းရန်", note: "LINE သို့မဟုတ် လက်ခံစနစ်မချိတ်ဆက်မီ ဤနမူနာဖောင်မှ အချက်အလက် မပို့ပါ။",
  },
  hi: {
    step: "योजना शुरू करें", title: "अपने व्यवसाय के बारे में बताएँ", time: "लगभग 1–2 मिनट", contact: "संपर्क जानकारी", business: "व्यावसायिक आवश्यकता",
    name: "आपका नाम", namePlaceholder: "हम आपको किस नाम से बुलाएँ?", channel: "फ़ोन या LINE", channelPlaceholder: "संपर्क का सुविधाजनक तरीका",
    businessType: "व्यवसाय का प्रकार", businessOptions: ["रेस्तरां / कैफ़े", "क्लिनिक / सौंदर्य", "ऑनलाइन स्टोर", "फैक्टरी / आयात-निर्यात", "होटल / आवास", "पेशेवर सेवाएँ", "अन्य"],
    stage: "वर्तमान चरण", stageOptions: ["योजना बना रहे हैं", "पंजीकरण के लिए तैयार", "पहले से संचालन में", "कंपनी में बदलाव", "व्यवसाय बंद करना"],
    service: "किस सहायता की ज़रूरत है?", serviceOptions: ["पूरी लॉन्च योजना", "पंजीकरण और कर", "लेखांकन व वित्त", "कर्मचारी व प्रशासन", "कंपनी परिवर्तन", "उद्योग लाइसेंस", "निश्चित नहीं—सलाह चाहिए"],
    budget: "अनुमानित सेवा बजट", budgetOptions: ["अभी तय नहीं", "THB 10,000 से कम", "THB 10,000–30,000", "THB 30,000–100,000", "THB 100,000 से अधिक"],
    detail: "लक्ष्य या अतिरिक्त विवरण", detailPlaceholder: "उदाहरण: दो महीने में रेस्तरां खोलना है; स्थान तय है; कंपनी अभी पंजीकृत नहीं है।",
    consent: "मैं प्रारंभिक मूल्यांकन और संपर्क के लिए इस जानकारी के उपयोग से सहमत हूँ।", button: "प्रारंभिक योजना और परामर्श माँगें", note: "वास्तविक LINE या लीड सिस्टम जुड़ने तक यह डेमो फ़ॉर्म जानकारी नहीं भेजता।",
  },
  zh: {
    step: "开始规划", title: "介绍您的业务需求", time: "约需 1–2 分钟", contact: "联系方式", business: "业务需求",
    name: "您的称呼", namePlaceholder: "我们该如何称呼您？", channel: "电话或 LINE", channelPlaceholder: "方便联系您的方式",
    businessType: "业务类型", businessOptions: ["餐厅 / 咖啡馆", "诊所 / 医美", "网店", "工厂 / 进出口", "酒店 / 住宿", "专业服务", "其他业务"],
    stage: "目前阶段", stageOptions: ["正在规划", "准备注册", "已经营", "变更现有公司", "注销业务"],
    service: "需要哪方面协助？", serviceOptions: ["完整开业方案", "注册与税务", "会计、税务与财务", "人事与企业行政", "公司变更", "行业许可证", "尚不确定，请协助判断"],
    budget: "预计服务预算", budgetOptions: ["尚未确定", "低于 THB 10,000", "THB 10,000–30,000", "THB 30,000–100,000", "高于 THB 100,000"],
    detail: "目标或补充说明", detailPlaceholder: "例如：计划两个月内开餐厅，场地已确定，公司尚未注册。",
    consent: "同意将这些信息用于初步评估及联系回复。", button: "获取初步方案与咨询", note: "在接入真实 LINE 或客户管理渠道前，此演示表单不会发送数据。",
  },
};

export default function ConsultationForm({ locale = "th" }: { locale?: LanguageCode }) {
  const t = copies[locale];
  return <form className="lead-form lead-form-v3" action="#contact">
    <div className="form-head"><span aria-hidden="true">↗</span><div><strong>{t.title}</strong><small>{t.time}</small></div><b>{t.step}</b></div>
    <fieldset className="form-section"><legend><span>01</span>{t.contact}</legend><div className="form-grid"><label><span>{t.name}</span><input name="name" placeholder={t.namePlaceholder} autoComplete="name" required /></label><label><span>{t.channel}</span><input name="contact" placeholder={t.channelPlaceholder} autoComplete="tel" required /></label></div></fieldset>
    <fieldset className="form-section"><legend><span>02</span>{t.business}</legend><div className="form-grid"><label><span>{t.businessType}</span><select name="businessType" defaultValue="" required><option value="" disabled>—</option>{t.businessOptions.map((option) => <option key={option}>{option}</option>)}</select></label><label><span>{t.stage}</span><select name="stage" defaultValue="" required><option value="" disabled>—</option>{t.stageOptions.map((option) => <option key={option}>{option}</option>)}</select></label><label><span>{t.service}</span><select name="service" defaultValue="" required><option value="" disabled>—</option>{t.serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label><label><span>{t.budget}</span><select name="budget" defaultValue=""><option value="" disabled>—</option>{t.budgetOptions.map((option) => <option key={option}>{option}</option>)}</select></label></div><label className="form-detail"><span>{t.detail}</span><textarea name="detail" rows={4} placeholder={t.detailPlaceholder} /></label></fieldset>
    <label className="form-consent"><input type="checkbox" name="consent" required /><span>{t.consent}</span></label>
    <button className="button button-primary" type="submit">{t.button} <span aria-hidden="true">↗</span></button>
    <small className="form-note">{t.note}</small>
  </form>;
}
