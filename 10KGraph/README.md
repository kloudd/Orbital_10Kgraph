# 10kgraph — Landing Page

Standalone Next.js 14 landing site with an early-access form.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Form submission → Google Sheet

Submissions land in a Google Sheet via an Apps Script webhook.

**One-time setup:**

1. Create a new Google Sheet (or open an existing one you want leads in).
2. `Extensions → Apps Script`. Replace the default `Code.gs` with the contents of
   [`apps-script/Code.gs`](./apps-script/Code.gs). Save.
3. `Deploy → New deployment`. Type: **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the `/exec` URL it gives you — that's your webhook.
5. Run locally or in docker with that URL:

```bash
NEXT_PUBLIC_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/AKfyc.../exec" \
  docker compose up --build
```

The var is baked in at build time, so re-run `--build` whenever you change it.

Each submission appends a row: `Timestamp | Name | Email | Fund | Page | User-Agent`.
The sheet auto-creates a `Leads` tab with a header row on first submission.

**Re-deploying the script:** if you edit `Code.gs` later, hit `Deploy →
Manage deployments → edit (pencil) → Version: New version → Deploy`. Otherwise
the old version keeps serving from the same URL.

## Structure

```
src/
  app/
    layout.tsx
    page.tsx                 # landing page
    globals.css
    request-access/
      page.tsx               # early-access form
  components/
    landing/
      KnowledgeGraphNVDA.tsx
```
