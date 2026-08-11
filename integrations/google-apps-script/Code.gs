const SHEET_ID = "1IYzGSoWDoI2jNurTJkoL6i6CV6Qkb6mbh6-bn0JTAwM";
const SHEET_NAME = "ลูกค้าจากเว็บไซต์";
const HEADERS = [
  "วันที่รับข้อมูล",
  "ภาษา",
  "ชื่อ",
  "ช่องทางติดต่อ",
  "เบอร์โทรหรือ ID",
  "ประเภทธุรกิจ",
  "สถานะธุรกิจ",
  "บริการที่สนใจ",
  "งบประมาณ",
  "รายละเอียด",
  "หน้าที่ส่ง",
  "สถานะติดตาม",
  "หมายเหตุ"
];

function jsonResponse_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}

function safeCell_(value) {
  const text = String(value == null ? "" : value).trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function getLeadSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight("bold")
      .setBackground("#17201c")
      .setFontColor("#ffffff");
    sheet.autoResizeColumns(1, HEADERS.length);
    sheet.setColumnWidth(10, 360);
  }
  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const payload = JSON.parse((e.postData && e.postData.contents) || "{}");
    const expectedSecret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
    if (!expectedSecret || payload.secret !== expectedSecret) return jsonResponse_({ ok: false, error: "unauthorized" });

    const required = ["name", "contactMethod", "contact", "businessType", "stage", "service"];
    if (!payload.consent || required.some(function (key) { return !String(payload[key] || "").trim(); })) {
      return jsonResponse_({ ok: false, error: "missing_fields" });
    }

    lock.waitLock(10000);
    const sheet = getLeadSheet_();
    sheet.appendRow([
      new Date(payload.submittedAt || new Date().toISOString()),
      safeCell_(payload.locale),
      safeCell_(payload.name),
      safeCell_(payload.contactMethod),
      safeCell_(payload.contact),
      safeCell_(payload.businessType),
      safeCell_(payload.stage),
      safeCell_(payload.service),
      safeCell_(payload.budget),
      safeCell_(payload.detail),
      safeCell_(payload.sourcePath),
      "ใหม่",
      ""
    ]);
    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, error: "internal_error" });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}
