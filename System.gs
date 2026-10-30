// Check if the maintenance mode is on
function isUnderMaintenance() {
	maintenance = cellPositionDict["maintenance"];

  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(maintenance["sheet"]).getRange(maintenance["cell"]).getValue();
}//isUnderMaintenance

// Dictionary of all important cell positions
const cellPositionDict = {
	maintenance: logPosition("Settings", "B1"),
	firstDepartment: logPosition("Settings", "D3"),
	firstSource: logPosition("Settings", "E3"),
	topLeftSummary: logPosition("Summary", "B3"),
	firstPeriod: logPosition("Plan", "B3"),
	timezone: logPosition("Settings", "G2")
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

const DATE_OFFSETS = {
	"Today": 0,
	"Yesterday": -1
}

const TIMEZONE_OFFSET = {
	Seoul: 0,
	Vancouver: -16,
	Hanoi: -2
}