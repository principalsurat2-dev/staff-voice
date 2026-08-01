/**
 * Staff Voice — Google Apps Script backend
 *
 * Deploy this as a Web App bound to a Google Sheet:
 *   Extensions → Apps Script → paste this file → Deploy → New deployment
 *   Type: Web app | Execute as: Me | Who has access: Anyone
 *
 * Copy the resulting /exec URL into frontend/config.js (see config.example.js).
 * Do NOT commit your real deployment URL to this public repo — it is a live
 * write endpoint into your school's response sheet with no authentication.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Responses')
              || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Responses');

  var headers = ['Timestamp','wb_worklife','wb_support','wb_stress','wb_valued','wb_open',
                 'wl_planning','wl_duties','wl_assessment','wl_meetings','wl_open',
                 'gp_practice','gp_colleague','sv_change','sv_unknown','ctx_wing','ctx_tenure'];

  if (sheet.getLastRow() === 0) sheet.appendRow(headers);

  var data = JSON.parse(e.postData.contents);
  var row = headers.map(function(h){
    return h === 'Timestamp' ? new Date() : (data[h] || '');
  });
  sheet.appendRow(row);

  return ContentService.createTextOutput(JSON.stringify({result:'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
