// Dictionary of all important cell positions
const cellPositionDict = {
	SettingsDepartment: logPosition("Settings", "A3"),
	SettingsSource: logPosition("Settings", "B3"),
	PeriodSummary: logPosition("Summary", "B3"),
  IncomeSummary: logPosition("Summary", "Q3"),
	PlanAllocationPeriod: logPosition("Plan", "B3"),
  PlanSourcePeriod: logPosition("Plan", "G3")
}

// Log a cell position into a dictionary
function logPosition(sheet, cell) {
  return {
   	sheet: sheet,
	  cell: cell
  }
}//logPosition()

function pullCellPosition(cellName) {
	return {
		sheet: cellPositionDict[cellName]["sheet"],
		column: cellPositionDict[cellName]["cell"].charCodeAt(0) - 64,
		row: Number(cellPositionDict[cellName]["cell"].substring(1))
	}
}//pullCellPosition()