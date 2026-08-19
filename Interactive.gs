/**
 * Put the date of transaction using a drop-down menu instead of typing
 * 
 * @param {Event} e - edit event
 * @returns {void}
 */
function clickableDate(e) {

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
}//clickableDate

// Set the cell value to the date of today, or some number of days before today
// Saves typing the date of spending, earning, or transaction
function setToDate(cell, daysBack) {
  const today = new Date();
  today.setDate(today.getDate() - daysBack);

  cell.setValue(today.toISOString().split("T",1));
}//setToDate