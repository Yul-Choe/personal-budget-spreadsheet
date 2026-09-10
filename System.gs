// Check if the maintenance mode is on
function isUnderMaintenance() {
	maintenance = cellPositionDict["maintenance"];

  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(maintenance["sheet"]).getRange(maintenance["cell"]).getValue();
}//isUnderMaintenance

// Dictionary of all important cell positions
const cellPositionDict = {
	maintenance: logPosition("Settings", "B1")
}

// Log a cell position into a dictionary
function logPosition(sheet, cell) {
  return {
   	sheet: sheet,
		cell: cell
  }
}