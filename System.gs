// Check if the maintenance mode is on
function isUnderMaintenance() {
	maintenance = cellPositionDict["maintenance"];

  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(maintenance["sheet"]).getRange(maintenance["cell"]).getValue();
}//isUnderMaintenance

// Dictionary of all important cell positions
const cellPositionDict = {
	maintenance: logPosition("Settings", "B1"),
	firstDepartment: logPosition("Settings", "D3"),
	topLeftSummary: logPosition("Summary", "B3"),
	firstPeriod: logPosition("Plan", "B3")
}

// Log a cell position into a dictionary
function logPosition(sheet, cell) {
  return {
   	sheet: sheet,
		cell: cell
  }
}

function pullCellPosition(cellName) {
	return {
		sheet: cellPositionDict[cellName]["sheet"],
		column: cellPositionDict[cellName]["cell"].charCodeAt(0) - 64,
		row: Number(cellPositionDict[cellName]["cell"].substring(1))
	}
}