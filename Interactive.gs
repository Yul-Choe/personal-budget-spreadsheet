/**
 * Put the date of transaction using a drop-down menu instead of typing
 * 
 * @param {Event} e - edit event
 * @returns {void}
 */
function clickableDate(cell) {
  // Get cell value
  const text = cell.getValue().toString();

  // If cell is "Today" or "Yesterday", replace with the corresponding date
  if (text in DATE_OFFSETS) {
    setToDate(cell, DATE_OFFSETS[text]);
    cell.clearDataValidations();
  }//if
}//clickableDate

// Set the cell value to the date of today, or some number of days before today
// Saves typing the date of spending, earning, or transaction
function setToDate(cell, dateOffset) {
  const timezone = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(cellPositionDict["timezone"]["sheet"]).getRange(cellPositionDict["timezone"]["cell"]).getValue()
  
  const today = new Date();
  today.setDate(today.getDate() + dateOffset);
  today.setHours(today.getHours() + TIMEZONE_OFFSET[timezone])

  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  cell.setValue(`${year}/${month}/${day}`);
}//setToDate