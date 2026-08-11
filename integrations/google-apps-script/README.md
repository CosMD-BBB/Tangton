# Google Sheet consultation form

The website posts consultation requests to `app/api/consultations/route.ts`. The
server route validates the request and forwards it to the Google Apps Script web
app in this folder. The script appends accepted requests to the tab
`ลูกค้าจากเว็บไซต์` in the configured spreadsheet.

## Required Vercel environment variables

- `GOOGLE_SHEETS_WEBHOOK_URL` — the deployed Apps Script web-app URL ending in
  `/exec`
- `GOOGLE_SHEETS_WEBHOOK_SECRET` — the same private value used by Apps Script

Add both values for Production, Preview and Development, then redeploy the
project. Never commit the real secret to Git.

## Redeploying the Apps Script

1. Copy `Code.gs` into the Apps Script project.
2. Set the private secret in Script Properties as `WEBHOOK_SECRET`, or replace
   the property lookup only in the private Apps Script project.
3. Deploy a new version as a Web app, execute as the owner, and allow access for
   anyone. Requests still require the private secret before data is accepted.
4. Update `GOOGLE_SHEETS_WEBHOOK_URL` in Vercel if Google issues a new URL.
