// Google Sheet's special function that gets called when a new cell is selected
function onSelectionChange(e) {
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
  

  // If cell starts with "Today", replace with current date
  if (text.startsWith("Today")) {
    setToToday(cell);
  } //if
}//onSelectionChange

// Saves typing the date of spending, earning, or transaction
function setToToday(cell) {
  // Get today and format the date
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const today = `${year}-${month}-${day}`;
  
  cell.setValue(today);
}//setToToday

// Check if the maintenance mode is on
function isUnderMaintenance() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Settings").getRange("B1").getValue();
}//isUnderMaintenance
