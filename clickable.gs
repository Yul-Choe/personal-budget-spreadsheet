// Google Sheet's special function that gets called when a cell is edited
function onEdit(e) {
  // Do not run if the maintenance mode is on
  if (isUnderMaintenance()) {
    return;
  }//if

  // Get cell values
  const cell = e.range;
  const text = cell.getValue().toString();

  // Do not run outside the sheet "Flow"
  if (cell.getSheet().getName() !== "Flow") {
    return;
  }//if

  const DATE_OFFSETS = {
    "Today": 0,
    "Yesterday": 1
  };

  // If cell is "Today" or "Yesterday", replace with the corresponding date
  if (text in DATE_OFFSETS) {
    setToDate(cell, DATE_OFFSETS[text]);
    cell.clearDataValidations();
  }//if
}//onEdit

// Set the cell value to the date of today, or some number of days before today
// Saves typing the date of spending, earning, or transaction
function setToDate(cell, daysBack) {
  const today = new Date();
  today.setDate(today.getDate() - daysBack);

  cell.setValue(today.toISOString().split("T",1));
}//setToDate

// Check if the maintenance mode is on
function isUnderMaintenance() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Settings").getRange("B1").getValue();
}//isUnderMaintenance