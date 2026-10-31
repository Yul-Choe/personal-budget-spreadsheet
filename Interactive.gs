/**
 * Put the date of transaction using a drop-down menu instead of typing
 * 
 * @param {Event} e - edit event
 * @returns {void}
 */
function clickableDate(cell) {
  // Get cell value
  const text = cell.getValue().toString();

  // If cell is a date, remove the dropdown
  if (!isNaN(Date.parse(text))) {
    cell.clearDataValidations();
  }//if
}//clickableDate