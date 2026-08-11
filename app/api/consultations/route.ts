const MAX_LENGTH = 2_000;

type ConsultationPayload = {
  locale?: unknown;
  name?: unknown;
  contactMethod?: unknown;
  contact?: unknown;
  businessType?: unknown;
  stage?: unknown;
  service?: unknown;
  budget?: unknown;
  detail?: unknown;
  consent?: unknown;
  sourcePath?: unknown;
  companyWebsite?: unknown;
};

function clean(value: unknown, maxLength = MAX_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const requestOrigin = request.headers.get("origin");
  const requestHost = request.headers.get("host");
  if (requestOrigin && requestHost) {
    try {
      if (new URL(requestOrigin).host !== requestHost) return json({ ok: false, code: "origin_not_allowed" }, 403);
    } catch {
      return json({ ok: false, code: "invalid_origin" }, 400);
    }
  }

  let body: ConsultationPayload;
  try {
    body = await request.json() as ConsultationPayload;
  } catch {
    return json({ ok: false, code: "invalid_json" }, 400);
  }

  // Quietly accept bots that fill the hidden field, but never forward them.
  if (clean(body.companyWebsite, 200)) return json({ ok: true });

  const payload = {
    locale: clean(body.locale, 10) || "th",
    name: clean(body.name, 120),
    contactMethod: clean(body.contactMethod, 40),
    contact: clean(body.contact, 160),
    businessType: clean(body.businessType, 160),
    stage: clean(body.stage, 160),
    service: clean(body.service, 180),
    budget: clean(body.budget, 100),
    detail: clean(body.detail),
    consent: body.consent === true,
    sourcePath: clean(body.sourcePath, 300),
    submittedAt: new Date().toISOString(),
  };

  if (!payload.name || !payload.contactMethod || !payload.contact || !payload.businessType || !payload.stage || !payload.service || !payload.consent) {
    return json({ ok: false, code: "missing_required_fields" }, 400);
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) return json({ ok: false, code: "form_not_configured" }, 503);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, secret: webhookSecret }),
      cache: "no-store",
      redirect: "follow",
    });
    if (!response.ok) return json({ ok: false, code: "sheet_unavailable" }, 502);

    const result = await response.json().catch(() => null) as { ok?: boolean } | null;
    if (!result?.ok) return json({ ok: false, code: "sheet_rejected" }, 502);
    return json({ ok: true });
  } catch {
    return json({ ok: false, code: "sheet_unavailable" }, 502);
  }
}
