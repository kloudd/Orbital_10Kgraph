/**
 * 10kgraph — Early Access webhook
 *
 * Deploy:
 *   1. Open your Google Sheet → Extensions → Apps Script
 *   2. Paste this file's contents into Code.gs (replace the default stub)
 *   3. Deploy → New deployment → Type: Web app
 *        - Execute as: Me
 *        - Who has access: Anyone
 *   4. Copy the /exec URL, set it as NEXT_PUBLIC_SHEETS_WEBHOOK_URL
 *
 * Re-deploy ("Manage deployments" → edit → new version) every time you change
 * this code, otherwise the old version keeps serving.
 */

const SHEET_NAME = 'Leads';
const HEADERS = ['Timestamp', 'Name', 'Email', 'Fund', 'Page', 'User-Agent'];

function doPost(e) {
  try {
    const sheet = getOrCreateSheet_();
    const data = JSON.parse(e.postData.contents || '{}');

    sheet.appendRow([
      new Date(),
      data.name    || '',
      data.email   || '',
      data.fund    || '',
      data.page    || '',
      data.userAgent || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Health check: open the /exec URL in a browser, should return {ok:true}
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: '10kgraph-leads' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  } else if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}
