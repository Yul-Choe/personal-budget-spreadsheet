/** Google Sheet's special function that gets called when a cell is edited
 * 
 * @param {Event} e - edit event
 * @returns {void}
 */
function onEdit(e) {
  const cell = e.range;
  const sheet = cell.getSheet().getName()

  // Do not run outside the sheet "Flow"
  if (sheet === "Flow") {
    clickableDate(cell);
  } else if (sheet === "Settings") {
    const column = range.getColumn();

    if (column === pullCellPosition("firstDepartment")["column"]) {
      insertRow() //plan
      insertRow() //summary
      insertPeriod()
    } else if (column === pullCellPosition("firstSource")["column"]) {
      insertRow()
      insertPeriod()
    }
  }
  
}//onEdit

/** Google Sheet's special function that gets called when a document is opened or refreshed
 * 
 * @param {Event} e - edit event
 * @returns {void}
 */
function onOpen(e) {
	mergeMonthsByPeriod()
}//onOpen