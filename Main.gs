/** Google Sheet's special function that gets called when a cell is edited
 * 
 * @param {Event} e - edit event
 * @returns {void}
 */
function onEdit(e) {
  // Do not run if the maintenance mode is on
  if (isUnderMaintenance()) {
    return;
  }//if

  clickableDate(e);
}//onEdit

/** Google Sheet's special function that gets called when a document is opened or refreshed
 * 
 * @param {Event} e - edit event
 * @returns {void}
 */
function onOpen(e) {
	addFrequencyPerDepartment()
}//onOpen

// Check if the maintenance mode is on
function isUnderMaintenance() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Settings").getRange("B1").getValue();
}//isUnderMaintenance