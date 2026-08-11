"use client";

import { useState, type FormEvent } from "react";
import type { LanguageCode } from "@/lib/i18n";

const LINE_URL = "https://lin.ee/rNBJrQF";
const TELEGRAM_URL = "https://t.me/tangton";
const WHATSAPP_URL = "https://wa.me/66815199922";
const CONTACT_ID = "@tangton";

type Copy = {
  step: string;
  title: string;
  time: string;
  direct: string;
  directLead: string;
  lineAction: string;
  wechatAction: string;
  telegramAction: string;
  whatsappAction: string;
  copiedId: string;
  formOption: string;
  contact: string;
  business: string;
  name: string;
  namePlaceholder: string;
  preferred: string;
  preferredOptions: string[];
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
  choose: string;
  detail: string;
  detailPlaceholder: string;
  consent: string;
  button: string;
  submitting: string;
  noteTitle: string;
  note: string;
  sentTitle: string;
  sentText: string;
  failedTitle: string;
  failedText: string;
  openLine: string;
  copyAgain: string;
};

const copies: Record<LanguageCode, Copy> = {
  th: {
    step: "2 ขั้นตอนสั้น ๆ", title: "เล่าเรื่องธุรกิจของคุณ", time: "ใช้เวลาประมาณ 1–2 นาที", direct: "ต้องการคุยทันที?", directLead: "เลือกช่องทางที่สะดวก แล้วเริ่มสนทนากับทีมงานได้เลย", lineAction: "เปิดแชต LINE", wechatAction: "แตะเพื่อคัดลอก WeChat ID", telegramAction: "เปิดแชต Telegram", whatsappAction: "เปิดแชต WhatsApp", copiedId: "คัดลอก WeChat ID แล้ว", formOption: "หรือกรอกรายละเอียดเพื่อเตรียมข้อความ", contact: "ข้อมูลติดต่อ", business: "โจทย์ธุรกิจ",
    name: "ชื่อที่ให้เราเรียก", namePlaceholder: "เช่น คุณต้น", preferred: "ช่องทางที่สะดวก", preferredOptions: ["LINE", "โทรศัพท์", "WeChat", "Telegram", "WhatsApp"], channel: "เบอร์โทรหรือ ID ติดต่อ", channelPlaceholder: "เช่น เบอร์โทร LINE ID หรือ Telegram ID",
    businessType: "ประเภทธุรกิจ", businessOptions: ["ร้านอาหาร / คาเฟ่", "คลินิก / ความงาม", "ร้านค้าออนไลน์", "โรงงาน / นำเข้า–ส่งออก", "โรงแรม / ที่พัก", "บริการวิชาชีพ", "ธุรกิจอื่น ๆ"],
    stage: "ตอนนี้อยู่ช่วงไหน", stageOptions: ["กำลังวางแผน", "พร้อมเริ่มจดทะเบียน", "เปิดดำเนินการแล้ว", "ต้องการเปลี่ยนแปลงบริษัท", "ต้องการเลิกหรือปิดกิจการ"],
    service: "เรื่องที่อยากให้ช่วย", serviceOptions: ["วางแผนเปิดธุรกิจทั้งชุด", "จดทะเบียนและภาษี", "บัญชี ภาษี และการเงิน", "พนักงานและงานบริหาร", "เปลี่ยนแปลงบริษัท", "ใบอนุญาตเฉพาะธุรกิจ", "ยังไม่แน่ใจ อยากให้ช่วยแนะนำ"],
    budget: "งบบริการที่วางไว้", budgetOptions: ["ยังไม่กำหนด", "ไม่เกิน 10,000 บาท", "10,000–30,000 บาท", "30,000–100,000 บาท", "มากกว่า 100,000 บาท"], choose: "เลือกคำตอบ", detail: "รายละเอียดหรือเป้าหมาย", detailPlaceholder: "เช่น ต้องการเปิดร้านอาหารภายใน 2 เดือน มีสถานที่แล้ว แต่ยังไม่ได้จดบริษัท",
    consent: "ยินยอมให้บันทึกข้อมูลนี้เพื่อให้ทีมงานติดต่อกลับและประเมินงานเบื้องต้น", button: "ส่งข้อมูลเพื่อรับการติดต่อกลับ", submitting: "กำลังส่งข้อมูล…", noteTitle: "ข้อมูลส่งตรงถึงทีมงาน", note: "เมื่อส่งสำเร็จ ระบบจะบันทึกข้อมูลในรายการลูกค้าของตั้งต้น และทีมงานจะใช้เพื่อติดต่อกลับเท่านั้น", sentTitle: "ส่งข้อมูลเรียบร้อยแล้ว", sentText: "ทีมงานได้รับรายละเอียดของคุณแล้วและจะติดต่อกลับผ่านช่องทางที่เลือก", failedTitle: "ยังส่งข้อมูลไม่สำเร็จ", failedText: "ระบบได้เตรียมและคัดลอกข้อความสำรองไว้แล้ว กรุณาส่งผ่าน LINE, WeChat, Telegram หรือ WhatsApp เพื่อไม่ให้คำขอสูญหาย", openLine: "เปิด LINE @tangton", copyAgain: "คัดลอกข้อความอีกครั้ง",
  },
  en: {
    step: "2 short steps", title: "Tell us about your business", time: "Takes about 1–2 minutes", direct: "Want to talk now?", directLead: "Choose a convenient channel and start a conversation with our team.", lineAction: "Open LINE chat", wechatAction: "Tap to copy WeChat ID", telegramAction: "Open Telegram chat", whatsappAction: "Open WhatsApp chat", copiedId: "WeChat ID copied", formOption: "or prepare a detailed enquiry", contact: "Contact details", business: "Business needs",
    name: "Your name", namePlaceholder: "How should we address you?", preferred: "Preferred channel", preferredOptions: ["LINE", "Phone", "WeChat", "Telegram", "WhatsApp"], channel: "Phone number or contact ID", channelPlaceholder: "Phone, LINE, WeChat or Telegram ID",
    businessType: "Business type", businessOptions: ["Restaurant / café", "Clinic / beauty", "Online store", "Factory / import-export", "Hotel / accommodation", "Professional services", "Other business"], stage: "Current stage", stageOptions: ["Planning", "Ready to register", "Already operating", "Changing an existing company", "Closing a business"], service: "What do you need?", serviceOptions: ["Complete launch plan", "Registration and tax", "Accounting, tax and finance", "People and administration", "Company changes", "Industry licences", "Not sure—please advise"], budget: "Planned service budget", budgetOptions: ["Not decided", "Under THB 10,000", "THB 10,000–30,000", "THB 30,000–100,000", "Over THB 100,000"], choose: "Select an answer", detail: "Goal or additional details", detailPlaceholder: "For example: opening a restaurant in two months; location secured; company not registered yet.",
    consent: "I consent to storing this information for a preliminary assessment and follow-up.", button: "Send my enquiry", submitting: "Sending…", noteTitle: "Sent securely to our team", note: "After a successful submission, your details are saved in Tangton's customer list and used only to follow up with you.", sentTitle: "Your enquiry has been received", sentText: "Our team has your details and will reply through your selected contact channel.", failedTitle: "Your enquiry was not sent", failedText: "A backup message has been copied. Please send it through LINE, WeChat, Telegram or WhatsApp so your enquiry is not lost.", openLine: "Open LINE @tangton", copyAgain: "Copy message again",
  },
  my: {
    step: "အဆင့်တို ၂ ဆင့်", title: "သင့်လုပ်ငန်းအကြောင်း ပြောပြပါ", time: "၁–၂ မိနစ်ခန့်", direct: "ယခုဆက်သွယ်လိုပါသလား", directLead: "အဆင်ပြေသောလမ်းကြောင်းကိုရွေးပြီး အသင်းနှင့်စကားပြောပါ။", lineAction: "LINE ဖွင့်ရန်", wechatAction: "WeChat ID ကူးရန်", telegramAction: "Telegram ဖွင့်ရန်", whatsappAction: "WhatsApp ဖွင့်ရန်", copiedId: "WeChat ID ကူးပြီးပါပြီ", formOption: "သို့မဟုတ် အသေးစိတ်ဖြည့်ပါ", contact: "ဆက်သွယ်ရန်", business: "လုပ်ငန်းလိုအပ်ချက်",
    name: "အမည်", namePlaceholder: "မည်သို့ခေါ်ရမည်နည်း", preferred: "ဆက်သွယ်လိုသောနည်း", preferredOptions: ["LINE", "ဖုန်း", "WeChat", "Telegram", "WhatsApp"], channel: "ဖုန်း သို့မဟုတ် ID", channelPlaceholder: "ဖုန်း၊ LINE၊ WeChat သို့မဟုတ် Telegram ID", businessType: "လုပ်ငန်းအမျိုးအစား", businessOptions: ["စားသောက်ဆိုင် / ကဖေး", "ဆေးခန်း / အလှအပ", "အွန်လိုင်းဆိုင်", "စက်ရုံ / သွင်းကုန်ပို့ကုန်", "ဟိုတယ် / တည်းခိုခန်း", "ပညာရှင်ဝန်ဆောင်မှု", "အခြား"], stage: "လက်ရှိအဆင့်", stageOptions: ["စီစဉ်နေသည်", "မှတ်ပုံတင်ရန် အသင့်", "လုပ်ငန်းလည်ပတ်နေပြီ", "ကုမ္ပဏီပြောင်းလဲရန်", "လုပ်ငန်းပိတ်ရန်"], service: "လိုအပ်သောအကူအညီ", serviceOptions: ["လုပ်ငန်းစတင်မှုအစီအစဉ်", "မှတ်ပုံတင်နှင့်အခွန်", "စာရင်းနှင့်ဘဏ္ဍာရေး", "ဝန်ထမ်းနှင့်စီမံခန့်ခွဲမှု", "ကုမ္ပဏီပြောင်းလဲမှု", "လုပ်ငန်းလိုင်စင်", "မသေချာသေးပါ"], budget: "ခန့်မှန်းဘတ်ဂျက်", budgetOptions: ["မသတ်မှတ်ရသေး", "THB 10,000 အောက်", "THB 10,000–30,000", "THB 30,000–100,000", "THB 100,000 အထက်"], choose: "ရွေးချယ်ပါ", detail: "ရည်မှန်းချက်နှင့် အသေးစိတ်", detailPlaceholder: "ဥပမာ—၂ လအတွင်း စားသောက်ဆိုင်ဖွင့်ရန်၊ နေရာရှိပြီး ကုမ္ပဏီမမှတ်ပုံတင်ရသေးပါ။",
    consent: "အကဲဖြတ်ရန်နှင့် ပြန်လည်ဆက်သွယ်ရန် ဤအချက်အလက်ကို သိမ်းဆည်းခွင့်ပြုသည်။", button: "အချက်အလက်ပို့ရန်", submitting: "ပို့နေသည်…", noteTitle: "အသင်းထံ တိုက်ရိုက်ပို့မည်", note: "ပို့ပြီးပါက Tangton ၏ ဖောက်သည်စာရင်းတွင် သိမ်းဆည်းပြီး ပြန်လည်ဆက်သွယ်ရန်သာ အသုံးပြုမည်။", sentTitle: "အချက်အလက်လက်ခံရရှိပါပြီ", sentText: "အသင်းက ရွေးချယ်ထားသောလမ်းကြောင်းမှ ပြန်လည်ဆက်သွယ်ပါမည်။", failedTitle: "အချက်အလက်မပို့နိုင်သေးပါ", failedText: "အရန်စာကို ကူးထားပါသည်။ LINE သို့မဟုတ် WeChat မှ ပို့ပေးပါ။", openLine: "LINE @tangton ဖွင့်ရန်", copyAgain: "စာထပ်ကူးရန်",
  },
  hi: {
    step: "2 छोटे चरण", title: "अपने व्यवसाय के बारे में बताएँ", time: "लगभग 1–2 मिनट", direct: "अभी बात करना चाहते हैं?", directLead: "सुविधाजनक चैनल चुनें और हमारी टीम से बातचीत शुरू करें।", lineAction: "LINE चैट खोलें", wechatAction: "WeChat ID कॉपी करें", telegramAction: "Telegram चैट खोलें", whatsappAction: "WhatsApp चैट खोलें", copiedId: "WeChat ID कॉपी हो गया", formOption: "या अपनी जानकारी तैयार करें", contact: "संपर्क जानकारी", business: "व्यावसायिक आवश्यकता",
    name: "आपका नाम", namePlaceholder: "हम आपको किस नाम से बुलाएँ?", preferred: "पसंदीदा चैनल", preferredOptions: ["LINE", "फ़ोन", "WeChat", "Telegram", "WhatsApp"], channel: "फ़ोन नंबर या संपर्क ID", channelPlaceholder: "फ़ोन, LINE, WeChat या Telegram ID", businessType: "व्यवसाय का प्रकार", businessOptions: ["रेस्तरां / कैफ़े", "क्लिनिक / सौंदर्य", "ऑनलाइन स्टोर", "फैक्टरी / आयात-निर्यात", "होटल / आवास", "पेशेवर सेवाएँ", "अन्य"], stage: "वर्तमान चरण", stageOptions: ["योजना बना रहे हैं", "पंजीकरण के लिए तैयार", "पहले से संचालन में", "कंपनी में बदलाव", "व्यवसाय बंद करना"], service: "किस सहायता की ज़रूरत है?", serviceOptions: ["पूरी लॉन्च योजना", "पंजीकरण और कर", "लेखांकन व वित्त", "कर्मचारी व प्रशासन", "कंपनी परिवर्तन", "उद्योग लाइसेंस", "निश्चित नहीं—सलाह चाहिए"], budget: "अनुमानित सेवा बजट", budgetOptions: ["अभी तय नहीं", "THB 10,000 से कम", "THB 10,000–30,000", "THB 30,000–100,000", "THB 100,000 से अधिक"], choose: "एक विकल्प चुनें", detail: "लक्ष्य या अतिरिक्त विवरण", detailPlaceholder: "उदाहरण: दो महीने में रेस्तरां खोलना है; स्थान तय है; कंपनी अभी पंजीकृत नहीं है।",
    consent: "मैं प्रारंभिक मूल्यांकन और संपर्क के लिए इस जानकारी को संग्रहीत करने की सहमति देता/देती हूँ।", button: "जानकारी भेजें", submitting: "भेजा जा रहा है…", noteTitle: "सीधे हमारी टीम को भेजा जाएगा", note: "सफल होने पर जानकारी Tangton की ग्राहक सूची में सुरक्षित होगी और केवल संपर्क के लिए उपयोग की जाएगी।", sentTitle: "जानकारी प्राप्त हो गई", sentText: "हमारी टीम चुने गए संपर्क चैनल से आपसे संपर्क करेगी।", failedTitle: "जानकारी नहीं भेजी गई", failedText: "बैकअप संदेश कॉपी कर दिया गया है। कृपया इसे LINE या WeChat से भेजें।", openLine: "LINE @tangton खोलें", copyAgain: "संदेश दोबारा कॉपी करें",
  },
  zh: {
    step: "两个简短步骤", title: "介绍您的业务需求", time: "约需 1–2 分钟", direct: "希望立即咨询？", directLead: "选择方便的渠道，即可与团队开始沟通。", lineAction: "打开 LINE 聊天", wechatAction: "点击复制微信号", telegramAction: "打开 Telegram 聊天", whatsappAction: "打开 WhatsApp 聊天", copiedId: "微信号已复制", formOption: "或填写详情并生成咨询内容", contact: "联系方式", business: "业务需求",
    name: "您的称呼", namePlaceholder: "我们该如何称呼您？", preferred: "首选联系方式", preferredOptions: ["LINE", "电话", "WeChat", "Telegram", "WhatsApp"], channel: "电话号码或联系 ID", channelPlaceholder: "电话、LINE、微信或 Telegram ID", businessType: "业务类型", businessOptions: ["餐厅 / 咖啡馆", "诊所 / 医美", "网店", "工厂 / 进出口", "酒店 / 住宿", "专业服务", "其他业务"], stage: "目前阶段", stageOptions: ["正在规划", "准备注册", "已经营", "变更现有公司", "注销业务"], service: "需要哪方面协助？", serviceOptions: ["完整开业方案", "注册与税务", "会计、税务与财务", "人事与企业行政", "公司变更", "行业许可证", "尚不确定，请协助判断"], budget: "预计服务预算", budgetOptions: ["尚未确定", "低于 THB 10,000", "THB 10,000–30,000", "THB 30,000–100,000", "高于 THB 100,000"], choose: "请选择", detail: "目标或补充说明", detailPlaceholder: "例如：计划两个月内开餐厅，场地已确定，公司尚未注册。",
    consent: "同意保存这些信息，用于初步评估及联系回复。", button: "提交咨询信息", submitting: "正在提交…", noteTitle: "资料将直接发送给团队", note: "提交成功后，资料会保存至 Tangton 客户列表，仅用于联系回复。", sentTitle: "咨询信息已收到", sentText: "团队将通过您选择的联系方式回复。", failedTitle: "咨询信息尚未发送", failedText: "备用内容已复制，请通过 LINE、WeChat、Telegram 或 WhatsApp 发送，以免咨询遗失。", openLine: "打开 LINE @tangton", copyAgain: "再次复制内容",
  },
};

export default function ConsultationForm({ locale = "th" }: { locale?: LanguageCode }) {
  const t = copies[locale];
  const [preparedMessage, setPreparedMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [wechatCopied, setWechatCopied] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      t.title,
      `${t.name}: ${data.get("name") ?? ""}`,
      `${t.preferred}: ${data.get("contactMethod") ?? ""}`,
      `${t.channel}: ${data.get("contact") ?? ""}`,
      `${t.businessType}: ${data.get("businessType") ?? ""}`,
      `${t.stage}: ${data.get("stage") ?? ""}`,
      `${t.service}: ${data.get("service") ?? ""}`,
      `${t.budget}: ${data.get("budget") ?? "-"}`,
      `${t.detail}: ${data.get("detail") ?? "-"}`,
    ].join("\n");
    setPreparedMessage(message);
    setSubmissionStatus("sending");
    setCopied(false);

    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          name: data.get("name"),
          contactMethod: data.get("contactMethod"),
          contact: data.get("contact"),
          businessType: data.get("businessType"),
          stage: data.get("stage"),
          service: data.get("service"),
          budget: data.get("budget"),
          detail: data.get("detail"),
          consent: data.get("consent") === "on",
          companyWebsite: data.get("companyWebsite"),
          sourcePath: window.location.pathname,
        }),
      });
      if (!response.ok) throw new Error("submission_failed");
      setSubmissionStatus("success");
      form.reset();
    } catch {
      setCopied(await copyText(message));
      setSubmissionStatus("error");
    }
  }

  async function copyWechat() {
    setWechatCopied(await copyText(CONTACT_ID));
  }

  async function copyPrepared() {
    if (preparedMessage) setCopied(await copyText(preparedMessage));
  }

  return <form className="lead-form lead-form-v4" onSubmit={handleSubmit}>
    <label className="form-honeypot" aria-hidden="true">Website<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
    <div className="form-head form-head-v4">
      <span aria-hidden="true">↗</span>
      <div><strong>{t.title}</strong><small>{t.time}</small></div>
      <b>{t.step}</b>
    </div>

    <section className="form-direct-contact" aria-label={t.direct}>
      <div><strong>{t.direct}</strong><small>{t.directLead}</small></div>
      <div className="form-channel-grid">
        <a className="form-channel line" href={LINE_URL} target="_blank" rel="noreferrer">
          <span aria-hidden="true">LINE</span><div><small>{t.lineAction}</small><strong>{CONTACT_ID}</strong></div><b aria-hidden="true">↗</b>
        </a>
        <button className="form-channel wechat" type="button" onClick={copyWechat}>
          <span aria-hidden="true">微</span><div><small>{wechatCopied ? t.copiedId : t.wechatAction}</small><strong>{CONTACT_ID}</strong></div><b aria-hidden="true">{wechatCopied ? "✓" : "＋"}</b>
        </button>
        <a className="form-channel telegram" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
          <span aria-hidden="true"><img src="/contact-icons/telegram.svg" alt="" width="22" height="22" /></span><div><small>{t.telegramAction}</small><strong>{CONTACT_ID}</strong></div><b aria-hidden="true">↗</b>
        </a>
        <a className="form-channel whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label={t.whatsappAction}>
          <span aria-hidden="true"><img src="/contact-icons/whatsapp.svg" alt="" width="22" height="22" /></span><div><small>{t.whatsappAction}</small><strong>WhatsApp</strong></div><b aria-hidden="true">↗</b>
        </a>
      </div>
    </section>

    <div className="form-divider"><span>{t.formOption}</span></div>

    <fieldset className="form-section form-section-card">
      <legend><span>01</span>{t.contact}</legend>
      <div className="form-grid">
        <label><span>{t.name}</span><input name="name" placeholder={t.namePlaceholder} autoComplete="name" required /></label>
        <label><span>{t.preferred}</span><select name="contactMethod" defaultValue="" required><option value="" disabled>{t.choose}</option>{t.preferredOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className="form-span-2"><span>{t.channel}</span><input name="contact" placeholder={t.channelPlaceholder} autoComplete="tel" required /></label>
      </div>
    </fieldset>

    <fieldset className="form-section form-section-card">
      <legend><span>02</span>{t.business}</legend>
      <div className="form-grid">
        <label><span>{t.businessType}</span><select name="businessType" defaultValue="" required><option value="" disabled>{t.choose}</option>{t.businessOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label><span>{t.stage}</span><select name="stage" defaultValue="" required><option value="" disabled>{t.choose}</option>{t.stageOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label><span>{t.service}</span><select name="service" defaultValue="" required><option value="" disabled>{t.choose}</option>{t.serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label><span>{t.budget}</span><select name="budget" defaultValue=""><option value="" disabled>{t.choose}</option>{t.budgetOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <label className="form-detail"><span>{t.detail}</span><textarea name="detail" rows={4} placeholder={t.detailPlaceholder} /></label>
    </fieldset>

    <label className="form-consent"><input type="checkbox" name="consent" required /><span>{t.consent}</span></label>
    <button className="button button-primary form-submit" type="submit" disabled={submissionStatus === "sending"}>{submissionStatus === "sending" ? t.submitting : t.button} <span aria-hidden="true">↗</span></button>
    <div className="form-data-note"><span aria-hidden="true">i</span><p><strong>{t.noteTitle}</strong>{t.note}</p></div>

    {submissionStatus === "success" && <div className="form-prepared" role="status" aria-live="polite">
      <span aria-hidden="true">✓</span><div><strong>{t.sentTitle}</strong><p>{t.sentText}</p></div>
    </div>}
    {submissionStatus === "error" && preparedMessage && <div className="form-prepared error" role="alert" aria-live="assertive">
      <span aria-hidden="true">!</span><div><strong>{t.failedTitle}</strong><p>{t.failedText}{copied ? " ✓" : ""}</p><div><a href={LINE_URL} target="_blank" rel="noreferrer">{t.openLine} ↗</a><button type="button" onClick={copyPrepared}>{t.copyAgain}</button></div></div>
    </div>}
  </form>;
}
